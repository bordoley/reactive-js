import { pipe } from "../../functions.js";
import { fromValue, scan, scanAsync } from "../../observable.js";
import { createStreamable } from "../../streamable.js";
const generateScanner = (generator) => (acc, _) => generator(acc);
const asyncGeneratorScanner = (generator, options) => {
    const fromValueWithDelay = fromValue(options);
    return (acc, _) => pipe(acc, generator, fromValueWithDelay);
};
export const generate = (generator, initialValue, options = {}) => {
    const { delay = 0 } = options;
    const op = delay > 0
        ? scanAsync(asyncGeneratorScanner(generator, options), initialValue)
        : scan(generateScanner(generator), initialValue);
    return createStreamable(op);
};
