"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="topnav" className={`defaultscroll ${menuOpen ? "is-sticky" : ""}`}>
      <div className="container relative">
        {/* Logo container */}
        <a className="logo" href="/">
          <span className="inline-block dark:hidden">
            <Image
              src="/assets/images/logo-dark.png"
              className="l-dark"
              width={150}
              height={24}
              alt="Logo Dark"
            />
            <Image
              src="/assets/images/logo-light.png"
              className="l-light"
              width={150}
              height={24}
              alt="Logo Light"
            />
          </span>
          <Image
            src="/assets/images/logo-light.png"
            width={150}
            height={24}
            className="hidden dark:inline-block"
            alt="Logo Light"
          />
        </a>

        {/* End Logo container */}
        <div className="menu-extras">
          <div className="menu-item">
            {/* Mobile menu toggle */}
            <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            {/* End mobile menu toggle */}
          </div>
        </div>

        {/* Login button Start */}
        <ul className="buy-button list-none mb-0">
          <li className="inline mb-0">
            <a href="#">
              <span className="login-btn-primary">
                <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">
                  <i data-feather="settings" className="size-4"></i>
                </span>
              </span>
              <span className="login-btn-light">
                <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                  <i data-feather="settings" className="size-4"></i>
                </span>
              </span>
            </a>
          </li>

          <li className="inline ps-1 mb-0">
            <a
              href="https://1.envato.market/techwind"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="login-btn-primary">
                <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">
                  <i data-feather="shopping-cart" className="size-4"></i>
                </span>
              </div>
              <div className="login-btn-light">
                <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                  <i data-feather="shopping-cart" className="size-4"></i>
                </span>
              </div>
            </a>
          </li>
        </ul>
        {/* Login button End */}

        <div id="navigation" className={`${menuOpen ? "block" : "hidden"}`}>
          {/* Navigation Menu */}
          <ul className="navigation-menu nav-light">
            <li>
              <Link href="/" className="sub-menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="contact-one.html" className="sub-menu-item">
                Contact
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
