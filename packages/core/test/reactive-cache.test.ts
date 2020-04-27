import {
  test,
  describe,
  expectNone,
  expectSome,
  expectTrue,
  expectToEqual,
} from "../src/testing";
import {
  fromArray,
  subscribe,
  ofValue,
  ObservableLike,
  forEach,
  onNotify,
  never,
} from "../src/observable";
import { pipe } from "../src/pipe";
import { createVirtualTimeScheduler } from "../src/scheduler";
import { createReactiveCache, getOrSet } from "../src/reactive-cache";
import { disposed } from "../src/disposable";

export const tests = describe(
  "reactive-cache",
  test("lifecycle integration", () => {
    // Use microticks to test yielding
    const scheduler = createVirtualTimeScheduler(1);
    const cache = createReactiveCache<string>(scheduler, scheduler, 2);

    let bSubscription = disposed;
    let cSubscription = disposed;
    let dSubscription = disposed;
    let eSubscription = disposed;

    pipe(
      fromArray(
        [
          () => {
            cache.set("a", ofValue("a"));
            cache.set("b", ofValue("b"));
            cache.set("c", ofValue("c"));
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

            const entryD = cache.set("d", ofValue("d", 3));
            dSubscription = pipe(entryD, subscribe(scheduler));
          },
          () => {
            // Assert that the cache maintain all active values
            // given the active subscription, despite the capacity
            // exceeding the cache's max size.
            pipe(cache.get("b"), expectSome);
            pipe(cache.get("c"), expectSome);
            pipe(cache.get("d"), expectSome);

            cSubscription.dispose();
            dSubscription.dispose();

            const entryE = cache.set("e", ofValue("e"));
            eSubscription = pipe(entryE, subscribe(scheduler));
          },
          () => {
            // c and d were disposed so ensure they return undefined
            pipe(cache.get("b"), expectSome);
            pipe(cache.get("c"), expectNone);
            pipe(cache.get("d"), expectNone);
            pipe(cache.get("e"), expectSome);
          },
          () => {
            cache.dispose();
          },
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
        { delay: 1 },
      ),
      forEach(
        x => x(),
        () => scheduler,
      ),
    );
  }),

  test("subscribing to disposed value", () => {
    const scheduler = createVirtualTimeScheduler();
    const cache = createReactiveCache<string>(scheduler, scheduler, 1);

    let observable = never<string>();
    let value = "";

    pipe(
      fromArray([
        () => {
          observable = getOrSet(cache, "a", ofValue("a"));
          getOrSet(cache, "b", ofValue("b"));
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
          pipe(value, expectToEqual(""));
        },
      ]),
      forEach(
        x => x(),
        () => scheduler,
      ),
    );
  }),

  test("getOrSet", () => {
    const scheduler = createVirtualTimeScheduler();
    const cache = createReactiveCache<string>(scheduler, scheduler, 2);

    let value = "";
    pipe(
      fromArray(
        [
          () => {
            let obs = getOrSet(cache, "a", ofValue("a"));
            obs = getOrSet(cache, "a", ofValue("b"));

            pipe(
              obs,
              onNotify(x => {
                value = x;
              }),
              subscribe(scheduler),
            );
          },
          () => {
            pipe(value, expectToEqual("a"));
          },
        ],
        { delay: 1 },
      ),
      forEach(
        x => x(),
        () => scheduler,
      ),
    );
  }),
);
