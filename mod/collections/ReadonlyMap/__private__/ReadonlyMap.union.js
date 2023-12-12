/// <reference types="./ReadonlyMap.union.d.ts" />

import { isNone, newInstance } from "../../../functions.js";
const ReadonlyMap_union = (m2) => (m1) => {
    const result = newInstance(Map);
    for (let [key, value] of m1) {
        result.set(key, value);
    }
    for (let [key, value] of m2) {
        if (isNone(result.get(key))) {
            result.set(key, value);
        }
    }
    return result;
};
export default ReadonlyMap_union;
