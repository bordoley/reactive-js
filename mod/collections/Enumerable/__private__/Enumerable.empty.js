/// <reference types="./Enumerable.empty.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { none, pipe, returns } from "../../../functions.js";
import Enumerable_create from "./Enumerable.create.js";
const Enumerable_empty = /*@__PURE__*/ (() => {
    const emptyEnumerator = {
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
        [EnumeratorLike_isCompleted]: true,
        [EnumeratorLike_move]() {
            return false;
        },
    };
    return pipe(emptyEnumerator, returns, Enumerable_create, returns);
})();
export default Enumerable_empty;
