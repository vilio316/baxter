import React from "react";
import ChartHeader from "@/app/components/stock/chartHeader";
export default async function TImeframeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ ticker: string; timeframe: number }>;
}) {
  const ticker = (await params).ticker;
  const timeframe = (await params).timeframe;
  return (
    <div className="grid">
      {children}
    </div>
  );
}
