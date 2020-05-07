import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class TakeWhileSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
        this.add(delegate);
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        if (!this.isDisposed) {
            if (this.predicate(next)) {
                this.delegate.notify(next);
            }
            else {
                this.dispose();
            }
        }
    }
}
export const takeWhile = (predicate) => {
    const operator = (subscriber) => new TakeWhileSubscriber(subscriber, predicate);
    operator.isSynchronous = true;
    return lift(operator);
};
