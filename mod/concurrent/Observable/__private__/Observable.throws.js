/// <reference types="./Observable.throws.d.ts" />

import { SchedulerLike_schedule } from "../../../concurrent.js";
import { error, pipe, raise } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createRunnableWithSideEffects from "./Observable.createRunnableWithSideEffects.js";
const Observable_throws = (options) => Observable_createRunnableWithSideEffects((observer) => {
    const { raise: factory = raise, delay = 0 } = options ?? {};
    pipe(observer[SchedulerLike_schedule](() => raise(error(factory())), {
        delay,
    }), Disposable.addTo(observer));
});
export default Observable_throws;
