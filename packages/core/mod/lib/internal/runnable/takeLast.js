import { notifyTakeLast } from "../notifyMixins.js";
import { pipe } from "../../functions.js";
import { lift } from "./lift.js";
import { empty } from "./empty.js";
import { fromArray } from "./fromArray.js";
class TakeLastSink {
    constructor(delegate, maxCount) {
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.isDone = false;
        this.last = [];
    }
    notify(next) {
        notifyTakeLast(this, next);
    }
    done() {
        this.isDone = true;
        fromArray()(this.last).run(this.delegate);
    }
    ;
}
export const takeLast = (count = 1) => {
    const operator = (sink) => new TakeLastSink(sink, count);
    return runnable => (count > 0 ? pipe(runnable, lift(operator)) : empty());
};
