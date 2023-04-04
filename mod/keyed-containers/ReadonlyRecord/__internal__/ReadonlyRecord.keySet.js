/// <reference types="./ReadonlyRecord.keySet.d.ts" />

import { hasOwn } from "../../../__internal__/Object.js";
const ReadonlyRecord_keySet = () => (obj) => {
    const keys = new Set();
    for (const key in obj) {
        if (hasOwn(obj, key)) {
            keys.add(key);
        }
    }
    return keys;
};
export default ReadonlyRecord_keySet;
