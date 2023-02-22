/// <reference types="./Sequence.map.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { isSome, none } from "../../../functions.js";
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
export default Sequence_map;
