/// <reference types="./Enumerable.fromReadonlyArray.d.ts" />

import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { pipe } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "./Enumerable.fromIteratorFactory.js";
const Enumerable_fromReadonlyArray = (options) => (arr) => pipe(function* () {
    let { start, count } = parseArrayBounds(arr, options);
    for (; count !== 0; count > 0 ? (start++, count--) : (start--, count++)) {
        yield arr[start];
    }
}, Enumerable_fromIteratorFactory());
export default Enumerable_fromReadonlyArray;
