
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

Your objective is to flesh out a Single Page App that displays these stock prices.

- Simple solution: Show all `Tick` events in an expanding list
- Medium solution: Create dynamic list of stock ticker symbols and end prices that updates automatically in place.
- Robust solution:
  - Create a table with a row for each stock symbol and columns for price information (start, end, change).
  - The table should update automatically in place.
  - Add CSS and/or animations to change colors for positive and negative values.
- Bonus points:
  - Mobile layout support by using percentage of screen width for table columns
  - Make stock ticker symbols clickable and have it open to show price history under most recent price
