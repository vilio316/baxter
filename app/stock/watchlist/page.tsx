import { companyProfile } from "../[ticker]/apiLoaders";
import Link from "next/link";
import data from "@/logos_array";

export const itemFilter = (ticker: string) => {
  const arrResult = data.filter((item) => item.Ticker == ticker);
  const result = arrResult[0].url;
  return result;
};

export default function Watchlist() {
  const watchlist_symbols = [
    "NVDA",
    "AAPL",
    "TSLA",
    "PLTR",
    "AMZN",
    "COIN",
    "META",
    "LNTH",
    "GOOG",
    "MSFT",
  ];
  return (
    <div className="p-6 rounded-xl">
      <p className="text-4xl font-semibold text-center text-white mb-8">
        Your Watchlist
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {watchlist_symbols.map((tick) => (
          <WatchlistItem symbol={tick} key={tick} />
        ))}
      </div>
    </div>
  );
}

async function WatchlistItem(props: { symbol: string }) {
  const profile_results = await companyProfile(props.symbol);
  const { name, ticker } = profile_results;

  return (
    <Link href={`/stock/${props.symbol}`}>
      <div className="rounded-2xl p-2 hover:bg-gray-700 hover:opacity-85">
        <div className="grid grid-cols-3 items-center">
          <div className="p-1 md:p-2 col-span-1 grid justify-self-center">
            <img
              src={`https://cdn.brandfetch.io/${itemFilter(
                ticker
              )}/w/400/h/400?c=1idERn_mT3M_sg0-LYT`}
              alt={name}
              className="rounded-full p-2 max-h-[7.5rem] bg-transparent"
            />
          </div>
          <div className="grid col-span-2">
            <p className="font-bold sm:max-lg:text-xl lg:text-2xl">{ticker}</p>
            <p className="sm:max-lg:text-lg lg:text-xl">{name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
