/// <reference types="./EnumerableIterableMixin.d.ts" />

import { mix, props } from "../../__internal__/mixins.js";
import { EnumerableLike_enumerate } from "../../collections.js";
import { pipe, returns } from "../../functions.js";
import Enumerator_fromIterator from "../Enumerator/__private__/Enumerator.fromIterator.js";
const EnumerableIterableMixin = /*@__PURE__*/ (() => {
    return returns(mix(function EnumerableIterableMixin(instance) {
        return instance;
    }, props({}), {
        [EnumerableLike_enumerate]() {
            return pipe(this[Symbol.iterator](), Enumerator_fromIterator());
        },
    }));
})();
export default EnumerableIterableMixin;
