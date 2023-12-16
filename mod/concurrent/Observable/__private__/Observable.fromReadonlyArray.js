/// <reference types="./Observable.fromReadonlyArray.d.ts" />

import { SchedulerLike_schedule, } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { none, pipe } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createRunnable from "./Observable.createRunnable.js";
const Observable_fromReadonlyArray = (options) => (array) => Observable_createRunnable((observer) => {
    const { delay = 0, delayStart = false } = options ?? {};
    let i = 0;
    const { length } = array;
    const continuation = (__yield) => {
        while (!observer[DisposableLike_isDisposed] && i < length) {
            const next = array[i];
            observer[SinkLike_notify](next);
            i++;
            __yield(delay);
        }
        observer[DisposableLike_dispose]();
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? { delay } : none), Disposable.addTo(observer));
});
export default Observable_fromReadonlyArray;
