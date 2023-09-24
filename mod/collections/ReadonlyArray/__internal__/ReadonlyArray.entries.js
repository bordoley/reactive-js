/// <reference types="./ReadonlyArray.entries.d.ts" />

import { Container_type, } from "../../../collections.js";
import IndexedCollection_toContainer from "../../IndexedCollection/__internal__/IndexedCollection.toContainer.js";
function* iterate(arr, startIndex, count) {
    for (; count !== 0; count > 0 ? (startIndex++, count--) : (startIndex--, count++)) {
        yield [startIndex, arr[startIndex]];
    }
}
const ReadonlyArray_entries = 
/*@__PURE__*/ IndexedCollection_toContainer(iterate, v => v.length);
export default ReadonlyArray_entries;
