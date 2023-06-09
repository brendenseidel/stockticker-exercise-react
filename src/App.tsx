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
      console.log(tick)
      handleTick(tick)
    })
  }, [])

  const handleTick = (tick: Tick) => {
    setLatestTick(tick);
  }

  return (
    <>
    <h1 className='text-white text-4xl text-center mt-8 mb-8 font-bold'>Stock Ticker</h1>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-8">
        {symbols.map(symbol => 
          <StockShow key={symbol} symbol={symbol} tick={latestTick as Tick}/>
        )}
      </div>
    </>
  );
}

export default App;
