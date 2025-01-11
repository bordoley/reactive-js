/// <reference types="./ReadonlyMap.keep.d.ts" />

import { Map, Map_set } from "../../../__internal__/constants.js";
import { newInstance } from "../../../functions.js";
const ReadonlyMap_keep = (predicate) => (map) => {
    const result = newInstance((Map));
    for (const [key, value] of map) {
        if (predicate(value, key)) {
            result[Map_set](key, value);
        }
    }
    return result;
};
export default ReadonlyMap_keep;
