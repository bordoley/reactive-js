import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
import { add } from "../../disposable.js";
class OnNotifySubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, onNotify) {
        super(delegate);
        this.onNotify = onNotify;
        add(this, delegate);
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        if (!this.isDisposed) {
            this.onNotify(next);
            this.delegate.notify(next);
        }
    }
}
export function onNotify(onNotify) {
    const operator = (subscriber) => new OnNotifySubscriber(subscriber, onNotify);
    operator.isSynchronous = true;
    return lift(operator);
}
