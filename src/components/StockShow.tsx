import { Tick } from "../types/tick";
import { useState, useEffect } from "react";
import StockDetail from "./StockDetail";

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
    <div className="bg-slate-100 basis-60 rounded-xl overflow-hidden">
      <h2 className="font-bold text-2xl text-center pt-2 pb-2 bg-slate-300">{props.symbol}</h2>
      <div className="flex flex-col space-y-1 p-4">
        <StockDetail title="Start" detail={stock.start}/>
        <StockDetail title="Change" detail={stock.change}/>
        <StockDetail title="End" detail={stock.end}/>
      </div>
    </div>
  );
}
