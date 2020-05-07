import { isNone } from "../../option.js";
import { lift } from "./lift.js";
import { ofValue } from "./ofValue.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class EverySubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
        this.add(error => {
            if (isNone(error)) {
                ofValue(true).subscribe(delegate);
            }
            else {
                delegate.dispose(error);
            }
        });
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        const failedPredicate = !this.predicate(next);
        if (failedPredicate) {
            const delegate = this.delegate;
            delegate.notify(false);
            delegate.dispose();
        }
    }
}
export const every = (predicate) => {
    const operator = (subscriber) => new EverySubscriber(subscriber, predicate);
    operator.isSynchronous = true;
    return lift(operator);
};
export const none = (predicate) => every(next => !predicate(next));
