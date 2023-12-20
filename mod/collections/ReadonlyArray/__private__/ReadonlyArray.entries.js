/// <reference types="./ReadonlyArray.entries.d.ts" />

import { KeyedCollection_type, } from "../../../collections.js";
import { pipe, tuple } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__private__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import Indexed_toCollection from "../../Indexed/__private__/Indexed.toCollection.js";
const createEnumerableFromReadonlyArray = (arr, startIndex, count) => {
    function* ReadonlyArrayEntries() {
        let startIndexInstance = startIndex;
        let countInstance = count;
        for (; countInstance !== 0; countInstance > 0
            ? (startIndexInstance++, countInstance--)
            : (startIndexInstance--, countInstance++)) {
            yield tuple(startIndexInstance, arr[startIndexInstance]);
        }
    }
    return Enumerable_create(() => pipe(ReadonlyArrayEntries(), Enumerator_fromIterator()));
};
const ReadonlyArray_entries = 
/*@__PURE__*/ Indexed_toCollection(createEnumerableFromReadonlyArray, v => v.length);
export default ReadonlyArray_entries;
