/// <reference types="./Enumerable.toIterable.d.ts" />
import { pipe, newInstance } from '../../../functions.mjs';
import Enumerator_getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Source_move from '../Source/Source.move.mjs';
import Enumerable_enumerate from './Enumerable.enumerate.mjs';

const EnumerableIterable_enumerable = Symbol("EnumerableIterable_enumerable");
class EnumerableIterable {
    constructor(enumerable) {
        this[EnumerableIterable_enumerable] = enumerable;
    }
    *[Symbol.iterator]() {
        const enumerator = pipe(this[EnumerableIterable_enumerable], Enumerable_enumerate());
        while (Source_move(enumerator)) {
            yield Enumerator_getCurrent(enumerator);
        }
    }
}
const Enumerable_toIterable = () => enumerable => newInstance(EnumerableIterable, enumerable);

export { Enumerable_toIterable as default };
