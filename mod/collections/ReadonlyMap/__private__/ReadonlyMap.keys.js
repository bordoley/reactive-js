/// <reference types="./ReadonlyMap.keys.d.ts" />

import { returns } from "../../../functions.js";
const ReadonlyMap_keys = /*@__PURE__*/ returns(map => ({
    [Symbol.iterator]() {
        return map.keys();
    },
}));
export default ReadonlyMap_keys;
