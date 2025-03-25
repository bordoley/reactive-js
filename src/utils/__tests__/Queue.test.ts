import { Array_length, Array_push } from "../../__internal__/constants.js";
import {
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectIsNone,
  expectToThrow,
  expectTrue,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as Iterable from "../../computations/Iterable.js";
import { Optional, ignore, newInstance, none, pipe } from "../../functions.js";
import { floor, random } from "../../math.js";
import {
  CollectionEnumeratorLike_count,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  DropLatestBackpressureStrategy,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  OverflowBackpressureStrategy,
  QueueLike_enqueue,
  QueueableLike_addOnReadyListener,
  QueueableLike_isReady,
  ThrowBackpressureStrategy,
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
      queue[EnumeratorLike_moveNext]();
    }

    for (let i = 128; i < 255; i++) {
      queue[QueueLike_enqueue](i);
    }

    pipe(queue[CollectionEnumeratorLike_count], expectEquals(192));
  }),
  test("push/pull/count", () => {
    const queue = Queue.create<number>();

    pipe(queue, Iterable.first(), expectEquals(none as Optional<number>));
    pipe(queue[EnumeratorLike_moveNext](), expectFalse());

    for (let i = 0; i < 8; i++) {
      queue[QueueLike_enqueue](i);
      pipe(queue, Iterable.first(), expectEquals<Optional<number>>(0));
    }

    pipe(queue[CollectionEnumeratorLike_count], expectEquals(8));

    pipe(
      (queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]),
      expectEquals(0 as Optional<number>),
    );
    pipe(queue, Iterable.first(), expectEquals(1 as Optional<number>));

    pipe(
      (queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]),
      expectEquals(1 as Optional<number>),
    );
    pipe(queue, Iterable.first(), expectEquals(2 as Optional<number>));

    pipe(
      (queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]),
      expectEquals(2 as Optional<number>),
    );
    pipe(queue, Iterable.first(), expectEquals(3 as Optional<number>));

    for (let i = 8; i < 16; i++) {
      queue[QueueLike_enqueue](i);
      pipe(queue, Iterable.first(), expectEquals(3 as Optional<number>));
    }

    pipe(
      (queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]),
      expectEquals(3 as Optional<number>),
    );
    pipe(queue, Iterable.first(), expectEquals(4 as Optional<number>));

    pipe(
      (queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]),
      expectEquals(4 as Optional<number>),
    );
    pipe(queue, Iterable.first(), expectEquals(5 as Optional<number>));

    pipe(
      (queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]),
      expectEquals(5 as Optional<number>),
    );
    pipe(queue, Iterable.first(), expectEquals(6 as Optional<number>));

    for (let i = 16; i < 32; i++) {
      queue[QueueLike_enqueue](i);
      pipe(queue, Iterable.first(), expectEquals(6 as Optional<number>));
    }

    for (let i = 0; i < 20; i++) {
      queue[EnumeratorLike_moveNext]();
    }

    pipe(queue, Iterable.first(), expectEquals(26 as Optional<number>));
  }),
  test("shrink", () => {
    const queue = Queue.create<number>();

    for (let i = 0; i < 300; i++) {
      queue[QueueLike_enqueue](i);
    }

    for (let i = 0; i < 50; i++) {
      queue[EnumeratorLike_moveNext]();
    }

    pipe(queue, Iterable.first(), expectEquals(50 as Optional<number>));

    for (let i = 300; i < 500; i++) {
      queue[QueueLike_enqueue](i);
    }

    for (let i = 0; i < 200; i++) {
      queue[EnumeratorLike_moveNext]();
    }

    pipe(queue, Iterable.first(), expectEquals(250 as Optional<number>));
  }),
  test("iterator", () => {
    const queue = Queue.create<number>();

    for (let i = 0; i < 31; i++) {
      queue[QueueLike_enqueue](i);
    }

    for (let i = 0; i < 10; i++) {
      queue[EnumeratorLike_moveNext]();
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
  test("push when sorted", () => {
    const queue = createSorted();
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray[Array_length]; i++) {
      queue[QueueLike_enqueue](shuffledArray[i]);
    }

    const acc: number[] = [];
    while (queue[CollectionEnumeratorLike_count] > 0) {
      queue[EnumeratorLike_moveNext]();
      acc[Array_push](queue[EnumeratorLike_current] as number);
    }

    pipe(acc, expectArrayEquals(makeSortedArray(100)));
  }),
  test("notifies listener when capacity is available, with capacity of 1", () => {
    const queue = Queue.create({
      capacity: 1,
      backpressureStrategy: OverflowBackpressureStrategy,
    });

    let v = false;
    queue[QueueableLike_addOnReadyListener](() => {
      v = true;
    });

    queue[QueueLike_enqueue](0);
    queue[QueueLike_enqueue](1);
    pipe(
      queue[QueueableLike_isReady],
      expectFalse("expected isReady to be false"),
    );

    queue[EnumeratorLike_moveNext]();
    pipe(
      queue[QueueableLike_isReady],
      expectFalse("expected isReady to be false"),
    );
    pipe(v, expectFalse("expected onReadyListener to not be called"));

    queue[EnumeratorLike_moveNext]();
    pipe(
      queue[QueueableLike_isReady],
      expectTrue("expected isReady to be true"),
    );
    pipe(v, expectTrue("expected onReadyListener to be called"));
  }),
  test("notifies listener when capacity is available, with capacity of 2", () => {
    const queue = Queue.create({
      capacity: 2,
      backpressureStrategy: ThrowBackpressureStrategy,
    });

    let v = false;
    queue[QueueableLike_addOnReadyListener](() => {
      v = true;
    });

    queue[QueueLike_enqueue](0);
    queue[QueueLike_enqueue](1);

    pipe(
      queue[QueueableLike_isReady],
      expectFalse("expected isReady to be false"),
    );
    queue[EnumeratorLike_moveNext]();
    pipe(
      queue[QueueableLike_isReady],
      expectTrue("expected isReady to be true"),
    );
    pipe(v, expectTrue("expected onReadyListener to be called"));
  }),
  test("notifies listener when capacity is available, with capacity of 5", () => {
    const queue = Queue.create({
      capacity: 5,
      backpressureStrategy: ThrowBackpressureStrategy,
    });

    let v = false;
    queue[QueueableLike_addOnReadyListener](() => {
      v = true;
    });

    queue[QueueLike_enqueue](0);
    queue[QueueLike_enqueue](1);
    queue[QueueLike_enqueue](2);
    queue[QueueLike_enqueue](3);
    queue[QueueLike_enqueue](5);

    pipe(
      queue[QueueableLike_isReady],
      expectFalse("expected isReady to be false"),
    );
    queue[EnumeratorLike_moveNext]();
    pipe(
      queue[QueueableLike_isReady],
      expectTrue("expected isReady to be true"),
    );
    pipe(v, expectTrue("expected onReadyListener to be called"));
  }),
  test("with dropOldest backpressure", () => {
    const queue = Queue.createDropOldest<number>(1);
    queue[QueueLike_enqueue](0);
    queue[QueueLike_enqueue](1);
    queue[QueueLike_enqueue](2);

    pipe(queue[CollectionEnumeratorLike_count], expectEquals(1));
    pipe(queue, Iterable.first(), expectEquals<Optional<number>>(2));
  }),
  test("with dropOldest backpressure and capacity of 0", () => {
    const queue = Queue.createDropOldest<number>(0);
    queue[QueueLike_enqueue](0);
    queue[QueueLike_enqueue](1);
    queue[QueueLike_enqueue](2);

    pipe(queue[CollectionEnumeratorLike_count], expectEquals(0));
    pipe(queue, Iterable.first(), expectIsNone);
  }),
  test("with dropLatest backpressure", () => {
    const queue = Queue.create<number>({
      capacity: 1,
      backpressureStrategy: DropLatestBackpressureStrategy,
    });
    queue[QueueLike_enqueue](0);
    queue[QueueLike_enqueue](1);
    queue[QueueLike_enqueue](2);

    pipe(queue[CollectionEnumeratorLike_count], expectEquals(1));
    pipe(queue, Iterable.first(), expectEquals<Optional<number>>(0));
  }),
  test("enqueueing after dispose does nothing", () => {
    const queue = Queue.create();
    queue[DisposableLike_dispose]();
    queue[QueueLike_enqueue](0);
    queue[QueueLike_enqueue](1);
    queue[QueueLike_enqueue](2);

    pipe(queue[CollectionEnumeratorLike_count], expectEquals(0));
  }),
  test("enumerating after dispose", () => {
    const queue = Queue.create<number>();
    queue[QueueLike_enqueue](0);
    queue[QueueLike_enqueue](1);
    queue[QueueLike_enqueue](2);

    queue[DisposableLike_dispose]();

    for (let i = 0; i < 3; i++) {
      pipe(
        queue[EnumeratorLike_moveNext](),
        expectTrue("expected enumerator to have value"),
      );
      pipe(queue[EnumeratorLike_current], expectEquals(i));
    }

    pipe(
      queue[EnumeratorLike_moveNext](),
      expectFalse("expected enumerator to been consumed"),
    );
  }),
  test("with throw backpressure", () => {
    const queue = Queue.create({
      capacity: 0,
      backpressureStrategy: ThrowBackpressureStrategy,
    });
    pipe(() => queue[QueueLike_enqueue](0), expectToThrow);
  }),
  test("disposing queue, disposes listeners", () => {
    const queue = Queue.create({
      capacity: 2,
      backpressureStrategy: ThrowBackpressureStrategy,
    });
    const subscription = queue[QueueableLike_addOnReadyListener](ignore);

    queue[DisposableLike_dispose]();
    pipe(
      subscription[DisposableLike_isDisposed],
      expectTrue("expected subscription to be disposed"),
    );
  }),
);
