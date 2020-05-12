import { pipe } from "../../functions.js";
import { none, isSome } from "../../option.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { addDisposableOrTeardown } from "../../disposable.js";
export const toPromise = (scheduler) => observable => new Promise((resolve, reject) => {
    let result = none;
    let hasResult = false;
    pipe(observable, onNotify(next => {
        hasResult = true;
        result = next;
    }), subscribe(scheduler), addDisposableOrTeardown(err => {
        if (isSome(err)) {
            const { cause } = err;
            reject(cause);
        }
        else if (!hasResult) {
            reject(new Error("Observable completed without producing a value"));
        }
        else {
            resolve(result);
        }
    }));
});
