/// <reference types="./ReadonlyArray.entries.d.ts" />

import { Collection_type, } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import Indexed_toCollection from "../../Indexed/__internal__/Indexed.toCollection.js";
const createEnumerableFromReadonlyArray = (arr, startIndex, count) => {
    function* ReadonlyArrayEntries() {
        for (; count !== 0; count > 0 ? (startIndex++, count--) : (startIndex--, count++)) {
            yield [startIndex, arr[startIndex]];
        }
    }
    return Enumerable_create(() => pipe(ReadonlyArrayEntries(), Enumerator_fromIterator()));
};
const ReadonlyArray_entries = 
/*@__PURE__*/ Indexed_toCollection(createEnumerableFromReadonlyArray, v => v.length);
export default ReadonlyArray_entries;
