/// <reference types="./ReadonlyRecord.union.d.ts" />

import { create, hasOwn } from "../../../__internal__/Object.js";
import { isNone } from "../../../functions.js";
const ReadonlyRecord_union = (m1, m2) => {
    const result = create(null);
    for (const key in m1) {
        if (hasOwn(m1, key)) {
            result[key] = m1[key];
        }
    }
    for (const key in m2) {
        if (hasOwn(m2, key) && isNone(result[key])) {
            result[key] = m2[key];
        }
    }
    return result;
};
export default ReadonlyRecord_union;
