import { dispose, addOnDisposedWithoutError, addOnDisposedWithErrorTeardown, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { isSome, none } from "../../option.js";
import { lift } from "./lift.js";
import { observe } from "./observable.js";
import { createDelegatingObserver } from "./observer.js";
export const catchError = (onError) => {
    const operator = (delegate) => {
        const observer = createDelegatingObserver(delegate);
        addOnDisposedWithoutError(observer, delegate);
        addOnDisposedWithErrorTeardown(observer, cause => {
            try {
                const result = onError(cause) || none;
                if (isSome(result)) {
                    pipe(result, observe(delegate));
                }
                else {
                    pipe(delegate, dispose());
                }
            }
            catch (cause) {
                pipe(delegate, dispose({ cause: { parent: cause, cause } }));
            }
        });
        return observer;
    };
    operator.isSynchronous = false;
    return lift(operator);
};
