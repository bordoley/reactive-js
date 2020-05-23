import { alwaysTrue } from "../../functions.js";
import { isNone } from "../../option.js";
import { createRunnable } from "./createRunnable.js";
class RepeatSink {
    constructor(delegate) {
        this.delegate = delegate;
        this.isDone = false;
    }
    notify(next) {
        this.delegate.notify(next);
    }
    done() { }
}
export function repeat(predicate) {
    const shouldRepeat = isNone(predicate)
        ? alwaysTrue
        : typeof predicate === "number"
            ? (count) => count < predicate
            : (count) => predicate(count);
    return runnable => createRunnable(sink => {
        let count = 0;
        do {
            runnable.run(new RepeatSink(sink));
            count++;
        } while (!sink.isDone && shouldRepeat(count));
    });
}
