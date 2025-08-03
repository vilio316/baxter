import ChartHeader from "@/app/components/stock/chartHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const ticker = (await params).ticker;
  return {
    title: `${ticker.toUpperCase()} Stock Information`,
  };
}

export default async function HouseLayout({
  children, params
}: {
  children: React.ReactNode;
  params: Promise<{ticker: string}>
}) {
  const ticker = (await params).ticker

  return (
    <div className={`p-1 md:p-2 mx-1 md:mx-2`}>
      <div className="grid">
        <ChartHeader ticker={ticker} timeframe={1} />
        {children}</div>
    </div>
  );
}
