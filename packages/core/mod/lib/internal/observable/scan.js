import { add } from "../../disposable.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
import { notifyScan } from "../notifyMixins.js";
class ScanObserver extends AbstractDelegatingObserver {
    constructor(delegate, scanner, acc) {
        super(delegate);
        this.scanner = scanner;
        this.acc = acc;
        add(this, delegate);
    }
    notify(next) {
        assertObserverState(this);
        notifyScan(this, next);
    }
}
export const scan = (scanner, initialValue) => {
    const operator = (observer) => new ScanObserver(observer, scanner, initialValue());
    operator.isSynchronous = true;
    return lift(operator);
};
