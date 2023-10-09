/// <reference types="./EnumerableIterablePrototypeBase.d.ts" />

import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../collections.js";
import { returns } from "../../functions.js";
const EnumerableIterablePrototypeBase = /*@__PURE__*/ returns({
    *[Symbol.iterator]() {
        const enumerator = this[EnumerableLike_enumerate]();
        while (enumerator[EnumeratorLike_move]()) {
            yield enumerator[EnumeratorLike_current];
        }
    },
});
export default EnumerableIterablePrototypeBase;
