/// <reference types="./Indexed.forEach.d.ts" />

import { CollectionLike_count, KeyedLike_get, } from "../../../collections.js";
const Indexed_forEach = (effect) => indexed => {
    const count = indexed[CollectionLike_count];
    for (let i = 0; i < count; i++) {
        effect(indexed[KeyedLike_get](i), i);
    }
};
export default Indexed_forEach;
