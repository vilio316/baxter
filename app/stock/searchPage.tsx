"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ZeroMatch from "./zeroMatch";
import data from "@/logos_array";

export default function StockSearchPage() {
  const [input_value, changeInput] = useState("");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    function fromFMP(searchTerm: string) {
      const string_response = Array(
        data.filter(
          (item) =>
            item.Ticker.includes(searchTerm.toUpperCase()) ||
            item.Name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setResults(string_response);
      console.log(string_response);
    }
    if (input_value.length > 1) {
      fromFMP(input_value);
    }
  }, [input_value]);

  return (
    <div className="mx-auto w-11/12 p-4 md:p-6">
      <input
        type="text"
        name="name_search"
        id="nms"
        placeholder="Enter Stock or Ticker Name Here"
        className="border-2 rounded-[3.5rem] border-gray-300 outline-none p-3 md:p-5 my-3 md:my-5 w-full text-lg md:text-xl text-black placeholder-gray-400 focus:ring-2 focus:ring-[#53D22c] transition-all shadow-md"
        onChange={(e) => changeInput(e.target.value)}
        autoFocus
      />

      <div className="search_results">
        {results[0] && results[0].length > 0 ? (
          results[0].map((item: any) => (
            <div
              className="grid grid-cols-12 gap-4 md:gap-6 p-3 md:p-6 my-4 md:my-6 items-center bg-[#1F2328] border-b border-gray-700 hover:bg-[#1d3f13] rounded-lg transition-all shadow-lg transform hover:scale-105"
              key={item.Ticker}
            >
              <div className="col-span-3 sm:col-span-2 md:col-span-1 w-[50px] h-[50px] overflow-hidden rounded-full">
                <img
                  src={`https://cdn.brandfetch.io/${item.url}/w/400/h/400?c=1idERn_mT3M_sg0-LYT`}
                  alt={item.Ticker}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              <Link
                href={`/stock/${item.Ticker}`}
                className="col-span-9 sm:col-span-10 text-lg md:text-xl font-medium text-white hover:text-[#53D22c] transition-all"
              >
                <p className="font-bold text-xl text-white">{item.Ticker}</p>
                <p className="underline text-[#53D22c]">{item.Name}</p>
              </Link>
            </div>
          ))
        ) : input_value.length > 3 ? (
          <ZeroMatch />
        ) : null}
      </div>
    </div>
  );
}
