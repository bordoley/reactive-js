/// <reference types="./ReadonlyRecord.mapWithKey.d.ts" />

import { create, hasOwn } from "../../../__internal__/Object.js";
const ReadonlyRecord_mapWithKey = (mapper) => (obj) => {
    const result = create(null);
    for (const key in obj) {
        if (hasOwn(obj, key)) {
            result[key] = mapper(obj[key], key);
        }
    }
    return result;
};
export default ReadonlyRecord_mapWithKey;
