import {
  companyNews,
  companyProfile,
  quoteHL,
  earnings,
  deltaPrice,
  getMarketStatus,
} from "../stock/[ticker]/apiLoaders";
import { itemFilter } from "../stock/watchlist/page";

export default async function StockPriceComp(props: {
  symbol: string;
  timeframe?: number;
}) {
  const symb_result = await companyProfile(props.symbol);
  const price_report = await quoteHL(props.symbol.toLocaleUpperCase());
  const priceChanges = await deltaPrice(props.symbol.toUpperCase());
  const usable = priceChanges[0];
  const { holiday, isOpen, session } = await getMarketStatus();
  const oneChange = usable["1D"];
  const monthChange = usable["1M"];
  const yearToDay = usable["1Y"];
  const threeMonthChange = usable["3M"];
  const sixMonthChange = usable["6M"];

  let change;
  if (props.timeframe && props.timeframe == 30) {
    change = monthChange;
  } else if (props.timeframe && props.timeframe == 365) {
    change = yearToDay;
  } else if (props.timeframe && props.timeframe == 90) {
    change = threeMonthChange;
  } else if (props.timeframe && props.timeframe == 180) {
    change = sixMonthChange;
  } else {
    change = oneChange;
  }

  const { c } = price_report;
  const { currency, ticker, name, exchange } = symb_result;

  return (
    <>
      <div className="p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex gap-3 items-center">
            <img
              src={`https://cdn.brandfetch.io/${itemFilter(
                ticker
              )}/w/400/h/400?c=1idERn_mT3M_sg0-LYT`}
              alt={`${name} logo`}
              className="rounded-full w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-transparent p-1"
            />

            <div>
              <h1 className="text-xl md:text-3xl font-semibold">
                {name} ({ticker})
              </h1>
              <p className="text-sm md:text-base text-gray-400">
                {exchange}
              </p>
            </div>
          </div>

          <div className="flex gap-2 justify-start md:justify-end">
      <button className="bg-[#1d241f] hover:bg-[#2c362e] px-4 py-2 rounded text-sm flex items-center gap-1">
        <span >🔔</span> Set Alert
      </button>
      <button className="bg-[#1d241f] hover:bg-[#2c362e] px-4 py-2 rounded text-sm flex items-center gap-1">
        <span>⭐</span> Add to Watchlist
      </button>
    </div>
        </div>

        <div className="mt-6">
          <p className="text-lg md:text-2xl font-medium">
            {currency} {c.toFixed(2)}
            <span
              className={`ml-3 ${
                Number(change) < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {Number(change) > 0 ? "+" : ""}
              {Number(change).toFixed(2)}%
            </span>
          </p>

          <p
            className={`text-sm mt-1 ${
              isOpen ? "text-green-500" : "text-red-500"
            }`}
          >
            {isOpen ? "Market Open" : "Market Closed"}
          </p>

          {holiday && <p className="text-sm mt-1 text-gray-400">{holiday}</p>}

          {!isOpen && <p className="capitalize text-base mt-1">{session}</p>}
        </div>
      </div>
    </>
  );
}
