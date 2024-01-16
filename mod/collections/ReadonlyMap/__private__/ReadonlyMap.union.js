/// <reference types="./ReadonlyMap.union.d.ts" />

import { Map_set } from "../../../__internal__/constants.js";
import { newInstance } from "../../../functions.js";
const ReadonlyMap_union = (m2) => (m1) => {
    const result = newInstance(Map);
    for (let [key, value] of m1) {
        result[Map_set](key, value);
    }
    for (let [key, value] of m2) {
        result[Map_set](key, value);
    }
    return result;
};
export default ReadonlyMap_union;
