/// <reference types="./ReadonlyArray.keySet.d.ts" />

import { Array_length, Set_add } from "../../../__internal__/constants.js";
import { newInstance } from "../../../functions.js";
const ReadonlyArray_keySet = () => (arr) => {
    const result = newInstance((Set));
    for (let i = 0; i < arr[Array_length]; i++) {
        result[Set_add](i);
    }
    return result;
};
export default ReadonlyArray_keySet;
