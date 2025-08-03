'use client';

import { Toaster } from "react-hot-toast";


export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster />
      <div className="pt-10 sm:pt-10 flex min-h-screen items-center justify-center bg-[#131712] text-white px-4">
        {children}
      </div>
    </>
  );
};