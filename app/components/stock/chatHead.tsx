"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ChatHead({ ticker }: { ticker: string }) {
  const pathname = usePathname();
  return (
    <div className="flex gap-6 px-4 border-b border-gray-700 text-sm">
      <Link
        className={`relative pb-2 hover:text-[#53d22c] ${
          pathname === `/stock/${ticker}`
            ? "font-medium text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white"
            : "text-gray-400"
        }`}
        href={`/stock/${ticker}`}
      >
        Chart
      </Link>

      <Link
        className={`relative pb-2 hover:text-[#53d22c] ${
          pathname === `/stock/${ticker}/details/summary`
            ? "font-medium text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white"
            : "text-gray-400"
        }`}
        href={`/stock/${ticker}/details/summary`}
      >
        Summary
      </Link>

      <Link
        className={`relative pb-2 hover:text-[#53d22c] ${
          pathname === `/stock/${ticker}/details/news`
            ? "font-medium text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white"
            : "text-gray-400"
        }`}
        href={`/stock/${ticker}/details/news`}
      >
        News
      </Link>

      <Link
        className={`relative pb-2 hover:text-[#53d22c] ${
          pathname === `/stock/${ticker}/details/analytics`
            ? "font-medium text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white"
            : "text-gray-400"
        }`}
        href={`/stock/${ticker}/details/analytics`}
      >
        Analysis
      </Link>

      <Link
        className={`relative pb-2 hover:text-[#53d22c] ${
          pathname === `/stock/${ticker}/details/financials`
            ? "font-medium text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white"
            : "text-gray-400"
        }`}
        href={`/stock/${ticker}/details/financials`}
      >
        Financials
      </Link>
    </div>
  );
}
