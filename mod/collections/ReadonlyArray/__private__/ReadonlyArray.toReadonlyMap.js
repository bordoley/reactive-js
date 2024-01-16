/// <reference types="./ReadonlyArray.toReadonlyMap.d.ts" />

import { Array_length, Map_set } from "../../../__internal__/constants.js";
import { newInstance } from "../../../functions.js";
const ReadonlyArray_toReadonlyMap = () => (arr) => {
    const map = newInstance(Map);
    const length = arr[Array_length];
    for (let i = 0; i < length; i++) {
        map[Map_set](i, arr[i]);
    }
    return map;
};
export default ReadonlyArray_toReadonlyMap;
