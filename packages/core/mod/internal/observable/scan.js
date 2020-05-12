import { add } from "../../disposable.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class ScanSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, scanner, acc) {
        super(delegate);
        this.scanner = scanner;
        this.acc = acc;
        add(this, delegate);
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        const nextAcc = this.scanner(this.acc, next);
        this.acc = nextAcc;
        this.delegate.notify(nextAcc);
    }
}
export const scan = (scanner, initialValue) => {
    const operator = (subscriber) => new ScanSubscriber(subscriber, scanner, initialValue());
    operator.isSynchronous = true;
    return lift(operator);
};
