import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
import { dispose } from "../../disposable.js";
class TakeWhileSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, predicate, inclusive) {
        super(delegate);
        this.predicate = predicate;
        this.inclusive = inclusive;
        this.add(delegate);
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        if (!this.isDisposed) {
            const satisfiesPredicate = this.predicate(next);
            if (satisfiesPredicate || this.inclusive) {
                this.delegate.notify(next);
            }
            if (!satisfiesPredicate) {
                dispose(this);
            }
        }
    }
}
export const takeWhile = (predicate, { inclusive } = { inclusive: false }) => {
    const operator = (subscriber) => new TakeWhileSubscriber(subscriber, predicate, inclusive);
    operator.isSynchronous = true;
    return lift(operator);
};
