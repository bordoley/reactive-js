/// <reference types="./Enumerable.toIterable.d.ts" />

import { newInstance, pipe } from "../../../functions.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerable_move from "../../Source/__internal__/Source.move.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
const EnumerableIterable_enumerable = Symbol("EnumerableIterable_enumerable");
class EnumerableIterable {
    constructor(enumerable) {
        this[EnumerableIterable_enumerable] = enumerable;
    }
    *[Symbol.iterator]() {
        const enumerator = pipe(this[EnumerableIterable_enumerable], Enumerable_enumerate());
        while (Enumerable_move(enumerator)) {
            yield Enumerator_getCurrent(enumerator);
        }
    }
}
const Enumerable_toIterable = () => enumerable => newInstance(EnumerableIterable, enumerable);
export default Enumerable_toIterable;
