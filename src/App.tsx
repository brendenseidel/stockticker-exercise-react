import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    if(!window.StockTicker) {
      console.error("StockTicker not found")
      return
    }

    window.StockTicker.addListener((tick: any) => {
      console.log('Stock tick:', tick);
    });
  }, [])

  return (
    <div className="App">
      <h1>Stock Ticker</h1>
        {/* UI code */}
    </div>
  );
}

export default App;
