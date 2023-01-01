/// <reference types="./SequenceLike.takeLast.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { isSome, getLength, pipe, callWith } from '../../../functions.mjs';
import ReadonlyArrayLike__toSequence from '../ReadonlyArrayLike/ReadonlyArrayLike.toSequence.mjs';

const SequenceLike__takeLast = 
/*@__PURE__*/ (() => {
    const _takeLast = (maxCount, seq) => () => {
        const last = [];
        let result = seq();
        while (true) {
            if (isSome(result)) {
                last.push(result[SequenceLike_data]);
                if (getLength(last) > maxCount) {
                    last.shift();
                }
                result = result[SequenceLike_next]();
            }
            else {
                break;
            }
        }
        return pipe(last, ReadonlyArrayLike__toSequence(), callWith());
    };
    return (options = {}) => (seq) => {
        const { count = 1 } = options;
        return _takeLast(count, seq);
    };
})();

export { SequenceLike__takeLast as default };
