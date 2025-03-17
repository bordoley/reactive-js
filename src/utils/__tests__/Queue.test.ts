import { Array_length, Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { Optional, newInstance, none, pipe } from "../../functions.js";
import { floor, random } from "../../math.js";
import {
  QueueLike_count,
  QueueLike_dequeue,
  QueueLike_enqueue,
  QueueLike_head,
} from "../../utils.js";
import * as Queue from "../Queue.js";

const createSorted = /*@__PURE__*/ (() => {
  const comparator = (a: number, b: number): number => a - b;

  return () => Queue.createSorted(comparator);
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
  test("enqueue", () => {
    const queue = Queue.create<number>();

    for (let i = 0; i < 127; i++) {
      queue[QueueLike_enqueue](i);
    }

    for (let i = 0; i < 62; i++) {
      queue[QueueLike_dequeue]();
    }

    for (let i = 128; i < 255; i++) {
      queue[QueueLike_enqueue](i);
    }

    pipe(queue[QueueLike_count], expectEquals(192));
  }),
  test("push/pull/count", () => {
    const queue = Queue.create<number>();

    pipe(queue[QueueLike_head], expectEquals(none as Optional<number>));
    pipe(queue[QueueLike_dequeue](), expectEquals(none as Optional<number>));

    for (let i = 0; i < 8; i++) {
      queue[QueueLike_enqueue](i);
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
      queue[QueueLike_enqueue](i);
      pipe(queue[QueueLike_head], expectEquals(3 as Optional<number>));
    }

    pipe(queue[QueueLike_dequeue](), expectEquals(3 as Optional<number>));
    pipe(queue[QueueLike_head], expectEquals(4 as Optional<number>));

    pipe(queue[QueueLike_dequeue](), expectEquals(4 as Optional<number>));
    pipe(queue[QueueLike_head], expectEquals(5 as Optional<number>));

    pipe(queue[QueueLike_dequeue](), expectEquals(5 as Optional<number>));
    pipe(queue[QueueLike_head], expectEquals(6 as Optional<number>));

    for (let i = 16; i < 32; i++) {
      queue[QueueLike_enqueue](i);
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
      queue[QueueLike_enqueue](i);
    }

    for (let i = 0; i < 50; i++) {
      queue[QueueLike_dequeue]();
    }

    pipe(queue[QueueLike_head], expectEquals(50 as Optional<number>));

    for (let i = 300; i < 500; i++) {
      queue[QueueLike_enqueue](i);
    }

    for (let i = 0; i < 200; i++) {
      queue[QueueLike_dequeue]();
    }

    pipe(queue[QueueLike_head], expectEquals(250 as Optional<number>));
  }),
  test("iterator", () => {
    const queue = Queue.create<number>();

    for (let i = 0; i < 31; i++) {
      queue[QueueLike_enqueue](i);
    }

    for (let i = 0; i < 10; i++) {
      queue[QueueLike_dequeue]();
    }

    for (let i = 31; i < 40; i++) {
      queue[QueueLike_enqueue](i);
    }

    let prev = 9;
    for (const v of queue) {
      pipe(v, expectEquals(prev + 1));
      prev = v;
    }
  }),
  describe(
    "priority queue",
    test("push", () => {
      const queue = createSorted();
      const shuffledArray = makeShuffledArray(100);
      for (let i = 0; i < shuffledArray[Array_length]; i++) {
        queue[QueueLike_enqueue](shuffledArray[i]);
      }

      const acc: number[] = [];
      while (queue[QueueLike_count] > 0) {
        acc[Array_push](queue[QueueLike_dequeue]() as number);
      }

      pipe(acc, expectArrayEquals(makeSortedArray(100)));
    }),
  ),
);
