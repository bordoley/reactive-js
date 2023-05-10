/// <reference types="./ReadonlyObjectMap.mapWithKey.d.ts" />

import * as Obj from "../../__internal__/Object.js";
const ReadonlyObjectMap_mapWithKey = (selector) => (obj) => {
    const result = Obj.create(null);
    for (const key in obj) {
        if (Obj.hasOwn(obj, key)) {
            result[key] = selector(obj[key], key);
        }
    }
    return result;
};
export default ReadonlyObjectMap_mapWithKey;
