/// <reference types="./ReadonlyObjectMap.fromEntries.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../../collections.js";
const ReadonlyObjectMap_fromEntries = () => (enumerable) => {
    const entries = enumerable[EnumerableLike_enumerate]();
    const result = Obj.createObjectMap();
    while (entries[EnumeratorLike_move]()) {
        const [key, value] = entries[EnumeratorLike_current];
        result[key] = value;
    }
    return result;
};
export default ReadonlyObjectMap_fromEntries;
