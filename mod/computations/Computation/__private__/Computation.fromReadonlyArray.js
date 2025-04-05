/// <reference types="./Computation.fromReadonlyArray.d.ts" />

import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { delayMs } from "../../../utils.js";
const Computation_fromReadonlyArray = (m, options) => (array) => {
    const delay = options?.delay ?? 0;
    const delayStart = (options?.delayStart ?? false) && delay > 0;
    return m.genPure(function* ComputationFromReadonlyArray() {
        let [start, count] = parseArrayBounds(array, options);
        if (delayStart && count > 0) {
            yield delayMs(delay);
        }
        while (count !== 0) {
            yield array[start];
            count > 0 ? (start++, count--) : (start--, count++);
            if (delay > 0 && count > 0) {
                yield delayMs(delay);
            }
        }
    });
};
export default Computation_fromReadonlyArray;
