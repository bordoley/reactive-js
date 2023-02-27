import { floor, random } from "../../__internal__/math.js";
import { createInstanceFactory } from "../../__internal__/mixins.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  test,
  testModule,
} from "../../__tests__/testing.js";
import { Optional, newInstance, none, pipe } from "../../functions.js";
import { QueueLike_push } from "../../util.js";
import PullableQueue_fifoQueueMixin from "../PullableQueue/__internal__/PullableQueue.fifoQueueMixin.js";
import PullableQueue_priorityQueueMixin from "../PullableQueue/__internal__/PullableQueue.priorityQueueMixin.js";
import PullableQueue_pull from "../PullableQueue/__internal__/PullableQueue.pull.js";
import Queue_count from "../Queue/__internal__/Queue.count.js";
import {
  PullableQueueLike_peek,
  PullableQueueLike_pull,
} from "../__internal__/util.internal.js";

const createPriorityQueue = /*@__PURE__*/ (() => {
  const compare = (a: number, b: number): number => a - b;
  const createInstance = createInstanceFactory(
    PullableQueue_priorityQueueMixin<number>(),
  );

  return () => createInstance(compare);
})();

const createFifoQueue = /*@__PURE__*/ (() =>
  createInstanceFactory(PullableQueue_fifoQueueMixin<number>()))();

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
  "PullableQueue",
  describe(
    "fifoQueueMixin",
    test("push/pull/count", () => {
      const queue = createFifoQueue();

      pipe(
        queue[PullableQueueLike_peek](),
        expectEquals(none as Optional<number>),
      );
      pipe(
        queue[PullableQueueLike_pull](),
        expectEquals(none as Optional<number>),
      );

      for (let i = 0; i < 8; i++) {
        queue[QueueLike_push](i);
        pipe(
          queue[PullableQueueLike_peek](),
          expectEquals(0 as Optional<number>),
        );
      }

      pipe(queue, Queue_count, expectEquals(8));

      pipe(
        queue[PullableQueueLike_pull](),
        expectEquals(0 as Optional<number>),
      );
      pipe(
        queue[PullableQueueLike_peek](),
        expectEquals(1 as Optional<number>),
      );

      pipe(
        queue[PullableQueueLike_pull](),
        expectEquals(1 as Optional<number>),
      );
      pipe(
        queue[PullableQueueLike_peek](),
        expectEquals(2 as Optional<number>),
      );

      pipe(
        queue[PullableQueueLike_pull](),
        expectEquals(2 as Optional<number>),
      );
      pipe(
        queue[PullableQueueLike_peek](),
        expectEquals(3 as Optional<number>),
      );

      for (let i = 8; i < 16; i++) {
        queue[QueueLike_push](i);
        pipe(
          queue[PullableQueueLike_peek](),
          expectEquals(3 as Optional<number>),
        );
      }

      pipe(
        queue[PullableQueueLike_pull](),
        expectEquals(3 as Optional<number>),
      );
      pipe(
        queue[PullableQueueLike_peek](),
        expectEquals(4 as Optional<number>),
      );

      pipe(
        queue[PullableQueueLike_pull](),
        expectEquals(4 as Optional<number>),
      );
      pipe(
        queue[PullableQueueLike_peek](),
        expectEquals(5 as Optional<number>),
      );

      pipe(
        queue[PullableQueueLike_pull](),
        expectEquals(5 as Optional<number>),
      );
      pipe(
        queue[PullableQueueLike_peek](),
        expectEquals(6 as Optional<number>),
      );

      for (let i = 16; i < 32; i++) {
        queue[QueueLike_push](i);
        pipe(
          queue[PullableQueueLike_peek](),
          expectEquals(6 as Optional<number>),
        );
      }

      for (let i = 0; i < 20; i++) {
        queue[PullableQueueLike_pull]();
      }

      pipe(
        queue[PullableQueueLike_peek](),
        expectEquals(26 as Optional<number>),
      );
    }),
    test("shrink", () => {
      const queue = createFifoQueue();

      for (let i = 0; i < 300; i++) {
        queue[QueueLike_push](i);
      }

      for (let i = 0; i < 50; i++) {
        queue[PullableQueueLike_pull]();
      }

      pipe(
        queue[PullableQueueLike_peek](),
        expectEquals(50 as Optional<number>),
      );

      for (let i = 300; i < 500; i++) {
        queue[QueueLike_push](i);
      }

      for (let i = 0; i < 200; i++) {
        queue[PullableQueueLike_pull]();
      }

      pipe(
        queue[PullableQueueLike_peek](),
        expectEquals(250 as Optional<number>),
      );
    }),
  ),
  describe(
    "priorityQueueMixin",
    test("push", () => {
      const queue = createPriorityQueue();
      const shuffledArray = makeShuffledArray(100);
      for (let i = 0; i < shuffledArray.length; i++) {
        queue[QueueLike_push](shuffledArray[i]);
      }

      const acc: number[] = [];
      while (Queue_count(queue) > 0) {
        acc.push(PullableQueue_pull(queue) as number);
      }

      pipe(acc, expectArrayEquals(makeSortedArray(100)));
    }),
  ),
);
