/// <reference types="./Sequence.pairwise.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { isSome, none } from '../../../functions.mjs';

const Sequence$pairwise = 
/*@__PURE__*/ (() => {
    const _pairwise = (prev, seq) => () => {
        const result = seq();
        if (isSome(result)) {
            const { [SequenceLike_data]: data, [SequenceLike_next]: next } = result;
            const v = [prev, data];
            return {
                [SequenceLike_data]: v,
                [SequenceLike_next]: _pairwise(data, next),
            };
        }
        else {
            return none;
        }
    };
    return () => (seq) => {
        const first = seq();
        if (isSome(first)) {
            return _pairwise(first[SequenceLike_data], first[SequenceLike_next]);
        }
        else {
            return () => none;
        }
    };
})();

export { Sequence$pairwise as default };
