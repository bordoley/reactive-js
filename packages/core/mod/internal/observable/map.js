import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber } from "./subscriber.js";
import { returns } from "../../functions.js";
class MapSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
        this.add(delegate);
    }
    notify(next) {
        const mapped = this.mapper(next);
        this.delegate.notify(mapped);
    }
}
export const map = (mapper) => {
    const operator = (subscriber) => new MapSubscriber(subscriber, mapper);
    operator.isSynchronous = true;
    return lift(operator);
};
export const mapTo = (value) => map(returns(value));
