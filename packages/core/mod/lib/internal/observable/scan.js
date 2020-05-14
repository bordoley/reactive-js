import { add } from "../../disposable.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverNotifyInContinuation, } from "./observer.js";
class ScanObserver extends AbstractDelegatingObserver {
    constructor(delegate, scanner, acc) {
        super(delegate);
        this.scanner = scanner;
        this.acc = acc;
        add(this, delegate);
    }
    notify(next) {
        assertObserverNotifyInContinuation(this);
        const nextAcc = this.scanner(this.acc, next);
        this.acc = nextAcc;
        this.delegate.notify(nextAcc);
    }
}
export const scan = (scanner, initialValue) => {
    const operator = (observer) => new ScanObserver(observer, scanner, initialValue());
    operator.isSynchronous = true;
    return lift(operator);
};
