"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Skeleton from "@/components/common/Skeleton"; // Adjust the path as necessary

const Signup: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate 2-second loading delay

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <section className="md:h-screen py-36 flex items-center bg-[url('/assets/images/cta.jpg')] bg-no-repeat bg-center bg-cover relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="container relative">
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
            <a href="/">
              <img
                src="/assets/images/logo-icon-64.png"
                className="mx-auto"
                alt="Logo"
              />
            </a>
            <h5 className="my-6 text-xl font-semibold">Signup</h5>
            {loading ? (
              <div className="grid grid-cols-1 gap-4">
                <Skeleton className="h-10 w-full mb-4" /> {/* Name Skeleton */}
                <Skeleton className="h-10 w-full mb-4" /> {/* Email Skeleton */}
                <Skeleton className="h-10 w-full mb-4" />{" "}
                {/* Password Skeleton */}
                <Skeleton className="h-10 w-32 mb-4" /> {/* Button Skeleton */}
              </div>
            ) : (
              <form
                action="/auth-signup-success" // Update this path to your success page or API endpoint
                className="text-start"
              >
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="RegisterName">
                      Your Name:
                    </label>
                    <input
                      id="RegisterName"
                      type="text"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="Harry"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginEmail">
                      Email Address:
                    </label>
                    <input
                      id="LoginEmail"
                      type="email"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginPassword">
                      Password:
                    </label>
                    <input
                      id="LoginPassword"
                      type="password"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center w-full mb-0">
                      <input
                        className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                        type="checkbox"
                        id="AcceptT&C"
                        required
                      />
                      <label
                        className="form-check-label text-slate-400"
                        htmlFor="AcceptT&C"
                      >
                        I Accept{" "}
                        <a href="#" className="text-indigo-600">
                          Terms And Condition
                        </a>
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <input
                      type="submit"
                      className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full cursor-pointer"
                      value="Register"
                    />
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      Already have an account?
                    </span>{" "}
                    <Link
                      href="/auth/login"
                      className="text-black dark:text-white font-bold inline-block"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
