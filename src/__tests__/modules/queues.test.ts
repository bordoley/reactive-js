import { createPriorityQueue } from "../../__internal__/scheduling/queue";
import { describe, expectArrayEquals, test } from "../../__internal__/testing";
import { floor, newInstance, pipe } from "../../functions";

const compare = (a: number, b: number): number => a - b;

const makeSortedArray = (n: number) => {
  const result = newInstance<Array<number>, number>(Array, n);
  for (let i = 0; i < n; i++) {
    result[i] = i;
  }
  return result;
};

const makeShuffledArray = (n: number) => {
  const result = makeSortedArray(n);

  for (let count = n - 1; count >= 0; count--) {
    const index = floor(Math.random() * (count + 1));

    const temp = result[count];
    result[count] = result[index];
    result[index] = temp;
  }

  return result;
};

export default describe(
  "priority queue",
  test("push", () => {
    const queue = createPriorityQueue(compare);
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
      queue.push(shuffledArray[i]);
    }

    const acc: number[] = [];
    while (queue.count > 0) {
      acc.push(queue.pop() as number);
    }

    pipe(acc, expectArrayEquals(makeSortedArray(100)));
  }),
);
