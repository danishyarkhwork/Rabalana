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
    href: "/wedding-invitations/templates/punjabi-lanterns-caricature-theme/865",
  },
  {
    id: 2,
    title: "Luhongba",
    image: "/assets/images/templates/2.jpg",
    href: "/wedding-invitations/templates/manipuri-heart-bougainvillea-theme/864",
  },
  {
    id: 3,
    title: "The Chapel",
    image: "/assets/images/templates/3.jpg",
    href: "/wedding-invitations/templates/christian-floral-stairs-theme/860",
  },
  {
    id: 4,
    title: "Forever Yours",
    image: "/assets/images/templates/4.jpg",
    href: "/wedding-invitations/templates/southindian-pastel-bananaleaves-theme/859",
  },
  {
    id: 5,
    title: "Forever Yours",
    image: "/assets/images/templates/4.jpg",
    href: "/wedding-invitations/templates/southindian-pastel-bananaleaves-theme/859",
  },
  {
    id: 6,
    title: "Forever Yours",
    image: "/assets/images/templates/4.jpg",
    href: "/wedding-invitations/templates/southindian-pastel-bananaleaves-theme/859",
  },
  {
    id: 7,
    title: "Forever Yours",
    image: "/assets/images/templates/4.jpg",
    href: "/wedding-invitations/templates/southindian-pastel-bananaleaves-theme/859",
  },
  {
    id: 8,
    title: "Forever Yours",
    image: "/assets/images/templates/4.jpg",
    href: "/wedding-invitations/templates/southindian-pastel-bananaleaves-theme/859",
  },
];

const WeddingPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate 2-second loading delay

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <section className="relative md:py-24 pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
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
                    <Skeleton className="h-64 w-full" /> // Image skeleton
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
                    <Skeleton className="h-6 w-3/4 mb-4" /> // Title skeleton
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
      </div>
    </section>
  );
};

export default WeddingPage;
