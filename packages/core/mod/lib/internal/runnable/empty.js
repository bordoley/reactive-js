import { createRunnable } from "./createRunnable.js";
const _empty = createRunnable(sink => {
    sink.done();
});
export const empty = () => _empty;
