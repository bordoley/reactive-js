/// <reference types="./Streamable.test.d.ts" />

var __addDisposableResource = (this && this.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources = (this && this.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
import { Array_push } from "../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectTrue, test, testModule, } from "../../__internal__/testing.js";
import * as Dictionary from "../../collections/Dictionary.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../collections/ReadonlyObjectMap.js";
import { DictionaryLike_get, keySet, } from "../../collections.js";
import { sequence } from "../../computations.js";
import { CacheLike_get, DispatcherLike_complete, SchedulerLike_schedule, StreamableLike_stream, VirtualTimeSchedulerLike_run, } from "../../concurrent.js";
import * as EventSource from "../../events/EventSource.js";
import { bind, bindMethod, invoke, none, pipe, pipeSome, returns, tuple, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import { DisposableLike_dispose, DropLatestBackpressureStrategy, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../utils.js";
import * as Observable from "../Observable.js";
import * as Streamable from "../Streamable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";
testModule("Streamable", describe("animationGroup", test("blocking mode", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 }), false);
        const stream = Streamable.animationGroup({
            a: Observable.keyFrame(500),
        }, { mode: "blocking" })[StreamableLike_stream](vts);
        pipe(stream, keySet(Dictionary.keys), invoke("has", "a"), expectTrue);
        let result = 0;
        pipeSome(stream[DictionaryLike_get]("a"), EventSource.addEventHandler(ev => {
            result = ev;
        }));
        stream[QueueableLike_enqueue](none);
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectEquals(1));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), test("queueing mode", () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_2, VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 }), false);
        const stream = Streamable.animationGroup({
            a: Observable.keyFrame(500),
        }, { mode: "queueing" })[StreamableLike_stream](vts);
        pipe(stream, keySet(Dictionary.keys), invoke("has", "a"), expectTrue);
        let result = 0;
        pipeSome(stream[DictionaryLike_get]("a"), EventSource.addEventHandler(ev => {
            result = ev;
        }));
        stream[QueueableLike_enqueue](none);
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectEquals(1));
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
}), test("switching mode", () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_3, VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 }), false);
        const stream = Streamable.animationGroup({
            a: Observable.keyFrame(500),
        }, { mode: "switching" })[StreamableLike_stream](vts);
        pipe(stream, keySet(Dictionary.keys), invoke("has", "a"), expectTrue);
        let result = 0;
        pipeSome(stream[DictionaryLike_get]("a"), EventSource.addEventHandler(ev => {
            result = ev;
        }));
        stream[QueueableLike_enqueue](none);
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectEquals(1));
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
})), describe("inMemoryCache", test("it publishes none on subscribe when the key is missing", () => {
    const env_4 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_4, VirtualTimeScheduler.create(), false);
        const cache = Streamable.inMemoryCache({ capacity: 1 })[StreamableLike_stream](vts);
        const result = [];
        pipe([
            tuple(2, () => {
                pipe(cache[CacheLike_get]("abc"), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
            }),
        ], ReadonlyArray.forEach(([time, f]) => {
            vts[SchedulerLike_schedule](f, { delay: time });
        }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([none]));
    }
    catch (e_4) {
        env_4.error = e_4;
        env_4.hasError = true;
    }
    finally {
        __disposeResources(env_4);
    }
}), test("explicitly deleting a key", () => {
    const env_5 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_5, VirtualTimeScheduler.create(), false);
        const cache = Streamable.inMemoryCache({ capacity: 1 })[StreamableLike_stream](vts);
        const result = [];
        pipe([
            tuple(0, () => {
                cache[QueueableLike_enqueue]({ abc: _ => 1 });
            }),
            tuple(1, () => {
                cache[QueueableLike_enqueue]({ abc: _ => none });
            }),
            tuple(2, () => {
                pipe(cache[CacheLike_get]("abc"), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
            }),
            tuple(3, () => {
                cache[QueueableLike_enqueue]({ abc: _ => 2 });
            }),
            tuple(4, () => {
                cache[QueueableLike_enqueue]({ abc: _ => none });
            }),
        ], ReadonlyArray.forEach(([time, f]) => {
            vts[SchedulerLike_schedule](f, { delay: time });
        }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([none, 2, none]));
    }
    catch (e_5) {
        env_5.error = e_5;
        env_5.hasError = true;
    }
    finally {
        __disposeResources(env_5);
    }
}), test("integration test", () => {
    const env_6 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_6, VirtualTimeScheduler.create(), false);
        const cache = Streamable.inMemoryCache({ capacity: 1 })[StreamableLike_stream](vts);
        const result1 = [];
        const abcSubscription1 = pipe(cache[CacheLike_get]("abc"), Observable.forEach(bindMethod(result1, Array_push)), Observable.subscribe(vts));
        const result2 = [];
        let abcSubscription2 = Disposable.disposed;
        const result3 = [];
        let abcSubscription3 = Disposable.disposed;
        pipe([
            tuple(1, () => {
                cache[QueueableLike_enqueue]({ abc: _ => 1 });
            }),
            tuple(2, () => {
                abcSubscription2 = pipe(cache[CacheLike_get]("abc"), Observable.forEach(bindMethod(result2, Array_push)), Observable.subscribe(vts));
            }),
            tuple(3, () => {
                cache[QueueableLike_enqueue]({ abc: _ => 2 });
            }),
            tuple(4, () => {
                abcSubscription2[DisposableLike_dispose]();
            }),
            tuple(4, () => {
                cache[QueueableLike_enqueue]({ abc: _ => 2, def: _ => 0 });
            }),
            tuple(5, () => {
                cache[QueueableLike_enqueue]({ abc: _ => 3 });
            }),
            tuple(6, () => {
                abcSubscription1[DisposableLike_dispose]();
            }),
            tuple(7, () => {
                cache[QueueableLike_enqueue]({ abc: _ => 3 });
            }),
            tuple(8, () => {
                abcSubscription3 = pipe(cache[CacheLike_get]("abc"), Observable.forEach(bindMethod(result3, Array_push)), Observable.subscribe(vts));
            }),
            tuple(9, () => {
                abcSubscription3[DisposableLike_dispose]();
            }),
            tuple(10, () => {
                cache[QueueableLike_enqueue]({
                    abc: _ => 3,
                    def: _ => 1,
                    ghi: _ => 2,
                });
            }),
        ], ReadonlyArray.forEach(([time, f]) => {
            vts[SchedulerLike_schedule](f, { delay: time });
        }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result1, expectArrayEquals([none, 1, 2]));
        pipe(result2, expectArrayEquals([1]));
        pipe(result3, expectArrayEquals([3]));
    }
    catch (e_6) {
        env_6.error = e_6;
        env_6.hasError = true;
    }
    finally {
        __disposeResources(env_6);
    }
})), describe("persistentCache", test("integration test", () => {
    const env_7 = { stack: [], error: void 0, hasError: false };
    try {
        const store = {
            abc: 1,
            def: 2,
        };
        const persistentStore = {
            load: (_) => pipe({ ...store }, Observable.fromValue()),
            store: (updates) => pipe(Observable.empty(), Observable.onSubscribe(() => {
                pipe(updates, ReadonlyObjectMap.forEach((v, k) => {
                    store[k] = v;
                }));
            })),
        };
        const vts = __addDisposableResource(env_7, VirtualTimeScheduler.create(), false);
        const cache = Streamable.persistentCache(persistentStore, {
            capacity: 1,
        })[StreamableLike_stream](vts);
        const result1 = [];
        pipe(cache[CacheLike_get]("abc"), Observable.forEach(bindMethod(result1, Array_push)), Observable.subscribe(vts));
        pipe([
            [
                2,
                () => {
                    cache[QueueableLike_enqueue]({ abc: _ => 4, hgi: _ => 6 });
                },
            ],
        ], ReadonlyArray.forEach(([time, f]) => {
            vts[SchedulerLike_schedule](f, { delay: time });
        }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result1, expectArrayEquals([1, 4]));
    }
    catch (e_7) {
        env_7.error = e_7;
        env_7.hasError = true;
    }
    finally {
        __disposeResources(env_7);
    }
})), describe("stateStore", test("stateStore", () => {
    const env_8 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_8, VirtualTimeScheduler.create(), false);
        const streamable = Streamable.stateStore(returns(1));
        const stateStream = streamable[StreamableLike_stream](vts, {
            capacity: 20,
            backpressureStrategy: DropLatestBackpressureStrategy,
        });
        pipe(stateStream[QueueableLike_capacity], expectEquals(20));
        pipe(stateStream[QueueableLike_backpressureStrategy], expectEquals(DropLatestBackpressureStrategy));
        stateStream[QueueableLike_enqueue](returns(2));
        stateStream[QueueableLike_enqueue](returns(3));
        stateStream[DispatcherLike_complete]();
        let result = [];
        pipe(stateStream, Observable.forEach(bind(Array.prototype[Array_push], result)), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([1, 2, 3]));
    }
    catch (e_8) {
        env_8.error = e_8;
        env_8.hasError = true;
    }
    finally {
        __disposeResources(env_8);
    }
})), describe("syncState", test("without throttling", () => {
    const vts = VirtualTimeScheduler.create();
    const stream = pipe(Streamable.stateStore(returns(-1)), Streamable.syncState(state => pipe(sequence(Observable.generate)(state + 10), Observable.map(x => (_) => x), Observable.takeFirst({ count: 2 })), (oldState, newState) => newState !== oldState
        ? Observable.empty({ delay: 0 })
        : Observable.empty({ delay: 0 })), invoke(StreamableLike_stream, vts));
    pipe((x) => x + 2, Observable.fromValue({ delay: 5 }), Observable.enqueue(stream), Observable.subscribe(vts));
    const result = [];
    pipe(stream, Observable.forEach(bind(Array.prototype[Array_push], result)), Observable.subscribe(vts));
    vts[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([-1, 9, 11, 10]));
}), test("with throttling", () => {
    const vts = VirtualTimeScheduler.create();
    let updateCnt = 0;
    const stream = pipe(Streamable.stateStore(returns(-1)), Streamable.syncState(_state => Observable.empty({ delay: 1 }), (oldState, newState) => {
        updateCnt++;
        return newState !== oldState
            ? Observable.empty({ delay: 1 })
            : Observable.empty({ delay: 1 });
    }, { throttleDuration: 20 }), invoke(StreamableLike_stream, vts));
    pipe((x) => x + 2, Observable.fromValue({ delay: 1 }), Observable.repeat(19), Observable.enqueue(stream), Observable.subscribe(vts));
    vts[VirtualTimeSchedulerLike_run]();
    pipe(updateCnt, expectEquals(2));
})));
((_) => { })(Streamable);
