import { dispose, disposed } from "../disposable";
import { defer, pipe, returns } from "../functions";
import {
  ObservableLike,
  fromArray,
  fromValue,
  never,
  onNotify,
  subscribe,
  toRunnable,
} from "../observable";
import { createReactiveCache, getOrSet } from "../reactiveCache";
import { forEach } from "../runnable";
import { createVirtualTimeScheduler } from "../scheduler";
import {
  describe,
  expectEquals,
  expectNone,
  expectSome,
  expectTrue,
  test,
} from "../testing";

export const tests = describe(
  "reactive-cache",
  test("lifecycle integration", () => {
    // Use microticks to test yielding
    const scheduler = createVirtualTimeScheduler({ maxMicroTaskTicks: 1 });
    const cache = createReactiveCache<string>(scheduler, scheduler, {
      maxCount: 2,
    });

    let bSubscription = disposed;
    let cSubscription = disposed;
    let dSubscription = disposed;
    let eSubscription = disposed;

    pipe(
      [
        () => {
          cache.set("a", fromValue()("a"));
          cache.set("b", fromValue()("b"));
          cache.set("c", fromValue()("c"));
        },
        () => {
          // Max size is 2. A is never subscribed to so it is garbage collected.
          pipe(cache.get("a"), expectNone);

          const entryB = cache.get("b");
          pipe(entryB, expectSome);
          bSubscription = pipe(
            entryB as ObservableLike<string>,
            subscribe(scheduler),
          );

          const entryC = cache.get("c");
          pipe(entryC, expectSome);

          cSubscription = pipe(
            entryC as ObservableLike<string>,
            subscribe(scheduler),
          );

          const entryD = cache.set("d", fromValue({ delay: 3 })("d"));
          dSubscription = pipe(entryD, subscribe(scheduler));
        },
        () => {
          // Assert that the cache maintain all active values
          // given the active subscription, despite the capacity
          // exceeding the cache's max size.
          pipe(cache.get("b"), expectSome);
          pipe(cache.get("c"), expectSome);
          pipe(cache.get("d"), expectSome);

          pipe(cSubscription, dispose());
          pipe(dSubscription, dispose());

          const entryE = cache.set("e", fromValue()("e"));
          eSubscription = pipe(entryE, subscribe(scheduler));
        },
        () => {
          // c and d were disposed so ensure they return undefined
          pipe(cache.get("b"), expectSome);
          pipe(cache.get("c"), expectNone);
          pipe(cache.get("d"), expectNone);
          pipe(cache.get("e"), expectSome);
        },
        defer(cache, dispose()),
        () => {
          // Ensure that disposing the cache disposes all outstanding subscriptions.
          // Note: check these here as these subscriptions require scheduling by the
          // cache to dispose (not done synchronously).
          pipe(bSubscription.isDisposed, expectTrue);
          pipe(eSubscription.isDisposed, expectTrue);

          pipe(cache.get("b"), expectNone);
          pipe(cache.get("c"), expectNone);
          pipe(cache.get("d"), expectNone);
          pipe(cache.get("e"), expectNone);
        },
      ],
      fromArray({ delay: 1 }),
      toRunnable({ schedulerFactory: returns(scheduler) }),
      forEach(x => x()),
    );
  }),
  test("subscribing to disposed value", () => {
    const scheduler = createVirtualTimeScheduler();
    const cache = createReactiveCache<string>(scheduler, scheduler, {
      maxCount: 1,
    });

    let observable = never<string>();
    let value = "";

    pipe(
      [
        () => {
          observable = getOrSet(cache, "a", fromValue()("a"));
          getOrSet(cache, "b", fromValue()("b"));
        },
        () => {
          pipe(
            observable,
            onNotify(x => {
              value = x;
            }),
            subscribe(scheduler),
          );
        },
        () => {
          pipe(value, expectEquals(""));
        },
      ],
      fromArray(),
      toRunnable({ schedulerFactory: returns(scheduler) }),
      forEach(x => x()),
    );
  }),

  test("getOrSet", () => {
    const scheduler = createVirtualTimeScheduler();
    const cache = createReactiveCache<string>(scheduler, scheduler, {
      maxCount: 2,
    });

    let value = "";
    pipe(
      [
        () => {
          let obs = getOrSet<string>(cache, "a", fromValue()("a"));
          obs = getOrSet(cache, "a", fromValue()("b"));

          pipe(
            obs,
            onNotify(x => {
              value = x;
            }),
            subscribe(scheduler),
          );
        },
        () => {
          pipe(value, expectEquals("a"));
        },
      ],
      fromArray({ delay: 1 }),
      toRunnable({ schedulerFactory: returns(scheduler) }),
      forEach(x => x()),
    );
  }),
);
