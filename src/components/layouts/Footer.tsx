"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Script from "next/script";

const Footer: React.FC = () => {
  const [cookiePopupVisible, setCookiePopupVisible] = useState(true);

  const handleCookiePopupClose = () => {
    setCookiePopupVisible(false);
  };

  return (
    <footer className="footer z-40 bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="container relative mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="lg:col-span-4 md:col-span-12">
                  <Link href="/" className="text-[22px] focus:outline-none">
                    <Image
                      src="/assets/images/logo-dark.png"
                      alt="Logo"
                      width={150}
                      height={40}
                    />
                  </Link>
                  <p className="mt-6 text-gray-300">
                    Start working with Tailwind CSS that can provide everything
                    you need to generate awareness, drive traffic, connect.
                  </p>
                  <ul className="list-none mt-6 flex space-x-2">
                    <li className="inline">
                      <Link
                        href="http://linkedin.com/company/rabalana"
                        target="_blank"
                        className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i className="uil uil-linkedin" title="Linkedin"></i>
                      </Link>
                    </li>
                    <li className="inline">
                      <Link
                        href="https://www.facebook.com/rabalana"
                        target="_blank"
                        className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i
                          className="uil uil-facebook-f align-middle"
                          title="facebook"
                        ></i>
                      </Link>
                    </li>
                    <li className="inline">
                      <Link
                        href="https://www.instagram.com/rabalana/"
                        target="_blank"
                        className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i
                          className="uil uil-instagram align-middle"
                          title="instagram"
                        ></i>
                      </Link>
                    </li>
                    <li className="inline">
                      <Link
                        href="https://twitter.com/rabalana"
                        target="_blank"
                        className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i
                          className="uil uil-twitter align-middle"
                          title="twitter"
                        ></i>
                      </Link>
                    </li>
                    <li className="inline">
                      <Link
                        href="mailto:support@rabalana.com"
                        className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i
                          className="uil uil-envelope align-middle"
                          title="email"
                        ></i>
                      </Link>
                    </li>
                  </ul>
                  {/*end icon*/}
                </div>
                {/*end col*/}

                <div className="lg:col-span-2 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Company
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    <li>
                      <Link
                        href="/page-aboutus"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b"></i> About us
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="/pages/services"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b"></i> Services
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="/pages/blog"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b"></i> Blog
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="/pages/shop"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b"></i> Shop
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="/pages/trending"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b"></i> Trending
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*end col*/}

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Useful Links
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    <li>
                      <Link
                        href="/page-terms"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b"></i> Terms of
                        Services
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="/page-privacy"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b"></i> Privacy Policy
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="/documentation"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b"></i> Documentation
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="/changelog"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b"></i> Changelog
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="/widget"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b"></i> Widget
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*end col*/}

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Newsletter
                  </h5>
                  <p className="mt-6">Sign up and receive the latest tips.</p>
                  <form>
                    <div className="grid grid-cols-1">
                      <div className="my-3">
                        <label className="form-label">
                          Write your email{" "}
                          <span className="text-red-600">*</span>
                        </label>
                        <div className="form-icon relative mt-2">
                          <i
                            data-feather="mail"
                            className="size-4 absolute top-3 start-4"
                          ></i>
                          <input
                            type="email"
                            className="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200"
                            placeholder="Email"
                            name="email"
                            required
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        id="submitsubscribe"
                        name="send"
                        className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
                {/*end col*/}
              </div>
              {/*end grid*/}
            </div>
            {/*end col*/}
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}

      <div className="py-3 px-0 border-t border-slate-800">
        <div className="container relative text-center mx-auto">
          <div className="grid md:grid-cols-2 items-center">
            <div className="md:text-start text-center">
              <p className="mb-0">
                © {new Date().getFullYear()}{" "}
                <Link
                  href="https://rabalana.com/"
                  target="_blank"
                  className="text-reset"
                >
                  Rabalana
                </Link>
                .
              </p>
            </div>

            <ul className="list-none md:text-end text-center mt-6 md:mt-0 flex justify-center space-x-3"></ul>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </div>

      {/* Switcher */}
      <div className="fixed top-[30%] -right-2 z-50">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
          />
          <label
            className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
            htmlFor="chk"
          >
            <i className="uil uil-moon text-[20px] text-yellow-500"></i>
            <i className="uil uil-sun text-[20px] text-yellow-500"></i>
            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
          </label>
        </span>
      </div>
      {/* Switcher */}

      <Script src="assets/libs/tiny-slider/min/tiny-slider.js"></Script>
      <Script src="assets/libs/feather-icons/feather.min.js"></Script>
      <Script src="assets/js/plugins.init.js"></Script>
      <Script src="assets/js/app.js"></Script>
    </footer>
  );
};

export default Footer;
