import { lift } from "./lift.js";
import { AbstractAutoDisposingDelegatingObserver, assertObserverState } from "./observer.js";
class KeepTypeObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
    notify(next) {
        assertObserverState(this);
        if (this.predicate(next)) {
            this.delegate.notify(next);
        }
    }
}
export const keepType = (predicate) => {
    const operator = (observer) => new KeepTypeObserver(observer, predicate);
    operator.isSynchronous = true;
    return lift(operator);
};
export const keep = (predicate) => keepType(predicate);
