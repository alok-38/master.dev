const players = [
  {
    name: "Player 1",
    symbol: "X",
  },
  {
    name: "Player 2",
    symbol: "O",
  },
];

const playerOneSymbol = players[0].symbol;
const playerTwoSymbol = players[1].symbol;
const playerOneName = players[0].name;
const playerTwoName = players[1].name;

const playerOneSymbolEl = document.getElementById('p1-symbol');
const playerTwoSymbolEl = document.getElementById('p2-symbol');

playerOneSymbolEl.textContent = "Y";
playerTwoSymbolEl.textContent = "Z";