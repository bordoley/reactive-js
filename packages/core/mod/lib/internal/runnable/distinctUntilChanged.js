import { AbstractDelegatingSink } from "./sink.js";
import { strictEquality } from "../../functions.js";
import { lift } from "./lift.js";
import { notifyDistinctUntilChanged } from "../notifyMixins.js";
class DistinctUntilChangedSink extends AbstractDelegatingSink {
    constructor(delegate, equality) {
        super(delegate);
        this.equality = equality;
        this.hasValue = false;
    }
    notify(next) {
        notifyDistinctUntilChanged(this, next);
    }
}
export const distinctUntilChanged = (equality = strictEquality) => {
    const operator = (observer) => new DistinctUntilChangedSink(observer, equality);
    return lift(operator);
};
