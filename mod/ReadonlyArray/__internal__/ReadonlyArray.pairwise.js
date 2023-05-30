/// <reference types="./ReadonlyArray.pairwise.d.ts" />

import { none } from "../../functions.js";
const ReadonlyArray_pairwise = () => (arr) => {
    const result = [];
    let prev = none;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            prev = arr[i];
            continue;
        }
        const next = arr[i];
        result.push([prev, next]);
        prev = next;
    }
    return result;
};
export default ReadonlyArray_pairwise;
