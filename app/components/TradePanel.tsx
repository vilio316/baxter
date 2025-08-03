'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { isMarketOpen } from '@/app/components/time';

export type Props = {
  symbol: string;
};

export type Holdings = {
  [symbol: string]: number;
};

export type Transaction = {
  symbol: string;
  quantity: number;
  price: number;
  type: 'buy' | 'sell';
  timestamp: string;
};

export default function TradePanel({ symbol }: Props) {
  const API_KEY = process.env.NEXT_PUBLIC_FH_KEY;

  const [marketPrice, setMarketPrice] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number | ''>('');
  const [balance, setBalance] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('balance');
      return stored ? parseFloat(stored) : 1_000_000;
    }
    return 1_000_000;
  });
  const [holdings, setHoldings] = useState<Holdings>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('holdings');
      return stored ? JSON.parse(stored) : {};
    }
    return {};
  });
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('transactions');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });
  const [message, setMessage] = useState<string | null>(null);
  const [marketOpen, setMarketOpen] = useState<boolean>(true);

  useEffect(() => {
    const checkMarket = () => setMarketOpen(isMarketOpen());
    checkMarket();
    const interval = setInterval(checkMarket, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('balance', balance.toString());
    }
  }, [balance]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('holdings', JSON.stringify(holdings));
    }
  }, [holdings]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions]);

  useEffect(() => {
    const fetchPrice = async () => {
      if (!API_KEY) {
        console.error('Missing API key');
        return;
      }
      try {
        const res = await axios.get(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
        );
        setMarketPrice(res.data.c);
      } catch (error) {
        console.error('Error fetching market price:', error);
      }
    };

    fetchPrice();
  }, [symbol]);

  const estimatedCost =
    marketPrice && typeof quantity === 'number' ? quantity * marketPrice : 0;

  const resetForm = () => setQuantity('');

  const handleBuy = () => {
    if (!marketPrice || typeof quantity !== 'number' || quantity <= 0) {
      setMessage('Enter a valid quantity to buy.');
      return;
    }
    if (estimatedCost > balance) {
      setMessage('❌ Insufficient balance to buy.');
      return;
    }
    const timestamp = new Date().toISOString();
    setBalance((prev) => prev - estimatedCost);
    setHoldings((prev) => ({
      ...prev,
      [symbol]: (prev[symbol] || 0) + quantity,
    }));
    setTransactions((prev) => [
      { symbol, quantity, price: marketPrice, type: 'buy', timestamp },
      ...prev,
    ]);
    setMessage(
      `✅ Bought ${quantity} ${symbol} at $${marketPrice.toFixed(2)} each.`
    );
    resetForm();
  };

  const handleSell = () => {
    if (!marketPrice || typeof quantity !== 'number' || quantity <= 0) {
      setMessage('Enter a valid quantity to sell.');
      return;
    }
    const holdingQty = holdings[symbol] || 0;
    if (quantity > holdingQty) {
      setMessage(
        `❌ Not enough holdings to sell. You have ${holdingQty} ${symbol}.`
      );
      return;
    }
    const timestamp = new Date().toISOString();
    setBalance((prev) => prev + estimatedCost);
    setHoldings((prev) => ({
      ...prev,
      [symbol]: holdingQty - quantity,
    }));
    setTransactions((prev) => [
      { symbol, quantity, price: marketPrice, type: 'sell', timestamp },
      ...prev,
    ]);
    setMessage(
      `✅ Sold ${quantity} ${symbol} at $${marketPrice.toFixed(2)} each.`
    );
    resetForm();
  };

  return (
    <div className="bg-[#1A1F19] text-white p-6 rounded-2xl shadow-lg">
      <p className="mb-4 text-lg font-medium">
        🕒 Market Status:
        <span className={marketOpen ? 'text-green-400' : 'text-red-500'}>
          {marketOpen ? 'Open' : 'Closed'}
        </span>
      </p>

      <h2 className="text-2xl font-bold mb-6 text-center">{`Trade ${symbol}`}</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <p className="text-sm">
            💰 <strong>Balance:</strong> ${balance.toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">
            📈 <strong>Market Price:</strong>{' '}
            {marketPrice ? `$${marketPrice.toFixed(2)}` : 'Loading...'}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">
            📦 <strong>Holdings:</strong> {holdings[symbol] || 0} {symbol}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm mb-2">Quantity</label>
        <input
          type="number"
          value={quantity}
          min={0}
          max={1000}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full p-3 rounded-xl bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <p className="mb-6 text-center text-xl font-semibold">
        Estimated {quantity ? 'Value' : 'Cost'}: ${estimatedCost.toFixed(2)}
      </p>

      <div className="flex gap-6 mb-6">
        <button
          onClick={handleBuy}
          disabled={!marketOpen}
          className={`px-6 py-3 rounded-full w-full font-semibold text-white transition-all duration-300 ${
            marketOpen
              ? 'bg-[#53D22C] hover:bg-[#1A1F19]'
              : 'bg-gray-600 cursor-not-allowed'
          }`}
        >
          Buy
        </button>

        <button
          onClick={handleSell}
          disabled={!marketOpen}
          className={`px-6 py-3 rounded-full w-full font-semibold text-white transition-all duration-300 ${
            marketOpen
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-gray-600 cursor-not-allowed'
          }`}
        >
          Sell
        </button>
      </div>

      {message && (
        <p className="mt-4 text-center text-sm text-yellow-400">{message}</p>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-center">
          🧾 Transaction History
        </h3>
        {transactions.length === 0 ? (
          <p className="text-center text-gray-400">No transactions yet.</p>
        ) : (
          <ul className="text-sm space-y-3 max-h-60 overflow-y-auto pr-4">
            {transactions.map((tx, index) => (
              <li
                key={index}
                className="border-b border-gray-700 py-2 px-4 rounded-lg hover:bg-[#333333] transition-all duration-300"
              >
                <p className="flex justify-between items-center">
                  <span>{tx.type === 'buy' ? '🟢 Buy' : '🔴 Sell'}</span>
                  <span className="font-semibold">
                    {tx.quantity} {tx.symbol} @ ${tx.price.toFixed(2)}
                  </span>
                </p>
                <p className="text-gray-400 text-xs text-right">
                  {new Date(tx.timestamp).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
