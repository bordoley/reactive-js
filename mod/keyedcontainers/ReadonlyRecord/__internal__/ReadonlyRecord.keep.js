/// <reference types="./ReadonlyRecord.keep.d.ts" />

import { create, hasOwn } from "../../../__internal__/Object.js";
const ReadonlyRecord_keep = (predicate) => (obj) => {
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
export default ReadonlyRecord_keep;
