import { dispose } from "../../disposable.js";
import { lift } from "./lift.js";
import { AbstractAutoDisposingDelegatingObserver, assertObserverState } from "./observer.js";
class TakeWhileObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, predicate, inclusive) {
        super(delegate);
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
    notify(next) {
        assertObserverState(this);
        const satisfiesPredicate = this.predicate(next);
        if (satisfiesPredicate || this.inclusive) {
            this.delegate.notify(next);
        }
        if (!satisfiesPredicate) {
            dispose(this);
        }
    }
}
export const takeWhile = (predicate, { inclusive } = { inclusive: false }) => {
    const operator = (observer) => new TakeWhileObserver(observer, predicate, inclusive);
    operator.isSynchronous = true;
    return lift(operator);
};
