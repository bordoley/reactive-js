import { strictEquality } from "../../functions.js";
import { lift } from "./lift.js";
import { AbstractAutoDisposingDelegatingObserver, assertObserverState, } from "./observer.js";
class DistinctUntilChangedObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, equality) {
        super(delegate);
        this.equality = equality;
        this.hasValue = false;
    }
    notify(next) {
        assertObserverState(this);
        const shouldEmit = !this.hasValue || !this.equality(this.prev, next);
        if (shouldEmit) {
            this.prev = next;
            this.hasValue = true;
            this.delegate.notify(next);
        }
    }
}
export const distinctUntilChanged = (options = {}) => {
    const { equality = strictEquality } = options;
    const operator = (observer) => new DistinctUntilChangedObserver(observer, equality);
    operator.isSynchronous = true;
    return lift(operator);
};
