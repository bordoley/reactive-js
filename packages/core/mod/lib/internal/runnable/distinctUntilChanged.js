import { strictEquality } from "../../functions.js";
import { none } from "../../option.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSink } from "./sink.js";
class DistinctUntilChangedSink extends AbstractDelegatingSink {
    constructor(delegate, equality) {
        super(delegate);
        this.equality = equality;
        this.prev = none;
        this.hasValue = false;
    }
    notify(next) {
        const shouldEmit = !this.hasValue || !this.equality(this.prev, next);
        if (shouldEmit) {
            this.prev = next;
            this.hasValue = true;
            this.delegate.notify(next);
        }
    }
}
export const distinctUntilChanged = (equality = strictEquality) => {
    const operator = (sink) => new DistinctUntilChangedSink(sink, equality);
    return lift(operator);
};
