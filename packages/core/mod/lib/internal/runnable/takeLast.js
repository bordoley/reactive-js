import { sinkDone } from "./interfaces.js";
import { pipe } from "../../functions.js";
import { lift } from "./lift.js";
import { empty } from "./empty.js";
import { fromArray } from "./fromArray.js";
class TakeLastSink {
    constructor(delegate, maxCount) {
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.last = [];
    }
    notify(next) {
        const last = this.last;
        last.push(next);
        if (last.length > this.maxCount) {
            last.shift();
        }
    }
    done() {
        fromArray()(this.last).run(this.delegate);
        throw sinkDone;
    }
}
export const takeLast = (count = 1) => {
    const operator = (sink) => new TakeLastSink(sink, count);
    return runnable => (count > 0 ? pipe(runnable, lift(operator)) : empty());
};
