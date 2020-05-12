import { add } from "../../disposable.js";
import { referenceEquality } from "../../functions.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class DistinctUntilChangedSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, equality) {
        super(delegate);
        this.equality = equality;
        this.hasValue = false;
        add(this, delegate);
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        const shouldEmit = !this.isDisposed &&
            (!this.hasValue || !this.equality(this.prev, next));
        if (shouldEmit) {
            this.prev = next;
            this.hasValue = true;
            this.delegate.notify(next);
        }
    }
}
export const distinctUntilChanged = (equality = referenceEquality) => {
    const operator = (subscriber) => new DistinctUntilChangedSubscriber(subscriber, equality);
    operator.isSynchronous = true;
    return lift(operator);
};
