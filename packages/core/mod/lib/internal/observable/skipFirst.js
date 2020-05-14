import { add } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverNotifyInContinuation, } from "./observer.js";
class SkipFirstObserver extends AbstractDelegatingObserver {
    constructor(delegate, skipCount) {
        super(delegate);
        this.skipCount = skipCount;
        this.count = 0;
        add(this, delegate);
    }
    notify(next) {
        assertObserverNotifyInContinuation(this);
        if (!this.isDisposed) {
            this.count++;
            if (this.count > this.skipCount) {
                this.delegate.notify(next);
            }
        }
    }
}
export const skipFirst = (count = 1) => {
    const operator = (observer) => new SkipFirstObserver(observer, count);
    operator.isSynchronous = false;
    return observable => count > 0 ? pipe(observable, lift(operator)) : observable;
};
