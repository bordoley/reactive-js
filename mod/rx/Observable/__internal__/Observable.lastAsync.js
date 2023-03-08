/// <reference types="./Observable.lastAsync.d.ts" />

import { isSome, newInstance, none, pipe, } from "../../../functions.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_lastAsync = (scheduler) => (observable) => newInstance(Promise, (resolve, reject) => {
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
export default Observable_lastAsync;
