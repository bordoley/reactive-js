/// <reference types="./Computation.fromReadonlyArray.d.ts" />

import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { delay, } from "../../../computations.js";
const Computation_fromReadonlyArray = (m, options) => (array) => {
    const delayTime = options?.delay ?? 0;
    const delayStart = (options?.delayStart ?? false) && delayTime > 0;
    return m.genPure(function* ComputationFromReadonlyArray() {
        let [start, count] = parseArrayBounds(array, options);
        if (delayStart && count > 0) {
            yield delay(delayTime);
        }
        while (count !== 0) {
            yield array[start];
            count > 0 ? (start++, count--) : (start--, count++);
            if (delayTime > 0 && count > 0) {
                yield delay(delayTime);
            }
        }
    });
};
export default Computation_fromReadonlyArray;
