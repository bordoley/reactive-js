/// <reference types="./Dictionary.empty.d.ts" />

import { AssociativeCollectionLike_keys, CollectionLike_count, KeyedCollectionLike_get, } from "../../../core.js";
import Enumerator_empty from "../../../core/Enumerator/__internal__/Enumerator.empty.js";
import { none } from "../../../functions.js";
const empty = {
    [AssociativeCollectionLike_keys]: /*@__PURE__*/ Enumerator_empty(),
    [KeyedCollectionLike_get](_) {
        return none;
    },
    [CollectionLike_count]: 0,
};
const Dictionary_empty = () => empty;
export default Dictionary_empty;
