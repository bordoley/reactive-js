import { add, dispose } from "../../disposable.js";
import { isNone } from "../../option.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class ThrowIfEmptySubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, factory) {
        super(delegate);
        this.factory = factory;
        this.isEmpty = true;
        add(this, error => {
            if (isNone(error) && this.isEmpty) {
                const cause = this.factory();
                error = { cause };
            }
            dispose(this.delegate, error);
        });
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        this.isEmpty = false;
        this.delegate.notify(next);
    }
}
export const throwIfEmpty = (factory) => {
    const operator = (subscriber) => new ThrowIfEmptySubscriber(subscriber, factory);
    operator.isSynchronous = true;
    return lift(operator);
};
