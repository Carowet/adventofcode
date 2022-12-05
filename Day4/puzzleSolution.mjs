import { readFileSync } from "node:fs";

const lines = readFileSync("puzzleInput.txt", { encoding: "utf-8" })
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline

function part1() {
  const result = lines.map((line) => {
    const [interval1, interval2] = line
      .split(",")
      .map((interval) => interval.split("-").map(Number))
      .sort((a, b) => {
        const oneSide = a[1] - a[0];
        const twoSide = b[1] - b[0];
        return twoSide - oneSide;
      });

    const oneFullContainsTwo = interval1[0] <= interval2[0] && interval1[1] >= interval2[1];

    return oneFullContainsTwo ? 1 : 0
  })
  console.log(result.reduce((a, b) => a + b, 0))
}

function part2() {
  const result = lines.map((line) => {
    const [interval1, interval2] = line
      .split(",")
      .map((interval) => interval.split("-").map(Number))
      .sort((a, b) => {
        const oneSide = a[1] - a[0];
        const twoSide = b[1] - b[0];
        return twoSide - oneSide;
      });

    const overlap = interval1[0] <= interval2[1] && interval1[1] >= interval2[0];

    return overlap ? 1 : 0
  })
  console.log(result.reduce((a, b) => a + b, 0))
}

part1();
part2();
