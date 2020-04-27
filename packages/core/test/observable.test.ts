import { test, describe, testAsync } from "../src/testing";
import { createDisposable, disposed, DisposableLike } from "../src/disposable";
import { Option } from "../src/option";
import {
  pipe,
  returns,
  increment,
  alwaysFalse,
  alwaysTrue,
} from "../src/functions";
import {
  AbstractHostScheduler,
  SchedulerLike,
  schedule,
  createVirtualTimeScheduler,
} from "../src/scheduler";
import { AbstractSubscriber } from "../src/internal/observable/subscriber";
import {
  buffer,
  combineLatest,
  concat,
  concatAll,
  contains,
  createObservable,
  createSubject,
  distinctUntilChanged,
  empty,
  every,
  forEach,
  fromArray,
  fromIterable,
  fromPromise,
  fromScheduledValues,
  generate,
  ignoreElements,
  keep,
  map,
  merge,
  never,
  none,
  ofValue,
  onNotify,
  repeat,
  scan,
  scanAsync,
  ScanAsyncMode,
  share,
  subscribe,
  switchAll,
  takeFirst,
  takeLast,
  takeWhile,
  throttle,
  ThrottleMode,
  throwIfEmpty,
  throws,
  timeout,
  toArray,
  toPromise,
  toValue,
  withLatestFrom,
  zip,
} from "../src/observable";

class MockSubscriber<T> extends AbstractSubscriber<T> {
  notify = jest.fn();
}

const callbackAndDispose = (
  callback: () => void,
  disposable: DisposableLike,
) => {
  callback();
  disposable.dispose();
};

// A simple scheduler for testing promise functions where a VTS cannot be used
class PromiseTestScheduler extends AbstractHostScheduler {
  get now(): number {
    return Date.now();
  }

  scheduleDelayed(
    _callback: (shouldYield: Option<() => boolean>) => void,
    _delay: number,
  ): DisposableLike {
    return disposed;
  }

  scheduleImmediate(
    callback: (shouldYield: Option<() => boolean>) => void,
  ): DisposableLike {
    const disposable = createDisposable(() => clearImmediate(immediate));
    const immediate = setImmediate(callbackAndDispose, callback, disposable);
    return disposable;
  }
}

const promiseScheduler: SchedulerLike = new PromiseTestScheduler();

export const tests = describe(
  "observable",
  test("buffer", () => {
    pipe(
      fromScheduledValues(
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [1, 1],
        [1, 2],
        [1, 3],
        [8, 4],
      ),
      buffer({ duration: 4, maxBufferSize: 3 }),
      toArray(),
      expect,
    ).toEqual([[1, 2, 3], [4, 1, 2], [3], [4]]);
  }),

  test("combineLatest", () => {
    pipe(
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
      toArray(),
      expect,
    ).toEqual([
      [3, 2],
      [5, 2],
      [5, 4],
      [7, 4],
    ]);
  }),

  describe(
    "concat",
    test("concats the observable and completes", () => {
      const result = pipe(
        concat(ofValue(1), ofValue(2), ofValue(3)),
        toArray(),
      );
      expect(result).toEqual([1, 2, 3]);
    }),

    test("completes immediate when one observable completes with an error", () => {
      const cause = new Error();
      const cb = jest.fn();

      expect(() =>
        pipe(
          concat(
            ofValue(1),
            ofValue(2),
            throws(() => cause),
            ofValue(3),
          ),
          onNotify(cb),
          ignoreElements(),
          toArray(),
        ),
      ).toThrow(cause);

      expect(cb).toHaveBeenCalledTimes(2);
      expect(cb).toHaveBeenNthCalledWith(1, 1);
      expect(cb).toHaveBeenNthCalledWith(2, 2);
    }),
  ),

  describe(
    "concatAll",
    test("concats observables", () => {
      const observableA = fromArray([1, 2]);
      const observableB = fromArray([3, 4]);
      const src = fromArray([
        observableA,
        observableB,
        observableB,
        observableA,
      ]);
      const result = pipe(src, concatAll(), toArray());
      expect(result).toEqual([1, 2, 3, 4, 3, 4, 1, 2]);
    }),

    test("immediately completes when completed with an error", () => {
      const cb = jest.fn();
      const cause = new Error();
      const observableA = fromArray([1, 2]);
      const observableB = fromArray([3, 4]);
      const src = concat(
        ofValue(observableA),
        throws(() => cause),
        ofValue(observableB),
      );

      expect(() =>
        pipe(src, concatAll(), onNotify(cb), ignoreElements(), toArray()),
      ).toThrow(cause);
      expect(cb).toHaveBeenNthCalledWith(1, 1);
      expect(cb).toHaveBeenNthCalledWith(2, 2);
      expect(cb).toHaveBeenCalledTimes(2);
    }),

    test("immediately completes when inner observable completes with an error", () => {
      const cb = jest.fn();
      const cause = new Error();
      const observableA = concat(
        fromArray([1, 2]),
        throws(() => cause),
      );
      const observableB = fromArray([3, 4]);
      const src = fromArray([observableA, observableB]);

      expect(() =>
        pipe(src, concatAll(), onNotify(cb), ignoreElements(), toArray()),
      ).toThrow(cause);
      expect(cb).toHaveBeenNthCalledWith(1, 1);
      expect(cb).toHaveBeenNthCalledWith(2, 2);
      expect(cb).toHaveBeenCalledTimes(2);
    }),
  ),

  test("contains", () => {
    pipe(empty<number>(), contains(1), toValue(), expect).toBeFalsy();

    pipe(
      generate(increment, returns<number>(0)),
      contains(1),
      toValue(),
      expect,
    ).toBeTruthy();

    pipe(ofValue(0), contains(1), toValue(), expect).toBeFalsy();
  }),

  describe(
    "createObservable",
    test("completes the subscriber if onSubscribe throws", () => {
      const cause = new Error();
      const observable = createObservable(_ => {
        throw cause;
      });
      expect(() => pipe(observable, toValue())).toThrow(cause);
    }),

    test("when subscriber throws", () => {
      const cause = new Error();

      class ThrowingSubscriber<T> extends AbstractSubscriber<T> {
        notify(_: T) {
          throw cause;
        }
      }

      const observable = createObservable(subscriber => {
        subscriber.dispatch(1);
      });

      const scheduler = createVirtualTimeScheduler();
      const subscriber = new ThrowingSubscriber(scheduler);
      const onDispose = jest.fn();
      subscriber.add(error => onDispose(error));

      observable.subscribe(subscriber);
      scheduler.run();
      expect(onDispose).toBeCalledWith({ cause });
    }),
  ),

  describe(
    "createSubject",
    test("when subject is completed", () => {
      const scheduler = createVirtualTimeScheduler(1);
      const subject = createSubject(2);

      pipe(
        scheduler,
        schedule(() => {
          subject.dispatch(1);
          subject.dispatch(2);
          subject.dispatch(3);
          subject.dispose();

          const subscriber = new MockSubscriber(scheduler);
          const onDispose = jest.fn();
          subscriber.add(e => onDispose(e));

          subject.subscribe(subscriber);
          expect(subject.subscriberCount).toEqual(0);
          expect(subscriber.notify).toHaveBeenNthCalledWith(1, 2);
          expect(subscriber.notify).toHaveBeenNthCalledWith(2, 3);
          expect(onDispose).toHaveBeenCalled();
        }),
      );

      scheduler.run();
    }),

    test("when subject is not completed", () => {
      const scheduler = createVirtualTimeScheduler();
      const subject = createSubject(2);

      pipe(
        scheduler,
        schedule(() => {
          subject.dispatch(1);
          subject.dispatch(2);
          subject.dispatch(3);

          const subscriber = new MockSubscriber(scheduler);
          const onDispose = jest.fn();
          subscriber.add(e => onDispose(e));

          subject.subscribe(subscriber);

          pipe(
            ofValue(none),
            onNotify(_ => {
              subject.dispatch(4);
              subject.dispose();
            }),
            subscribe(scheduler),
          );

          expect(subject.subscriberCount).toEqual(1);
          expect(subscriber.notify).toHaveBeenNthCalledWith(1, 2);
          expect(subscriber.notify).toHaveBeenNthCalledWith(2, 3);
          expect(subscriber.notify).toHaveBeenNthCalledWith(3, 4);
          expect(onDispose).toHaveBeenCalled();
        }),
      );

      scheduler.run();
    }),

    test("subscribe and dispose the subscription remove the observer", () => {
      const scheduler = createVirtualTimeScheduler();
      const subject = createSubject(2);

      pipe(
        scheduler,
        schedule(() => {
          subject.dispatch(1);
          subject.dispatch(2);
          subject.dispatch(3);
        }),
      );

      const subscriber = new MockSubscriber(scheduler);

      subject.subscribe(subscriber);
      expect(subject.subscriberCount).toEqual(1);

      subscriber.dispose();
      expect(subject.subscriberCount).toEqual(0);

      scheduler.run();
      expect(subscriber.isDisposed).toBeTruthy();
      expect(subscriber.notify).toHaveBeenCalledTimes(0);
    }),

    test("disposed subject ignores notifications", () => {
      const scheduler = createVirtualTimeScheduler();
      const subject = createSubject(2);

      const onDispose = jest.fn();
      const subscriber = new MockSubscriber(scheduler).add(e => onDispose(e));
      subject.subscribe(subscriber);

      expect(subject.isDisposed).toBeFalsy();
      subject.dispose();
      expect(subject.isDisposed).toBeTruthy();

      pipe(
        scheduler,
        schedule(() => {
          subject.dispatch(1);
          subject.dispose();
        }),
      );

      scheduler.run();

      expect(subscriber.notify).toHaveBeenCalledTimes(0);
      expect(onDispose).toHaveBeenCalledTimes(1);
    }),

    test("disposes subscriber if disposed", () => {
      const scheduler = createVirtualTimeScheduler();
      const subject = createSubject(2);
      const subscriber = new MockSubscriber(scheduler);

      subject.dispose();
      subject.subscribe(subscriber);
      scheduler.run();

      expect(subscriber.isDisposed).toBeTruthy();
    }),
  ),

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
          throws(() => cause),
        ),
        distinctUntilChanged(),
        onNotify(cb),
        ignoreElements(),
        toArray(),
      ),
    ).toThrow(cause);
    expect(cb).toHaveBeenNthCalledWith(1, 1);
    expect(cb).toHaveBeenNthCalledWith(2, 2);
    expect(cb).toHaveBeenNthCalledWith(3, 3);
    expect(cb).toHaveBeenCalledTimes(3);
  }),

  describe(
    "empty",
    test("produces no values and completes", () => {
      pipe(empty(), toArray(), expect).toEqual([]);
    }),
  ),

  test("every", () => {
    pipe(empty(), every(alwaysFalse), toValue(), expect).toBeTruthy();

    pipe(
      fromArray([1, 2, 3]),
      every(alwaysTrue),
      toValue(),
      expect,
    ).toBeTruthy();
    pipe(
      fromArray([1, 2, 3]),
      every(alwaysFalse),
      toValue(),
      expect,
    ).toBeFalsy();
  }),

  test("forEach", () => {
    const result: number[] = [];
    pipe(
      fromArray([1, 2, 3]),
      forEach(x => result.push(x)),
    );
    expect(result).toEqual([1, 2, 3]);
  }),

  describe(
    "fromArray",
    test("with no delay", () => {
      const src = [1, 2, 3, 4, 5, 6];
      const observable = fromArray(src);
      pipe(observable, toArray(), expect).toEqual(src);
    }),

    test("with delay", () => {
      const observable = fromArray([1, 2, 3, 4, 5, 6], { delay: 3 });
      const scheduler = createVirtualTimeScheduler(1);

      const cb = jest.fn();

      pipe(
        observable,
        map(v => [scheduler.now, v]),
        onNotify(x => cb(x)),
        subscribe(scheduler),
      );
      scheduler.run();

      expect(cb).toHaveBeenNthCalledWith(1, [3, 1]);
      expect(cb).toHaveBeenNthCalledWith(2, [6, 2]);
      expect(cb).toHaveBeenNthCalledWith(3, [9, 3]);
      expect(cb).toHaveBeenNthCalledWith(4, [12, 4]);
      expect(cb).toHaveBeenNthCalledWith(5, [15, 5]);
      expect(cb).toHaveBeenNthCalledWith(6, [18, 6]);
    }),
  ),

  describe(
    "fromIterable",
    test("with no delay when scheduler does not request yields", () => {
      const src = [1, 2, 3, 4, 5, 6];
      const observable = fromIterable(src);
      pipe(observable, toArray(), expect).toEqual(src);
    }),

    test("with no delay when scheduler requests yields", () => {
      const src = [1, 2, 3, 4, 5, 6];
      const observable = fromIterable(src);
      pipe(observable, toArray(), expect).toEqual(src);
    }),

    test("with delay", () => {
      const observable = fromIterable([1, 2, 3, 4, 5, 6], 3);
      const scheduler = createVirtualTimeScheduler(1);

      const cb = jest.fn();

      pipe(
        observable,
        map(v => [scheduler.now, v]),
        onNotify(x => cb(x)),
        subscribe(scheduler),
      );
      scheduler.run();

      expect(cb).toHaveBeenNthCalledWith(1, [3, 1]);
      expect(cb).toHaveBeenNthCalledWith(2, [6, 2]);
      expect(cb).toHaveBeenNthCalledWith(3, [9, 3]);
      expect(cb).toHaveBeenNthCalledWith(4, [12, 4]);
      expect(cb).toHaveBeenNthCalledWith(5, [15, 5]);
      expect(cb).toHaveBeenNthCalledWith(6, [18, 6]);
    }),
  ),

  describe(
    "fromPromise",
    testAsync("when the promise resolves", async () => {
      const factory = () => Promise.resolve(1);
      const result = await pipe(
        factory,
        fromPromise,
        toPromise(promiseScheduler),
      );

      expect(result).toEqual(1);
    }),

    test("when the promise throws", () => {
      const cause = new Error();
      const factory = () => Promise.reject(cause);
      const promise = pipe(fromPromise(factory), toPromise(promiseScheduler));

      return expect(promise).rejects.toThrow(cause);
    }),
  ),

  test("fromScheduledValues", () => {
    const scheduler = createVirtualTimeScheduler(1);
    const observable = fromScheduledValues(
      [0, 1],
      [0, 1],
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    );

    const cb = jest.fn();

    pipe(
      observable,
      map(v => [scheduler.now, v]),
      onNotify(x => cb(x)),
      subscribe(scheduler),
    );
    scheduler.run();

    expect(cb).toHaveBeenNthCalledWith(1, [0, 1]);
    expect(cb).toHaveBeenNthCalledWith(2, [0, 1]);
    expect(cb).toHaveBeenNthCalledWith(3, [0, 1]);
    expect(cb).toHaveBeenNthCalledWith(4, [1, 2]);
    expect(cb).toHaveBeenNthCalledWith(5, [3, 3]);
    expect(cb).toHaveBeenNthCalledWith(6, [6, 4]);
  }),

  describe(
    "generate",
    test("without delay", () => {
      pipe(
        generate(increment, returns<number>(1)),
        takeFirst(5),
        toArray(),
        expect,
      ).toEqual([1, 2, 3, 4, 5]);
    }),

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
          onNotify(cb),
          ignoreElements(),
          toArray(),
        ),
      ).toThrow(cause);
      expect(cb).toHaveBeenCalledTimes(3);
      expect(cb).toHaveBeenNthCalledWith(1, 1);
      expect(cb).toHaveBeenNthCalledWith(2, 2);
      expect(cb).toHaveBeenNthCalledWith(3, 3);
    }),

    test("with delay", () => {
      const scheduler = createVirtualTimeScheduler(1);

      const cb = jest.fn();

      pipe(
        generate(increment, returns<number>(1), 5),
        map(x => [scheduler.now, x]),
        takeFirst(5),
        onNotify(cb),
        subscribe(scheduler),
      );
      scheduler.run();

      expect(cb).toHaveBeenCalledTimes(5);
      expect(cb).toHaveBeenNthCalledWith(1, [5, 1]);
      expect(cb).toHaveBeenNthCalledWith(2, [10, 2]);
      expect(cb).toHaveBeenNthCalledWith(3, [15, 3]);
      expect(cb).toHaveBeenNthCalledWith(4, [20, 4]);
      expect(cb).toHaveBeenNthCalledWith(5, [25, 5]);
    }),

    test("with delay, generate throws", () => {
      const scheduler = createVirtualTimeScheduler(1);
      const cb = jest.fn();
      const cause = new Error();

      const generator = (i: number) => {
        if (i > 2) {
          throw cause;
        }

        return i + 1;
      };

      const onDispose = jest.fn();

      pipe(
        generate(generator, () => 1, 5),
        map(x => [scheduler.now, x]),
        takeFirst(5),
        onNotify(x => cb(x)),
        subscribe(scheduler),
      ).add(e => onDispose(e));
      scheduler.run();

      expect(cb).toHaveBeenCalledTimes(3);
      expect(cb).toHaveBeenNthCalledWith(1, [5, 1]);
      expect(cb).toHaveBeenNthCalledWith(2, [10, 2]);
      expect(cb).toHaveBeenNthCalledWith(3, [15, 3]);
      expect(onDispose).toBeCalledWith({ cause });
    }),
  ),

  test("ignoreElements", () => {
    const scheduler = createVirtualTimeScheduler(1);
    const cb = jest.fn();
    const cause = new Error();
    const src = concat(
      fromArray([1, 2, 3]),
      throws(() => cause),
    );

    const onDispose = jest.fn();
    pipe(
      src,
      ignoreElements(),
      onNotify(x => cb(x)),
      subscribe(scheduler),
    ).add(e => onDispose(e));
    scheduler.run();

    expect(cb).toBeCalledTimes(0);
    expect(onDispose).toBeCalledWith({ cause });
  }),

  test("keep", () => {
    const scheduler = createVirtualTimeScheduler(1);
    const cb = jest.fn();
    const cause = new Error();
    const src = concat(
      fromArray([1, 2, 3]),
      throws(() => cause),
    );

    const onDispose = jest.fn();
    pipe(
      src,
      keep(x => x % 2 === 0),
      onNotify(x => cb(x)),
      subscribe(scheduler),
    ).add(e => onDispose(e));
    scheduler.run();

    expect(cb).toHaveBeenNthCalledWith(1, 2);
    expect(cb).toBeCalledTimes(1);
    expect(onDispose).toBeCalledWith({ cause });
  }),

  test("merge", () => {
    const scheduler = createVirtualTimeScheduler(1);
    const cb = jest.fn();
    const cause = new Error();

    const onDispose = jest.fn();
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
        throws(() => cause, 10),
      ),
      onNotify(x => cb(x)),
      subscribe(scheduler),
    ).add(e => onDispose(e));
    scheduler.run();

    expect(cb).toHaveBeenNthCalledWith(1, 3);
    expect(cb).toHaveBeenNthCalledWith(2, 2);
    expect(cb).toHaveBeenNthCalledWith(3, 5);
    expect(cb).toHaveBeenNthCalledWith(4, 4);
    expect(cb).toHaveBeenNthCalledWith(5, 7);
    expect(onDispose).toBeCalledWith({ cause });
  }),

  describe(
    "never",
    test("produces no values", () => {
      const cb = jest.fn();

      expect(() =>
        pipe(
          never(),
          onNotify(x => cb(x)),
          toArray(),
        ),
      ).toThrow();

      expect(cb).toHaveBeenCalledTimes(0);
    }),
  ),

  test("none", () => {
    expect(pipe(empty(), none(alwaysFalse), toValue())).toBeTruthy();
    expect(pipe(fromArray([1, 2, 3]), none(alwaysTrue), toValue())).toBeFalsy();
    expect(
      pipe(fromArray([1, 2, 3]), none(alwaysFalse), toValue()),
    ).toBeTruthy();
  }),

  describe(
    "ofValue",
    test("completes with the value when subscribed", () => {
      pipe(ofValue(1), toArray(), expect).toEqual([1]);
    }),
  ),

  test("onNotify", () => {
    const scheduler = createVirtualTimeScheduler();
    const cb = jest.fn();

    pipe(
      ofValue(1),
      onNotify(x => cb(x)),
      subscribe(scheduler),
    );
    scheduler.run();

    expect(cb).toHaveBeenCalledWith(1);
  }),

  describe(
    "repeat",
    test("repeats the observable n times", () => {
      pipe(ofValue(1), repeat(3), toArray(), expect).toEqual([1, 1, 1]);
    }),

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
    }),
  ),

  test("scan", () => {
    const cb = jest.fn();
    const cause = new Error();
    const src = concat(
      fromArray([1, 2, 3]),
      throws(() => cause),
    );

    expect(() =>
      pipe(
        src,
        scan(
          (acc, x) => acc + x,
          () => 0,
        ),
        onNotify(x => cb(x)),
        toArray(),
      ),
    ).toThrow(cause);

    expect(cb).toHaveBeenNthCalledWith(1, 1);
    expect(cb).toHaveBeenNthCalledWith(2, 3);
    expect(cb).toHaveBeenNthCalledWith(3, 6);
  }),

  describe(
    "scanAsync",
    test("acc function produces multiple results in queueing mode, fast src, slow acc", () => {
      const scheduler = createVirtualTimeScheduler();
      const result: number[] = [];
      pipe(
        fromArray([1, 2, 3]),
        scanAsync(
          (_acc, x) => fromArray([1 * x, 2 * x, 3 * x], { delay: 4 }),
          () => 0,
          ScanAsyncMode.Queuing,
        ),
        onNotify(x => {
          result.push(x);
        }),
        subscribe(scheduler),
      );

      scheduler.run();

      expect(result).toEqual([1, 2, 3, 2, 4, 6, 3, 6, 9]);
    }),

    test("acc function produces multiple results in queueing mode, slow src, fast acc", () => {
      const scheduler = createVirtualTimeScheduler();
      const result: number[] = [];
      pipe(
        fromArray([1, 2, 3], { delay: 4 }),
        scanAsync(
          (_acc, x) => fromArray([1 * x, 2 * x, 3 * x]),
          () => 0,
          ScanAsyncMode.Queuing,
        ),
        onNotify(x => {
          result.push(x);
        }),
        subscribe(scheduler),
      );

      scheduler.run();

      expect(result).toEqual([1, 2, 3, 2, 4, 6, 3, 6, 9]);
    }),

    test("acc function produces multiple results in switching mode, fast src, slow acc", () => {
      const scheduler = createVirtualTimeScheduler();
      const result: number[] = [];

      pipe(
        fromArray([1, 2, 3]),
        scanAsync(
          (_acc, x) => fromArray([1 * x, 2 * x, 3 * x], { delay: 4 }),
          () => 0,
          ScanAsyncMode.Switching,
        ),
        onNotify(x => {
          result.push(x);
        }),
        subscribe(scheduler),
      );

      scheduler.run();

      expect(result).toEqual([3, 6, 9]);
    }),

    test("acc function produces multiple results in switching mode, slow src, fast acc", () => {
      const scheduler = createVirtualTimeScheduler();
      const result: number[] = [];

      pipe(
        fromArray([1, 2, 3], { delay: 4 }),
        scanAsync(
          (_acc, x) => fromArray([1 * x, 2 * x, 3 * x]),
          () => 0,
          ScanAsyncMode.Switching,
        ),
        onNotify(x => {
          result.push(x);
        }),
        subscribe(scheduler),
      );

      scheduler.run();

      expect(result).toEqual([1, 2, 3, 2, 4, 6, 3, 6, 9]);
    }),
  ),

  test("share", () => {
    const scheduler = createVirtualTimeScheduler();

    const replayed = pipe(
      concat(fromScheduledValues([0, 0], [0, 1], [0, 2]), empty(2)),
      share(scheduler, 1),
    );
    const replayedSubscription = subscribe(scheduler)(replayed);

    const liftedCb = jest.fn();
    let liftedSubscription = disposed;

    const onDispose1 = jest.fn();
    pipe(
      ofValue(none, 1),
      onNotify(_ => {
        liftedSubscription = pipe(
          replayed,
          onNotify(x => liftedCb(x)),
          subscribe(scheduler),
        );
      }),
      subscribe(scheduler),
    ).add(e => onDispose1(e));

    const anotherLiftedCb = jest.fn();
    let anotherLiftedSubscription = disposed;

    const onDispose2 = jest.fn();
    pipe(
      ofValue(none, 3),
      onNotify(_ => {
        replayedSubscription.dispose();
        liftedSubscription.dispose();

        anotherLiftedSubscription = pipe(
          replayed,
          onNotify(anotherLiftedCb),
          subscribe(scheduler),
        );
      }),
      subscribe(scheduler),
    ).add(e => onDispose2(e));

    scheduler.run();

    anotherLiftedSubscription.dispose();

    expect(liftedCb).toBeCalledTimes(1);
    expect(liftedCb).toBeCalledWith(2);
    expect(onDispose1).toBeCalledTimes(1);

    expect(anotherLiftedCb).toBeCalledTimes(3);
    expect(onDispose2).toBeCalledTimes(1);
  }),

  test("switchAll", () => {
    const cb = jest.fn();
    const innerObservable = fromArray([1, 2]);
    const cause = new Error();
    const src = fromArray(
      [innerObservable, innerObservable, throws(() => cause)],
      {
        delay: 1,
      },
    );

    expect(() => pipe(src, switchAll(), onNotify(cb), toArray())).toThrow(
      cause,
    );

    expect(cb).toBeCalledTimes(4);
    expect(cb).toHaveBeenNthCalledWith(1, 1);
    expect(cb).toHaveBeenNthCalledWith(2, 2);
    expect(cb).toHaveBeenNthCalledWith(3, 1);
    expect(cb).toHaveBeenNthCalledWith(4, 2);
  }),

  describe(
    "takeLast",
    test("publishes the last n values when completed", () => {
      const src = fromArray([1, 2, 3, 4]);
      pipe(src, takeLast(3), toArray(), expect).toEqual([2, 3, 4]);
    }),

    test("immediately completes with an error if completed with an error", () => {
      const cb = jest.fn();
      const cause = new Error();
      const src = merge(
        fromArray([1, 2, 3, 4], { delay: 4 }),
        throws(() => cause, 2),
      );

      expect(() =>
        pipe(
          src,
          takeLast(3),
          onNotify(x => cb(x)),
          toArray(),
        ),
      ).toThrow(cause);
      expect(cb).toHaveBeenCalledTimes(0);
    }),
  ),

  test("takeWhile", () => {
    pipe(
      generate(increment, returns<number>(0)),
      takeWhile(x => x < 3),
      toArray(),
      expect,
    ).toEqual([0, 1, 2]);
  }),

  describe(
    "throttle",
    test("first", () => {
      const result = pipe(
        generate(increment, returns<number>(0), 1),
        takeFirst(100),
        throttle(50, ThrottleMode.First),
        toArray(),
      );

      expect(result).toEqual([0, 49]);
    }),

    test("last", () => {
      const result = pipe(
        generate(increment, returns<number>(0), 1),
        takeFirst(200),
        throttle(50, ThrottleMode.Last),
        toArray(),
      );

      expect(result).toEqual([49, 99, 149, 199]);
    }),

    test("interval", () => {
      const result = pipe(
        generate(increment, returns<number>(0), 1),
        takeFirst(200),
        throttle(75, ThrottleMode.Interval),
        toArray(),
      );

      expect(result).toEqual([0, 74, 149, 199]);
    }),
  ),

  test("throwIfEmpty", () => {
    expect(() =>
      pipe(
        empty(),
        throwIfEmpty(() => new Error()),
        toValue(),
      ),
    ).toThrow();

    pipe(
      ofValue(1),
      throwIfEmpty(() => new Error()),
      toValue(),
      expect,
    ).toEqual(1);
  }),

  describe(
    "throws",
    test("completes with an exception when subscribed", () => {
      const scheduler = createVirtualTimeScheduler();
      const cb = jest.fn();
      const cause = new Error();

      const onDispose = jest.fn();
      pipe(
        throws(() => cause),
        onNotify(x => cb(x)),
        subscribe(scheduler),
      ).add(e => onDispose(e));
      scheduler.run();

      expect(cb).toBeCalledTimes(0);
      expect(onDispose).toBeCalledWith({ cause });
    }),
  ),

  describe(
    "timeout",
    test("throws when a timeout occurs", () => {
      expect(() => pipe(ofValue(1, 2), timeout(1), toArray())).toThrow();
    }),

    test("when timeout is greater than observed time", () => {
      const result = pipe(ofValue(1, 2), timeout(3), toArray());
      expect(result).toEqual([1]);
    }),
  ),

  describe(
    "toPromise",
    test("when the observable produces no values", () => {
      const promise = pipe(empty(), toPromise(promiseScheduler));

      return expect(promise).rejects.toThrow();
    }),
  ),

  test("withLatestFrom", () => {
    const cause = new Error();

    const otherObservable = concat(
      fromScheduledValues([0, 1], [1, 2], [1, 3]),
      throws(() => cause, 1),
    );

    const observable = fromScheduledValues(
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
    );

    const cb = jest.fn();

    expect(() =>
      pipe(
        observable,
        withLatestFrom(otherObservable, (a, b) => [a, b]),
        onNotify(cb),
        toArray(),
      ),
    ).toThrow(cause);

    expect(cb).toHaveBeenCalledTimes(3);
    expect(cb).toHaveBeenNthCalledWith(1, [1, 1]);
    expect(cb).toHaveBeenNthCalledWith(2, [2, 2]);
    expect(cb).toHaveBeenNthCalledWith(3, [3, 3]);
  }),

  describe(
    "zip",
    test("zip non-delayed sources", () => {
      const result = pipe(
        zip(
          [
            fromArray([1, 2]),
            pipe(fromArray([1, 2]), map(increment)),
            generate(increment, returns<number>(3)),
          ],
          (x, y, z) => [x, y, z],
        ),
        toArray(),
      );

      expect(result).toEqual([
        [1, 2, 3],
        [2, 3, 4],
      ]);
    }),

    test("zip with-delayed sources", () => {
      const result = pipe(
        zip(
          [
            fromArray([1, 2], { delay: 1 }),
            fromIterable([2, 3]),
            fromArray([3, 4, 5], { delay: 1 }),
          ],
          (x, y, z) => [x, y, z],
        ),
        toArray(),
      );

      expect(result).toEqual([
        [1, 2, 3],
        [2, 3, 4],
      ]);
    }),
  ),
);
