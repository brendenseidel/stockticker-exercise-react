import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tick } from './types/tick';

const minDelay = 1000;
const maxDelayDelta = 3000;
const symbols = ['S&P 500', 'DOW J', 'NASDAQ'];
const deltas = [-120, -85, -15, 25, 55, 105, 180];
const symbolToLastPrice = new Map<string, number>();
symbolToLastPrice.set(symbols[0], 4000);
symbolToLastPrice.set(symbols[1], 33000);
symbolToLastPrice.set(symbols[2], 11000);

function generateStockTick(): Tick {
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  const start = symbolToLastPrice.get(symbol) || 12000;
  const change = deltas[Math.floor(Math.random() * deltas.length)];
  const end = start + change;
  symbolToLastPrice.set(symbol, end);
  return { symbol, start, change, end };
}

export const stockTicker$ = interval(Math.floor(Math.random() * maxDelayDelta) + minDelay)
  .pipe(map(() => generateStockTick()));
