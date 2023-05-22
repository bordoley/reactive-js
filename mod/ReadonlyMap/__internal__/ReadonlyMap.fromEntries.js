/// <reference types="./ReadonlyMap.fromEntries.d.ts" />

import { newInstance } from "../../functions.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
const ReadonlyMap_fromEntries = () => (enumerable) => {
    const entries = enumerable[EnumerableLike_enumerate]();
    const map = newInstance((Map));
    while (entries[EnumeratorLike_move]()) {
        const [key, value] = entries[EnumeratorLike_current];
        map.set(key, value);
    }
    return map;
};
export default ReadonlyMap_fromEntries;
