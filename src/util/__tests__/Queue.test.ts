import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { floor, random } from "../../__internal__/math.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { QueueLike_dequeue, QueueLike_head } from "../../__internal__/util.js";
import { Optional, newInstance, none, pipe } from "../../functions.js";
import { CollectionLike_count, QueueableLike_enqueue } from "../../util.js";
import Queue_createIndexedQueue from "../Queue/__internal__/Queue.createIndexedQueue.js";
import Queue_createPriorityQueue from "../Queue/__internal__/Queue.createPriorityQueue.js";

const createPriorityQueue = /*@__PURE__*/ (() => {
  const compare = (a: number, b: number): number => a - b;

  return () => Queue_createPriorityQueue(compare, MAX_SAFE_INTEGER, "overflow");
})();

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
    const index = floor(random() * (count + 1));

    const temp = result[count];
    result[count] = result[index];
    result[index] = temp;
  }

  return result;
};

testModule(
  "Queue",
  describe(
    "indexedQueueMixin",
    test("push/pull/count", () => {
      const queue = Queue_createIndexedQueue<number>(
        MAX_SAFE_INTEGER,
        "overflow",
      );

      pipe(queue[QueueLike_head], expectEquals(none as Optional<number>));
      pipe(queue[QueueLike_dequeue](), expectEquals(none as Optional<number>));

      for (let i = 0; i < 8; i++) {
        queue[QueueableLike_enqueue](i);
        pipe(queue[QueueLike_head], expectEquals(0 as Optional<number>));
      }

      pipe(queue[CollectionLike_count], expectEquals(8));

      pipe(queue[QueueLike_dequeue](), expectEquals(0 as Optional<number>));
      pipe(queue[QueueLike_head], expectEquals(1 as Optional<number>));

      pipe(queue[QueueLike_dequeue](), expectEquals(1 as Optional<number>));
      pipe(queue[QueueLike_head], expectEquals(2 as Optional<number>));

      pipe(queue[QueueLike_dequeue](), expectEquals(2 as Optional<number>));
      pipe(queue[QueueLike_head], expectEquals(3 as Optional<number>));

      for (let i = 8; i < 16; i++) {
        queue[QueueableLike_enqueue](i);
        pipe(queue[QueueLike_head], expectEquals(3 as Optional<number>));
      }

      pipe(queue[QueueLike_dequeue](), expectEquals(3 as Optional<number>));
      pipe(queue[QueueLike_head], expectEquals(4 as Optional<number>));

      pipe(queue[QueueLike_dequeue](), expectEquals(4 as Optional<number>));
      pipe(queue[QueueLike_head], expectEquals(5 as Optional<number>));

      pipe(queue[QueueLike_dequeue](), expectEquals(5 as Optional<number>));
      pipe(queue[QueueLike_head], expectEquals(6 as Optional<number>));

      for (let i = 16; i < 32; i++) {
        queue[QueueableLike_enqueue](i);
        pipe(queue[QueueLike_head], expectEquals(6 as Optional<number>));
      }

      for (let i = 0; i < 20; i++) {
        queue[QueueLike_dequeue]();
      }

      pipe(queue[QueueLike_head], expectEquals(26 as Optional<number>));
    }),
    test("shrink", () => {
      const queue = Queue_createIndexedQueue<number>(
        MAX_SAFE_INTEGER,
        "overflow",
      );

      for (let i = 0; i < 300; i++) {
        queue[QueueableLike_enqueue](i);
      }

      for (let i = 0; i < 50; i++) {
        queue[QueueLike_dequeue]();
      }

      pipe(queue[QueueLike_head], expectEquals(50 as Optional<number>));

      for (let i = 300; i < 500; i++) {
        queue[QueueableLike_enqueue](i);
      }

      for (let i = 0; i < 200; i++) {
        queue[QueueLike_dequeue]();
      }

      pipe(queue[QueueLike_head], expectEquals(250 as Optional<number>));
    }),
  ),
  describe(
    "priorityQueueMixin",
    test("push", () => {
      const queue = createPriorityQueue();
      const shuffledArray = makeShuffledArray(100);
      for (let i = 0; i < shuffledArray.length; i++) {
        queue[QueueableLike_enqueue](shuffledArray[i]);
      }

      const acc: number[] = [];
      while (queue[CollectionLike_count] > 0) {
        acc.push(queue[QueueLike_dequeue]() as number);
      }

      pipe(acc, expectArrayEquals(makeSortedArray(100)));
    }),
  ),
);
