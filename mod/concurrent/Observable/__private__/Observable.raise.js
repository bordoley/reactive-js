/// <reference types="./Observable.raise.d.ts" />

import { SchedulerLike_schedule } from "../../../concurrent.js";
import { compose, error, pipe, raise } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createPureRunnable from "./Observable.createPureRunnable.js";
const Observable_raise = (options) => Observable_createPureRunnable((observer) => {
    const { raise: factory = raise, delay = 0 } = options ?? {};
    pipe(observer[SchedulerLike_schedule](compose(factory, error, raise), {
        delay,
    }), Disposable.addTo(observer));
});
export default Observable_raise;
