/// <reference types="./ReadonlyArray.values.d.ts" />

import IndexedCollection_toContainer from "../../IndexedCollection/__internal__/IndexedCollection.toContainer.js";
function* iterate(values, startIndex, count) {
    for (; count !== 0; count > 0 ? (startIndex++, count--) : (startIndex--, count++)) {
        yield values[startIndex];
    }
}
const ReadonlyArray_values = 
/*@__PURE__*/ IndexedCollection_toContainer(iterate, v => v.length);
export default ReadonlyArray_values;
