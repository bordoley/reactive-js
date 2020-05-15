import { add } from "../../disposable.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
class IgnoreObserver extends AbstractDelegatingObserver {
    constructor(delegate) {
        super(delegate);
        add(this, delegate);
    }
    notify(_) {
        assertObserverState(this);
    }
}
const operator = (observer) => new IgnoreObserver(observer);
operator.isSynchronous = true;
export const ignoreElements = () => lift(operator);
