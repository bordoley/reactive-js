import { compose } from "../../functions.js";
import { AbstractDelegatingSink } from "./sink.js";
import { lift } from "./lift.js";
import { map } from "./map.js";
class IgnoreDoneSink {
    constructor(delegate) {
        this.delegate = delegate;
        this.isDone = false;
    }
    notify(next) {
        this.delegate.notify(next);
    }
    done() { }
}
class FlattenSink extends AbstractDelegatingSink {
    constructor(delegate) {
        super(delegate);
        this.sink = new IgnoreDoneSink(delegate);
    }
    notify(next) {
        next.run(this.sink);
    }
}
const _flatten = lift(s => new FlattenSink(s));
export const flatten = () => _flatten;
export const flatMap = (mapper) => compose(map(mapper), flatten());
