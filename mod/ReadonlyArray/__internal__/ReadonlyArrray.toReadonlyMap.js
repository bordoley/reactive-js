/// <reference types="./ReadonlyArrray.toReadonlyMap.d.ts" />

import { newInstance } from "../../functions.js";
const ReadonlyArray_toReadonlyMap = () => (arr) => {
    const map = newInstance(Map);
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        map.set(i, arr[i]);
    }
    return map;
};
export default ReadonlyArray_toReadonlyMap;
