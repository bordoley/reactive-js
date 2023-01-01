/// <reference types="./SequenceLike.takeFirst.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { isSome, none } from '../../../functions.mjs';

const SequenceLike__takeFirst = 
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

export { SequenceLike__takeFirst as default };
