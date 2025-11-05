import React from 'react';
import type { Coin } from '../types';

interface CoinCardProps {
  coin: Coin;
  totalUsdt: number;
  investedCount: number;
  onCountChange: (ticker: Coin['ticker'], delta: number) => void;
  onPercentageChange: (ticker: Coin['ticker'], newPercentage: number) => void;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

const CoinCard: React.FC<CoinCardProps> = ({ coin, totalUsdt, investedCount, onCountChange, onPercentageChange }) => {
  const totalAllocation = totalUsdt * coin.percentage;
  const installmentAmount = totalAllocation > 0 ? totalAllocation / 7 : 0;
  const investedAmount = installmentAmount * investedCount;
  const remainingAmount = totalAllocation - investedAmount;
  const progressPercentage = (investedCount / 7) * 100;

  return (
    <div className={`bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-700 transition duration-300 ${coin.color}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <coin.icon className="h-8 w-8" />
          <h2 className="text-2xl font-bold text-white">{coin.name}</h2>
        </div>
        <div className="flex items-center gap-1 bg-slate-700 rounded-full px-2 py-0.5">
          <input
            type="number"
            value={Math.round(coin.percentage * 100)}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (e.target.value === '') {
                onPercentageChange(coin.ticker, 0);
              } else if (!isNaN(value) && value >= 0 && value <= 100) {
                onPercentageChange(coin.ticker, value / 100);
              }
            }}
            className="w-12 bg-transparent text-sky-300 text-sm font-semibold text-right focus:ring-0 focus:outline-none appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            min="0"
            max="100"
            aria-label={`${coin.name} percentage`}
          />
          <span className="text-sky-300 text-sm font-semibold">%</span>
        </div>
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between items-baseline">
          <span className="text-slate-400">Total Allocation:</span>
          <span className="font-mono text-lg font-semibold text-white">{formatCurrency(totalAllocation)}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-slate-400">Per Installment (1/7):</span>
          <span className="font-mono text-lg font-semibold text-emerald-400">{formatCurrency(installmentAmount)}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-slate-400">Invested:</span>
          <span className="font-mono text-md text-slate-300">{formatCurrency(investedAmount)}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-slate-400">Remaining:</span>
          <span className="font-mono text-md text-slate-300">{formatCurrency(remainingAmount)}</span>
        </div>
      </div>
      
      <div className="mt-6">
        <p className="text-sm text-slate-400 mb-2 text-center">Investment Progress ({investedCount} / 7)</p>
        <div className="w-full bg-slate-700 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-sky-500 to-emerald-500 h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => onCountChange(coin.ticker, -1)}
            disabled={investedCount === 0}
            aria-label={`Decrease ${coin.name} investment count`}
            className="h-10 w-10 flex items-center justify-center bg-slate-700 rounded-full text-2xl font-bold text-white hover:bg-slate-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            -
          </button>
          <div className="font-mono text-xl w-8 text-center" aria-live="polite">{investedCount}</div>
          <button
            onClick={() => onCountChange(coin.ticker, 1)}
            disabled={investedCount === 7}
            aria-label={`Increase ${coin.name} investment count`}
            className="h-10 w-10 flex items-center justify-center bg-slate-700 rounded-full text-2xl font-bold text-white hover:bg-slate-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;