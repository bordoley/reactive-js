/// <reference types="./Enumerable.fromReadonlyArray.d.ts" />

import { KeyedCollection_type, } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
import Indexed_toCollection from "../../Indexed/__private__/Indexed.toCollection.js";
const Enumerable_fromReadonlyArray = 
/*@__PURE__*/ Indexed_toCollection((arr, startIndex, count) => pipe(function* () {
    let iterCount = count;
    let iterStartIndex = startIndex;
    for (; iterCount !== 0; iterCount > 0
        ? (iterStartIndex++, iterCount--)
        : (iterStartIndex--, iterCount++)) {
        yield arr[iterStartIndex];
    }
}, Enumerable_fromIteratorFactory()), v => v.length);
export default Enumerable_fromReadonlyArray;
