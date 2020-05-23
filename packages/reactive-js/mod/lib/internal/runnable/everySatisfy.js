import { compose, negate } from "../../functions.js";
import { AbstractSink } from "./sink.js";
class EverySatisfySink extends AbstractSink {
    constructor(predicate) {
        super();
        this.predicate = predicate;
        this.result = true;
    }
    notify(next) {
        if (!this.predicate(next)) {
            this.result = false;
            this.done();
        }
    }
}
export const everySatisfy = (predicate) => runnable => {
    const sink = new EverySatisfySink(predicate);
    runnable.run(sink);
    return sink.result;
};
export const noneSatisfy = (predicate) => everySatisfy(compose(predicate, negate));
