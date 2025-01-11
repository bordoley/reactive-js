/// <reference types="./Dictionary.values.d.ts" />

import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
const Dictionary_values = () => (dict) => ({
    *[Symbol.iterator]() {
        for (const key of dict[DictionaryLike_keys]) {
            yield dict[DictionaryLike_get](key);
        }
    },
});
export default Dictionary_values;
