/// <reference types="./Observable.fromEnumerable.d.ts" />

import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../../collections.js";
import { SchedulerLike_schedule, } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { none, pipe } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createRunnable from "./Observable.createRunnable.js";
const Observable_fromEnumerable = (options) => (enumerable) => Observable_createRunnable((observer) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const enumerator = enumerable[EnumerableLike_enumerate]();
    const continuation = (__yield) => {
        while (!observer[DisposableLike_isDisposed] &&
            enumerator[EnumeratorLike_move]()) {
            const next = enumerator[EnumeratorLike_current];
            observer[SinkLike_notify](next);
            __yield(delay);
        }
        observer[DisposableLike_dispose]();
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? { delay } : none), Disposable.addTo(observer));
});
export default Observable_fromEnumerable;
