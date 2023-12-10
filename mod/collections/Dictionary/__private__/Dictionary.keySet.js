/// <reference types="./Dictionary.keySet.d.ts" />

import { AssociativeLike_keys, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../../collections.js";
import { newInstance } from "../../../functions.js";
const Dictionary_keySet = () => (dict) => {
    const result = newInstance(Set);
    const keys = dict[AssociativeLike_keys][EnumerableLike_enumerate]();
    while (keys[EnumeratorLike_move]()) {
        result.add(keys[EnumeratorLike_current]);
    }
    return result;
};
export default Dictionary_keySet;
