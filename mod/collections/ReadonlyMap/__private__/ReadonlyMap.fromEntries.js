/// <reference types="./ReadonlyMap.fromEntries.d.ts" />

import { Map, Map_set } from "../../../__internal__/constants.js";
import { newInstance } from "../../../functions.js";
const ReadonlyMap_fromEntries = () => (entries) => {
    const map = newInstance((Map));
    for (const [key, value] of entries) {
        map[Map_set](key, value);
    }
    return map;
};
export default ReadonlyMap_fromEntries;
