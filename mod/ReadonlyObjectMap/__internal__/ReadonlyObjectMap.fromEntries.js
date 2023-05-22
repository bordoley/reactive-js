/// <reference types="./ReadonlyObjectMap.fromEntries.d.ts" />

import * as Obj from "../../__internal__/Object.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
const ReadonlyObjectMap_fromEntries = () => (enumerable) => {
    const entries = enumerable[EnumerableLike_enumerate]();
    const obj = Obj.create(null);
    while (entries[EnumeratorLike_move]()) {
        const [key, value] = entries[EnumeratorLike_current];
        obj[key] = value;
    }
    return obj;
};
export default ReadonlyObjectMap_fromEntries;
