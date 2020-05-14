import { AbstractDelegatingSink } from "./sink.js";
import { strictEquality } from "../../functions.js";
import { lift } from "./lift.js";
class DistinctUntilChangedSink extends AbstractDelegatingSink {
    constructor(delegate, equality) {
        super(delegate);
        this.equality = equality;
        this.hasValue = false;
    }
    push(next) {
        const shouldEmit = !this.isDone && (!this.hasValue || !this.equality(this.prev, next));
        if (shouldEmit) {
            this.prev = next;
            this.hasValue = true;
            this.delegate.push(next);
        }
    }
}
export const distinctUntilChanged = (equality = strictEquality) => {
    const operator = (observer) => new DistinctUntilChangedSink(observer, equality);
    return lift(operator);
};
