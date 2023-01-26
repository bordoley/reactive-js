/// <reference types="./Enumerable.toIterable.d.ts" />
import { pipe, newInstance } from '../../../functions.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Source$move from '../Source/Source.move.mjs';
import Enumerable$enumerate from './Enumerable.enumerate.mjs';

const Enumerable$toIterable = 
/*@__PURE__*/ (() => {
    class EnumerableIterable {
        constructor(enumerable) {
            this.enumerable = enumerable;
        }
        *[Symbol.iterator]() {
            const enumerator = pipe(this.enumerable, Enumerable$enumerate());
            while (Source$move(enumerator)) {
                yield Enumerator$getCurrent(enumerator);
            }
        }
    }
    return () => enumerable => newInstance(EnumerableIterable, enumerable);
})();

export { Enumerable$toIterable as default };
