/// <reference types="./ReadonlyArray.entries.d.ts" />

import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import Iterable_createPure from "../../../computations/Iterable/__private__/Itrerable.createPure.js";
import { tuple } from "../../../functions.js";
const ReadonlyArray_entries = (options) => (arr) => Iterable_createPure(function* () {
    let [start, count] = parseArrayBounds(arr, options);
    for (; count !== 0; count > 0 ? (start++, count--) : (start--, count++)) {
        yield tuple(start, arr[start]);
    }
});
export default ReadonlyArray_entries;
