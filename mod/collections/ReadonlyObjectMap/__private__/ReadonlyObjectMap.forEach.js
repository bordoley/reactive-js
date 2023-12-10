/// <reference types="./ReadonlyObjectMap.forEach.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
const ReadonlyObjectMap_forEach = (effect) => record => {
    for (const key in record) {
        if (Obj.hasOwn(record, key)) {
            const v = record[key];
            effect(v, key);
        }
    }
    return record;
};
export default ReadonlyObjectMap_forEach;
