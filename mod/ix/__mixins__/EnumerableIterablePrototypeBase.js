/// <reference types="./EnumerableIterablePrototypeBase.d.ts" />

import { returns } from "../../functions.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../ix.js";
const EnumerableIterablePrototypeBase = /*@__PURE__*/ returns({
    *[Symbol.iterator]() {
        const enumerator = this[EnumerableLike_enumerate]();
        while (enumerator[EnumeratorLike_move]()) {
            yield enumerator[EnumeratorLike_current];
        }
    },
});
export default EnumerableIterablePrototypeBase;
