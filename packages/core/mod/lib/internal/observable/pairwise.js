import { none } from "../../option.js";
import { lift } from "./lift.js";
import { AbstractAutoDisposingDelegatingObserver } from "./observer.js";
class PairwiseObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor() {
        super(...arguments);
        this.hasPrev = false;
    }
    notify(value) {
        const prev = this.hasPrev ? this.prev : none;
        this.hasPrev = true;
        this.prev = value;
        this.delegate.notify([prev, value]);
    }
}
export const pairwise = () => {
    const operator = (observer) => new PairwiseObserver(observer);
    operator.isSynchronous = true;
    return lift(operator);
};
