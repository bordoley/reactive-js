import { AbstractDelegatingSink } from "./sink.js";
import { lift } from "./lift.js";
class KeepTypeSink extends AbstractDelegatingSink {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
    push(next) {
        if (!this.isDone && this.predicate(next)) {
            this.delegate.push(next);
        }
    }
}
export const keepType = (predicate) => {
    const operator = (sink) => new KeepTypeSink(sink, predicate);
    return lift(operator);
};
export const keep = (predicate) => keepType(predicate);
