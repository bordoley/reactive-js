import {
  fromArray,
  subscribe,
  ofValue,
  ObservableLike,
  forEach,
  onNotify,
  never,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { createVirtualTimeScheduler } from "@reactive-js/schedulers";
import { createReactiveCache, getOrSet } from "../src";
import { disposed } from "@reactive-js/disposable";

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
          expect(cache.get("a")).toBeUndefined();

          const entryB = cache.get("b");
          expect(entryB).not.toBeUndefined();
          bSubscription = pipe(
            entryB as ObservableLike<string>,
            subscribe(scheduler),
          );

          const entryC = cache.get("c");
          expect(entryC).not.toBeUndefined();
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
          expect(cache.get("b")).not.toBeUndefined();
          expect(cache.get("c")).not.toBeUndefined();
          expect(cache.get("d")).not.toBeUndefined();

          cSubscription.dispose();
          dSubscription.dispose();

          const entryE = cache.set("e", ofValue("e"));
          eSubscription = pipe(entryE, subscribe(scheduler));
        },
        () => {
          // c and d were disposed so ensure they return undefined
          expect(cache.get("b")).not.toBeUndefined();
          expect(cache.get("c")).toBeUndefined();
          expect(cache.get("d")).toBeUndefined();
          expect(cache.get("e")).not.toBeUndefined();
        },
        () => {
          cache.dispose();
        },
        () => {
          // Ensure that disposing the cache disposes all outstanding subscriptions.
          // Note: check these here as these subscriptions require scheduling by the
          // cache to dispose (not done synchronously).
          expect(bSubscription.isDisposed).toBeTruthy();
          expect(eSubscription.isDisposed).toBeTruthy();

          expect(cache.get("b")).toBeUndefined();
          expect(cache.get("c")).toBeUndefined();
          expect(cache.get("d")).toBeUndefined();
          expect(cache.get("e")).toBeUndefined();
        },
      ],
      { delay: 1 },
    ),
    forEach(
      () => scheduler,
      x => x(),
    ),
  );
});

test("subscribing to disposed value", () => {
  const scheduler = createVirtualTimeScheduler();
  const cache = createReactiveCache<string>(scheduler, scheduler, 1);

  let observable = never<string>();
  let value = "";

  pipe(
    fromArray(
      [
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
          expect(value).toEqual("");
        },
      ]
    ),
    forEach(
      () => scheduler,
      x => x(),
    ),
  );
})

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
          expect(value).toEqual("a");
        },
      ],
      { delay: 1 },
    ),
    forEach(
      () => scheduler,
      x => x(),
    ),
  );
});
