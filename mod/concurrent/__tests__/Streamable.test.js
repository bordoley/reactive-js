/// <reference types="./Streamable.test.d.ts" />

import { describe, expectArrayEquals, expectEquals, test, testModule, } from "../../__internal__/testing.js";
import { KeyedLike_get } from "../../collections.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../collections/ReadonlyObjectMap.js";
import { DispatcherLike_complete, SchedulerLike_schedule, StreamableLike_stream, VirtualTimeSchedulerLike_run, } from "../../concurrent.js";
import { bind, bindMethod, none, pipe, returns, tuple, } from "../../functions.js";
import { DisposableLike_dispose, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Observable from "../Observable.js";
import * as Streamable from "../Streamable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";
testModule("Streamable", describe("stateStore", test("createStateStore", () => {
    const scheduler = VirtualTimeScheduler.create();
    const streamable = Streamable.createStateStore(returns(1));
    const stateStream = streamable[StreamableLike_stream](scheduler, {
        capacity: 20,
        backpressureStrategy: "drop-latest",
    });
    pipe(stateStream[QueueableLike_capacity], expectEquals(20));
    pipe(stateStream[QueueableLike_backpressureStrategy], expectEquals("drop-latest"));
    stateStream[QueueableLike_enqueue](returns(2));
    stateStream[QueueableLike_enqueue](returns(3));
    stateStream[DispatcherLike_complete]();
    let result = [];
    pipe(stateStream, Observable.forEach(bind(Array.prototype.push, result)), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([1, 2, 3]));
})), describe("createInMemoryCache", test("it publishes none on subscribe when the key is missing", () => {
    const scheduler = VirtualTimeScheduler.create();
    const cache = Streamable.createInMemoryCache({ capacity: 1 })[StreamableLike_stream](scheduler);
    const result = [];
    pipe([
        tuple(2, () => {
            pipe(cache[KeyedLike_get]("abc"), Observable.forEach(bindMethod(result, "push")), Observable.subscribe(scheduler));
        }),
    ], ReadonlyArray.forEach(([time, f]) => {
        scheduler[SchedulerLike_schedule](f, { delay: time });
    }));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([none]));
}), test("explicitly deleting a key", () => {
    const scheduler = VirtualTimeScheduler.create();
    const cache = Streamable.createInMemoryCache({ capacity: 1 })[StreamableLike_stream](scheduler);
    const result = [];
    pipe([
        tuple(0, () => {
            cache[QueueableLike_enqueue]({ abc: _ => 1 });
        }),
        tuple(1, () => {
            cache[QueueableLike_enqueue]({ abc: _ => none });
        }),
        tuple(2, () => {
            pipe(cache[KeyedLike_get]("abc"), Observable.forEach(bindMethod(result, "push")), Observable.subscribe(scheduler));
        }),
        tuple(3, () => {
            cache[QueueableLike_enqueue]({ abc: _ => 2 });
        }),
        tuple(4, () => {
            cache[QueueableLike_enqueue]({ abc: _ => none });
        }),
    ], ReadonlyArray.forEach(([time, f]) => {
        scheduler[SchedulerLike_schedule](f, { delay: time });
    }));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([none, 2, none]));
}), test("integration test", () => {
    const scheduler = VirtualTimeScheduler.create();
    const cache = Streamable.createInMemoryCache({ capacity: 1 })[StreamableLike_stream](scheduler);
    const result1 = [];
    const abcSubscription1 = pipe(cache[KeyedLike_get]("abc"), Observable.forEach(bindMethod(result1, "push")), Observable.subscribe(scheduler));
    const result2 = [];
    let abcSubscription2 = Disposable.disposed;
    const result3 = [];
    let abcSubscription3 = Disposable.disposed;
    pipe([
        tuple(1, () => {
            cache[QueueableLike_enqueue]({ abc: _ => 1 });
        }),
        tuple(2, () => {
            abcSubscription2 = pipe(cache[KeyedLike_get]("abc"), Observable.forEach(bindMethod(result2, "push")), Observable.subscribe(scheduler));
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
            abcSubscription3 = pipe(cache[KeyedLike_get]("abc"), Observable.forEach(bindMethod(result3, "push")), Observable.subscribe(scheduler));
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
        scheduler[SchedulerLike_schedule](f, { delay: time });
    }));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result1, expectArrayEquals([none, 1, 2]));
    pipe(result2, expectArrayEquals([1]));
    pipe(result3, expectArrayEquals([3]));
})), describe("createPersistentCache", test("integration test", () => {
    const store = {
        abc: 1,
        def: 2,
    };
    const persistentStore = {
        load: (_) => pipe({ ...store }, Observable.fromValue()),
        store: (updates) => pipe(() => {
            pipe(updates, ReadonlyObjectMap.forEach((v, k) => {
                store[k] = v;
            }));
        }, Observable.fromFactory()),
    };
    const scheduler = VirtualTimeScheduler.create();
    const cache = Streamable.createPersistentCache(persistentStore, {
        capacity: 1,
    })[StreamableLike_stream](scheduler);
    const result1 = [];
    pipe(cache[KeyedLike_get]("abc"), Observable.forEach(bindMethod(result1, "push")), Observable.subscribe(scheduler));
    pipe([
        [
            2,
            () => {
                cache[QueueableLike_enqueue]({ abc: _ => 4, hgi: _ => 6 });
            },
        ],
    ], ReadonlyArray.forEach(([time, f]) => {
        scheduler[SchedulerLike_schedule](f, { delay: time });
    }));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result1, expectArrayEquals([1, 4]));
})));
((_) => { })(Streamable);
