/// <reference types="./ReadonlyArray.contains.d.ts" />

import { isNone } from "../../functions.js";
const ReadonlyArray_contains = (value, options) => (arr) => {
    const equality = options?.equality;
    if (isNone(equality)) {
        return arr.includes(value);
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (equality(value, arr[i])) {
                return true;
            }
        }
        return false;
    }
};
export default ReadonlyArray_contains;
