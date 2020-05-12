import { add } from "../../disposable.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class KeepTypeSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
        add(this, delegate);
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        if (!this.isDisposed && this.predicate(next)) {
            this.delegate.notify(next);
        }
    }
}
export const keepType = (predicate) => {
    const operator = (subscriber) => new KeepTypeSubscriber(subscriber, predicate);
    operator.isSynchronous = true;
    return lift(operator);
};
export const keep = (predicate) => keepType(predicate);
