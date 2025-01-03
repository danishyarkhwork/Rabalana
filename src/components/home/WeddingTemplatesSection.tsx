"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "@/components/common/Skeleton"; // Adjust the path as necessary

const cardTemplates = [
  {
    id: 1,
    title: "Dil Diya Gallan",
    image: "/assets/images/templates/1.jpg",
    href: "/preview/1",
  },
  {
    id: 2,
    title: "Luhongba",
    image: "/assets/images/templates/2.jpg",
    href: "/preview/2",
  },
  {
    id: 3,
    title: "The Chapel",
    image: "/assets/images/templates/3.jpg",
    href: "/preview/3",
  },
  {
    id: 4,
    title: "Forever Yours",
    image: "/assets/images/templates/4.jpg",
    href: "/preview/4",
  },
];

const WeddingTemplatesSection: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate 2-second loading delay

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <section className="relative md:pb-14 pb-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto relative md:mt-12 px-4">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-gray-900">
            Wedding Card Designs
          </h3>

          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Rabalana helps you find a variety of wedding invitation templates
            online for you to choose from. It is economically friendly and saves
            time and trips to relatives and friends places.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardTemplates.map((card) => (
            <div
              key={card.id}
              className="shadow-lg bg-gray-100 dark:bg-gray-800 rounded overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href={card.href} className="block">
                <div className="relative w-full h-full">
                  {loading ? (
                    <div className="h-64 w-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  ) : (
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="object-cover w-full h-full rounded-t"
                      height={500}
                      width={250}
                    />
                  )}
                </div>
                <div className="p-4">
                  {loading ? (
                    <div className="h-6 w-3/4 mb-4 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  ) : (
                    <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                      {card.title}
                    </h5>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/wedding"
            className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors duration-300"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WeddingTemplatesSection;
