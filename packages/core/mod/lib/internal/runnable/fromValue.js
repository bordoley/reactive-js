import { createRunnable } from "./createRunnable.js";
export const fromValue = (value) => createRunnable(sink => {
    sink.notify(value);
    sink.done();
});
