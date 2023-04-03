/// <reference types="./ReadonlyRecord.forEachWithKey.d.ts" />

import { hasOwn } from "../../../__internal__/Object.js";
const ReadonlyRecord_forEachWithKey = (effect) => record => {
    for (const key in record) {
        if (hasOwn(record, key)) {
            const v = record[key];
            effect(v, key);
        }
    }
    return record;
};
export default ReadonlyRecord_forEachWithKey;
