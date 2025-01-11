/// <reference types="./ReadonlyMap.entries.d.ts" />

import { returns } from "../../../functions.js";
const ReadonlyMap_entries = 
/*@__PURE__*/ returns(map => ({
    [Symbol.iterator]() {
        return map.entries();
    },
}));
export default ReadonlyMap_entries;
