/// <reference types="./ReadonlyObjectMap.keySet.d.ts" />

import { hasOwn } from "../../__internal__/Object.js";
const ReadonlyObjectMap_keySet = () => (obj) => {
    const keys = new Set();
    for (const key in obj) {
        if (hasOwn(obj, key)) {
            keys.add(key);
        }
    }
    return keys;
};
export default ReadonlyObjectMap_keySet;
