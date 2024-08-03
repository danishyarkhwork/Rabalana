"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    console.log("Dropdown state:", dropdownOpen);
    if (dropdownOpen) {
      const dropdownElement = document.querySelector(".dropdown-menu");
      console.log("Dropdown element:", dropdownElement);
      if (dropdownElement) {
        // Ensure dropdown initialization
        // Example: dropdownElement.classList.add("show");
      }
    }
  }, [dropdownOpen]);

  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container relative mx-auto">
        {/* Logo container */}
        <Link href="/" className="logo ps-0">
          <Image
            src="/assets/images/logo-icon-30.png"
            className="inline-block sm:hidden"
            alt="Logo Icon"
            width={30}
            height={30}
          />
          <div className="sm:block hidden">
            <Image
              src="/assets/images/logo-light.png"
              className="inline-block dark:hidden"
              alt="Logo Dark"
              width={130}
              height={60}
            />
            <Image
              src="/assets/images/logo-light.png"
              className="hidden dark:inline-block"
              alt="Logo Light"
              width={130}
              height={60}
            />
          </div>
        </Link>
        {/* End Logo container */}

        <div className="menu-extras">
          <div className="menu-item">
            {/* Mobile menu toggle */}
            <button
              className="navbar-toggle"
              id="isToggle"
              onClick={toggleMenu}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            {/* End mobile menu toggle */}
          </div>
        </div>

        {/* Login button Start */}
        <ul className="buy-button list-none mb-0 flex items-center mt-5">
          <li className="inline-block mb-0">
            <div className="form-icon relative">
              <i className="uil uil-search text-lg absolute top-1/2 -translate-y-1/2 start-3"></i>
              <input
                type="text"
                className="form-input sm:w-44 w-28 ps-10 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 bg-white"
                name="s"
                id="searchItem"
                placeholder="Search..."
              />
            </div>
          </li>

          <li className="dropdown inline-block relative ps-1">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
              type="button"
            >
              <Image
                src="/assets/images/client/05.jpg"
                className="rounded-full"
                alt="Profile Image"
                width={40}
                height={40}
              />
            </button>
            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                <div className="relative">
                  <div className="py-8 bg-gradient-to-tr from-indigo-600 to-red-600"></div>
                  <div className="absolute px-4 -bottom-7 start-0">
                    <div className="flex items-end">
                      <Image
                        src="/assets/images/client/05.jpg"
                        className="rounded-full size-10 shadow dark:shadow-gray-700"
                        alt="Dropdown Image"
                        width={40}
                        height={40}
                      />

                      <span className="font-semibold text-[15px] ms-1">
                        Cristina Murfy
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 px-4">
                  <h5 className="font-semibold text-[15px]">Wallet:</h5>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-slate-400">
                      qhut0...hfteh45
                    </span>
                    <Link href="#" className="text-indigo-600">
                      <i className="uil uil-copy"></i>
                    </Link>
                  </div>
                </div>

                <div className="mt-4 px-4">
                  <h5 className="text-[15px]">
                    Balance:{" "}
                    <span className="text-indigo-600 font-semibold">
                      0.00045ETH
                    </span>
                  </h5>
                </div>

                <ul className="py-2 text-start">
                  <li>
                    <Link
                      href="/nft-creator-profile"
                      className="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"
                    >
                      <i className="uil uil-user text-[16px] align-middle me-1"></i>{" "}
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nft-creator-profile-edit"
                      className="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"
                    >
                      <i className="uil uil-setting text-[16px] align-middle me-1"></i>{" "}
                      Settings
                    </Link>
                  </li>
                  <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                  <li>
                    <Link
                      href="/auth-login"
                      className="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"
                    >
                      <i className="uil uil-sign-out-alt text-[16px] align-middle me-1"></i>{" "}
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
        {/* Login button End */}

        <div id="navigation" className={menuOpen ? "block" : "hidden"}>
          {/* Navigation Menu */}
          <ul className="navigation-menu justify-start">
            <li>
              <Link href="/index-nft" className="sub-menu-item">
                Home
              </Link>
            </li>

            <li>
              <Link href="/contact-one" className="sub-menu-item">
                Wedding
              </Link>
            </li>

            <li>
              <Link href="/contact-one" className="sub-menu-item">
                Birthday
              </Link>
            </li>

            <li>
              <Link href="/contact-one" className="sub-menu-item">
                Trending
              </Link>
            </li>

            <li>
              <Link href="/contact-one" className="sub-menu-item">
                Blog
              </Link>
            </li>
          </ul>
          {/* End navigation menu */}
        </div>
        {/* End navigation */}
      </div>
      {/* End container */}
    </nav>
  );
};

export default Header;
