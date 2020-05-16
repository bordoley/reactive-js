import { compose } from "../../functions.js";
import { createRunnable } from "./createRunnable.js";
import { fromArray } from "./fromArray.js";
import { lift } from "./lift.js";
import { map } from "./map.js";
import { AbstractDelegatingSink } from "./sink.js";
const concatSinkDone = Symbol("@reactive-js/core/lib/runnable/concatSinkDone");
class ConcatSink {
    constructor(delegate) {
        this.delegate = delegate;
        this.isDone = false;
    }
    done() {
        if (!this.isDone) {
            this.isDone = true;
            throw concatSinkDone;
        }
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
const runConcatUnsafe = (runnable, sink) => {
    try {
        runnable.run(new ConcatSink(sink));
    }
    catch (e) {
        if (e !== concatSinkDone) {
            throw e;
        }
    }
};
export function concat(...runnables) {
    return createRunnable((sink) => {
        const runnablesLength = runnables.length;
        for (let i = 0; i < runnablesLength; i++) {
            runConcatUnsafe(runnables[i], sink);
        }
        sink.done();
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
        runConcatUnsafe(next, this.delegate);
    }
}
const _concatAll = lift(s => new FlattenSink(s));
export const concatAll = () => _concatAll;
export const concatMap = (mapper) => compose(map(mapper), concatAll());
