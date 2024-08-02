import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A description of my Next.js 14 app" />
        <link
          rel="stylesheet"
          href="/assets/libs/tiny-slider/tiny-slider.css"
        />
        <link
          rel="stylesheet"
          href="/assets/libs/@iconscout/unicons/css/line.css"
        />
        <link
          rel="stylesheet"
          href="/assets/libs/@mdi/font/css/materialdesignicons.min.css"
        />
        <link rel="stylesheet" href="/assets/css/tailwind.css" />
      </head>
      <body>
        <header>
          {/* Your header content */}
          <h1 className="bg-dark">My Next.js 14 App</h1>
        </header>
        <main>{children}</main>
        <footer>
          {/* Your footer content */}
          <p>&copy; {new Date().getFullYear()} My Next.js 14 App</p>
        </footer>
      </body>
    </html>
  );
}
