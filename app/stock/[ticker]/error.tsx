"use client";

import { useRouter } from "next/navigation";
import { FiHome, FiRefreshCcw } from "react-icons/fi";

export default function ErrorPage() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/stock");
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121712] text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-lg mb-6">
          Something went wrong. We couldn’t find what you were looking for.
        </p>

        <p className="text-sm text-white mb-6">An unknown Error Occured</p>

        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={handleGoHome}
            className="bg-green-600 text-white py-2 px-6 rounded-lg cursor-pointer hover:bg-green-500 flex items-center space-x-2 transition"
          >
            <FiHome className="w-5 h-5" />
            <span>Go to Homepage</span>
          </button>

          <button
            onClick={handleReload}
            className="bg-gray-700 cursor-pointer text-white py-2 px-6 rounded-lg hover:bg-gray-600 flex items-center space-x-2 transition"
          >
            <FiRefreshCcw className="w-5 h-5" />
            <span>Reload Page</span>
          </button>
        </div>
      </div>
    </div>
  );
}
