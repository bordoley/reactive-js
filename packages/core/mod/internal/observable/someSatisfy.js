import { referenceEquals } from "../../functions.js";
import { isNone } from "../../option.js";
import { lift } from "./lift.js";
import { fromValue } from "./fromValue.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class SomeSatisfySubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
        this.add(error => {
            if (isNone(error)) {
                fromValue()(false).subscribe(delegate);
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
export const someSatisfy = (predicate) => {
    const operator = (subscriber) => new SomeSatisfySubscriber(subscriber, predicate);
    operator.isSynchronous = true;
    return lift(operator);
};
export const contains = (value, equals = referenceEquals) => someSatisfy((b) => equals(value, b));
