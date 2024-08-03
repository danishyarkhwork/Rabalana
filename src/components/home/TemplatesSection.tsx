"use client";

import Link from "next/link";
import Image from "next/image";

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
];

const TemplatesSection: React.FC = () => {
  return (
    <section className="relative md:py-14 py-16">
      <div className="container relative md:mt-12">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Wedding Card Designs
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Rabalana helps you find a lot of wedding invitation templates online
            for you to choose from. It is economically friendly and saves time
            and trips to relatives and friends places.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardTemplates.map((card) => (
            <div
              key={card.id}
              className="shadow-lg bg-light-gray rounded overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <Link href={card.href}>
                <div className="relative w-full h-64">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full"
                    height={500}
                    width={300}
                  />
                </div>
                <div className="p-4">
                  <h5 className="text-lg font-bold">{card.title}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/wedding-invitations/wedding-card-designs"
            className="btn btn-bordered h-50 tangerine btn-tangerine w-100"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
