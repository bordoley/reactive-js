import {
  expectEquals,
  expectIsNone,
  expectToThrow,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { Optional, none, pipe } from "../../functions.js";
import {
  IndexedQueueLike_get,
  IndexedQueueLike_set,
  QueueLike_dequeue,
  QueueLike_head,
  QueueableLike_count,
  QueueableLike_enqueue,
  StackLike_head,
  StackLike_pop,
} from "../../utils.js";
import * as IndexedQueue from "../IndexedQueue.js";

testModule(
  "IndexedQueue",
  test("push/pull/count", () => {
    const queue = IndexedQueue.create<number>();

    pipe(queue[StackLike_head], expectIsNone);
    pipe(queue[StackLike_pop](), expectIsNone);
    expectToThrow(() => queue[IndexedQueueLike_get](0));
    expectToThrow(() => queue[IndexedQueueLike_set](0, 0));

    pipe(queue[QueueLike_head], expectEquals(none as Optional<number>));
    pipe(queue[QueueLike_dequeue](), expectEquals(none as Optional<number>));

    for (let i = 0; i < 8; i++) {
      queue[QueueableLike_enqueue](i);
      pipe(queue[QueueLike_head], expectEquals<Optional<number>>(0));
      pipe(queue[StackLike_head], expectEquals<Optional<number>>(i));
    }

    expectToThrow(() => queue[IndexedQueueLike_get](-10));

    for (let i = 0; i < 8; i++) {
      pipe(queue[IndexedQueueLike_get](i), expectEquals(i));
    }

    pipe(queue[QueueableLike_count], expectEquals(8));

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
    const queue = IndexedQueue.create<number>();

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
);
