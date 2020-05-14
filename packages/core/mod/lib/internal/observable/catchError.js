import { dispose, add } from "../../disposable.js";
import { isSome, none } from "../../option.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver } from "./observer.js";
class CatchErrorObserver extends AbstractDelegatingObserver {
    constructor(delegate, onError) {
        super(delegate);
        add(this, error => {
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
        });
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
export const catchError = (onError) => {
    const operator = (observer) => new CatchErrorObserver(observer, onError);
    operator.isSynchronous = false;
    return lift(operator);
};
