import { returns } from "../../functions.js";
import { lift } from "./lift.js";
import { AbstractAutoDisposingDelegatingObserver, assertObserverState, } from "./observer.js";
class MapObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
    }
    notify(next) {
        assertObserverState(this);
        const mapped = this.mapper(next);
        this.delegate.notify(mapped);
    }
}
export const map = (mapper) => {
    const operator = (observer) => new MapObserver(observer, mapper);
    operator.isSynchronous = true;
    return lift(operator);
};
export const mapTo = (value) => map(returns(value));
