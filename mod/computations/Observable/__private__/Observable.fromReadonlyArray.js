/// <reference types="./Observable.fromReadonlyArray.d.ts" />

import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ContinuationContextLike_yield, SchedulerLike_schedule, SinkLike_complete, SinkLike_isCompleted, SinkLike_push, } from "../../../utils.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
const Observable_fromReadonlyArray = (options) => (arr) => Observable_createPureSynchronousObservable((observer) => {
    const { delay = 0, delayStart = false } = options ?? {};
    let [start, count] = parseArrayBounds(arr, options);
    const continuation = (ctx) => {
        while (!observer[SinkLike_isCompleted] && count !== 0) {
            const next = arr[start];
            observer[SinkLike_push](next);
            count > 0 ? (start++, count--) : (start--, count++);
            if (count !== 0) {
                ctx[ContinuationContextLike_yield](delay);
            }
        }
        observer[SinkLike_complete]();
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? { delay } : none), Disposable.addTo(observer));
});
export default Observable_fromReadonlyArray;
