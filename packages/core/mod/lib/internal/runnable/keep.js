import { AbstractDelegatingSink } from "./sink.js";
import { lift } from "./lift.js";
class KeepTypeSink extends AbstractDelegatingSink {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
    notify(next) {
        if (this.predicate(next)) {
            this.delegate.notify(next);
        }
    }
}
export const keepType = (predicate) => {
    const operator = (sink) => new KeepTypeSink(sink, predicate);
    return lift(operator);
};
export const keep = (predicate) => keepType(predicate);
