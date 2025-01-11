/// <reference types="./Dictionary.forEach.d.ts" />

import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
const Dictionary_forEach = (effect) => dict => {
    for (const key of dict[DictionaryLike_keys]) {
        const value = dict[DictionaryLike_get](key);
        effect(value, key);
    }
};
export default Dictionary_forEach;
