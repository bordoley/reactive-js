import { dispose, addOnDisposedWithoutError, addOnDisposedWithErrorTeardown } from "../../disposable.js";
import { isSome, none } from "../../option.js";
import { lift } from "./lift.js";
import { createDelegatingObserver } from "./observer.js";
import { observe } from "./observable.js";
export const catchError = (onError) => {
    const operator = (delegate) => {
        const observer = createDelegatingObserver(delegate);
        addOnDisposedWithoutError(observer, delegate);
        addOnDisposedWithErrorTeardown(observer, cause => {
            try {
                const result = onError(cause) || none;
                if (isSome(result)) {
                    observe(result, delegate);
                }
                else {
                    dispose(delegate);
                }
            }
            catch (cause) {
                dispose(delegate, { cause: { parent: cause, cause } });
            }
        });
        return observer;
    };
    operator.isSynchronous = false;
    return lift(operator);
};
