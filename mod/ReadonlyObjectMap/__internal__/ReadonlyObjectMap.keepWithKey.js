/// <reference types="./ReadonlyObjectMap.keepWithKey.d.ts" />

import * as Obj from "../../__internal__/Object.js";
const ReadonlyObjectMap_keepWithKey = (predicate) => (obj) => {
    const result = Obj.create(null);
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
export default ReadonlyObjectMap_keepWithKey;
