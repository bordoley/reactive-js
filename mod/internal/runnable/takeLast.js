import { pipe } from "../../functions.js";
import { empty } from "./empty.js";
import { fromArray } from "./fromArray.js";
import { sinkDone } from "./interfaces.js";
import { lift } from "./lift.js";
class TakeLastSink {
    constructor(delegate, maxCount) {
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.last = [];
    }
    get isDone() {
        return this.delegate.isDone;
    }
    notify(next) {
        const last = this.last;
        last.push(next);
        if (last.length > this.maxCount) {
            last.shift();
        }
    }
    done() {
        if (!this.isDone) {
            fromArray()(this.last).run(this.delegate);
            throw sinkDone;
        }
    }
}
export const takeLast = (options = {}) => {
    const { count = 1 } = options;
    const operator = (sink) => new TakeLastSink(sink, count);
    return runnable => (count > 0 ? pipe(runnable, lift(operator)) : empty());
};
