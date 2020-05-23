import { dispose } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { empty } from "./empty.js";
import { lift } from "./lift.js";
import { AbstractAutoDisposingDelegatingObserver, assertObserverState, } from "./observer.js";
class TakeFirstObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.count = 0;
    }
    notify(next) {
        assertObserverState(this);
        this.count++;
        this.delegate.notify(next);
        if (this.count >= this.maxCount) {
            dispose(this);
        }
    }
}
export const takeFirst = (count = 1) => {
    const operator = (observer) => new TakeFirstObserver(observer, count);
    operator.isSynchronous = true;
    return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
