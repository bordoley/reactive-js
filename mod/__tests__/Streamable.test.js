/// <reference types="./Streamable.test.d.ts" />

import * as Disposable from "../Disposable.js";
import * as Observable from "../Observable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as ReadonlyObjectMap from "../ReadonlyObjectMap.js";
import * as Scheduler from "../Scheduler.js";
import * as Streamable from "../Streamable.js";
import { describe, expectArrayEquals, test, testModule, } from "../__internal__/testing.js";
import { arrayEquality, bindMethod, none, pipe, returns, } from "../functions.js";
import { DispatcherLike_complete, DisposableLike_dispose, KeyedCollectionLike_get, QueueableLike_enqueue, SchedulerLike_schedule, StreamableLike_stream, VirtualTimeSchedulerLike_run, } from "../types.js";
testModule("Streamable", describe("stateStore", test("createStateStore", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const streamable = Streamable.createStateStore(returns(1));
    const stateStream = streamable[StreamableLike_stream](scheduler);
    stateStream[QueueableLike_enqueue](returns(2));
    stateStream[QueueableLike_enqueue](returns(3));
    stateStream[DispatcherLike_complete]();
    let result = [];
    pipe(stateStream, Observable.forEach((x) => {
        result.push(x);
    }), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([1, 2, 3]));
})), describe("createInMemoryCache", test("it publishes none on subscribe when the key is missing", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const cache = Streamable.createInMemoryCache({ capacity: 1 })[StreamableLike_stream](scheduler);
    const result = [];
    pipe([
        [
            2,
            () => {
                pipe(cache[KeyedCollectionLike_get]("abc"), Observable.withCurrentTime((time, value) => [time, value]), Observable.forEach(bindMethod(result, "push")), Observable.subscribe(scheduler));
            },
        ],
    ], ReadonlyArray.forEach(([time, f]) => {
        scheduler[SchedulerLike_schedule](f, { delay: time });
    }));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([[2, none]], arrayEquality()));
}), test("explicitly deleting a key", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const cache = Streamable.createInMemoryCache({ capacity: 1 })[StreamableLike_stream](scheduler);
    const result = [];
    pipe([
        [
            0,
            () => {
                cache[QueueableLike_enqueue]({ abc: _ => 1 });
            },
        ],
        [
            1,
            () => {
                cache[QueueableLike_enqueue]({ abc: _ => none });
            },
        ],
        [
            2,
            () => {
                pipe(cache[KeyedCollectionLike_get]("abc"), Observable.withCurrentTime((time, value) => [time, value]), Observable.forEach(bindMethod(result, "push")), Observable.subscribe(scheduler));
            },
        ],
        [
            3,
            () => {
                cache[QueueableLike_enqueue]({ abc: _ => 2 });
            },
        ],
        [
            4,
            () => {
                cache[QueueableLike_enqueue]({ abc: _ => none });
            },
        ],
    ], ReadonlyArray.forEach(([time, f]) => {
        scheduler[SchedulerLike_schedule](f, { delay: time });
    }));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([
        [2, none],
        [3, 2],
        [4, none],
    ], arrayEquality()));
}), test("integration test", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const cache = Streamable.createInMemoryCache({ capacity: 1 })[StreamableLike_stream](scheduler);
    const result1 = [];
    const abcSubscription1 = pipe(cache[KeyedCollectionLike_get]("abc"), Observable.withCurrentTime((time, value) => [time, value]), Observable.forEach(bindMethod(result1, "push")), Observable.subscribe(scheduler));
    const result2 = [];
    let abcSubscription2 = Disposable.disposed;
    const result3 = [];
    let abcSubscription3 = Disposable.disposed;
    pipe([
        [
            1,
            () => {
                cache[QueueableLike_enqueue]({ abc: _ => 1 });
            },
        ],
        [
            2,
            () => {
                abcSubscription2 = pipe(cache[KeyedCollectionLike_get]("abc"), Observable.withCurrentTime((time, value) => [time, value]), Observable.forEach(bindMethod(result2, "push")), Observable.subscribe(scheduler));
            },
        ],
        [
            3,
            () => {
                cache[QueueableLike_enqueue]({ abc: _ => 2 });
            },
        ],
        [
            4,
            () => {
                abcSubscription2[DisposableLike_dispose]();
            },
        ],
        [
            4,
            () => {
                cache[QueueableLike_enqueue]({ abc: _ => 2, def: _ => 0 });
            },
        ],
        [
            5,
            () => {
                cache[QueueableLike_enqueue]({ abc: _ => 3 });
            },
        ],
        [
            6,
            () => {
                abcSubscription1[DisposableLike_dispose]();
            },
        ],
        [
            7,
            () => {
                cache[QueueableLike_enqueue]({ abc: _ => 3 });
            },
        ],
        [
            8,
            () => {
                abcSubscription3 = pipe(cache[KeyedCollectionLike_get]("abc"), Observable.withCurrentTime((time, value) => [time, value]), Observable.forEach(bindMethod(result3, "push")), Observable.subscribe(scheduler));
            },
        ],
        [
            9,
            () => {
                abcSubscription3[DisposableLike_dispose]();
            },
        ],
        [
            10,
            () => {
                cache[QueueableLike_enqueue]({
                    abc: _ => 3,
                    def: _ => 1,
                    ghi: _ => 2,
                });
            },
        ],
    ], ReadonlyArray.forEach(([time, f]) => {
        scheduler[SchedulerLike_schedule](f, { delay: time });
    }));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result1, expectArrayEquals([
        [0, none],
        [1, 1],
        [3, 2],
        [5, 3],
    ], arrayEquality()));
    pipe(result2, expectArrayEquals([
        [2, 1],
        [3, 2],
    ], arrayEquality()));
    pipe(result3, expectArrayEquals([[8, 3]], arrayEquality()));
})), describe("createPersistentCache", test("integration test", () => {
    const store = {
        abc: 1,
        def: 2,
    };
    const persistentStore = {
        load: (_) => pipe({ ...store }, Observable.fromOptional()),
        store: (updates) => pipe(() => {
            pipe(updates, ReadonlyObjectMap.forEachWithKey((v, k) => {
                store[k] = v;
            }));
        }, Observable.fromFactory()),
    };
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const cache = Streamable.createPersistentCache(persistentStore, {
        capacity: 1,
    })[StreamableLike_stream](scheduler);
    const result1 = [];
    pipe(cache[KeyedCollectionLike_get]("abc"), Observable.withCurrentTime((time, value) => [time, value]), Observable.forEach(bindMethod(result1, "push")), Observable.subscribe(scheduler));
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
    pipe(result1, expectArrayEquals([
        [0, 1],
        [2, 4],
    ], arrayEquality()));
})));
