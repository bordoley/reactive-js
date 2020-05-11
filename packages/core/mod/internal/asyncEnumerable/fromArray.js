import { scan, map, takeFirst } from "../../observable.js";
import { compose, returns } from "../../functions.js";
import { createStreamable } from "../../streamable.js";
const fromArrayScanner = (acc, _) => acc + 1;
export const fromArray = (values) => {
    const operator = compose(scan(fromArrayScanner, returns(-1)), map((i) => values[i]), takeFirst(values.length));
    return createStreamable(operator);
};
