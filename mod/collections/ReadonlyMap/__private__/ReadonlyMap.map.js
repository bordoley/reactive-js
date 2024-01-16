/// <reference types="./ReadonlyMap.map.d.ts" />

import { Map_set } from "../../../__internal__/constants.js";
import { newInstance } from "../../../functions.js";
const ReadonlyMap_map = (selector) => (map) => {
    const result = newInstance(Map);
    for (let [key, value] of map) {
        result[Map_set](key, selector(value, key));
    }
    return result;
};
export default ReadonlyMap_map;
