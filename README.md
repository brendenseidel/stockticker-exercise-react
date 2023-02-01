
# stockticker-exercise-react

Boilerplate project for StockTicker code exercise using React.

## Quick Start

1. Clone this repository
2. Run `npm install`
3. Run `npm start` to start the dev server
4. Navigate to <http://localhost:3000/>

The app will automatically reload if you change any of the source files.

## Overview

This project has a single App Component which subscribes to a `stockTicker$` Observable provided by the stock ticker service. This subscription receives a `Tick` object at random intervals with a stock symbol and price information. These objects are logged to the console as they are received.

## Assignment

Your objective is to flesh out a Single Page App that displays the stock prices. You will received additional instructions during the interview.
