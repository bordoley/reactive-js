/// <reference types="./Observable.lastAsync.d.ts" />

import { isNone, newInstance, none, pipe, } from "../../../functions.js";
import Scheduler_createHostScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.createHostScheduler.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../../util/Disposable/__internal__/Disposable.onError.js";
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
            }), Observable_subscribe(scheduler, options), Disposable_onError(reject), Disposable_onComplete(() => {
                resolve(result);
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
