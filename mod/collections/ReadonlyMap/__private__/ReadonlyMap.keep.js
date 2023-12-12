/// <reference types="./ReadonlyMap.keep.d.ts" />

import { newInstance } from "../../../functions.js";
const ReadonlyMap_keep = (predicate) => (map) => {
    const result = newInstance((Map));
    for (let [key, value] of map) {
        if (predicate(value, key)) {
            result.set(key, value);
        }
    }
    return result;
};
export default ReadonlyMap_keep;
