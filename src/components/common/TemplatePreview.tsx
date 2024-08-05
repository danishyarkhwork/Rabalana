"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faPrint,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

// Define your card templates
const templatesData = [
  {
    id: 1,
    title: "Dil Diya Gallan",
    description:
      "A beautiful and elegant wedding invitation design inspired by traditional Punjabi themes.",
    image: "/assets/images/templates/1.jpg",
  },
  {
    id: 2,
    title: "Luhongba",
    description:
      "A modern wedding card design that celebrates Manipuri culture and traditions.",
    image: "/assets/images/templates/2.jpg",
  },
  {
    id: 3,
    title: "The Chapel",
    description:
      "A classic and timeless design for those who prefer a church wedding theme.",
    image: "/assets/images/templates/3.jpg",
  },
  {
    id: 4,
    title: "Forever Yours",
    description:
      "A simple yet sophisticated design that captures the essence of eternal love.",
    image: "/assets/images/templates/4.jpg",
  },
];

// This function generates static params for each template
export async function generateStaticParams() {
  return templatesData.map((template) => ({
    id: template.id.toString(),
  }));
}

const PreviewPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);

  // Simulate fetching the selected template's data
  const template = templatesData.find((template) => template.id === Number(id));

  if (!template) {
    return <div>Template not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto py-14 px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {loading ? (
                <div className="w-full h-96 bg-gray-300 animate-pulse" />
              ) : (
                <Image
                  src={template.image}
                  alt={template.title}
                  className="rounded-lg shadow-lg"
                  height={500}
                  width={350}
                  onLoad={() => setLoading(false)}
                />
              )}
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {template.title}
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {template.description}
            </p>

            <div className="mt-8 space-x-4">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
                <FontAwesomeIcon icon={faPrint} className="mr-2" />
                Print
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                <FontAwesomeIcon icon={faShareAlt} className="mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
