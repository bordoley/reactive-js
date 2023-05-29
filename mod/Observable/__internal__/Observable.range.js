/// <reference types="./Observable.range.d.ts" />

import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Iterable_enumerate from "../../Iterable/__internal__/Iterable.enumerate.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { pipe } from "../../functions.js";
const Observable_range = (start, options) => {
    const count = clampPositiveInteger(options?.count ?? MAX_SAFE_INTEGER);
    const generateEnumerator = () => {
        const iter = function* () {
            let acc = start;
            while (acc < count) {
                yield acc;
                acc++;
            }
        };
        return pipe(iter(), Iterable_enumerate());
    };
    return Enumerable_create(generateEnumerator);
};
export default Observable_range;
