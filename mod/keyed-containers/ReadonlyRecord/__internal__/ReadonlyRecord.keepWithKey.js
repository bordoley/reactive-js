/// <reference types="./ReadonlyRecord.keepWithKey.d.ts" />

import { create, hasOwn } from "../../../__internal__/Object.js";
const ReadonlyRecord_keepWithKey = (predicate) => (obj) => {
    const result = create(null);
    for (const key in obj) {
        if (hasOwn(obj, key)) {
            const v = obj[key];
            if (predicate(v, key)) {
                result[key] = v;
            }
        }
    }
    return result;
};
export default ReadonlyRecord_keepWithKey;
