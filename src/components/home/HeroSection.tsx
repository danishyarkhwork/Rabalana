"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss"; // Import the modal video styles
import Link from "next/link";

const HeroSection: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative md:py-52 py-36 items-center overflow-hidden bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
      <div
        className="absolute inset-0 bg-[url('/assets/images/nft/hero.png')] bg-no-repeat bg-bottom bg-cover"
        style={{
          backgroundImage: "url('/assets/images/nft/hero.png') !important",
        }}
      ></div>

      <div className="container relative mx-auto">
        <div className="grid grid-cols-1 items-center mt-10">
          <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">
            Rabalana Online invitations
          </h4>
          <p className="text-lg max-w-xl">
            These days, wedding invitations have gotten a lot trendier than
            ever. The new trend turns out to be digital invitations for
            weddings. You can make cards online in the form of multiple or
            standalone cards and wedding invitation video.
          </p>

          <div className="relative mt-8">
            <Link
              href="#"
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2"
            >
              Get Started
            </Link>

            {/* Watch Now Button */}
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId="YJCEFNQyKTM"
              onClose={() => setOpen(false)}
            />

            <button
              className="size-12 inline-flex items-center mr-4 justify-center tracking-wide align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"
              onClick={() => setOpen(true)}
            >
              <i className="mdi mdi-play text-xl align-middle"></i>
            </button>
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
    </section>
    //end section
  );
};

export default HeroSection;
