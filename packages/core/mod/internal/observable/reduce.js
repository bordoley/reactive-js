import { dispose } from "../../disposable.js";
import { isNone } from "../../option.js";
import { fromValue } from "./fromValue.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class ReduceSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, reducer, acc) {
        super(delegate);
        this.reducer = reducer;
        this.acc = acc;
        this.add(error => {
            if (isNone(error)) {
                fromValue()(this.acc).subscribe(delegate);
            }
            else {
                dispose(delegate, error);
            }
        });
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        this.acc = this.reducer(this.acc, next);
    }
}
export const reduce = (reducer, initialValue) => {
    const operator = (subscriber) => new ReduceSubscriber(subscriber, reducer, initialValue());
    operator.isSynchronous = true;
    return lift(operator);
};
