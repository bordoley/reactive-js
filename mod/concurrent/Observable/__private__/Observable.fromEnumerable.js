/// <reference types="./Observable.fromEnumerable.d.ts" />

import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../../collections.js";
import { ContinuationContextLike_yield, ObserverLike_notify, SchedulerLike_schedule, } from "../../../concurrent.js";
import { none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import Observable_createPureRunnable from "./Observable.createPureRunnable.js";
const Observable_fromEnumerable = (options) => (enumerable) => Observable_createPureRunnable((observer) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const enumerator = enumerable[EnumerableLike_enumerate]();
    const continuation = (ctx) => {
        while (!observer[DisposableLike_isDisposed] &&
            enumerator[EnumeratorLike_move]()) {
            const next = enumerator[EnumeratorLike_current];
            observer[ObserverLike_notify](next);
            ctx[ContinuationContextLike_yield](delay);
        }
        observer[DisposableLike_dispose]();
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? { delay } : none), Disposable.addTo(observer));
});
export default Observable_fromEnumerable;
