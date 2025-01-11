import { Array_length, Array_push } from "../../__internal__/constants.js";
import { floor, random } from "../../__internal__/math.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrow,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { Optional, newInstance, none, pipe } from "../../functions.js";
import {
  DropLatestBackpressureStrategy,
  DropOldestBackpressureStrategy,
  QueueLike_count,
  QueueLike_dequeue,
  QueueLike_head,
  QueueableLike_enqueue,
  ThrowBackpressureStrategy,
} from "../../utils.js";
import * as Queue from "../Queue.js";

const createPriorityQueue = /*@__PURE__*/ (() => {
  const comparator = (a: number, b: number): number => a - b;

  return () => Queue.create({ comparator });
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
  test("push/pull/count", () => {
    const queue = Queue.create<number>();

    pipe(queue[QueueLike_head], expectEquals(none as Optional<number>));
    pipe(queue[QueueLike_dequeue](), expectEquals(none as Optional<number>));

    for (let i = 0; i < 8; i++) {
      queue[QueueableLike_enqueue](i);
      pipe(queue[QueueLike_head], expectEquals<Optional<number>>(0));
    }

    pipe(queue[QueueLike_count], expectEquals(8));

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
    const queue = Queue.create<number>();

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
  describe(
    "priority queue",

    test("push", () => {
      const queue = createPriorityQueue();
      const shuffledArray = makeShuffledArray(100);
      for (let i = 0; i < shuffledArray[Array_length]; i++) {
        queue[QueueableLike_enqueue](shuffledArray[i]);
      }

      const acc: number[] = [];
      while (queue[QueueLike_count] > 0) {
        acc[Array_push](queue[QueueLike_dequeue]() as number);
      }

      pipe(acc, expectArrayEquals(makeSortedArray(100)));
    }),
    test("drop-latest backpressure", () => {
      const comparator = (a: number, b: number): number => a - b;

      const queue = Queue.create({
        comparator,
        capacity: 1,
        backpressureStrategy: DropLatestBackpressureStrategy,
      });

      queue[QueueableLike_enqueue](0);
      queue[QueueableLike_enqueue](1);

      pipe(queue[QueueLike_count], expectEquals(1));
      pipe(queue[QueueLike_head], expectEquals<Optional<number>>(0));
    }),
    test("drop-oldest backpressure", () => {
      const comparator = (a: number, b: number): number => a - b;

      const queue = Queue.create({
        comparator,
        capacity: 1,
        backpressureStrategy: DropOldestBackpressureStrategy,
      });

      queue[QueueableLike_enqueue](0);
      queue[QueueableLike_enqueue](1);

      pipe(queue[QueueLike_count], expectEquals(1));
      pipe(queue[QueueLike_head], expectEquals<Optional<number>>(1));
    }),
    test("throw backpressure", () => {
      const comparator = (a: number, b: number): number => a - b;

      const queue = Queue.create({
        comparator,
        capacity: 1,
        backpressureStrategy: ThrowBackpressureStrategy,
      });

      queue[QueueableLike_enqueue](0);

      expectToThrow(() => {
        queue[QueueableLike_enqueue](1);
      });

      pipe(queue[QueueLike_count], expectEquals(1));
      pipe(queue[QueueLike_head], expectEquals<Optional<number>>(0));
    }),
  ),
);
