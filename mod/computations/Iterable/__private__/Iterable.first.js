/// <reference types="./Iterable.first.d.ts" />

import { none, returns } from "../../../functions.js";
const Iterable_first = /*@__PURE__*/ returns((iter) => {
    for (const v of iter) {
        return v;
    }
    return none;
});
export default Iterable_first;
