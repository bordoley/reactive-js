import { dispose, add } from "../../disposable.js";
import { isNone } from "../../option.js";
import { fromValue } from "./fromValue.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverNotifyInContinuation, } from "./observer.js";
class ReduceObserver extends AbstractDelegatingObserver {
    constructor(delegate, reducer, acc) {
        super(delegate);
        this.reducer = reducer;
        this.acc = acc;
        add(this, error => {
            if (isNone(error)) {
                fromValue()(this.acc).observe(delegate);
            }
            else {
                dispose(delegate, error);
            }
        });
    }
    notify(next) {
        assertObserverNotifyInContinuation(this);
        this.acc = this.reducer(this.acc, next);
    }
}
export const reduce = (reducer, initialValue) => {
    const operator = (observer) => new ReduceObserver(observer, reducer, initialValue());
    operator.isSynchronous = true;
    return lift(operator);
};
