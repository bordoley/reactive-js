import { createRunnable } from "./createRunnable.js";
export const fromEnumerator = (f) => {
    const run = (sink) => {
        const enumerator = f();
        while (enumerator.move()) {
            sink.notify(enumerator.current);
        }
        sink.done();
    };
    return createRunnable(run);
};
export const fromEnumerable = (enumerable) => fromEnumerator(() => enumerable.enumerate());
