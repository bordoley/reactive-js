/// <reference types="./Observable.lastAsync.d.ts" />

import { isNone, isSome, newInstance, none, pipe, } from "../../../functions.js";
import Scheduler_createHostScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.createHostScheduler.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_lastAsync = (options) => async (observable) => {
    const { scheduler: schedulerOption } = options !== null && options !== void 0 ? options : {};
    const scheduler = schedulerOption !== null && schedulerOption !== void 0 ? schedulerOption : Scheduler_createHostScheduler();
    try {
        return await newInstance(Promise, (resolve, reject) => {
            let result = none;
            pipe(observable, Observable_forEach(next => {
                result = next;
            }), Observable_subscribe(scheduler), Disposable_onDisposed(err => {
                if (isSome(err)) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            }));
        });
    }
    finally {
        if (isNone(schedulerOption)) {
            scheduler[DisposableLike_dispose]();
        }
    }
};
export default Observable_lastAsync;
