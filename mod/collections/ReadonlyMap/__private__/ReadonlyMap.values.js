/// <reference types="./ReadonlyMap.values.d.ts" />

import { returns } from "../../../functions.js";
const ReadonlyMap_values = 
/*@__PURE__*/ returns(map => ({
    [Symbol.iterator]() {
        return map.values();
    },
}));
export default ReadonlyMap_values;
