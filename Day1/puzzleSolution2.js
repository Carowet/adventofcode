import { readFileSync } from "node:fs";

const elfCalories = readFileSync("puzzleInput.txt", { encoding: "utf-8" })
  .split('\n\n')
  .map(elf => {
    return elf
      .split('\n')
      .reduce((total, current) => total + Number(current.trim()), 0);
  })
  .sort((a, b) => b - a);

puzzleSolution2.setValue(
  elfCalories[0] + elfCalories[1] + elfCalories[2]
);
