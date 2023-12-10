/// <reference types="./ReadonlyArray.keySet.d.ts" />

import { newInstance } from "../../../functions.js";
const ReadonlyArray_keySet = () => (arr) => {
    const result = newInstance((Set));
    for (let i = 0; i < arr.length; i++) {
        result.add(i);
    }
    return result;
};
export default ReadonlyArray_keySet;
