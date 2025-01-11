/// <reference types="./ReadonlyObjectMap.values.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { returns } from "../../../functions.js";
const ReadonlyObjectMap_values = 
/*@__PURE__*/ returns((obj) => ({
    *[Symbol.iterator]() {
        for (const key in obj) {
            if (Obj.hasOwn(obj, key)) {
                yield obj[key];
            }
        }
    },
}));
export default ReadonlyObjectMap_values;
