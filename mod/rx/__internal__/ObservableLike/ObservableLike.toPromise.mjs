/// <reference types="./ObservableLike.toPromise.d.ts" />
import { newInstance, none, pipe, isSome } from '../../../functions.mjs';
import DisposableLike__onDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.onDisposed.mjs';
import ObservableLike__forEach from './ObservableLike.forEach.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';

const ObservableLike__toPromise = (scheduler) => (observable) => newInstance(Promise, (resolve, reject) => {
    let result = none;
    let hasResult = false;
    pipe(observable, ObservableLike__forEach(next => {
        hasResult = true;
        result = next;
    }), ObservableLike__subscribe(scheduler), DisposableLike__onDisposed(err => {
        if (isSome(err)) {
            const { cause } = err;
            reject(cause);
        }
        else if (!hasResult) {
            reject(newInstance(Error, "Observable completed without producing a value"));
        }
        else {
            resolve(result);
        }
    }));
});

export { ObservableLike__toPromise as default };
