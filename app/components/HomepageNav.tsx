"use client";
import Link from "next/link";
import { useState } from "react";
import svg from "@/design_assets/SVG.png";
import Image from "next/image";

export default function HomeNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#131712] text-white px-4 py-4 shadow-md border-b border-[#2D372A]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/">
            <div className="flex items-center">
              <div className="w-6 h-6 ">
                <Image src={svg} alt="Baxter" />
              </div>
              <span className="font-semibold sm:text-lg text-2xl ml-1">
                Baxter
              </span>
            </div>
          </Link>
          <ul className="hidden md:flex space-x-6 text-sm text-white">
            {[
              { route: "Home", path: "/" },
              { route: "Learn", path: "/Courses" },
              { route: "News", path: "/news" },
              { route: "Community", path: "/Community" },
              {route : "Stocks", path: "/stock" },
            ].map(({ route, path }) => (
              <li key={route}>
                <Link href={path} className="hover:text-green-400 transition">
                  {route}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <div className="relative hidden lg:block">
          </div>
          <Link
            href="/signup"
            className="bg-[#53D22C] text-black font-semibold sm:text-base  px-8 py-2 rounded-full hover:bg-green-600 transition"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="bg-[#2c2e2d] text-white font-regular px-8 py-2 rounded-full hover:bg-[#3a3c3b] transition"
          >
            Log In
          </Link>
        </div>
        <div className="md:hidden h-15">
          <div className="md:hidden flex items-center h-15">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white"
            >
              {mobileOpen ? (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 pb-3 space-y-4  text-gray-300">
          {[
            { route: "Home", path: "/" },
            { route: "Learn", path: "/Courses" },
            { route: "News", path: "/news" },
            { route: "Community", path: "/community" },
          ].map(({ route, path }) => (
            <Link
              key={path}
              href={path}
              className=" block px-4 py-2 mt-2 mb-2 hover:text-green-400 transition"
            >
              {route}
            </Link>
          ))}

          <div className="px-4 mt-2 mb-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#1a1c1b] text-white placeholder-gray-400 px-4 py-2 rounded-full mb-2 ring-1 ring-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex gap-2 mt-5">
              <Link
                href="/signup"
                className="w-1/2 bg-green-500 text-center text-black py-5 rounded-full font-semibold hover:bg-green-400 transition"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="w-1/2 bg-[#2c2e2d] text-center text-white py-5   rounded-full font-semibold hover:bg-[#3a3c3b] transition"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
