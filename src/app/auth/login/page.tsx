"use client"; // Ensure this directive is at the top

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // Adjust the path if necessary

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validUsername = "admin";
    const validPassword = "admin";

    let usernameError = "";
    let passwordError = "";

    if (username !== validUsername) {
      usernameError = "Invalid username";
    }

    if (password !== validPassword) {
      passwordError = "Incorrect password";
    }

    if (usernameError || passwordError) {
      setError({ username: usernameError, password: passwordError });
    } else {
      // Call login function from AuthContext
      login();
      router.push("/");
    }
  };

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
            <h5 className="my-6 text-xl font-semibold">Login</h5>
            <form onSubmit={handleSubmit} className="text-start">
              <div className="grid grid-cols-1">
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="username">
                    Username:
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  {error.username && (
                    <p className="text-red-500 text-sm mt-1">
                      {error.username}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="font-semibold" htmlFor="password">
                    Password:
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {error.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {error.password}
                    </p>
                  )}
                </div>

                <div className="flex justify-between mb-4">
                  <div className="flex items-center mb-0">
                    <input
                      id="rememberMe"
                      type="checkbox"
                      className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label className="text-slate-400" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <p className="text-slate-400 mb-0">
                    <a href="/auth/re-password" className="text-slate-400">
                      Forgot password?
                    </a>
                  </p>
                </div>

                <div className="mb-4">
                  <input
                    type="submit"
                    className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full cursor-pointer"
                    value="Login / Sign in"
                  />
                </div>

                <div className="text-center">
                  <span className="text-slate-400 me-2">
                    Do not have an account?
                  </span>{" "}
                  <a
                    href="/auth/signup"
                    className="text-black dark:text-white font-bold inline-block"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
