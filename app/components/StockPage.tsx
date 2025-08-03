"use client";
import TradePanel from "./TradePanel";

export default function StockView({ symbol }: { symbol: string }) {
  return (
    <div
      className={`md:block inset-0 md:inset-auto w-full  md:bg-transparent z-50 p-4 mt-20 sm:mt-10 md:p-0`}
    >
      <TradePanel symbol={symbol} />
    </div>
  );
}
