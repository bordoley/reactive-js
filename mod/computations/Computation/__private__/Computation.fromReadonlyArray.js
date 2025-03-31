/// <reference types="./Computation.fromReadonlyArray.d.ts" />

import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
const Computation_fromReadonlyArray = (m, options) => (array) => m.genPure(function* ComputationFromReadonlyArray() {
    let [start, count] = parseArrayBounds(array, options);
    while (count !== 0) {
        yield array[start];
        count > 0 ? (start++, count--) : (start--, count++);
    }
}, options);
export default Computation_fromReadonlyArray;
