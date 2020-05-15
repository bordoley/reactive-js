import { returns } from "../../functions.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSink, assertSinkState } from "./sink.js";
import { notifyMap } from "../notifyMixins.js";
class MapSink extends AbstractDelegatingSink {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
    }
    notify(next) {
        assertSinkState(this);
        notifyMap(this, next);
    }
}
export const map = (mapper) => {
    const operator = (sink) => new MapSink(sink, mapper);
    return lift(operator);
};
export const mapTo = (value) => map(returns(value));
