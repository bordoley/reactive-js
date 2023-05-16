/// <reference types="./Dictionary.keySet.d.ts" />

import { newInstance } from "../../functions.js";
import { AssociativeCollectionLike_keys, EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
const Dictionary_keySet = () => (dict) => {
    const result = newInstance(Set);
    const keys = dict[AssociativeCollectionLike_keys]();
    while (keys[EnumeratorLike_move]()) {
        result.add(keys[EnumeratorLike_current]);
    }
    return result;
};
export default Dictionary_keySet;
