import { ALineChart } from "./line";
import Link from "next/link";
import {
  fetchDataLongTerm,
  fetchChartData24H,
  giveDateString,
} from "./apiLoaders";

export default async function LineChart(props: {
  symbol: string;
  change: number;
  timeframe?: number;
}) {
  let stock_numbers, new_arr;
  if (!props.timeframe) {
    stock_numbers = await fetchChartData24H(props.symbol.toUpperCase());
    new_arr = stock_numbers.map(({ close }) => close);
  }
  if (props.timeframe && props.timeframe > 1) {
    let LTD = await fetchDataLongTerm(props.symbol, props.timeframe);
    stock_numbers = LTD.historical;
    new_arr = stock_numbers.map(({ close }: { close: number }) => close);
  }

  return (
    <div className="w-full md:w-[95%] h-[350px]">
      <div className="grid grid-cols-12 gap-x-2">
        <Link
          href={`/stock/${props.symbol}`}
          className={`md:text-md col-span-1 md:my-1 p-2 hover:text-[#53D22c] rounded-xl text-center`}
        >
          24H
        </Link>
        <Link
          href={`/stock/${props.symbol}/30`}
          className={`md:text-md md:my-1 p-2 col-span-1 hover:text-[#53D22c] rounded-xl text-center ${
            props.timeframe && props.timeframe == 30 ? "bg-[#53D22c]" : ""
          }`}
          id="30"
        >
          1M
        </Link>
        <Link
          href={`/stock/${props.symbol}/90`}
          className={`md:text-md md:my-1 p-2 col-span-1 hover:text-[#53D22c] rounded-xl text-center ${
            props.timeframe && props.timeframe == 90 ? "bg-[#53D22c]" : ""
          }`}
          id="90"
        >
          3M
        </Link>
        <Link
          href={`/stock/${props.symbol}/180`}
          className={`md:text-md md:my-1 p-2 col-span-1 hover:text-[#53D22c] rounded-xl text-center ${
            props.timeframe && props.timeframe == 180 ? "bg-[#53D22c]" : ""
          }`}
          id="180"
        >
          6M
        </Link>
        <Link
          href={`/stock/${props.symbol}/365`}
          className={`md:text-md md:my-1 p-2 col-span-1 hover:text-[#53D22c] rounded-xl text-center ${
            props.timeframe && props.timeframe == 365 ? "bg-[#53D22c]" : ""
          }`}
          id="365"
        >
          1Y
        </Link>
      </div>
      <ALineChart
        data_arr={new_arr}
        source_array={stock_numbers}
        color={props.change > 0 ? `green` : `red`}
      />
    </div>
  );
}
