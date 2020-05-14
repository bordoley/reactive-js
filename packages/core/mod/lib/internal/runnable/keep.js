import { AbstractDelegatingSink } from "./sink.js";
import { lift } from "./lift.js";
import { notifyKeepType } from "../notifyMixins.js";
class KeepTypeSink extends AbstractDelegatingSink {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
    notify(next) {
        notifyKeepType(this, next);
    }
}
export const keepType = (predicate) => {
    const operator = (sink) => new KeepTypeSink(sink, predicate);
    return lift(operator);
};
export const keep = (predicate) => keepType(predicate);
