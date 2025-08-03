"use client";
import Link from "next/link";
import HomeNav from "@/app/components/HomepageNav.tsx";
import Footer from "@/app/components/footer.tsx";
import error from "@/public/404.png";
import Image from "next/image";
export default function NotFound() {
  return (
    <>
      <HomeNav />
      <div className="pt-10 sm:pt-10 flex min-h-screen items-center justify-center bg-[#131712] text-white px-4 ">
        <div className="text-center animate-fadeIn">
          <Image
            src={error}
            alt="404 Illustration"
            className="mx-auto w-80 animate-[float_3s_infinite] shadow-xl rounded-lg"
          />
          <h1 className="text-7xl font-extrabold text-white mt-6">
            Looks Like You&apos;re Lost!
          </h1>
          <p className="text-xl text-gray-300 mt-2">
            We can&apos;t seem to find the page you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-blue-700"
          >
            Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
