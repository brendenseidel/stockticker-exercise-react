import './App.css';
import { symbols, stockTicker$ } from './stockTicker.service';
import { Tick } from './types/tick';
import { useState, useEffect } from 'react';
import StockShow from './components/StockShow';

function App() {
  const [latestTick, setLatestTick] = useState<Tick>({
    symbol: '',
    start: 0,
    change: 0,
    end: 0
  })


  useEffect(() => {
    stockTicker$.subscribe((tick: Tick) => {
      handleTick(tick)
    })
  }, [])

  const handleTick = (tick: Tick) => {
    setLatestTick(tick);
  }

  return (
    <div className="App flex">
      {symbols.map(symbol => 
        <StockShow key={symbol} symbol={symbol} tick={latestTick as Tick}/>
      )}
    </div>
  );
}

export default App;
