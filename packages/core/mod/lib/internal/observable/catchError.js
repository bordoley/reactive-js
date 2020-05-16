import { dispose, addDisposableOrTeardown } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { isSome, none } from "../../option.js";
import { lift } from "./lift.js";
import { createDelegatingObserver } from "./observer.js";
export const catchError = (onError) => {
    const operator = (delegate) => pipe(delegate, createDelegatingObserver, addDisposableOrTeardown(error => {
        if (isSome(error)) {
            try {
                const { cause } = error;
                const result = onError(cause) || none;
                if (isSome(result)) {
                    result.observe(delegate);
                }
                else {
                    dispose(delegate);
                }
            }
            catch (cause) {
                dispose(delegate, { cause, parent: error });
            }
        }
        else {
            dispose(delegate);
        }
    }));
    operator.isSynchronous = false;
    return lift(operator);
};
