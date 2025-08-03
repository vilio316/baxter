import Link from "next/link";
import HomeNav from "../components/HomepageNav";

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  function WatchlistSidebar() {
    return (
      <div className="fixed top-0 left-0 h-full w-64 pt-24 p-6 overflow-y-auto">
        <p className="text-white text-lg font-semibold mb-4">My Watchlist</p>
        <div className="rounded-2xl p-2 space-y-4">
          <div className="flex items-center gap-4">
            <img
              src="https://cdn.brandfetch.io/apple.com/w/400/h/400?c=1id090JVq9Slhwrn5Rm"
              alt="Apple Logo"
              className="rounded-md bg-white p-2 w-12 h-12 object-contain"
            />
            <div>
              <Link
                href="/stock/AAPL"
                className="text-white font-medium text-base"
              >
                Apple Inc.
              </Link>
              <p className="text-gray-400 text-sm">Tech.</p>
            </div>
          </div>

          {/* <div className="flex items-center gap-4">
            <img
              src="https://cdn.brandfetch.io/reddit.com/w/400/h/400?c=1id090JVq9Slhwrn5Rm"
              alt="Reddit Logo"
              className="rounded-md bg-white p-2 w-12 h-12 object-contain"
            />
            <div>
              <Link
                href="/stock/RDDT"
                className="text-white font-medium text-base"
              >
                Reddit
              </Link>
              <p className="text-gray-400 text-sm">Social Media</p>
            </div>
          </div> */}

          <div className="flex items-center gap-4">
            <img
              src="https://cdn.brandfetch.io/coinbase.com/w/400/h/400?c=1id090JVq9Slhwrn5Rm"
              alt="Coinbase Logo"
              className="rounded-md bg-white p-2 w-12 h-12 object-contain"
            />
            <div>
              <Link
                href="/stock/COIN"
                className="text-white font-medium text-base"
              >
                Coinbase
              </Link>
              <p className="text-gray-400 text-sm">Cryptocurrency</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="https://cdn.brandfetch.io/nvidia.com/w/400/h/400?c=1id090JVq9Slhwrn5Rm"
              alt="Nvidia Logo"
              className="rounded-md bg-white p-2 w-12 h-12 object-contain"
            />
            <div>
              <Link
                href="/stock/NVDA"
                className="text-white font-medium text-base"
              >
                NVIDIA Corp.
              </Link>
              <p className="text-gray-400 text-sm">
                Technology, Chip Manufacture...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="md:grid fixed top-0 left-0 w-full z-10">
        <HomeNav />
      </div>

      <div className="p-1 md:p-2 mx-auto grid grid-cols-4 mt-15 pt-20 ">
        <div className="p-1 md:p-2 col-span-1 hidden md:block">
          <WatchlistSidebar />
        </div>
        <div className="grid md:col-span-3 col-span-12 p-5">{children}</div>
      </div>
    </>
  );
}
