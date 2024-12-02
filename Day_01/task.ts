import { input } from "./input"
import sortBy from 'lodash-es/sortBy';

// import sortBy from 'lodash/sortBy'

// function to calculateListsDistance
const calculateListsDistance = (input) => {
  const [left, right] = input.split('\n')
    .reduce(([l, r], line) => {
      const [a, b] = line.trim().split(/\s+/).map(Number);
      return [
        [...l, a].sort((x, y) => x - y),
        [...r, b].sort((x, y) => x - y)
      ];
    }, [[], []]);

  const differences = left.map((lVal, i) => lVal - right[i]);

  console.log("Sorted Left:", left);
  console.log("Sorted Right:", right);
  console.log("Differences:", differences);

  const sum = differences.reduce((acc, val) => acc + Math.abs(val), 0);

  console.log("Sum of absolute values:", sum);
};