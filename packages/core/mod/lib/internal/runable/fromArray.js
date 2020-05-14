import { createRunable } from "./createRunable.js";
export const fromArray = (options = {
    startIndex: 0
}) => values => {
    const valuesLength = values.length;
    const startIndex = Math.max(Math.min(options.startIndex, valuesLength), 0);
    const run = (sink) => {
        for (let index = startIndex; index < valuesLength && !sink.isDone; index++) {
            sink.push(values[index]);
        }
        sink.done();
    };
    return createRunable(run);
};
