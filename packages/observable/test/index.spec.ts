import {
  createDisposable,
  disposed,
  DisposableLike,
} from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import { createObservable, fromScheduledValues, ObserverLike, subscribe } from "@reactive-js/rx";
import {
  createVirtualTimeSchedulerResource,
  AbstractScheduler,
} from "@reactive-js/schedulers";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  buffer,
  concatAll,
  distinctUntilChanged,
  ignoreElements,
  keep,
  map,
  observe,
  onComplete,
  onError,
  onNext,
  scan,
  share,
  switchAll,
  takeFirst,
  takeLast,
  toPromise,
  withLatestFrom,
  toArray,
  toIterable,
  repeat,
  timeout,
  throttle,
  ThrottleMode,
  takeWhile,
} from "../src/index";

const callbackAndDispose = (
  callback: () => void,
  disposable: DisposableLike,
) => {
  callback();
  disposable.dispose();
};

// A simple scheduler for testing promise functions where a VTS cannot be used
class PromiseTestScheduler extends AbstractScheduler {
  protected shouldCallbackYield(_: number): boolean {
    return false;
  }

  scheduleCallback(callback: () => void, _ = 0): DisposableLike {
    const disposable = createDisposable(() => clearImmediate(immediate));
    const immediate = setImmediate(callbackAndDispose, callback, disposable);
    return disposable;
  }

  get now(): number {
    return Date.now();
  }
}

const promiseScheduler: SchedulerLike = new PromiseTestScheduler();

const createMockObserver = <T>(): ObserverLike<T> => ({
  onNext: jest.fn(),
  onComplete: jest.fn(),
});

test("lift", () => {
  const onNext = <T>(onNext: (data: T) => void) =>
    observe({
      onNext: onNext,
      onComplete: _ => {},
    });
  const scheduler = createVirtualTimeSchedulerResource();
  const result: number[] = [];

  const liftedObservable = pipe(
    createObservable(observer => observer.onNext(1)),
    onNext(_ => result.push(1)),
  );

  pipe(
    liftedObservable,
    onNext(_ => result.push(3)),
    subscribe(scheduler),
  );
  scheduler.run();

  expect(result).toEqual([1, 3]);
});

test("buffer", () => {
  const result = pipe(
    fromScheduledValues(
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
    ),
    buffer(4, 3),
    toArray(createVirtualTimeSchedulerResource),
  );

  expect(result).toEqual([
    [1, 2, 3],
    [4, 1, 2],
    [3, 4],
  ]);
});

test("combineLatest", () => {
  const result = pipe(
    combineLatest(
      [
        pipe(
          generate(
            i => i + 2,
            () => 3,
            2,
          ),
          takeFirst(3),
        ),
        pipe(
          generate(
            i => i + 2,
            () => 2,
            3,
          ),
          takeFirst(2),
        ),
      ],
      (a, b) => [a, b],
    ),
    toArray(() => createVirtualTimeSchedulerResource(1)),
  );

  expect(result).toEqual([
    [3, 2],
    [5, 2],
    [5, 4],
    [7, 4],
  ]);
});

describe("concat", () => {
  test("concats the observable and completes", () => {
    const result = pipe(concat(ofValue(1), ofValue(2), ofValue(3)), toArray());
    expect(result).toEqual([1, 2, 3]);
  });

  test("completes immediate when one observable completes with an error", () => {
    const cause = new Error();
    const cb = jest.fn();

    expect(() =>
      pipe(
        concat(ofValue(1), ofValue(2), throws(cause), ofValue(3)),
        onNext(cb),
        ignoreElements(),
        toArray(),
      ),
    ).toThrow(cause);

    expect(cb).toHaveBeenCalledTimes(2);
    expect(cb).toHaveBeenNthCalledWith(1, 1);
    expect(cb).toHaveBeenNthCalledWith(2, 2);
  });
});

describe("concatAll", () => {
  test("concats observables", () => {
    const observableA = fromArray([1, 2]);
    const observableB = fromArray([3, 4]);
    const src = fromArray([observableA, observableB, observableB, observableA]);
    const result = pipe(src, concatAll(), toArray());
    expect(result).toEqual([1, 2, 3, 4, 3, 4, 1, 2]);
  });

  test("immediately completes when completed with an error", () => {
    const cb = jest.fn();
    const cause = new Error();
    const observableA = fromArray([1, 2]);
    const observableB = fromArray([3, 4]);
    const src = concat(
      ofValue(observableA),
      throws(cause),
      ofValue(observableB),
    );

    expect(() =>
      pipe(src, concatAll(), onNext(cb), ignoreElements(), toArray()),
    ).toThrow(cause);
    expect(cb).toHaveBeenNthCalledWith(1, 1);
    expect(cb).toHaveBeenNthCalledWith(2, 2);
    expect(cb).toHaveBeenCalledTimes(2);
  });

  test("immediately completes when inner observable completes with an error", () => {
    const cb = jest.fn();
    const cause = new Error();
    const observableA = concat(fromArray([1, 2]), throws(cause));
    const observableB = fromArray([3, 4]);
    const src = fromArray([observableA, observableB]);

    expect(() =>
      pipe(src, concatAll(), onNext(cb), ignoreElements(), toArray()),
    ).toThrow(cause);
    expect(cb).toHaveBeenNthCalledWith(1, 1);
    expect(cb).toHaveBeenNthCalledWith(2, 2);
    expect(cb).toHaveBeenCalledTimes(2);
  });
});

test("distinctUntilChanged", () => {
  const cb = jest.fn();
  const cause = new Error();

  expect(() =>
    pipe(
      concat(
        fromArray([
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
        ]),
        throws(cause),
      ),
      distinctUntilChanged(),
      onNext(cb),
      ignoreElements(),
      toArray(),
    ),
  ).toThrow(cause);
  expect(cb).toHaveBeenNthCalledWith(1, 1);
  expect(cb).toHaveBeenNthCalledWith(2, 2);
  expect(cb).toHaveBeenNthCalledWith(3, 3);
  expect(cb).toHaveBeenCalledTimes(3);
});

describe("empty", () => {
  test("produces no values and completes", () => {
    const result = pipe(empty(), toArray());
    expect(result).toEqual([]);
  });
});

describe("fromArray", () => {
  test("with no delay", () => {
    const src = [1, 2, 3, 4, 5, 6];
    const observable = fromArray(src);
    const result = pipe(observable, toArray());
    expect(result).toEqual(src);
  });

  test("with delay", () => {
    const observable = fromArray([1, 2, 3, 4, 5, 6], 3);
    const scheduler = createVirtualTimeSchedulerResource(1);
    const observer = createMockObserver();

    pipe(
      observable,
      map(v => [scheduler.now, v]),
      observe(observer),
      subscribe(scheduler),
    );
    scheduler.run();

    expect(observer.onNext).toHaveBeenNthCalledWith(1, [3, 1]);
    expect(observer.onNext).toHaveBeenNthCalledWith(2, [6, 2]);
    expect(observer.onNext).toHaveBeenNthCalledWith(3, [9, 3]);
    expect(observer.onNext).toHaveBeenNthCalledWith(4, [12, 4]);
    expect(observer.onNext).toHaveBeenNthCalledWith(5, [15, 5]);
    expect(observer.onNext).toHaveBeenNthCalledWith(6, [18, 6]);
  });
});

describe("fromIterable", () => {
  test("with no delay when scheduler does not request yields", () => {
    const src = [1, 2, 3, 4, 5, 6];
    const observable = fromIterable(src);
    const result = pipe(observable, toArray());
    expect(result).toEqual(src);
  });

  test("with no delay when scheduler requests yields", () => {
    const src = [1, 2, 3, 4, 5, 6];
    const observable = fromIterable(src);
    const result = pipe(
      observable,
      toArray(() => createVirtualTimeSchedulerResource(1)),
    );
    expect(result).toEqual(src);
  });

  test("with delay", () => {
    const observable = fromIterable([1, 2, 3, 4, 5, 6], 3);
    const scheduler = createVirtualTimeSchedulerResource(1);
    const observer = createMockObserver();

    pipe(
      observable,
      map(v => [scheduler.now, v]),
      observe(observer),
      subscribe(scheduler),
    );
    scheduler.run();

    expect(observer.onNext).toHaveBeenNthCalledWith(1, [3, 1]);
    expect(observer.onNext).toHaveBeenNthCalledWith(2, [6, 2]);
    expect(observer.onNext).toHaveBeenNthCalledWith(3, [9, 3]);
    expect(observer.onNext).toHaveBeenNthCalledWith(4, [12, 4]);
    expect(observer.onNext).toHaveBeenNthCalledWith(5, [15, 5]);
    expect(observer.onNext).toHaveBeenNthCalledWith(6, [18, 6]);
  });

  test("calls iterator.return when disposed", () => {
    const iterator = {
      next: jest.fn(),
      return: jest.fn(),
      throw: jest.fn(),
    };
    const mockIterable = {
      [Symbol.iterator](): Iterator<unknown> {
        return iterator;
      },
    };

    const scheduler = createVirtualTimeSchedulerResource(1);
    const subscription = subscribe(scheduler)(fromIterable(mockIterable));
    subscription.dispose();

    expect(mockIterable[Symbol.iterator]().return).toHaveBeenCalledTimes(1);
  });
});

describe("fromPromiseFactory", () => {
  test("when the promise resolves", async () => {
    const factory = () => Promise.resolve(1);
    const result = await pipe(
      factory,
      fromPromiseFactory,
      toPromise(promiseScheduler),
    );

    expect(result).toEqual(1);
  });

  test("when the promise throws", () => {
    const cause = new Error();
    const factory = () => Promise.reject(cause);
    const promise = pipe(
      fromPromiseFactory(factory),
      toPromise(promiseScheduler),
    );

    return expect(promise).rejects.toThrow(cause);
  });
});

test("fromScheduledValues", () => {
  const scheduler = createVirtualTimeSchedulerResource(1);
  const observer = createMockObserver();
  const observable = fromScheduledValues(
    [0, 1],
    [0, 1],
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  );

  pipe(
    observable,
    map(v => [scheduler.now, v]),
    observe(observer),
    subscribe(scheduler),
  );
  scheduler.run();

  expect(observer.onNext).toHaveBeenNthCalledWith(1, [0, 1]);
  expect(observer.onNext).toHaveBeenNthCalledWith(2, [0, 1]);
  expect(observer.onNext).toHaveBeenNthCalledWith(3, [0, 1]);
  expect(observer.onNext).toHaveBeenNthCalledWith(4, [1, 2]);
  expect(observer.onNext).toHaveBeenNthCalledWith(5, [3, 3]);
  expect(observer.onNext).toHaveBeenNthCalledWith(6, [6, 4]);
});

describe("generate", () => {
  test("without delay", () => {
    const result = pipe(
      generate(
        i => i + 1,
        () => 1,
      ),
      takeFirst(5),
      toArray(),
    );

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("without delay, generate throws", () => {
    const cb = jest.fn();
    const cause = new Error();

    const generator = (i: number) => {
      if (i > 2) {
        throw cause;
      }

      return i + 1;
    };

    expect(() =>
      pipe(
        generate(generator, () => 1),
        takeFirst(5),
        onNext(cb),
        ignoreElements(),
        toArray(),
      ),
    ).toThrow(cause);
    expect(cb).toHaveBeenCalledTimes(3);
    expect(cb).toHaveBeenNthCalledWith(1, 1);
    expect(cb).toHaveBeenNthCalledWith(2, 2);
    expect(cb).toHaveBeenNthCalledWith(3, 3);
  });

  test("with delay", () => {
    const scheduler = createVirtualTimeSchedulerResource(1);
    const observer = createMockObserver();

    pipe(
      generate(
        i => i + 1,
        () => 1,
        5,
      ),
      map(x => [scheduler.now, x]),
      takeFirst(5),
      observe(observer),
      subscribe(scheduler),
    );
    scheduler.run();

    expect(observer.onNext).toHaveBeenCalledTimes(5);
    expect(observer.onNext).toHaveBeenNthCalledWith(1, [5, 1]);
    expect(observer.onNext).toHaveBeenNthCalledWith(2, [10, 2]);
    expect(observer.onNext).toHaveBeenNthCalledWith(3, [15, 3]);
    expect(observer.onNext).toHaveBeenNthCalledWith(4, [20, 4]);
    expect(observer.onNext).toHaveBeenNthCalledWith(5, [25, 5]);
  });

  test("with delay, generate throws", () => {
    const scheduler = createVirtualTimeSchedulerResource(1);
    const observer = createMockObserver();
    const cause = new Error();

    const generator = (i: number) => {
      if (i > 2) {
        throw cause;
      }

      return i + 1;
    };

    pipe(
      generate(generator, () => 1, 5),
      map(x => [scheduler.now, x]),
      takeFirst(5),
      observe(observer),
      subscribe(scheduler),
    );
    scheduler.run();

    expect(observer.onNext).toHaveBeenCalledTimes(3);
    expect(observer.onNext).toHaveBeenNthCalledWith(1, [5, 1]);
    expect(observer.onNext).toHaveBeenNthCalledWith(2, [10, 2]);
    expect(observer.onNext).toHaveBeenNthCalledWith(3, [15, 3]);
    expect(observer.onComplete).toBeCalledWith({ cause });
  });
});

test("ignoreElements", () => {
  const scheduler = createVirtualTimeSchedulerResource(1);
  const observer = createMockObserver();
  const cause = new Error();
  const src = concat(fromArray([1, 2, 3]), throws(cause));

  pipe(src, ignoreElements(), observe(observer), subscribe(scheduler));
  scheduler.run();

  expect(observer.onNext).toBeCalledTimes(0);
  expect(observer.onComplete).toBeCalledWith({ cause });
});

test("keep", () => {
  const scheduler = createVirtualTimeSchedulerResource(1);
  const observer = createMockObserver();
  const cause = new Error();
  const src = concat(fromArray([1, 2, 3]), throws(cause));

  pipe(
    src,
    keep(x => x % 2 === 0),
    observe(observer),
    subscribe(scheduler),
  );
  scheduler.run();

  expect(observer.onNext).toHaveBeenNthCalledWith(1, 2);
  expect(observer.onNext).toBeCalledTimes(1);
  expect(observer.onComplete).toBeCalledWith({ cause });
});

test("merge", () => {
  const scheduler = createVirtualTimeSchedulerResource(1);
  const observer = createMockObserver();
  const cause = new Error();

  pipe(
    merge(
      pipe(
        generate(
          i => i + 2,
          () => 3,
          2,
        ),
        takeFirst(3),
      ),
      pipe(
        generate(
          i => i + 2,
          () => 2,
          3,
        ),
        takeFirst(2),
      ),
      throws(cause, 10),
    ),
    observe(observer),
    subscribe(scheduler),
  );
  scheduler.run();

  expect(observer.onNext).toHaveBeenNthCalledWith(1, 3);
  expect(observer.onNext).toHaveBeenNthCalledWith(2, 2);
  expect(observer.onNext).toHaveBeenNthCalledWith(3, 5);
  expect(observer.onNext).toHaveBeenNthCalledWith(4, 4);
  expect(observer.onNext).toHaveBeenNthCalledWith(5, 7);
  expect(observer.onComplete).toBeCalledWith({ cause });
});

describe("never", () => {
  test("produces no values and doesn't complete", () => {
    const observer = createMockObserver();

    expect(() => pipe(never(), observe(observer), toArray())).toThrow();

    expect(observer.onNext).toHaveBeenCalledTimes(0);
    expect(observer.onComplete).toHaveBeenCalledTimes(0);
  });
});

describe("ofValue", () => {
  test("completes with the value when subscribed", () => {
    const result = pipe(ofValue(1), toArray());
    expect(result).toEqual([1]);
  });
});

test("onComplete", () => {
  const scheduler = createVirtualTimeSchedulerResource();
  const observer = createMockObserver();
  const cb = jest.fn();

  pipe(empty(), onComplete(cb), observe(observer), subscribe(scheduler));
  scheduler.run();

  expect(observer.onComplete).toHaveBeenCalledWith(undefined);
  expect(cb).toHaveBeenCalledWith(undefined);
});

describe("onError", () => {
  test("when completed with error", () => {
    const scheduler = createVirtualTimeSchedulerResource();
    const observer = createMockObserver();
    const cause = new Error();
    const cb = jest.fn();

    pipe(throws(cause), onError(cb), observe(observer), subscribe(scheduler));
    scheduler.run();

    expect(observer.onComplete).toHaveBeenCalledWith({ cause });
    expect(cb).toHaveBeenCalledWith(cause);
  });

  test("when completed without error", () => {
    const scheduler = createVirtualTimeSchedulerResource();
    const observer = createMockObserver();
    const cb = jest.fn();

    pipe(empty(), onError(cb), observe(observer), subscribe(scheduler));
    scheduler.run();

    expect(observer.onComplete).toHaveBeenCalledTimes(1);
    expect(cb).toHaveBeenCalledTimes(0);
  });
});

test("onNext", () => {
  const scheduler = createVirtualTimeSchedulerResource();
  const observer = createMockObserver();
  const cb = jest.fn();

  pipe(ofValue(1), onNext(cb), observe(observer), subscribe(scheduler));
  scheduler.run();

  expect(observer.onNext).toHaveBeenCalledWith(1);
  expect(cb).toHaveBeenCalledWith(1);
});

describe("repeat", () => {
  test("repeats the observable n times", () => {
    const result = pipe(ofValue(1), repeat(3), toArray());
    expect(result).toEqual([1, 1, 1]);
  });

  test("when the repeat functions throws throws", () => {
    const error = new Error();
    expect(() =>
      pipe(
        ofValue(1),
        repeat(_ => {
          throw error;
        }),
        toArray(),
      ),
    ).toThrow(error);
  });
});

test("scan", () => {
  const observer = createMockObserver();
  const cause = new Error();
  const src = concat(fromArray([1, 2, 3]), throws(cause));

  expect(() =>
    pipe(
      src,
      scan(
        (acc, x) => acc + x,
        () => 0,
      ),
      observe(observer),
      toArray(),
    ),
  ).toThrow(cause);

  expect(observer.onNext).toHaveBeenNthCalledWith(1, 1);
  expect(observer.onNext).toHaveBeenNthCalledWith(2, 3);
  expect(observer.onNext).toHaveBeenNthCalledWith(3, 6);
  expect(observer.onComplete).toBeCalledWith({ cause });
});

test("switchAll", () => {
  const cb = jest.fn();
  const innerObservable = fromArray([1, 2]);
  const cause = new Error();
  const src = fromArray([innerObservable, innerObservable, throws(cause)], 1);

  expect(() => pipe(src, switchAll(), onNext(cb), toArray())).toThrow(cause);

  expect(cb).toBeCalledTimes(4);
  expect(cb).toHaveBeenNthCalledWith(1, 1);
  expect(cb).toHaveBeenNthCalledWith(2, 2);
  expect(cb).toHaveBeenNthCalledWith(3, 1);
  expect(cb).toHaveBeenNthCalledWith(4, 2);
});

describe("takeLast", () => {
  test("publishes the last n values when completed", () => {
    const src = fromArray([1, 2, 3, 4]);
    const result = pipe(src, takeLast(3), toArray());
    expect(result).toEqual([2, 3, 4]);
  });

  test("immediately completes with an error if completed with an error", () => {
    const observer = createMockObserver();
    const cause = new Error();
    const src = merge(fromArray([1, 2, 3, 4], 4), throws(cause, 2));

    expect(() =>
      pipe(
        src,
        takeLast(3),
        observe(observer),
        toArray(() => createVirtualTimeSchedulerResource()),
      ),
    ).toThrow(cause);
    expect(observer.onNext).toHaveBeenCalledTimes(0);
  });
});

test("takeWhile", () => {
  const result = pipe(
    generate(
      x => x + 1,
      () => 0,
    ),
    takeWhile(x => x < 3),
    toArray(),
  );
  expect(result).toEqual([0, 1, 2]);
});

describe("throttle", () => {
  test("first", () => {
    const result = pipe(
      generate(
        x => x + 1,
        () => 0,
        1,
      ),
      takeFirst(100),
      throttle(50, ThrottleMode.First),
      toArray(() => createVirtualTimeSchedulerResource(1)),
    );

    expect(result).toEqual([0, 49, 99]);
  });

  test("last", () => {
    const result = pipe(
      generate(
        x => x + 1,
        () => 0,
        1,
      ),
      takeFirst(200),
      throttle(50, ThrottleMode.Last),
      toArray(() => createVirtualTimeSchedulerResource(1)),
    );

    expect(result).toEqual([49, 99, 149, 199]);
  });

  test("interval", () => {
    const result = pipe(
      generate(
        x => x + 1,
        () => 0,
        1,
      ),
      takeFirst(200),
      throttle(75, ThrottleMode.Interval),
      toArray(() => createVirtualTimeSchedulerResource(1)),
    );

    expect(result).toEqual([0, 74, 149, 199]);
  });
});

describe("throws", () => {
  test("completes with an exception when subscribed", () => {
    const scheduler = createVirtualTimeSchedulerResource();
    const observer = createMockObserver();
    const cause = new Error();

    pipe(throws(cause), observe(observer), subscribe(scheduler));
    scheduler.run();

    expect(observer.onNext).toBeCalledTimes(0);
    expect(observer.onComplete).toBeCalledWith({ cause });
  });
});

describe("timeout", () => {
  test("throws when a timeout occurs", () => {
    expect(() =>
      pipe(
        ofValue(1, 2),
        timeout(1),
        toArray(() => createVirtualTimeSchedulerResource(2)),
      ),
    ).toThrow();
  });

  test("when timeout is greater than observed time", () => {
    const result = pipe(
      ofValue(1, 2),
      timeout(3),
      toArray(() => createVirtualTimeSchedulerResource(2)),
    );
    expect(result).toEqual([1]);
  });
});

describe("toIterable", () => {
  test("iterate using a for of loop", () => {
    const iterable = pipe(
      fromArray([1, 2, 3, 4]),
      map(x => x + 1),
      toIterable(),
    );
    const acc = [];
    for (const v of iterable) {
      acc.push(v);
    }
    expect(acc).toEqual([2, 3, 4, 5]);
  });

  test("rethrows an error when the source throws", () => {
    const error = new Error();
    const iterable = pipe(throws(error), toIterable());

    expect(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty
      for (const _ of iterable) {
      }
    }).toThrowError(error);
  });

  test("calling throw, throws the error", () => {
    const error = new Error();
    const iterator = pipe(fromArray([1, 2, 3, 4]), toIterable())[
      Symbol.iterator
    ]();

    expect(() => (iterator as any).throw(error)).toThrowError(error);
  });

  test("calling throw without an error returns done.", () => {
    const result = (pipe(fromArray([1, 2, 3, 4]), toIterable())[
      Symbol.iterator
    ]() as any).throw();

    expect(result.done).toBeTruthy();
  });

  test("calling return, returns done", () => {
    const result = (pipe(fromArray([1, 2, 3, 4]), toIterable())[
      Symbol.iterator
    ]() as any).return();

    expect(result.done).toBeTruthy();
  });
});

describe("toPromise", () => {
  test("when the observable produces no values", () => {
    const promise = pipe(empty(), toPromise(promiseScheduler));

    return expect(promise).rejects.toThrow();
  });
});

test("withLatestFrom", () => {
  const cause = new Error();

  const otherObservable = concat(
    fromScheduledValues([0, 1], [0, 2], [3, 3]),
    throws(cause),
  );

  const observable = fromScheduledValues(
    [0, 1],
    [0, 2],
    [0, 3],
    [3, 1],
    [0, 2],
    [0, 3],
    [2, 4],
  );

  const cb = jest.fn();

  expect(() =>
    pipe(
      observable,
      withLatestFrom(otherObservable, (a, b) => [a, b]),
      onNext(cb),
      toArray(createVirtualTimeSchedulerResource),
    ),
  ).toThrow(cause);

  expect(cb).toHaveBeenNthCalledWith(1, [1, 2]);
  expect(cb).toHaveBeenNthCalledWith(2, [2, 2]);
  expect(cb).toHaveBeenNthCalledWith(3, [3, 2]);
  expect(cb).toHaveBeenNthCalledWith(4, [1, 3]);
  expect(cb).toHaveBeenNthCalledWith(5, [2, 3]);
  expect(cb).toHaveBeenNthCalledWith(6, [3, 3]);
});

test("share", () => {
  const scheduler = createVirtualTimeSchedulerResource();

  const replayed = pipe(
    concat(fromScheduledValues([0, 0], [0, 1], [0, 2]), empty(2)),
    share(scheduler, 1),
  );
  const replayedSubscription = subscribe(scheduler)(replayed);

  const liftedObserver = createMockObserver();
  let liftedSubscription = disposed;
  scheduler.schedule(
    {
      run: _ => {
        liftedSubscription = pipe(
          replayed,
          observe(liftedObserver),
          subscribe(scheduler),
        );
      },
    },
    1,
  );

  const anotherLiftedSubscriptionObserver = createMockObserver();
  let anotherLiftedSubscription = disposed;
  scheduler.schedule(
    {
      run: _ => {
        replayedSubscription.dispose();
        liftedSubscription.dispose();

        anotherLiftedSubscription = pipe(
          replayed,
          observe(anotherLiftedSubscriptionObserver),
          subscribe(scheduler),
        );
      },
    },
    3,
  );

  scheduler.run();

  anotherLiftedSubscription.dispose();

  expect(liftedObserver.onNext).toBeCalledTimes(1);
  expect(liftedObserver.onNext).toBeCalledWith(2);
  expect(liftedObserver.onComplete).toBeCalledTimes(1);

  expect(anotherLiftedSubscriptionObserver.onNext).toBeCalledTimes(3);
  expect(anotherLiftedSubscriptionObserver.onComplete).toBeCalledTimes(1);
});
