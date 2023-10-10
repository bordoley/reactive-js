/// <reference types="./ReadonlyMap.fromEntries.d.ts" />

import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../../collections.js";
import { newInstance } from "../../../functions.js";
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
