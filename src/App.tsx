import './App.css';
import { stockTicker$ } from './stockTicker.service';
import { Tick } from './types/tick';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    stockTicker$.subscribe((tick: Tick) => {
      console.log('Stock tick:', tick);
    })
  }, [])

  return (
    <div className="App">
      <h1>Stock Ticker</h1>
    </div>
  );
}

export default App;
