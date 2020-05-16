import { lift } from "./lift.js";
import { AbstractAutoDisposingDelegatingObserver, assertObserverState } from "./observer.js";
class ScanObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, scanner, acc) {
        super(delegate);
        this.scanner = scanner;
        this.acc = acc;
    }
    notify(next) {
        assertObserverState(this);
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
