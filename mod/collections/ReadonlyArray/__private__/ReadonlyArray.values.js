/// <reference types="./ReadonlyArray.values.d.ts" />

import { KeyedCollection_type, } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
import Indexed_toCollection from "../../Indexed/__private__/Indexed.toCollection.js";
const ReadonlyArray_values = 
/*@__PURE__*/ Indexed_toCollection((arr, startIndex, count) => pipe(function* () {
    let iterCount = count;
    let iterStartIndex = startIndex;
    for (; iterCount !== 0; iterCount > 0
        ? (iterStartIndex++, iterCount--)
        : (iterStartIndex--, iterCount++)) {
        yield arr[iterStartIndex];
    }
}, Enumerable_fromIteratorFactory()), v => v.length);
export default ReadonlyArray_values;
