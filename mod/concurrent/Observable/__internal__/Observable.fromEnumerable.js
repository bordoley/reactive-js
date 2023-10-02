/// <reference types="./Observable.fromEnumerable.d.ts" />

import { SchedulerLike_schedule, SchedulerLike_yield, } from "../../../concurrent.js";
import { none, pipe } from "../../../functions.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../../ix.js";
import { SinkLike_notify } from "../../../rx.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createRunnable from "./Observable.createRunnable.js";
const Observable_fromEnumerable = (options) => (enumerable) => Observable_createRunnable((observer) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const enumerator = pipe(enumerable[EnumerableLike_enumerate](), Disposable.addTo(observer));
    const continuation = (scheduler) => {
        while (!observer[DisposableLike_isDisposed] &&
            enumerator[EnumeratorLike_move]()) {
            const next = enumerator[EnumeratorLike_current];
            observer[SinkLike_notify](next);
            scheduler[SchedulerLike_yield](delay);
        }
        observer[DisposableLike_dispose]();
    };
    observer[SchedulerLike_schedule](continuation, delayStart ? { delay } : none);
});
export default Observable_fromEnumerable;
