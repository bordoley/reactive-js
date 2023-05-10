/// <reference types="./ReadonlyArray.distinctUntilChanged.d.ts" />

import { none, strictEquality } from "../../functions.js";
const ReadonlyArray_distinctUntilChanged = (options) => (arr) => {
    const equality = options?.equality ?? strictEquality;
    const result = [];
    let last = none;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            last = arr[i];
            result.push(last);
            continue;
        }
        const next = arr[i];
        if (equality(next, last)) {
            continue;
        }
        last = next;
        result.push(next);
    }
    return result;
};
export default ReadonlyArray_distinctUntilChanged;
