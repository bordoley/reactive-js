import { dispose, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { none } from "../../option.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
class ThrowIfEmptyObserver extends AbstractDelegatingObserver {
    constructor(delegate, factory) {
        super(delegate);
        this.factory = factory;
        this.isEmpty = true;
        addOnDisposedWithError(this, delegate);
        addOnDisposedWithoutErrorTeardown(this, () => {
            let error = none;
            if (this.isEmpty) {
                let cause = none;
                try {
                    cause = this.factory();
                }
                catch (e) {
                    cause = e;
                }
                error = { cause };
            }
            pipe(delegate, dispose(error));
        });
    }
    notify(next) {
        assertObserverState(this);
        this.isEmpty = false;
        this.delegate.notify(next);
    }
}
export const throwIfEmpty = (factory) => {
    const operator = (observer) => new ThrowIfEmptyObserver(observer, factory);
    operator.isSynchronous = true;
    return lift(operator);
};
