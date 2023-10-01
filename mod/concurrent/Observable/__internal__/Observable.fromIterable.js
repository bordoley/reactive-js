/// <reference types="./Observable.fromIterable.d.ts" />

import { SchedulerLike_schedule, SchedulerLike_yield, } from "../../../concurrent.js";
import { error, isSome, none, pipe } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_create from "./Observable.create.js";
const Observable_fromIterable = (options) => (iterable) => Observable_create((observer) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const iterator = iterable[Symbol.iterator]();
    const continuation = (scheduler) => {
        while (!observer[DisposableLike_isDisposed]) {
            let next = none;
            try {
                next = iterator.next();
            }
            catch (e) {
                // Catch any errors thrown by the iterator
                observer[DisposableLike_dispose](error(e));
            }
            if (isSome(next) && !next.done) {
                observer[SinkLike_notify](next.value);
                scheduler[SchedulerLike_yield](delay);
            }
            else {
                observer[DisposableLike_dispose]();
            }
        }
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? options : none), Disposable.addTo(observer));
});
export default Observable_fromIterable;
