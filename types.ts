import { ComponentType } from 'react';

export interface Coin {
  name: string;
  ticker: 'BTC' | 'ETH' | 'BMB';
  percentage: number;
  icon: ComponentType<{ className?: string }>;
  color: string;
}