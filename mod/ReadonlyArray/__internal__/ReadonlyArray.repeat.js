/// <reference types="./ReadonlyArray.repeat.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { isFunction } from "../../functions.js";
const ReadonlyArray_repeat = (countOrPredicate = MAX_SAFE_INTEGER) => (arr) => {
    let arrays = [];
    if (isFunction(countOrPredicate)) {
        for (let i = 0; i === 0 || countOrPredicate(i); i++) {
            arrays.push(arr);
        }
    }
    else {
        for (let i = 0; i < countOrPredicate; i++) {
            arrays.push(arr);
        }
    }
    return arrays.flat(1);
};
export default ReadonlyArray_repeat;
