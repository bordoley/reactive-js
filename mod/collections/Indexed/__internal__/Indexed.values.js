/// <reference types="./Indexed.values.d.ts" />

import { CollectionLike_count, KeyedCollection_type, KeyedLike_get, } from "../../../collections.js";
import { pick, pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import Indexed_toCollection from "./Indexed.toCollection.js";
const Indexed_values = 
/*@__PURE__*/ Indexed_toCollection((indexed, startIndex, count) => {
    function* Indexed_values() {
        for (; count !== 0; count > 0 ? (startIndex++, count--) : (startIndex--, count++)) {
            yield indexed[KeyedLike_get](startIndex);
        }
    }
    return Enumerable_create(() => pipe(Indexed_values(), Enumerator_fromIterator()));
}, pick(CollectionLike_count));
export default Indexed_values;
