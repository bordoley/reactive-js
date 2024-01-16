/// <reference types="./Dictionary.keySet.d.ts" />

import { Set_add } from "../../../__internal__/constants.js";
import { DictionaryLike_keys, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../../collections.js";
import { newInstance } from "../../../functions.js";
const Dictionary_keySet = () => (dict) => {
    const result = newInstance(Set);
    const keys = dict[DictionaryLike_keys][EnumerableLike_enumerate]();
    while (keys[EnumeratorLike_move]()) {
        result[Set_add](keys[EnumeratorLike_current]);
    }
    return result;
};
export default Dictionary_keySet;
