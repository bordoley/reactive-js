import { createRunnable } from "./createRunnable.js";
import { fromArray } from "./fromArray.js";
class ConcatSink {
    constructor(delegate, runnables, next) {
        this.delegate = delegate;
        this.runnables = runnables;
        this.next = next;
        this.isDone = false;
    }
    done() {
        const delegate = this.delegate;
        const runnables = this.runnables;
        const next = this.next;
        this.next++;
        if (next < runnables.length) {
            runnables[next].run(this);
        }
        else {
            this.isDone = true;
            delegate.done();
        }
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
export function concat(...runnables) {
    return createRunnable((sink) => runnables[0].run(new ConcatSink(sink, runnables, 1)));
}
export const concatWith = (snd) => first => concat(first, snd);
export function endWith(...values) {
    return concatWith(fromArray()(values));
}
export function startWith(...values) {
    return obs => concat(fromArray()(values), obs);
}
