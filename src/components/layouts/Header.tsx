"use client"; // Ensure this directive is at the top

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // Adjust the path as necessary

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isAuthenticated, logout, loading } = useAuth();
  const router = useRouter();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  // Show loading spinner or placeholder while checking authentication status
  if (loading) {
    return (
      <nav id="topnav" className="defaultscroll is-sticky home-page">
        <div className="container relative mx-auto">
          <div className="flex justify-center items-center h-16">
            <div className="loader">Loading...</div>{" "}
            {/* Add a loader or spinner */}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav id="topnav" className={`defaultscroll is-sticky home-page`}>
      <div className="container relative mx-auto z-40 bg-slate-50">
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

        <div className="menu-extras">
          <div className="menu-item">
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
          </div>
        </div>

        <ul className="buy-button list-none mb-0 flex items-center mt-5">
          {!isAuthenticated ? (
            <li className="inline-block mb-0 ml-4">
              <Link
                href="/auth/login"
                className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md cursor-pointer"
              >
                Login
              </Link>
            </li>
          ) : (
            <>
              <li className="dropdown inline-block relative ps-1">
                <button
                  onClick={toggleDropdown}
                  className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                  type="button"
                >
                  <Image
                    src="/assets/images/users/saidy.jpg"
                    className="rounded-full"
                    alt="Profile Image"
                    width={40}
                    height={40}
                  />
                </button>
                {dropdownOpen && (
                  <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                    <div className="relative">
                      <div className="py-8 bg-gradient-to-tr from-indigo-600 to-red-600"></div>
                      <div className="absolute px-4 -bottom-7 start-0">
                        <div className="flex items-end">
                          <Image
                            src="/assets/images/users/saidy.jpg"
                            className="rounded-full size-10 shadow dark:shadow-gray-700"
                            alt="Dropdown Image"
                            width={40}
                            height={40}
                          />
                          <span className="font-semibold text-[15px] ms-1">
                            Esmatullah
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="py-2 text-start mt-8">
                      <li>
                        <Link
                          href="/profile"
                          className="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"
                        >
                          <i className="uil uil-user text-[16px] align-middle me-1"></i>{" "}
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/my-templates"
                          className="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"
                        >
                          <i className="uil uil-setting text-[16px] align-middle me-1"></i>{" "}
                          My Templates
                        </Link>
                      </li>
                      <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                      <li>
                        <button
                          className="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600 w-full text-left"
                          onClick={handleLogout}
                        >
                          <i className="uil uil-sign-out-alt text-[16px] align-middle me-1"></i>{" "}
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </>
          )}
        </ul>

        <div id="navigation" className={menuOpen ? "block" : "hidden"}>
          <ul className="navigation-menu justify-start ps-10">
            <li>
              <Link href="/wedding" className={`sub-menu-item`}>
                Wedding
              </Link>
            </li>

            <li>
              <Link href="/birthday" className={`sub-menu-item`}>
                Birthday
              </Link>
            </li>

            <li>
              <Link href="/trending" className={`sub-menu-item`}>
                Trending
              </Link>
            </li>

            <li>
              <Link href="/shop" className={`sub-menu-item`}>
                Shop
              </Link>
            </li>

            <li>
              <Link href="/blog" className={`sub-menu-item`}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
