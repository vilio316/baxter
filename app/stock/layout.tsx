import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaBookmark, FaNewspaper } from "react-icons/fa6";
import { RiChatAiFill } from "react-icons/ri";
import { SlGraph } from "react-icons/sl";
import StockHomeNav from "../components/stock/stockNav";

export function SideNav() {
  return (
    <div className="w-64 bg-[#121712] text-white h-full fixed top-0 left-0 z-40 p-6 border-r-2 border-white">
      <Link
        href={"/"}
        className="text-3xl font-bold my-6 hover:text-[#53D22c] transition-all"
      >
        Baxter.
      </Link>

      <div className="flex items-center gap-x-4 group hover:bg-[#2D3748] p-3 rounded-lg my-2">
        <FaSearch size={"1.5rem"} className="group-hover:fill-[#53D22c]" />
        <Link
          className="text-lg font-medium hover:text-[#53D22c] transition-all"
          href="/stock"
        >
          Search
        </Link>
      </div>

      <div className="flex items-center gap-x-4 group hover:bg-[#2D3748] p-3 rounded-lg my-2">
        <FaBookmark size={"1.5rem"} className="group-hover:fill-[#53D22c]" />
        <Link
          className="text-lg font-medium hover:text-[#53D22c] transition-all"
          href="/stock/watchlist"
        >
          Watchlist
        </Link>
      </div>

      <div className="flex items-center gap-x-4 group hover:bg-[#2D3748] p-3 rounded-lg my-2">
        <SlGraph size={"1.5rem"} className="group-hover:fill-[#53D22c]" />
        <Link
          className="text-lg font-medium hover:text-[#53D22c] transition-all"
          href="/stock"
        >
          Top Movers
        </Link>
      </div>

      <div className="flex items-center gap-x-4 group hover:bg-[#2D3748] p-3 rounded-lg my-2">
        <RiChatAiFill size={"1.5rem"} className="group-hover:fill-[#53D22c]" />
        <Link
          className="text-lg font-medium hover:text-[#53D22c] transition-all"
          href="/ai-chat"
        >
          Chat with AI
        </Link>
      </div>

      <div className="flex items-center gap-x-4 group hover:bg-[#2D3748] p-3 rounded-lg my-2">
        <FaNewspaper size={"1.5rem"} className="group-hover:fill-[#53D22c]" />
        <Link
          className="text-lg font-medium hover:text-[#53D22c] transition-all"
          href="/news"
        >
          News
        </Link>
      </div>
    </div>
  );
}

export default function StockLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StockHomeNav />
      <div className="p-1 md:p-3 mt-10 mx-auto grid grid-cols-1 lg:grid-cols-12">
        <div className="hidden lg:block lg:col-span-3">
          <SideNav />
        </div>

        <div className="grid lg:col-span-9 place-items-center">{children}</div>
      </div>
    </>
  );
}
