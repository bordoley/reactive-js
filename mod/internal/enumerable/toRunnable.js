import { createRunnable } from "../../runnable.js";
const enumeratorToRunnable = (f) => {
    const run = (sink) => {
        const enumerator = f();
        while (enumerator.move()) {
            sink.notify(enumerator.current);
        }
        sink.done();
    };
    return createRunnable(run);
};
const _toRunnable = (enumerable) => enumeratorToRunnable(() => enumerable.enumerate());
export const toRunnable = () => _toRunnable;
