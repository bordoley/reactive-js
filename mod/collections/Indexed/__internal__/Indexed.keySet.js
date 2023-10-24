/// <reference types="./Indexed.keySet.d.ts" />

import { CollectionLike_count } from "../../../collections.js";
import { newInstance } from "../../../functions.js";
const Indexed_keySet = () => (indexed) => {
    const result = newInstance((Set));
    const count = indexed[CollectionLike_count];
    for (let i = 0; i < count; i++) {
        result.add(i);
    }
    return result;
};
export default Indexed_keySet;
