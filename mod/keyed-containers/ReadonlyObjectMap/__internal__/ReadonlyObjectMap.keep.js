/// <reference types="./ReadonlyObjectMap.keep.d.ts" />

import { create, hasOwn } from "../../../__internal__/Object.js";
const ReadonlyObjectMap_keep = (predicate) => (obj) => {
    const result = create(null);
    for (const key in obj) {
        if (hasOwn(obj, key)) {
            const v = obj[key];
            if (predicate(v)) {
                result[key] = v;
            }
        }
    }
    return result;
};
export default ReadonlyObjectMap_keep;
