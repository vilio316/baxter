import { companyProfile, fetchFinancials, quoteHL } from "../../apiLoaders";

export default async function FinancialsPage({
  params,
}: {
  params: Promise<{ ticker: string; followUp: string }>;
}) {
  const ticker = (await params).ticker;
  const priceReport = await quoteHL(ticker);
  const companyProfileRes = await companyProfile(ticker);
  const financials = await fetchFinancials(ticker);
  const { metric } = financials;
  const { beta, epsAnnual, peAnnual, currentDividendYieldTTM } = metric;
  const { name, currency, marketCapitalization, finnhubIndustry } =
    companyProfileRes;
  const { c, h, l, pc, t, o } = priceReport;
  return (
    <div className=" text-white p-6 rounded-2xl space-y-6">
      <div>
        <p className="text-xl font-semibold underline mb-1">About {name}</p>
        <p className="text-sm text-gray-400">Industry: {finnhubIndustry}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1e1e1e] p-4 rounded-xl shadow-inner space-y-2">
          <p>
            <span className="text-gray-400">Open:</span> {o}
          </p>
          <p>
            <span className="text-gray-400">Close:</span> {c}
          </p>
          <p>
            <span className="text-gray-400">Market Cap:</span> $
            {(marketCapitalization / 1000000).toFixed(2)}T
          </p>
          <p>
            <span className="text-gray-400">52 Week High:</span>
            {metric["52WeekHigh"]}
          </p>
        </div>

        <div className="bg-[#1e1e1e] p-4 rounded-xl shadow-inner space-y-2">
          <p>
            <span className="text-gray-400">High:</span> {h}
          </p>
          <p>
            <span className="text-gray-400">P/E Ratio:</span> {peAnnual}
          </p>
          <p>
            <span className="text-gray-400">52 Week Low:</span>{" "}
            {metric["52WeekLow"]}
          </p>
          <p>
            <span className="text-gray-400">Dividend Yield:</span>{" "}
            {currentDividendYieldTTM}
          </p>
        </div>

        <div className="bg-[#1e1e1e] p-4 rounded-xl shadow-inner space-y-2">
          <p>
            <span className="text-gray-400">Low:</span> {l}
          </p>
          <p>
            <span className="text-gray-400">Beta:</span> {beta}
          </p>
          <p>
            <span className="text-gray-400">EPS:</span> {epsAnnual}
          </p>
        </div>
      </div>
    </div>
  );
}
