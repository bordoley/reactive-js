/// <reference types="./Indexed.entries.d.ts" />

import { CollectionLike_count, KeyedCollection_type, KeyedLike_get, } from "../../../collections.js";
import { pick, pipe, tuple } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
import Indexed_toCollection from "./Indexed.toCollection.js";
const Indexed_entries = 
/*@__PURE__*/ Indexed_toCollection((indexed, startIndex, count) => pipe(function* () {
    let startIndexInstance = startIndex;
    let countInstance = count;
    for (; countInstance !== 0; countInstance > 0
        ? (startIndexInstance++, countInstance--)
        : (startIndexInstance--, countInstance++)) {
        yield tuple(startIndexInstance, indexed[KeyedLike_get](startIndexInstance));
    }
}, Enumerable_fromIteratorFactory()), pick(CollectionLike_count));
export default Indexed_entries;
