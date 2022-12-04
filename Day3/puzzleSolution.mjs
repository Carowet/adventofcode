import { readFileSync } from "node:fs";

const lines = readFileSync("puzzleInput.txt", { encoding: "utf-8" })
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline

function letterToPriority(letter) {
  if (/[a-z]/.test(letter)) {
    return letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 65 + 27;
  }
}

function part1() {
  const result = lines.map((line) => {
    const part1 = [...line.slice(0, line.length / 2)];
    const part2 = [...line.slice(line.length / 2)];

    let part1Set = new Set(part1);
    const intersection = part2.filter((x) => part1Set.has(x));
    const deduplicated = [... new Set(intersection)];

    return letterToPriority(deduplicated[0]);
  });
  console.log(result.reduce((a, b) => a + b, 0))
}


part1();
