import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class OnNotifySubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, onNotify) {
        super(delegate);
        this.onNotify = onNotify;
        this.add(delegate);
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
