import { add, dispose } from "../../disposable.js";
import { isNone } from "../../option.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverNotifyInContinuation, } from "./observer.js";
class ThrowIfEmptyObserver extends AbstractDelegatingObserver {
    constructor(delegate, factory) {
        super(delegate);
        this.factory = factory;
        this.isEmpty = true;
        add(this, error => {
            if (isNone(error) && this.isEmpty) {
                const cause = this.factory();
                error = { cause };
            }
            dispose(this.delegate, error);
        });
    }
    notify(next) {
        assertObserverNotifyInContinuation(this);
        this.isEmpty = false;
        this.delegate.notify(next);
    }
}
export const throwIfEmpty = (factory) => {
    const operator = (observer) => new ThrowIfEmptyObserver(observer, factory);
    operator.isSynchronous = true;
    return lift(operator);
};
