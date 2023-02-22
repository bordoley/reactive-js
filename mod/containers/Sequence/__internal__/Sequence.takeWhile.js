/// <reference types="./Sequence.takeWhile.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { isSome, none, returns } from "../../../functions.js";
const Sequence_takeWhile = 
/*@__PURE__*/ (() => {
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
export default Sequence_takeWhile;
