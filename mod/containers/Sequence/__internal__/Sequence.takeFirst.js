/// <reference types="./Sequence.takeFirst.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { isSome, none } from "../../../functions.js";
const Sequence_takeFirst = 
/*@__PURE__*/ (() => {
    const _takeFirst = (count, seq) => () => {
        if (count > 0) {
            const result = seq();
            return isSome(result)
                ? {
                    [SequenceLike_data]: result[SequenceLike_data],
                    [SequenceLike_next]: _takeFirst(count - 1, result[SequenceLike_next]),
                }
                : none;
        }
        else {
            return none;
        }
    };
    return (options = {}) => (seq) => {
        const { count = 1 } = options;
        return _takeFirst(count, seq);
    };
})();
export default Sequence_takeFirst;
