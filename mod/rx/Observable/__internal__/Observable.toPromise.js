/// <reference types="./Observable.toPromise.d.ts" />

import { error, isSome, newInstance, none, pipe, } from "../../../functions.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_toPromise = (scheduler) => (observable) => newInstance(Promise, (resolve, reject) => {
    let result = none;
    let hasResult = false;
    pipe(observable, Observable_forEach(next => {
        hasResult = true;
        result = next;
    }), Observable_subscribe(scheduler), Disposable_onDisposed(err => {
        if (isSome(err)) {
            reject(err);
        }
        else if (!hasResult) {
            reject(error("Observable completed without producing a value"));
        }
        else {
            resolve(result);
        }
    }));
});
export default Observable_toPromise;
