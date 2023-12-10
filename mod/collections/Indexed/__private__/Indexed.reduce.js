/// <reference types="./Indexed.reduce.d.ts" />

import { CollectionLike_count, KeyedLike_get, } from "../../../collections.js";
const Indexed_reduce = (reducer, initialValue) => (indexed) => {
    const count = indexed[CollectionLike_count];
    let acc = initialValue();
    for (let i = 0; i < count; i++) {
        acc = reducer(acc, indexed[KeyedLike_get](i), i);
    }
    return acc;
};
export default Indexed_reduce;
