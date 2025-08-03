"use client";
import { useEffect, useState } from "react";
import { Holdings, Transaction } from "../components/TradePanel";
import Link from "next/link";
import { itemFilter } from "../stock/watchlist/page";

const Dashboard = () => {
  const [holdings, updateHoldings] = useState<Holdings>({});
  const [balance, updateBalance] = useState<string>("0");
  const [transactions, updateTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedHoldings = localStorage.getItem("holdings");
    if (storedHoldings) {
      try {
        const parsedHoldings = JSON.parse(storedHoldings);
        updateHoldings(parsedHoldings);
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  useEffect(() => {
    const intermezzo_user_balance = localStorage.getItem("balance") || "1,000,000";
    const user_balance = Number(intermezzo_user_balance).toFixed(2)
    const user_holdings = JSON.parse(localStorage.getItem("holdings") || "{}");
    const user_transactions = JSON.parse(
      localStorage.getItem("transactions") || "[]"
    );

    updateBalance(user_balance);
    updateTransactions(user_transactions);
    updateHoldings(user_holdings);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto mt-20 space-y-8 bg-[#1A1F19] rounded-2xl">
      <div className="p-8 bg-[#2A3328] rounded-lg shadow-xl">
        <p className="text-4xl font-semibold text-gray-200 mb-10">
          Welcome Back!
        </p>
        <p className="text-2xl font-semibold text-gray-300 mt-2">
          Your Balance: <span className="text-green-600">USD {balance}</span>
        </p>
      </div>

      <div className="p-8 bg-[#2A3328] rounded-lg shadow-xl">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-gray-200">Holdings</p>
        </div>
        <div className="space-y-3 mt-4">
          {Object.entries(holdings).length === 0 ? (
            <div className="text-center">
              <p className="text-gray-500 text-lg">
                You don&apos;t have any Holdings yet.
              </p>
              <Link
                href="/stock"
                className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
              >
                Browse Stocks
              </Link>
            </div>
          ) : (
            Object.entries(holdings).map(([symbol, shares]) => (
              <div key={symbol} className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src={`https://cdn.brandfetch.io/${itemFilter(
                      symbol
                    )}/w/400/h/400?c=1idERn_mT3M_sg0-LYT`}
                    className="rounded-full max-h-10"
                    alt={`${symbol} Logo`}
                  />
                  <Link
                    href={`/stock/${symbol}`}
                    className="text-lg font-medium text-green-600 hover:text-white hover:underline transition duration-300"
                  >
                    {symbol}
                  </Link>
                </div>
                <span className="text-gray-200">{shares} shares</span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="p-8 bg-[#2A3328] rounded-lg shadow-xl">
        <p className="text-xl font-semibold text-gray-300 text-center mb-4">
          Transaction History
        </p>

        {transactions.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No transactions</p>
        ) : (
          <ul className="space-y-4">
            {transactions.map((tx, index) => (
              <li
                key={index}
                className="border-b border-gray-300 py-6 px-8 rounded-lg hover:bg-[#53D22C] hover:text-[#131712] hover:scale-105 transition-all duration-300 border-2 "
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold text-xl">
                    {tx.type === "buy" ? "🟢 Buy" : "🔴 Sell"}
                  </p>
                  <img
                    src={`https://cdn.brandfetch.io/${itemFilter(
                      tx.symbol
                    )}/w/400/h/400?c=1idERn_mT3M_sg0-LYT`}
                    className="rounded-full max-h-10"
                    alt={`${tx.symbol} Logo`}
                  />
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">
                    <span className="font-semibold">
                      {tx.quantity} {tx.symbol}
                    </span>{" "}
                    @ ${tx.price.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-100">
                    {new Date(tx.timestamp).toLocaleString()} 
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
