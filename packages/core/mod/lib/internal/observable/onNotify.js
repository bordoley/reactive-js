import { add } from "../../disposable.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverNotifyInContinuation, } from "./observer.js";
class OnNotifyObserver extends AbstractDelegatingObserver {
    constructor(delegate, onNotify) {
        super(delegate);
        this.onNotify = onNotify;
        add(this, delegate);
    }
    notify(next) {
        assertObserverNotifyInContinuation(this);
        if (!this.isDisposed) {
            this.onNotify(next);
            this.delegate.notify(next);
        }
    }
}
export function onNotify(onNotify) {
    const operator = (observer) => new OnNotifyObserver(observer, onNotify);
    operator.isSynchronous = true;
    return lift(operator);
}
