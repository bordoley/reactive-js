/// <reference types="./Indexed.keep.d.ts" />

import { CollectionLike_count, KeyedLike_get, } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
const Indexed_keep = (predicate) => (indexed) => {
    const resultArray = [];
    for (let i = 0; i < indexed[CollectionLike_count]; i++) {
        const value = indexed[KeyedLike_get](i);
        if (predicate(value, i)) {
            resultArray.push(value);
        }
    }
    return pipe(resultArray, ReadonlyArray.toIndexed());
};
export default Indexed_keep;
