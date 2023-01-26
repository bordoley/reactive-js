/// <reference types="./Observable.toPromise.d.ts" />
import { newInstance, none, pipe, isSome, error } from '../../../functions.mjs';
import Disposable_onDisposed from '../../../util/__internal__/Disposable/Disposable.onDisposed.mjs';
import Observable_forEach from './Observable.forEach.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

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

export { Observable_toPromise as default };
