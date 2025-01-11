/// <reference types="./ReadonlyArray.keys.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { returns } from "../../../functions.js";
const ReadonlyArray_keys = 
/*@__PURE__*/ returns((arr) => ({
    *[Symbol.iterator]() {
        for (let i = 0; i < arr[Array_length]; i++) {
            yield i;
        }
    },
}));
export default ReadonlyArray_keys;
