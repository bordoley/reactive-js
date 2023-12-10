/// <reference types="./Observable.lastAsync.d.ts" />

import { isFunction, isNone, newInstance, none, pipe, } from "../../../functions.js";
import { DisposableLike_dispose, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Scheduler from "../../Scheduler.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_lastAsync = (schedulerOrNone, options) => async (observable) => {
    const schedulerOrFactory = isNone(schedulerOrNone)
        ? Scheduler.createHostScheduler
        : none;
    const isSchedulerFactory = isFunction(schedulerOrFactory);
    const schedulerDisposable = isSchedulerFactory
        ? schedulerOrFactory()
        : none;
    const scheduler = schedulerDisposable ?? schedulerOrNone;
    try {
        return await newInstance(Promise, (resolve, reject) => {
            let result = none;
            pipe(observable, Observable_forEach((next) => {
                result = next;
            }), Observable_subscribe(scheduler, options), Disposable.onError(reject), Disposable.onComplete(() => {
                resolve(result);
            }));
        });
    }
    finally {
        schedulerDisposable?.[DisposableLike_dispose]();
    }
};
export default Observable_lastAsync;
