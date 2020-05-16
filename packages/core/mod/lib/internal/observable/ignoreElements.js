import { lift } from "./lift.js";
import { AbstractAutoDisposingDelegatingObserver, assertObserverState } from "./observer.js";
class IgnoreObserver extends AbstractAutoDisposingDelegatingObserver {
    notify(_) {
        assertObserverState(this);
    }
}
const operator = (observer) => new IgnoreObserver(observer);
operator.isSynchronous = true;
export const ignoreElements = () => lift(operator);
