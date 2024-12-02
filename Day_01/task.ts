import { input } from "./input"
import { sortBy, map, split, sum } from 'lodash';

const calculateListsDistance = (input: any) => {
  const lines = split(input, "\n")
  const pairs = map(lines, line => map(line.trim().split(/\s+/), Number))

  const left = map(pairs, pair => pair[0]);
  const right = map(pairs, pair => pair[1]);

  const sortedLeft = sortBy(left);
  const sortedRight = sortBy(right);

  const absDifferences = map(
    sortedLeft,
    (value, index) => Math.abs(value - sortedRight[index])
  );

  return sum(absDifferences)
};

console.log(calculateListsDistance(input))
