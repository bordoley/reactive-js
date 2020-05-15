import { compose } from "../../functions.js";
import { createRunnable } from "./createRunnable.js";
import { fromArray } from "./fromArray.js";
import { lift } from "./lift.js";
import { map } from "./map.js";
import { AbstractDelegatingSink } from "./sink.js";
class ConcatSink {
    constructor(delegate) {
        this.delegate = delegate;
        this._isDone = false;
    }
    get isDone() {
        return this._isDone || this.delegate.isDone;
    }
    done() {
        this._isDone = true;
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
export function concat(...runnables) {
    return createRunnable((sink) => {
        const runnablesLength = runnables.length;
        for (let i = 0; i < runnablesLength && !sink.isDone; i++) {
            runnables[i].run(new ConcatSink(sink));
        }
    });
}
export const concatWith = (snd) => first => concat(first, snd);
export function endWith(...values) {
    return concatWith(fromArray()(values));
}
export function startWith(...values) {
    return obs => concat(fromArray()(values), obs);
}
class FlattenSink extends AbstractDelegatingSink {
    constructor(delegate) {
        super(delegate);
    }
    notify(next) {
        next.run(new ConcatSink(this.delegate));
    }
}
const _flatten = lift(s => new FlattenSink(s));
export const flatten = () => _flatten;
export const flatMap = (mapper) => compose(map(mapper), flatten());
