import { alwaysTrue } from "../../functions.js";
import { isNone } from "../../option.js";
import { createRunnable } from "./createRunnable.js";
class RepeatSink {
    constructor(delegate, src, shouldRepeat) {
        this.delegate = delegate;
        this.src = src;
        this.shouldRepeat = shouldRepeat;
        this.count = 0;
        this.isDone = false;
    }
    notify(next) {
        this.delegate.notify(next);
    }
    done() {
        this.count++;
        if (!this.delegate.isDone && this.shouldRepeat(this.count)) {
            this.src.run(this);
        }
        else {
            this.isDone = true;
        }
    }
}
export function repeat(predicate) {
    const repeatPredicate = isNone(predicate)
        ? alwaysTrue
        : typeof predicate === "number"
            ? (count) => count < predicate
            : (count) => predicate(count);
    return runnable => createRunnable(sink => runnable.run(new RepeatSink(sink, runnable, repeatPredicate)));
}
