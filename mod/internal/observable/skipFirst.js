import { pipe } from "../../functions.js";
import { lift } from "./lift.js";
import { AbstractAutoDisposingDelegatingObserver, assertObserverState, } from "./observer.js";
class SkipFirstObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, skipCount) {
        super(delegate);
        this.skipCount = skipCount;
        this.count = 0;
    }
    notify(next) {
        assertObserverState(this);
        this.count++;
        if (this.count > this.skipCount) {
            this.delegate.notify(next);
        }
    }
}
export const skipFirst = (options = {}) => {
    const { count = 1 } = options;
    const operator = (observer) => new SkipFirstObserver(observer, count);
    operator.isSynchronous = false;
    return observable => count > 0 ? pipe(observable, lift(operator)) : observable;
};
