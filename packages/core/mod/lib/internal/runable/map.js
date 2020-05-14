import { returns } from "../../functions.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSink } from "./sink.js";
class MapSink extends AbstractDelegatingSink {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
    }
    push(next) {
        const mapped = this.mapper(next);
        this.delegate.push(mapped);
    }
}
export const map = (mapper) => {
    const operator = (sink) => new MapSink(sink, mapper);
    return lift(operator);
};
export const mapTo = (value) => map(returns(value));
