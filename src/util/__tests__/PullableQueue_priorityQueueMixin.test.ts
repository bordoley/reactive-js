import { createInstanceFactory } from "../../__internal__/mixins.js";
import {
  expectArrayEquals,
  test,
  testModule,
} from "../../__tests__/testing.js";
import { Comparator, floor, newInstance, pipe } from "../../functions.js";
import { QueueableLike_push } from "../../util.js";
import PullableQueue_priorityQueueMixin from "../PullableQueue/__internal__/PullableQueue.priorityQueueMixin.js";
import PullableQueue_pull from "../PullableQueue/__internal__/PullableQueue.pull.js";
import Queueable_count from "../Queueable/__internal__/Queueable.count.js";
import { PullableQueueLike } from "../__internal__/util.internal.js";

const createPriorityQueue = /*@__PURE__*/ (() =>
  createInstanceFactory(PullableQueue_priorityQueueMixin()) as <T>(
    comparator: Comparator<T>,
  ) => PullableQueueLike<T>)();

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
    const queue = createPriorityQueue(compare);
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
      queue[QueueableLike_push](shuffledArray[i]);
    }

    const acc: number[] = [];
    while (Queueable_count(queue) > 0) {
      acc.push(PullableQueue_pull(queue) as number);
    }

    pipe(acc, expectArrayEquals(makeSortedArray(100)));
  }),
);
