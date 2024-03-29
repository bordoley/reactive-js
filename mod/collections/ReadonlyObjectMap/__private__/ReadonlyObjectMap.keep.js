/// <reference types="./ReadonlyObjectMap.keep.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
const ReadonlyObjectMap_keep = (predicate) => (obj) => {
    const result = Obj.createObjectMap();
    for (const key in obj) {
        if (Obj.hasOwn(obj, key)) {
            const v = obj[key];
            if (predicate(v, key)) {
                result[key] = v;
            }
        }
    }
    return result;
};
export default ReadonlyObjectMap_keep;
