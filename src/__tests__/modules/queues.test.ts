import { floor, newInstance, pipe } from "../../functions";
import QueueLike__count from "../../util/__internal__/QueueLike/QueueLike.count";
import QueueLike__create from "../../util/__internal__/QueueLike/QueueLike.create";
import QueueLike__pop from "../../util/__internal__/QueueLike/QueueLike.pop";
import QueueLike__push from "../../util/__internal__/QueueLike/QueueLike.push";
import { expectArrayEquals, test, testModule } from "../testing";

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

testModule(
  "priority queue",
  test("push", () => {
    const queue = QueueLike__create(compare);
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
      QueueLike__push(queue, shuffledArray[i]);
    }

    const acc: number[] = [];
    while (QueueLike__count(queue) > 0) {
      acc.push(QueueLike__pop(queue) as number);
    }

    pipe(acc, expectArrayEquals(makeSortedArray(100)));
  }),
);
