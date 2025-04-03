/// <reference types="./Dictionary.values.d.ts" />

import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import Iterable_createPure from "../../../computations/Iterable/__private__/Itrerable.createPure.js";
import { returns } from "../../../functions.js";
const Dictionary_values = /*@__PURE__*/ returns((dict) => Iterable_createPure(function* () {
    for (const key of dict[DictionaryLike_keys]) {
        yield dict[DictionaryLike_get](key);
    }
}));
export default Dictionary_values;
