/// <reference types="./Stream.test.d.ts" />

import { expectArrayEquals, test, testModule, } from "../../__internal__/testing.js";
import * as Enumerable from "../../collections/Enumerable.js";
import { SchedulerLike_schedule, StreamableLike_stream, VirtualTimeSchedulerLike_run, } from "../../concurrent.js";
import { bind, pipe, returns } from "../../functions.js";
import { QueueableLike_enqueue } from "../../utils.js";
import * as Observable from "../Observable.js";
import * as Stream from "../Stream.js";
import * as Streamable from "../Streamable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";
testModule("Stream", test("syncState", () => {
    const vts = VirtualTimeScheduler.create();
    const stream = Streamable.createStateStore(returns(-1))[StreamableLike_stream](vts);
    pipe(stream, Stream.syncState(state => pipe(Enumerable.range(state + 10), Observable.fromEnumerable({ delay: 10 }), Observable.map(x => (_) => x), Observable.takeFirst({ count: 2 })), (oldState, newState) => newState !== oldState ? Observable.empty() : Observable.empty()));
    vts[SchedulerLike_schedule](() => {
        stream[QueueableLike_enqueue](x => x + 2);
    }, { delay: 5 });
    const result = [];
    pipe(stream, Observable.forEach(bind(Array.prototype.push, result)), Observable.subscribe(vts));
    vts[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([-1, 9, 11, 10]));
}));
((_) => { })(Stream);
