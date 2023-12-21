/// <reference types="./ReadonlyArray.entries.d.ts" />

import { KeyedCollection_type, } from "../../../collections.js";
import { pipe, tuple } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
import Indexed_toCollection from "../../Indexed/__private__/Indexed.toCollection.js";
const ReadonlyArray_entries = 
/*@__PURE__*/ Indexed_toCollection((arr, startIndex, count) => pipe(function* () {
    let startIndexInstance = startIndex;
    let countInstance = count;
    for (; countInstance !== 0; countInstance > 0
        ? (startIndexInstance++, countInstance--)
        : (startIndexInstance--, countInstance++)) {
        yield tuple(startIndexInstance, arr[startIndexInstance]);
    }
}, Enumerable_fromIteratorFactory()), v => v.length);
export default ReadonlyArray_entries;
