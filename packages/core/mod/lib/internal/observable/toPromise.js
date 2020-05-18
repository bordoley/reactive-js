import { pipe } from "../../functions.js";
import { none, isSome } from "../../option.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { addTeardown } from "../../disposable.js";
export const toPromise = (scheduler) => observable => new Promise((resolve, reject) => {
    let result = none;
    let hasResult = false;
    const subscription = pipe(observable, onNotify(next => {
        hasResult = true;
        result = next;
    }), subscribe(scheduler));
    addTeardown(subscription, err => {
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
    });
});
