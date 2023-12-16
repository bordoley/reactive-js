/// <reference types="./ReadonlyObjectMap.union.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
const ReadonlyObjectMap_union = (m2) => (m1) => {
    const result = Obj.create(null);
    for (const key in m1) {
        if (Obj.hasOwn(m1, key)) {
            result[key] = m1[key];
        }
    }
    for (const key in m2) {
        if (Obj.hasOwn(m2, key)) {
            result[key] = m2[key];
        }
    }
    return result;
};
export default ReadonlyObjectMap_union;
