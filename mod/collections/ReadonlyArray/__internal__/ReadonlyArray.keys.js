/// <reference types="./ReadonlyArray.keys.d.ts" />

import { returns } from "../../../functions.js";
function* iterate(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield i;
    }
}
const ReadonlyArray_keys = 
/*@__PURE__*/ returns(iterate);
export default ReadonlyArray_keys;
