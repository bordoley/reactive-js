/// <reference types="./Dictionary.entries.d.ts" />

import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import Iterable_createPure from "../../../computations/Iterable/__private__/Itrerable.createPure.js";
import { returns, tuple } from "../../../functions.js";
const Dictionary_entries = 
/*@__PURE__*/
returns((dict) => Iterable_createPure(function* () {
    for (const key of dict[DictionaryLike_keys]) {
        yield tuple(key, dict[DictionaryLike_get](key));
    }
}));
export default Dictionary_entries;
