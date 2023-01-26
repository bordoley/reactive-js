/// <reference types="./Sequence.map.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { isSome, none } from '../../../functions.mjs';

const Sequence_map = /*@__PURE__*/ (() => {
    const _map = (mapper, seq) => () => {
        const result = seq();
        return isSome(result)
            ? {
                [SequenceLike_data]: mapper(result[SequenceLike_data]),
                [SequenceLike_next]: _map(mapper, result[SequenceLike_next]),
            }
            : none;
    };
    return (mapper) => (seq) => _map(mapper, seq);
})();

export { Sequence_map as default };
