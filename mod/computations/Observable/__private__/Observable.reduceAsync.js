/// <reference types="./Observable.reduceAsync.d.ts" />

import { Promise } from "../../../__internal__/constants.js";
import { isNone, isSome, newInstance, pipe, } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_reduceAsync = ((reducer, initialValue, schedulerOrOptions, maybeOptions) => async (observable) => {
    const { scheduler, options } = isNone(schedulerOrOptions) || isSome(schedulerOrOptions.capacity)
        ? {
            scheduler: HostScheduler.get(),
            options: schedulerOrOptions,
        }
        : {
            scheduler: schedulerOrOptions,
            options: maybeOptions,
        };
    return await newInstance((Promise), (resolve, reject) => {
        let acc = initialValue();
        pipe(observable, Observable_forEach((next) => {
            acc = reducer(acc, next);
        }), Observable_subscribe(scheduler, options), DisposableContainer.onError(reject), DisposableContainer.onComplete(() => {
            resolve(acc);
        }));
    });
});
export default Observable_reduceAsync;
