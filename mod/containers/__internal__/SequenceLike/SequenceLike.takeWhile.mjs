/// <reference types="./SequenceLike.takeWhile.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { isSome, returns, none } from '../../../functions.mjs';

const takeWhile = /*@__PURE__*/ (() => {
    const _takeWhile = (predicate, inclusive, seq) => () => {
        const result = seq();
        return isSome(result) && predicate(result[SequenceLike_data])
            ? {
                [SequenceLike_data]: result[SequenceLike_data],
                [SequenceLike_next]: _takeWhile(predicate, inclusive, result[SequenceLike_next]),
            }
            : isSome(result) && inclusive
                ? {
                    [SequenceLike_data]: result[SequenceLike_data],
                    [SequenceLike_next]: returns(none),
                }
                : none;
    };
    return (predicate, options = {}) => (seq) => {
        const { inclusive = false } = options;
        return _takeWhile(predicate, inclusive, seq);
    };
})();

export { takeWhile as default };
