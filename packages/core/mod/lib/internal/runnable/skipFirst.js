import { pipe } from "../../functions.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSink } from "./sink.js";
class SkipFirstSink extends AbstractDelegatingSink {
    constructor(delegate, skipCount) {
        super(delegate);
        this.skipCount = skipCount;
        this.count = 0;
    }
    notify(next) {
        if (this.count > this.skipCount) {
            this.delegate.notify(next);
        }
    }
}
export const skipFirst = (count = 1) => {
    const operator = (sink) => new SkipFirstSink(sink, count);
    return runnable => (count > 0 ? pipe(runnable, lift(operator)) : runnable);
};
