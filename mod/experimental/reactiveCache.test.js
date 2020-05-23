import { disposed, dispose } from "../disposable.js";
import { pipe, returns } from "../functions.js";
import { fromArray, subscribe, fromValue, toRunnable, onNotify, never, } from "../observable.js";
import { forEach } from "../runnable.js";
import { createVirtualTimeScheduler } from "../scheduler.js";
import { createReactiveCache, getOrSet } from "./reactiveCache.js";
import { test, describe, expectNone, expectSome, expectTrue, expectEquals, } from "./testing.js";
export const tests = describe("reactive-cache", test("lifecycle integration", () => {
    const scheduler = createVirtualTimeScheduler({ maxMicroTaskTicks: 1 });
    const cache = createReactiveCache(scheduler, scheduler, 2);
    let bSubscription = disposed;
    let cSubscription = disposed;
    let dSubscription = disposed;
    let eSubscription = disposed;
    pipe([
        () => {
            cache.set("a", fromValue()("a"));
            cache.set("b", fromValue()("b"));
            cache.set("c", fromValue()("c"));
        },
        () => {
            pipe(cache.get("a"), expectNone);
            const entryB = cache.get("b");
            pipe(entryB, expectSome);
            bSubscription = pipe(entryB, subscribe(scheduler));
            const entryC = cache.get("c");
            pipe(entryC, expectSome);
            cSubscription = pipe(entryC, subscribe(scheduler));
            const entryD = cache.set("d", fromValue({ delay: 3 })("d"));
            dSubscription = pipe(entryD, subscribe(scheduler));
        },
        () => {
            pipe(cache.get("b"), expectSome);
            pipe(cache.get("c"), expectSome);
            pipe(cache.get("d"), expectSome);
            dispose(cSubscription);
            dispose(dSubscription);
            const entryE = cache.set("e", fromValue()("e"));
            eSubscription = pipe(entryE, subscribe(scheduler));
        },
        () => {
            pipe(cache.get("b"), expectSome);
            pipe(cache.get("c"), expectNone);
            pipe(cache.get("d"), expectNone);
            pipe(cache.get("e"), expectSome);
        },
        () => dispose(cache),
        () => {
            pipe(bSubscription.isDisposed, expectTrue);
            pipe(eSubscription.isDisposed, expectTrue);
            pipe(cache.get("b"), expectNone);
            pipe(cache.get("c"), expectNone);
            pipe(cache.get("d"), expectNone);
            pipe(cache.get("e"), expectNone);
        },
    ], fromArray({ delay: 1 }), toRunnable(returns(scheduler)), forEach(x => x()));
}), test("subscribing to disposed value", () => {
    const scheduler = createVirtualTimeScheduler();
    const cache = createReactiveCache(scheduler, scheduler, 1);
    let observable = never();
    let value = "";
    pipe([
        () => {
            observable = getOrSet(cache, "a", fromValue()("a"));
            getOrSet(cache, "b", fromValue()("b"));
        },
        () => {
            pipe(observable, onNotify(x => {
                value = x;
            }), subscribe(scheduler));
        },
        () => {
            pipe(value, expectEquals(""));
        },
    ], fromArray(), toRunnable(returns(scheduler)), forEach(x => x()));
}), test("getOrSet", () => {
    const scheduler = createVirtualTimeScheduler();
    const cache = createReactiveCache(scheduler, scheduler, 2);
    let value = "";
    pipe([
        () => {
            let obs = getOrSet(cache, "a", fromValue()("a"));
            obs = getOrSet(cache, "a", fromValue()("b"));
            pipe(obs, onNotify(x => {
                value = x;
            }), subscribe(scheduler));
        },
        () => {
            pipe(value, expectEquals("a"));
        },
    ], fromArray({ delay: 1 }), toRunnable(returns(scheduler)), forEach(x => x()));
}));
