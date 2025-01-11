/// <reference types="./ReadonlyObjectMap.entries.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { returns, tuple } from "../../../functions.js";
const ReadonlyObjectMap_entries = 
/*@__PURE__*/ returns((obj) => ({
    *[Symbol.iterator]() {
        for (const key in obj) {
            if (Obj.hasOwn(obj, key)) {
                yield tuple(key, obj[key]);
            }
        }
    },
}));
export default ReadonlyObjectMap_entries;
