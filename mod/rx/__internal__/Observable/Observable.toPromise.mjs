/// <reference types="./Observable.toPromise.d.ts" />
import { newInstance, none, pipe, isSome, error } from '../../../functions.mjs';
import Disposable$onDisposed from '../../../util/__internal__/Disposable/Disposable.onDisposed.mjs';
import Observable$forEach from './Observable.forEach.mjs';
import Observable$subscribe from './Observable.subscribe.mjs';

const Observable$toPromise = (scheduler) => (observable) => newInstance(Promise, (resolve, reject) => {
    let result = none;
    let hasResult = false;
    pipe(observable, Observable$forEach(next => {
        hasResult = true;
        result = next;
    }), Observable$subscribe(scheduler), Disposable$onDisposed(err => {
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

export { Observable$toPromise as default };
