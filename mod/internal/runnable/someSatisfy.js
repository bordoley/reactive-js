import { strictEquality, isEqualTo, } from "../../functions.js";
import { AbstractSink } from "./sink.js";
class SomeSatisfySink extends AbstractSink {
    constructor(predicate) {
        super();
        this.predicate = predicate;
        this.result = false;
    }
    notify(next) {
        if (this.predicate(next)) {
            this.result = true;
            this.done();
        }
    }
}
export const someSatisfy = (predicate) => runnable => {
    const sink = new SomeSatisfySink(predicate);
    runnable.run(sink);
    return sink.result;
};
export const contains = (value, options = {}) => {
    const { equality = strictEquality } = options;
    return someSatisfy(isEqualTo(value, equality));
};
