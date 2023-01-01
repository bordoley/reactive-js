/// <reference types="./EnumerableLike.toIterable.d.ts" />
import { pipe, newInstance } from '../../../functions.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import SourceLike__move from '../SourceLike/SourceLike.move.mjs';
import EnumerableLike__enumerate from './EnumerableLike.enumerate.mjs';

const EnumerableLike__toIterable = 
/*@__PURE__*/ (() => {
    class EnumerableIterable {
        constructor(enumerable) {
            this.enumerable = enumerable;
        }
        *[Symbol.iterator]() {
            const enumerator = pipe(this.enumerable, EnumerableLike__enumerate());
            while (SourceLike__move(enumerator)) {
                yield EnumeratorLike__getCurrent(enumerator);
            }
        }
    }
    return () => enumerable => newInstance(EnumerableIterable, enumerable);
})();

export { EnumerableLike__toIterable as default };
