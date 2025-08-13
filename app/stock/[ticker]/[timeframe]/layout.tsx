import ChartHeader from "@/app/components/stock/chartHeader";
import React from "react";

export default async function TImeframeLayout({
  children, params
}: {
  children: React.ReactNode;
  params: Promise<{ ticker: string; timeframe: number }>;
}) {
  const ticker = (await params).ticker
  const timeframe = (await params).timeframe


  return (
    <div className="grid">
      <ChartHeader ticker={ticker} timeframe={timeframe}/>
      {children}
    </div>
  );
}
