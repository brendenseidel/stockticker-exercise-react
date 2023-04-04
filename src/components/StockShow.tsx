import { Tick } from "../types/tick";
import { useState, useEffect } from "react";

export default function StockShow(props: {symbol: string, tick: Tick}) {
  const [stock, setStock] =  useState<Tick>({
    symbol: props.symbol,
    start: 0,
    change: 0,
    end: 0
  })

  useEffect(() => {
    if (props.symbol === props.tick.symbol) {
      setStock(props.tick)
    }
  }, [props.symbol, props.tick])


  
  return (
    <div>
      <h1>{props.symbol}</h1>
      <p>Start: {stock.start ? stock.start : '--'}</p>
      <p>Change: {stock.change ? stock.change : '--'}</p>
      <p>End: {stock.end ? stock.end : '--'}</p>
    </div>
  );
}
