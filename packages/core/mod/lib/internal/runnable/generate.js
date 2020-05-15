import { createRunnable } from "./createRunnable.js";
export const generate = (generator, initialValue) => {
    const run = (sink) => {
        let acc = initialValue();
        while (!sink.isDone) {
            acc = generator(acc);
            sink.notify(acc);
        }
        sink.done();
    };
    return createRunnable(run);
};
