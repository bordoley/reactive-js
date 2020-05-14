import { add } from "../../disposable.js";
import { returns } from "../../functions.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverNotifyInContinuation } from "./observer.js";
import { notifyMap } from "../notifyMixins.js";
class MapObserver extends AbstractDelegatingObserver {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
        add(this, delegate);
    }
    notify(next) {
        assertObserverNotifyInContinuation(this);
        notifyMap(this, next);
    }
}
export const map = (mapper) => {
    const operator = (observer) => new MapObserver(observer, mapper);
    operator.isSynchronous = true;
    return lift(operator);
};
export const mapTo = (value) => map(returns(value));
