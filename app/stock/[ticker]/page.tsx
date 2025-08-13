import ChartHeader from "@/app/components/stock/chartHeader";
import APIRender from "./apiCalls";


export default async function RouteShow({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  function ShowPageItems() {
    return (
      <>
        <ChartHeader ticker={ticker} timeframe={1}/>
        <APIRender symbol={ticker} />
      </>
    );
  }

  const ticker = (await params).ticker;
  return <>{ticker ? <ShowPageItems /> : null}</>;
}
