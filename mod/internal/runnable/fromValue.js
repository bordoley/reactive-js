import { createRunnable } from "./createRunnable.js";
const _fromValue = (value) => createRunnable(sink => {
    sink.notify(value);
    sink.done();
});
export const fromValue = () => _fromValue;
