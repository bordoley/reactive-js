import { lift } from "./lift.js";
import { AbstractDelegatingSink } from "./sink.js";
class TakeWhileSink extends AbstractDelegatingSink {
    constructor(delegate, predicate, inclusive) {
        super(delegate);
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
    notify(next) {
        const satisfiesPredicate = this.predicate(next);
        if (satisfiesPredicate || this.inclusive) {
            this.delegate.notify(next);
        }
        if (!satisfiesPredicate) {
            this.done();
        }
    }
}
export const takeWhile = (predicate, options = {}) => {
    const { inclusive = false } = options;
    const operator = (sink) => new TakeWhileSink(sink, predicate, inclusive);
    return lift(operator);
};
