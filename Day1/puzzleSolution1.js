import { readFileSync } from "node:fs";

const elfCalories = readFileSync("puzzleInput.txt", { encoding: "utf-8" })
  .split('\n\n')
  .map(elf => {
    return elf
      .split('\n')
      .reduce((total, current) => total + Number(current.trim()), 0);
  })
  .sort((a, b) => b - a)

let max_cal = Math.max(...elfCalories);
console.log(max_cal);

puzzleSolution1.setValue(elfCalories[0]);
