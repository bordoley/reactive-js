import { createRunnable } from "./createRunnable.js";
import { fromArray } from "./fromArray.js";
import { AbstractDelegatingSink } from "./sink.js";
class ConcatSink extends AbstractDelegatingSink {
    constructor(delegate) {
        super(delegate);
        this.isDone = false;
    }
    done() {
        this.isDone = true;
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
