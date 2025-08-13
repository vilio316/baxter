import LineChart from "./chartComps";
import StockView from "@/app/components/StockPage";
import {
  deltaPrice,
} from "./apiLoaders";

export default async function APIRender(props: {
  symbol: string;
  timeframe?: number;
}) {
  const priceChanges = await deltaPrice(props.symbol.toUpperCase());
  const usable = priceChanges?.[0];
  if (!usable) {
    console.warn("No usable data found for symbol:", props.symbol);
  }
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

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <div className="graphs sm:flex-3 my-1 sm:my-2">
          <LineChart
            symbol={props.symbol}
            change={change}
            timeframe={props.timeframe}
          />
        </div>

        <div className="sm:flex-1 my-1 sm:my-2">
          <StockView symbol={props.symbol.toUpperCase()} />
        </div>
      </div>
    </>
  );
}
