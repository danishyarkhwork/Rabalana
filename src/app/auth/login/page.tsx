"use client";

import Head from "next/head";
import Image from "next/image";
import AuthForm from "@/components/auth/AuthForm";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <section className="md:h-screen py-36 flex items-center bg-[url('/public/assets/images/cta.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container mx-auto relative">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <a href="/">
                <Image
                  src="/assets/images/logo-light.png"
                  alt="logo"
                  width={180}
                  height={120}
                  priority
                />
              </a>
              <h5 className="my-6 text-xl font-semibold text-center">Login</h5>
              <AuthForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
