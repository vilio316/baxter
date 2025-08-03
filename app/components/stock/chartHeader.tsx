import StockPriceComp from "../StockPriceComp";
import ChatHead from "./chatHead";
export default function ChartHeader({
  ticker,
  timeframe,
}: {
  ticker: string;
  timeframe: number;
}) {
  return (
    <>
      <StockPriceComp symbol={ticker} timeframe={timeframe} />
      <ChatHead ticker={ticker} />
    </>
  );
}
