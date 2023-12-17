/// <reference types="./ReadonlyArray.values.d.ts" />

import { KeyedCollection_type, } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__private__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import Indexed_toCollection from "../../Indexed/__private__/Indexed.toCollection.js";
const ReadonlyArray_values = 
/*@__PURE__*/ Indexed_toCollection((arr, startIndex, count) => {
    function* ReadonlyArrayValues() {
        let iterCount = count;
        let iterStartIndex = startIndex;
        for (; iterCount !== 0; iterCount > 0
            ? (iterStartIndex++, iterCount--)
            : (iterStartIndex--, iterCount++)) {
            yield arr[iterStartIndex];
        }
    }
    return Enumerable_create(() => pipe(ReadonlyArrayValues(), Enumerator_fromIterator()));
}, v => v.length);
export default ReadonlyArray_values;
