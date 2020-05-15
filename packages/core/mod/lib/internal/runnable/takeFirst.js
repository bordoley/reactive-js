import { pipe } from "../../functions.js";
import { empty } from "./empty.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSink } from "./sink.js";
class TakeFirstSink extends AbstractDelegatingSink {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.count = 0;
    }
    notify(next) {
        debugger;
        this.count++;
        this.delegate.notify(next);
        if (this.count >= this.maxCount) {
            this.done();
        }
    }
}
export const takeFirst = (count = 1) => {
    const operator = (sink) => new TakeFirstSink(sink, count);
    return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
