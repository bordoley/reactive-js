/// <reference types="./ReadonlyObjectMap.mapWithKey.d.ts" />

import { create, hasOwn } from "../../../__internal__/Object.js";
const ReadonlyObjectMap_mapWithKey = (selector) => (obj) => {
    const result = create(null);
    for (const key in obj) {
        if (hasOwn(obj, key)) {
            result[key] = selector(obj[key], key);
        }
    }
    return result;
};
export default ReadonlyObjectMap_mapWithKey;
