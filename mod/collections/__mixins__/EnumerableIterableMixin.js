/// <reference types="./EnumerableIterableMixin.d.ts" />

import { mix, props } from "../../__internal__/mixins.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../collections.js";
import { returns } from "../../functions.js";
const EnumerableIterableMixin = /*@__PURE__*/ (() => returns(mix(function EnumerableIterableMixin(instance) {
    return instance;
}, props(), {
    *[Symbol.iterator]() {
        const enumerator = this[EnumerableLike_enumerate]();
        while (enumerator[EnumeratorLike_move]()) {
            yield enumerator[EnumeratorLike_current];
        }
    },
})))();
export default EnumerableIterableMixin;
