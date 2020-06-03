import { addOnDisposedWithError, addOnDisposedWithoutErrorTeardown, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { fromValue } from "./fromValue.js";
import { lift } from "./lift.js";
import { observe } from "./observable.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
class ReduceObserver extends AbstractDelegatingObserver {
    constructor(delegate, reducer, acc) {
        super(delegate);
        this.reducer = reducer;
        this.acc = acc;
        addOnDisposedWithError(this, delegate);
        addOnDisposedWithoutErrorTeardown(this, () => {
            pipe(this.acc, fromValue(), observe(delegate));
        });
    }
    notify(next) {
        assertObserverState(this);
        this.acc = this.reducer(this.acc, next);
    }
}
export const reduce = (reducer, initialValue) => {
    const operator = (observer) => new ReduceObserver(observer, reducer, initialValue());
    operator.isSynchronous = true;
    return lift(operator);
};
