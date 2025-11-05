import React, { useState } from 'react';
import type { Coin } from './types';
import CoinCard from './components/CoinCard';
import BtcIcon from './components/icons/BtcIcon';
import EthIcon from './components/icons/EthIcon';
import BnbIcon from './components/icons/BnbIcon';

const initialCoins: Coin[] = [
  { name: 'Bitcoin', ticker: 'BTC', percentage: 0.50, icon: BtcIcon, color: 'hover:border-orange-500' },
  { name: 'Ethereum', ticker: 'ETH', percentage: 0.25, icon: EthIcon, color: 'hover:border-indigo-500' },
  { name: 'BMB', ticker: 'BMB', percentage: 0.25, icon: BnbIcon, color: 'hover:border-yellow-400' },
];

const App: React.FC = () => {
  const [usdtInput, setUsdtInput] = useState<string>('');
  const [coins, setCoins] = useState<Coin[]>(initialCoins);
  const [investedCounts, setInvestedCounts] = useState<{ [key in Coin['ticker']]: number }>({
    BTC: 0,
    ETH: 0,
    BMB: 0,
  });

  const handleCountChange = (ticker: Coin['ticker'], delta: number) => {
    setInvestedCounts(prevCounts => {
      const newCount = prevCounts[ticker] + delta;
      if (newCount >= 0 && newCount <= 7) {
        return { ...prevCounts, [ticker]: newCount };
      }
      return prevCounts;
    });
  };

  const handlePercentageChange = (ticker: Coin['ticker'], newPercentage: number) => {
    setCoins(prevCoins =>
      prevCoins.map(coin =>
        coin.ticker === ticker ? { ...coin, percentage: newPercentage } : coin
      )
    );
  };

  const totalUsdt = parseFloat(usdtInput) || 0;
  const totalPercentage = coins.reduce((sum, coin) => sum + coin.percentage, 0);

  return (
    <div className="min-h-screen bg-slate-900 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
            Crypto Installment Planner
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Allocate your USDT into a 7-step investment plan for BTC, ETH, and BMB.
          </p>
        </header>

        <main>
          <div className="max-w-md mx-auto mb-10 bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-700">
            <label htmlFor="usdt-amount" className="block text-sm font-medium text-slate-300 mb-2">
              Total USDT to Invest
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">USDT</span>
              <input
                type="number"
                id="usdt-amount"
                value={usdtInput}
                onChange={(e) => setUsdtInput(e.target.value)}
                placeholder="e.g., 7000"
                className="w-full bg-slate-900 border border-slate-600 rounded-lg py-3 pl-14 pr-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
              />
            </div>
             {Math.round(totalPercentage * 100) !== 100 && (
              <div className="text-center mt-4">
                <p className="text-red-400 font-semibold">
                  Total percentage must be 100%. Current: {Math.round(totalPercentage * 100)}%
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coins.map(coin => (
              <CoinCard
                key={coin.ticker}
                coin={coin}
                totalUsdt={totalUsdt}
                investedCount={investedCounts[coin.ticker]}
                onCountChange={handleCountChange}
                onPercentageChange={handlePercentageChange}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;