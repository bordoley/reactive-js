/// <reference types="./Dictionary.entries.d.ts" />

import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { returns, tuple } from "../../../functions.js";
const Dictionary_entries = 
/*@__PURE__*/
returns((dict) => ({
    *[Symbol.iterator]() {
        for (const key of dict[DictionaryLike_keys]) {
            yield tuple(key, dict[DictionaryLike_get](key));
        }
    },
}));
export default Dictionary_entries;
