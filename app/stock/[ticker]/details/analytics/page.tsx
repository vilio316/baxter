import { analyst_ratings } from "../../apiLoaders";

type analyst_rating = {
  buy: number;
  hold: number;
  period: string;
  sell: number;
  strongBuy: number;
  strongSell: number;
  symbol: string;
};

export default async function Analytics({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const ticker = (await params).ticker;
  const analysis = await analyst_ratings(ticker);
  const { period, buy, strongBuy, strongSell, hold, sell }: analyst_rating =
    analysis[0];
  const values = Object.values(analysis[0]);
  const values_edited = values.filter((value) => typeof value == "number");
  console.log(values_edited);
  const sorted = values_edited.sort((a, b) => b - a);
  function findMatch() {
    const mostRecent = analysis[0];
    let answer = "";
    for (let y in mostRecent) {
      if (mostRecent[y] == sorted[0] && typeof mostRecent[y] == "number") {
        answer = y;
      }
    }
    //console.log(answer)
    return answer;
  }
  findMatch();
  return (
    <div className="grid p-4 my-2 text-white rounded-lg  max-w-3xl mx-auto">
      <p className="text-2xl font-semibold text-gray-200 underline my-4">
        Analytics for <span className="font-bold uppercase">{ticker}</span>
      </p>

      <p className="text-lg text-gray-200">
        Analysis Period:{" "}
        <span className="font-medium text-gray-300">{period}</span>
      </p>

      <p className="text-lg text-gray-200">
        Analyst Verdict:
        <span
          className="text-lg font-semibold text-green-600"
          style={{ textTransform: "capitalize" }}
        >
          {findMatch()}
        </span>
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-4">
        <p className="text-lg text-gray-200">
          Buy Ratings: <span className="font-medium text-green-600">{buy}</span>
        </p>
        <p className="text-lg text-gray-200">
          Sell Ratings: <span className="font-medium text-red-600">{sell}</span>
        </p>
        <p className="text-lg text-gray-200">
          Strong Buy Ratings:{" "}
          <span className="font-medium text-green-600">{strongBuy}</span>
        </p>
        <p className="text-lg text-gray-200">
          Strong Sell Ratings:{" "}
          <span className="font-medium text-red-800">{strongSell}</span>
        </p>
        <p className="text-lg text-gray-200">
          Hold Ratings:{" "}
          <span className="font-medium text-yellow-600">{hold}</span>
        </p>
      </div>

      <div className="mt-6 border-t border-gray-300 text-center pt-4">
        <p className="text-sm text-gray-300 italic">
          Data shown is based on recent market trends and analyst reports.
          Ratings may change over time.
        </p>
      </div>
    </div>
  );
}
