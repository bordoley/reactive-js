import { createRunnable } from "./createRunnable.js";
export const generate = (generator, initialValue) => {
    const run = (sink) => {
        let acc = initialValue();
        while (true) {
            acc = generator(acc);
            sink.notify(acc);
        }
    };
    return createRunnable(run);
};
