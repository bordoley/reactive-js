import { add } from "../../disposable.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverNotifyInContinuation, } from "./observer.js";
class KeepTypeObserver extends AbstractDelegatingObserver {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
        add(this, delegate);
    }
    notify(next) {
        assertObserverNotifyInContinuation(this);
        if (!this.isDisposed && this.predicate(next)) {
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
