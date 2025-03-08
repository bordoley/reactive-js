/// <reference types="./Observable.fromReadonlyArray.d.ts" />

import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ContinuationContextLike_yield, DisposableLike_dispose, DisposableLike_isDisposed, ObserverLike_notify, SchedulerLike_schedule, } from "../../../utils.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
const Observable_fromReadonlyArray = (options) => (arr) => Observable_createPureSynchronousObservable((observer) => {
    const { delay = 0, delayStart = false } = options ?? {};
    let [start, count] = parseArrayBounds(arr, options);
    const continuation = (ctx) => {
        while (!observer[DisposableLike_isDisposed] && count !== 0) {
            const next = arr[start];
            observer[ObserverLike_notify](next);
            count > 0 ? (start++, count--) : (start--, count++);
            ctx[ContinuationContextLike_yield](delay);
        }
        observer[DisposableLike_dispose]();
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? { delay } : none), Disposable.addTo(observer));
});
export default Observable_fromReadonlyArray;
