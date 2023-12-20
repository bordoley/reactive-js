/// <reference types="./Indexed.entries.d.ts" />

import { CollectionLike_count, KeyedCollection_type, KeyedLike_get, } from "../../../collections.js";
import { pick, pipe, tuple } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__private__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import Indexed_toCollection from "./Indexed.toCollection.js";
const Indexed_entries = 
/*@__PURE__*/ Indexed_toCollection((indexed, startIndex, count) => {
    function* Indexed_entries() {
        let startIndexInstance = startIndex;
        let countInstance = count;
        for (; countInstance !== 0; countInstance > 0
            ? (startIndexInstance++, countInstance--)
            : (startIndexInstance--, countInstance++)) {
            yield tuple(startIndexInstance, indexed[KeyedLike_get](startIndexInstance));
        }
    }
    return Enumerable_create(() => pipe(Indexed_entries(), Enumerator_fromIterator()));
}, pick(CollectionLike_count));
export default Indexed_entries;
