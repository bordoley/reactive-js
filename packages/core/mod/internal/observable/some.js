import { isNone } from "../../option.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
import { ofValue } from "./ofValue.js";
import { referenceEquals } from "../../functions.js";
class SomeSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
        this.add(error => {
            if (isNone(error)) {
                ofValue(false).subscribe(delegate);
            }
            else {
                delegate.dispose(error);
            }
        });
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        const passesPredicate = this.predicate(next);
        if (passesPredicate) {
            const delegate = this.delegate;
            delegate.notify(true);
            delegate.dispose();
        }
    }
}
export const some = (predicate) => {
    const operator = (subscriber) => new SomeSubscriber(subscriber, predicate);
    operator.isSynchronous = true;
    return lift(operator);
};
export const contains = (value, equals = referenceEquals) => some((b) => equals(value, b));
