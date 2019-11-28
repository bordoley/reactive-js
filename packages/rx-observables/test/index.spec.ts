import { disposed } from "@reactive-js/disposable";
import { create as createEventLoopScheduler } from "@reactive-js/eventloop-scheduler";
import { connect, pipe } from "@reactive-js/rx-observable";
import { ObserverLike } from "@reactive-js/rx-observer";
import { create as createVirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";

import {
  combineLatest,
  concat,
  concatAll,
  distinctUntilChanged,
  empty,
  fromArray,
  fromPromiseFactory,
  fromScheduledValues,
  generate,
  ignoreElements,
  keep,
  map,
  merge,
  never,
  observe,
  ofValue,
  onComplete,
  onError,
  onNext,
  scan,
  shareReplayLast,
  switchAll,
  take,
  takeLast,
  throws,
  toPromise,
  withLatestFrom,
} from "../src/index";

const createMockObserver = <T>(): ObserverLike<T> => ({
  next: jest.fn(),
  complete: jest.fn(),
});

test("combineLatest", () => {
  const scheduler = createVirtualTimeScheduler(1);
  const observer = createMockObserver();

  connect(
    pipe(
      combineLatest(
        pipe(
          generate(i => i + 2, 1, { delay: 2 }),
          take(3),
        ),
        pipe(
          generate(i => i + 2, 0, { delay: 3 }),
          take(2),
        ),
      ),
      observe(observer),
    ),
    scheduler,
  );
  scheduler.run();

  expect(observer.next).toHaveBeenNthCalledWith(1, [3, 2]);
  expect(observer.next).toHaveBeenNthCalledWith(2, [5, 2]);
  expect(observer.next).toHaveBeenNthCalledWith(3, [5, 4]);
  expect(observer.next).toHaveBeenNthCalledWith(4, [7, 4]);
  expect(observer.complete).toBeCalledWith(undefined);
});

describe("concat", () => {
  test("concats the observable and completes", () => {
    const scheduler = createVirtualTimeScheduler();

    const observer = createMockObserver();
    connect(
      pipe(concat(ofValue(1), ofValue(2), ofValue(3)), observe(observer)),
      scheduler,
    );
    scheduler.run();

    expect(observer.next).toHaveBeenNthCalledWith(1, 1);
    expect(observer.next).toHaveBeenNthCalledWith(2, 2);
    expect(observer.next).toHaveBeenNthCalledWith(3, 3);
    expect(observer.complete).toHaveBeenCalledTimes(1);
  });

  test("completes immediate when one observable completes with an error", () => {
    const scheduler = createVirtualTimeScheduler();
    const err = new Error();
    const observer = createMockObserver();

    connect(
      pipe(
        concat(ofValue(1), ofValue(2), throws(err), ofValue(3)),
        observe(observer),
      ),
      scheduler,
    );
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(2);
    expect(observer.next).toHaveBeenNthCalledWith(1, 1);
    expect(observer.next).toHaveBeenNthCalledWith(2, 2);

    expect(observer.complete).toHaveBeenCalledTimes(1);
    expect(observer.complete).toHaveBeenCalledWith(err);
  });
});

describe("concatAll", () => {
  test("concats observables", () => {
    const scheduler = createVirtualTimeScheduler();
    const observer = createMockObserver();
    const observableA = fromArray([1, 2]);
    const observableB = fromArray([3, 4]);
    const src = fromArray([observableA, observableB, observableB, observableA]);

    connect(pipe(src, concatAll(), observe(observer)), scheduler);
    scheduler.run();

    expect(observer.next).toHaveBeenNthCalledWith(1, 1);
    expect(observer.next).toHaveBeenNthCalledWith(2, 2);
    expect(observer.next).toHaveBeenNthCalledWith(3, 3);
    expect(observer.next).toHaveBeenNthCalledWith(4, 4);
    expect(observer.next).toHaveBeenNthCalledWith(5, 3);
    expect(observer.next).toHaveBeenNthCalledWith(6, 4);
    expect(observer.next).toHaveBeenNthCalledWith(7, 1);
    expect(observer.next).toHaveBeenNthCalledWith(8, 2);
    expect(observer.next).toHaveBeenCalledTimes(8);
    expect(observer.complete).toHaveBeenCalled();
  });

  test("immediately completes when completed with an error", () => {
    const scheduler = createVirtualTimeScheduler();
    const observer = createMockObserver();
    const error = new Error();
    const observableA = fromArray([1, 2]);
    const observableB = fromArray([3, 4]);
    const src = concat(
      ofValue(observableA),
      throws(error),
      ofValue(observableB),
    );

    connect(pipe(src, concatAll(), observe(observer)), scheduler);
    scheduler.run();

    expect(observer.next).toHaveBeenNthCalledWith(1, 1);
    expect(observer.next).toHaveBeenNthCalledWith(2, 2);
    expect(observer.next).toHaveBeenCalledTimes(2);
    expect(observer.complete).toHaveBeenCalledWith(error);
  });

  test("immediately completes when inner observable completes with an error", () => {
    const scheduler = createVirtualTimeScheduler();
    const observer = createMockObserver();
    const error = new Error();
    const observableA = concat(fromArray([1, 2]), throws(error));
    const observableB = fromArray([3, 4]);
    const src = fromArray([observableA, observableB]);

    connect(pipe(src, concatAll(), observe(observer)), scheduler);
    scheduler.run();

    expect(observer.next).toHaveBeenNthCalledWith(1, 1);
    expect(observer.next).toHaveBeenNthCalledWith(2, 2);
    expect(observer.next).toHaveBeenCalledTimes(2);
    expect(observer.complete).toHaveBeenCalledWith(error);
  });
});

test("distinctUntilChanged", () => {
  const scheduler = createVirtualTimeScheduler();
  const observer = createMockObserver();
  const error = new Error();
  const src = pipe(
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
      throws(error),
    ),
    distinctUntilChanged(),
  );

  connect(pipe(src, observe(observer)), scheduler);
  scheduler.run();

  expect(observer.next).toHaveBeenNthCalledWith(1, 1);
  expect(observer.next).toHaveBeenNthCalledWith(2, 2);
  expect(observer.next).toHaveBeenNthCalledWith(3, 3);
  expect(observer.next).toHaveBeenCalledTimes(3);
  expect(observer.complete).toBeCalledWith(error);
});

describe("empty", () => {
  test("produces no values and completes", () => {
    const scheduler = createVirtualTimeScheduler();
    const observer = createMockObserver();

    connect(pipe(empty(), observe(observer)), scheduler);
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(0);
    expect(observer.complete).toHaveBeenCalledTimes(1);
    expect(observer.complete).toHaveBeenCalledWith(undefined);
  });
});

describe("fromArray", () => {
  test("with no delay", () => {
    const observable = fromArray([1, 2, 3, 4, 5, 6]);
    const scheduler = createVirtualTimeScheduler(1);
    const observer = createMockObserver();

    connect(pipe(observable, observe(observer)), scheduler);
    scheduler.run();

    expect(observer.next).toHaveBeenNthCalledWith(1, 1);
    expect(observer.next).toHaveBeenNthCalledWith(2, 2);
    expect(observer.next).toHaveBeenNthCalledWith(3, 3);
    expect(observer.next).toHaveBeenNthCalledWith(4, 4);
    expect(observer.next).toHaveBeenNthCalledWith(5, 5);
    expect(observer.next).toHaveBeenNthCalledWith(6, 6);
  });

  test("with delay", () => {
    const observable = fromArray([1, 2, 3, 4, 5, 6], { delay: 3 });
    const scheduler = createVirtualTimeScheduler(1);
    const observer = createMockObserver();

    connect(
      pipe(
        observable,
        map(v => [scheduler.now, v]),
        observe(observer),
      ),
      scheduler,
    );
    scheduler.run();

    expect(observer.next).toHaveBeenNthCalledWith(1, [3, 1]);
    expect(observer.next).toHaveBeenNthCalledWith(2, [6, 2]);
    expect(observer.next).toHaveBeenNthCalledWith(3, [9, 3]);
    expect(observer.next).toHaveBeenNthCalledWith(4, [12, 4]);
    expect(observer.next).toHaveBeenNthCalledWith(5, [15, 5]);
    expect(observer.next).toHaveBeenNthCalledWith(6, [18, 6]);
  });
});

describe("fromPromiseFactory", () => {
  test("when the promise resolves", async () => {
    const scheduler = createEventLoopScheduler();
    const factory = () => Promise.resolve(1);
    const result = await toPromise(fromPromiseFactory(factory), scheduler);
    expect(result).toEqual(1);
  });

  test("when the promise throws", () => {
    const scheduler = createEventLoopScheduler();
    const error = new Error();
    const factory = () => Promise.reject(error);
    const promise = toPromise(fromPromiseFactory(factory), scheduler);
    return expect(promise).rejects.toThrow(error);
  });
});

test("fromScheduledValues", () => {
  const scheduler = createVirtualTimeScheduler(1);
  const observer = createMockObserver();
  const observable = fromScheduledValues(
    [0, undefined, 1],
    [0, undefined, 1],
    [0, undefined, 1],
    [1, undefined, 2],
    [2, undefined, 3],
    [3, undefined, 4],
  );

  connect(
    pipe(
      observable,
      map(v => [scheduler.now, v]),
      observe(observer),
    ),
    scheduler,
  );
  scheduler.run();

  expect(observer.next).toHaveBeenNthCalledWith(1, [0, 1]);
  expect(observer.next).toHaveBeenNthCalledWith(2, [0, 1]);
  expect(observer.next).toHaveBeenNthCalledWith(3, [0, 1]);
  expect(observer.next).toHaveBeenNthCalledWith(4, [1, 2]);
  expect(observer.next).toHaveBeenNthCalledWith(5, [3, 3]);
  expect(observer.next).toHaveBeenNthCalledWith(6, [6, 4]);
});

describe("generate", () => {
  test("without delay", () => {
    const scheduler = createVirtualTimeScheduler(1);
    const observer = createMockObserver();

    connect(
      pipe(
        generate(i => i + 1, 0),
        take(5),
        observe(observer),
      ),
      scheduler,
    );
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(5);
    expect(observer.next).toHaveBeenNthCalledWith(1, 1);
    expect(observer.next).toHaveBeenNthCalledWith(2, 2);
    expect(observer.next).toHaveBeenNthCalledWith(3, 3);
    expect(observer.next).toHaveBeenNthCalledWith(4, 4);
    expect(observer.next).toHaveBeenNthCalledWith(5, 5);
  });

  test("without delay, generate throws", () => {
    const scheduler = createVirtualTimeScheduler(1);
    const observer = createMockObserver();
    const error = new Error();

    const generator = (i: number) => {
      if (i > 2) {
        throw error;
      }

      return i + 1;
    };

    connect(
      pipe(generate(generator, 0), take(5), observe(observer)),
      scheduler,
    );
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(3);
    expect(observer.next).toHaveBeenNthCalledWith(1, 1);
    expect(observer.next).toHaveBeenNthCalledWith(2, 2);
    expect(observer.next).toHaveBeenNthCalledWith(3, 3);
    expect(observer.complete).toBeCalledWith(error);
  });

  test("with delay", () => {
    const scheduler = createVirtualTimeScheduler(1);
    const observer = createMockObserver();

    connect(
      pipe(
        generate(i => i + 1, 0, { delay: 5 }),
        map(x => [scheduler.now, x]),
        take(5),
        observe(observer),
      ),
      scheduler,
    );
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(5);
    expect(observer.next).toHaveBeenNthCalledWith(1, [5, 1]);
    expect(observer.next).toHaveBeenNthCalledWith(2, [10, 2]);
    expect(observer.next).toHaveBeenNthCalledWith(3, [15, 3]);
    expect(observer.next).toHaveBeenNthCalledWith(4, [20, 4]);
    expect(observer.next).toHaveBeenNthCalledWith(5, [25, 5]);
  });

  test("with delay, generate throws", () => {
    const scheduler = createVirtualTimeScheduler(1);
    const observer = createMockObserver();
    const error = new Error();

    const generator = (i: number) => {
      if (i > 2) {
        throw error;
      }

      return i + 1;
    };

    connect(
      pipe(
        generate(generator, 0, { delay: 5 }),
        map(x => [scheduler.now, x]),
        take(5),
        observe(observer),
      ),
      scheduler,
    );
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(3);
    expect(observer.next).toHaveBeenNthCalledWith(1, [5, 1]);
    expect(observer.next).toHaveBeenNthCalledWith(2, [10, 2]);
    expect(observer.next).toHaveBeenNthCalledWith(3, [15, 3]);
    expect(observer.complete).toBeCalledWith(error);
  });
});

test("ignoreElements", () => {
  const scheduler = createVirtualTimeScheduler(1);
  const observer = createMockObserver();
  const error = new Error();
  const src = concat(fromArray([1, 2, 3]), throws(error));

  connect(pipe(src, ignoreElements(), observe(observer)), scheduler);
  scheduler.run();

  expect(observer.next).toBeCalledTimes(0);
  expect(observer.complete).toBeCalledWith(error);
});

test("keep", () => {
  const scheduler = createVirtualTimeScheduler(1);
  const observer = createMockObserver();
  const error = new Error();
  const src = concat(fromArray([1, 2, 3]), throws(error));

  connect(
    pipe(
      src,
      keep(x => x % 2 === 0),
      observe(observer),
    ),
    scheduler,
  );
  scheduler.run();

  expect(observer.next).toHaveBeenNthCalledWith(1, 2);
  expect(observer.next).toBeCalledTimes(1);
  expect(observer.complete).toBeCalledWith(error);
});

test("merge", () => {
  const scheduler = createVirtualTimeScheduler(1);
  const observer = createMockObserver();
  const error = new Error();

  connect(
    pipe(
      merge(
        pipe(
          generate(i => i + 2, 1, { delay: 2 }),
          take(3),
        ),
        pipe(
          generate(i => i + 2, 0, { delay: 3 }),
          take(2),
        ),
        throws(error, { delay: 10 }),
      ),
      observe(observer),
    ),
    scheduler,
  );
  scheduler.run();

  expect(observer.next).toHaveBeenNthCalledWith(1, 3);
  expect(observer.next).toHaveBeenNthCalledWith(2, 2);
  expect(observer.next).toHaveBeenNthCalledWith(3, 5);
  expect(observer.next).toHaveBeenNthCalledWith(4, 4);
  expect(observer.next).toHaveBeenNthCalledWith(5, 7);
  expect(observer.complete).toBeCalledWith(error);
});

describe("never", () => {
  test("produces no values and doesn't complete", () => {
    const scheduler = createVirtualTimeScheduler();
    const observer = createMockObserver();

    connect(pipe(never(), observe(observer)), scheduler);
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(0);
    expect(observer.complete).toHaveBeenCalledTimes(0);
  });
});

describe("ofValue", () => {
  test("completes with the value when subscribed", () => {
    const scheduler = createVirtualTimeScheduler();
    const observer = createMockObserver();

    connect(pipe(ofValue(1), observe(observer)), scheduler);
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(1);
    expect(observer.next).toBeCalledWith(1);
    expect(observer.complete).toBeCalledWith(undefined);
  });
});

test("onComplete", () => {
  const scheduler = createVirtualTimeScheduler();
  const observer = createMockObserver();
  const cb = jest.fn();

  connect(pipe(empty(), onComplete(cb), observe(observer)), scheduler);
  scheduler.run();

  expect(observer.complete).toHaveBeenCalledWith(undefined);
  expect(cb).toHaveBeenCalledWith(undefined);
});

describe("onError", () => {
  test("when completed with error", () => {
    const scheduler = createVirtualTimeScheduler();
    const observer = createMockObserver();
    const error = new Error();
    const cb = jest.fn();

    connect(pipe(throws(error), onError(cb), observe(observer)), scheduler);
    scheduler.run();

    expect(observer.complete).toHaveBeenCalledWith(error);
    expect(cb).toHaveBeenCalledWith(error);
  });

  test("when completed without error", () => {
    const scheduler = createVirtualTimeScheduler();
    const observer = createMockObserver();
    const cb = jest.fn();

    connect(pipe(empty(), onError(cb), observe(observer)), scheduler);
    scheduler.run();

    expect(observer.complete).toHaveBeenCalledTimes(1);
    expect(cb).toHaveBeenCalledTimes(0);
  });
});

test("onNext", () => {
  const scheduler = createVirtualTimeScheduler();
  const observer = createMockObserver();
  const cb = jest.fn();

  connect(pipe(ofValue(1), onNext(cb), observe(observer)), scheduler);
  scheduler.run();

  expect(observer.next).toHaveBeenCalledWith(1);
  expect(cb).toHaveBeenCalledWith(1);
});

describe("throws", () => {
  test("completes with an exception when subscribed", () => {
    const scheduler = createVirtualTimeScheduler();
    const observer = createMockObserver();
    const err = new Error();

    connect(pipe(throws(err), observe(observer)), scheduler);
    scheduler.run();

    expect(observer.next).toBeCalledTimes(0);
    expect(observer.complete).toBeCalledWith(err);
  });
});

test("shareReplayLast", () => {
  const scheduler = createVirtualTimeScheduler();

  const replayed = pipe(
    concat(fromScheduledValues([, , 0], [, , 1], [, , 2]), empty({ delay: 2 })),
    shareReplayLast({scheduler}),
  );
  const replayedSubscription = connect(replayed, scheduler);

  const liftedObserver = createMockObserver();
  let liftedSubscription = disposed;
  scheduler.schedule(
    _ => {
      liftedSubscription = connect(
        pipe(replayed, observe(liftedObserver)),
        scheduler,
      );
    },
    { delay: 1 },
  );

  const anotherLiftedSubscriptionObserver = createMockObserver();
  let anotherLiftedSubscription = disposed;
  scheduler.schedule(
    _ => {
      replayedSubscription.dispose();
      liftedSubscription.dispose();

      anotherLiftedSubscription = connect(
        pipe(replayed, observe(anotherLiftedSubscriptionObserver)),
        scheduler,
      );
    },
    { delay: 3 },
  );

  scheduler.run();

  anotherLiftedSubscription.dispose();

  expect(liftedObserver.next).toBeCalledTimes(1);
  expect(liftedObserver.next).toBeCalledWith(2);
  expect(liftedObserver.complete).toBeCalledTimes(1);

  expect(anotherLiftedSubscriptionObserver.next).toBeCalledTimes(3);
  expect(anotherLiftedSubscriptionObserver.complete).toBeCalledTimes(1);
});

test("scan", () => {
  const scheduler = createVirtualTimeScheduler();
  const observer = createMockObserver();
  const error = new Error();
  const src = concat(fromArray([1, 2, 3]), throws(error));

  connect(
    pipe(
      src,
      scan((acc, x) => acc + x, 0),
      observe(observer),
    ),
    scheduler,
  );
  scheduler.run();

  expect(observer.next).toHaveBeenNthCalledWith(1, 1);
  expect(observer.next).toHaveBeenNthCalledWith(2, 3);
  expect(observer.next).toHaveBeenNthCalledWith(3, 6);
  expect(observer.complete).toBeCalledWith(error);
});

test("switchAll", () => {
  const scheduler = createVirtualTimeScheduler();
  const observer = createMockObserver();

  const innerObservable = fromArray([1, 2]);
  const error = new Error();
  const src = fromArray([innerObservable, innerObservable, throws(error)], {
    delay: 1,
  });

  connect(pipe(src, switchAll(), observe(observer)), scheduler);
  scheduler.run();

  expect(observer.next).toBeCalledTimes(4);
  expect(observer.next).toHaveBeenNthCalledWith(1, 1);
  expect(observer.next).toHaveBeenNthCalledWith(2, 2);
  expect(observer.next).toHaveBeenNthCalledWith(3, 1);
  expect(observer.next).toHaveBeenNthCalledWith(4, 2);

  expect(observer.complete).toBeCalledTimes(1);
  expect(observer.complete).toBeCalledWith(error);
});

describe("takeLast", () => {
  test("publishes the last n values when completed", () => {
    const scheduler = createVirtualTimeScheduler(2);
    const observer = createMockObserver();
    const src = fromArray([1, 2, 3, 4]);

    connect(pipe(src, takeLast(3), observe(observer)), scheduler);
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(3);
    expect(observer.next).toHaveBeenNthCalledWith(1, 2);
    expect(observer.next).toHaveBeenNthCalledWith(2, 3);
    expect(observer.next).toHaveBeenNthCalledWith(3, 4);
    expect(observer.complete).toBeCalled();
  });

  test("immediately completes with an error if completed with an error", () => {
    const scheduler = createVirtualTimeScheduler();
    const observer = createMockObserver();
    const error = new Error();
    const src = merge(
      fromArray([1, 2, 3, 4], { delay: 4 }),
      throws(error, { delay: 2 }),
    );

    connect(pipe(src, takeLast(3), observe(observer)), scheduler);
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(0);
    expect(observer.complete).toBeCalledWith(error);
  });
});

describe("toPromise", () => {
  test("when the observable produces no values", () => {
    const scheduler = createEventLoopScheduler();
    const promise = toPromise(empty(), scheduler);
    return expect(promise).rejects.toThrow();
  });
});

test("withLatestFrom", () => {
  const scheduler = createVirtualTimeScheduler();
  const error = new Error();

  const otherObservable = concat(
    fromScheduledValues([, , 1], [, , 2], [3, , 3]),
    throws(error),
  );

  const observable = fromScheduledValues(
    [, , 1],
    [, , 2],
    [, , 3],
    [3, , 1],
    [, , 2],
    [, , 3],
    [2, , 4],
  );

  const observer = createMockObserver();

  connect(
    pipe(
      observable,
      withLatestFrom(otherObservable, (a, b) => [a, b]),
      observe(observer),
    ),
    scheduler,
  );
  scheduler.run();

  expect(observer.next).toHaveBeenNthCalledWith(1, [1, 2]);
  expect(observer.next).toHaveBeenNthCalledWith(2, [2, 2]);
  expect(observer.next).toHaveBeenNthCalledWith(3, [3, 2]);
  expect(observer.next).toHaveBeenNthCalledWith(4, [1, 3]);
  expect(observer.next).toHaveBeenNthCalledWith(5, [2, 3]);
  expect(observer.next).toHaveBeenNthCalledWith(6, [3, 3]);
  expect(observer.complete).toBeCalledWith(error);
});
