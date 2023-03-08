/// <reference types="./Enumerable.toIterable.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_move, } from "../../../containers.js";
import { newInstance, pipe } from "../../../functions.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
const EnumerableIterable_enumerable = Symbol("EnumerableIterable_enumerable");
class EnumerableIterable {
    constructor(enumerable) {
        this[EnumerableIterable_enumerable] = enumerable;
    }
    *[Symbol.iterator]() {
        const enumerator = pipe(this[EnumerableIterable_enumerable], Enumerable_enumerate());
        while (enumerator[EnumeratorLike_move]()) {
            yield enumerator[EnumeratorLike_current];
        }
    }
}
const Enumerable_toIterable = () => enumerable => newInstance(EnumerableIterable, enumerable);
export default Enumerable_toIterable;
