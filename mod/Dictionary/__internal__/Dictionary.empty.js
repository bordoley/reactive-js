/// <reference types="./Dictionary.empty.d.ts" />

import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import { none } from "../../functions.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
const empty = {
    [AssociativeCollectionLike_keys]: /*@__PURE__*/ Enumerator_empty(),
    [KeyedCollectionLike_get](_) {
        return none;
    },
    [CollectionLike_count]: 0,
};
const Dictionary_empty = () => empty;
export default Dictionary_empty;
