/// <reference types="./ReadonlyArray.entries.d.ts" />

import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { pipe, tuple } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
const ReadonlyArray_entries = (options) => (arr) => pipe(function* () {
    let [start, count] = parseArrayBounds(arr, options);
    for (; count !== 0; count > 0 ? (start++, count--) : (start--, count++)) {
        yield tuple(start, arr[start]);
    }
}, Enumerable_fromIteratorFactory());
export default ReadonlyArray_entries;
