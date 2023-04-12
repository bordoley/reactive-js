/// <reference types="./ReadonlyRecord.map.d.ts" />

import { create, hasOwn } from "../../../__internal__/Object.js";
const ReadonlyRecord_map = (selector) => (obj) => {
    const result = create(null);
    for (const key in obj) {
        if (hasOwn(obj, key)) {
            result[key] = selector(obj[key]);
        }
    }
    return result;
};
export default ReadonlyRecord_map;
