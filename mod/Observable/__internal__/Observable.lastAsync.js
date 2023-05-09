/// <reference types="./Observable.lastAsync.d.ts" />

import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../Disposable/__internal__/Disposable.onError.js";
import Scheduler_createHostScheduler from "../../Scheduler/__internal__/Scheduler.createHostScheduler.js";
import { isFunction, isNone, newInstance, none, pipe, } from "../../functions.js";
import { DisposableLike_dispose, } from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_lastAsync = (schedulerOrNone, options) => async (observable) => {
    const schedulerOrFactory = isNone(schedulerOrNone)
        ? Scheduler_createHostScheduler
        : none;
    const isSchedulerFactory = isFunction(schedulerOrFactory);
    const schedulerDisposable = isSchedulerFactory
        ? schedulerOrFactory()
        : none;
    const scheduler = schedulerDisposable ?? schedulerOrNone;
    try {
        return await newInstance(Promise, (resolve, reject) => {
            let result = none;
            pipe(observable, Observable_forEach(next => {
                result = next;
            }), Observable_subscribe(scheduler, options), Disposable_onError(reject), Disposable_onComplete(() => {
                resolve(result);
            }));
        });
    }
    finally {
        schedulerDisposable?.[DisposableLike_dispose]();
    }
};
export default Observable_lastAsync;
