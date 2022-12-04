import { readFileSync } from "node:fs";

const lines = readFileSync("puzzleInput.txt", { encoding: "utf-8" })
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map((line) => line.split(" "));

const moves = {
  rock: 1,
  paper: 2,
  scissors: 3
};

const mapInput = {
  A: moves.rock,
  B: moves.paper,
  C: moves.scissors,
  X: moves.rock,
  Y: moves.paper,
  Z: moves.scissors,
};

const solution = {
  A: {
    X: moves.scissors,
    Y: moves.rock,
    Z: moves.paper,
  },
  B: {
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors,
  },
  C: {
    X: moves.paper,
    Y: moves.scissors,
    Z: moves.rock,
  },
};

function score(opponentMove, myMove) {
  if (opponentMove === myMove) {
    return myMove + 3;
  }
  if (
    (opponentMove === moves.rock && myMove === moves.paper) ||
    (opponentMove === moves.paper && myMove === moves.scissors) ||
    (opponentMove === moves.scissors && myMove === moves.rock)
  ) {
    return myMove + 6;
  }
  return myMove;
}

function part1() {
  const outcomes = lines.map((line) => {
    const opponentMove = mapInput[line[0]];
    const myMove = mapInput[line[1]];
    return score(opponentMove, myMove)
  });
  console.log(outcomes.reduce((a, b) => a + b, 0));
}

function part2() {
  const outcomes = lines.map((line) => {
    const opponentMove = mapInput[line[0]];

    const ourMove = solution[line[0]][line[1]];

    return score(opponentMove, ourMove);
  });
  console.log(outcomes.reduce((a, b) => a + b, 0));
}

part1();
part2();
