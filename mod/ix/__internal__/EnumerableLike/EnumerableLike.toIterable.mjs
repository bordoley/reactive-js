/// <reference types="./EnumerableLike.toIterable.d.ts" />
import { pipe, newInstance } from '../../../functions.mjs';
import getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import move from '../SourceLike/SourceLike.move.mjs';
import enumerate from './EnumerableLike.enumerate.mjs';

const toIterable = 
/*@__PURE__*/ (() => {
    class EnumerableIterable {
        constructor(enumerable) {
            this.enumerable = enumerable;
        }
        *[Symbol.iterator]() {
            const enumerator = pipe(this.enumerable, enumerate());
            while (move(enumerator)) {
                yield getCurrent(enumerator);
            }
        }
    }
    return () => enumerable => newInstance(EnumerableIterable, enumerable);
})();

export { toIterable as default };
