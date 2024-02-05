/// <reference types="./ReadonlyArray.slice.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
const ReadonlyArray_slice = (options) => (arr) => {
    const [start, count] = parseArrayBounds(arr, options);
    return start === 0 && count === arr[Array_length]
        ? arr
        : count >= 0
            ? arr.slice(start, count + start)
            : arr.slice(start + count + 1, start + 1).reverse();
};
export default ReadonlyArray_slice;
