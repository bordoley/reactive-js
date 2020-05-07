import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
import { referenceEquals } from "../../functions.js";
class DistinctUntilChangedSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, equals) {
        super(delegate);
        this.equals = equals;
        this.hasValue = false;
        this.add(delegate);
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        const shouldEmit = !this.isDisposed &&
            (!this.hasValue || !this.equals(this.prev, next));
        if (shouldEmit) {
            this.prev = next;
            this.hasValue = true;
            this.delegate.notify(next);
        }
    }
}
export const distinctUntilChanged = (equals = referenceEquals) => {
    const operator = (subscriber) => new DistinctUntilChangedSubscriber(subscriber, equals);
    operator.isSynchronous = true;
    return lift(operator);
};
