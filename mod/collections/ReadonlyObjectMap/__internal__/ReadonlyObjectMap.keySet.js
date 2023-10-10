/// <reference types="./ReadonlyObjectMap.keySet.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
const ReadonlyObjectMap_keySet = () => (obj) => {
    const keys = new Set();
    for (const key in obj) {
        if (Obj.hasOwn(obj, key)) {
            keys.add(key);
        }
    }
    return keys;
};
export default ReadonlyObjectMap_keySet;
