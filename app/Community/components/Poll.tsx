"use client";
import { useState } from "react";
import nvidia from "@/public/nvidia.png";
import Image from "next/image";
export default function Poll() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const options = [
    {
      id: "tech",
      label: "Tech Stocks (NVDA, AAPL, MSFT)",
      color: "bg-green-500",
    },
    { id: "crypto", label: "Crypto (BTC, ETH, SOL)", color: "bg-blue-500" },
    {
      id: "commodities",
      label: "Commodities (Gold, Oil)",
      color: "bg-orange-500",
    },
    { id: "forex", label: "Forex (USD, EUR, JPY)", color: "bg-purple-500" },
  ];

  const handleVote = () => {
    if (selectedOption) {
      setHasVoted(true);
    }
  };

  return (
    <div className="bg-primary rounded-lg p-6 flex flex-col sm:flex-row items-center sm:justify-between">
      <div className="w-full sm:w-2/3">
        <h2 className="text-2xl font-bold text-primary mb-4">
          📢 Community Poll
        </h2>
        <p className="mb-6">
          &quot;Which market are you bullish on this quarter?&quot;
        </p>

        {!hasVoted ? (
          <>
            <div className="space-y-3 mb-6">
              {options.map((option) => (
                <div
                  key={option.id}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedOption === option.id
                      ? "ring-2 ring-accent"
                      : "hover:bg-gray-200 hover:text-[#53d22c] "
                  }`}
                  onClick={() => setSelectedOption(option.id)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full mr-3 ${option.color}`}
                    ></div>
                    <span>{option.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleVote}
              disabled={!selectedOption}
              className={`py-2 px-6 rounded-lg font-bold ${
                selectedOption
                  ? "bg-accent hover:bg-[#53d22c] text-white"
                  : "bg-gray-200 text-[#53d22c] cursor-not-allowed"
              } transition-colors`}
            >
              Vote Now
            </button>
          </>
        ) : (
          <div className="text-center py-4">
            <p className="text-lg font-medium text-primary mb-4">
              Thanks for voting!
            </p>
            <p>Results will be shared soon.</p>
          </div>
        )}

      </div>
      <div className="w-full sm:w-1/3 mt-6 sm:mt-0">
        <Image
          src={nvidia}
          alt="Poll Illustration"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}