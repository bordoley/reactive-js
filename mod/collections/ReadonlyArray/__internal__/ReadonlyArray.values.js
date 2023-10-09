/// <reference types="./ReadonlyArray.values.d.ts" />

import { Collection_type, } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import IndexedCollection_toCollection from "../../IndexedCollection/__internal__/IndexedCollection.toCollection.js";
const ReadonlyArray_values = 
/*@__PURE__*/ IndexedCollection_toCollection((arr, startIndex, count) => {
    function* ReadonlyArrayValues() {
        for (; count !== 0; count > 0 ? (startIndex++, count--) : (startIndex--, count++)) {
            yield arr[startIndex];
        }
    }
    return Enumerable_create(() => pipe(ReadonlyArrayValues(), Enumerator_fromIterator()));
}, v => v.length);
export default ReadonlyArray_values;
