/// <reference types="./Sequence.keep.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { isSome } from '../../../functions.mjs';

const Sequence$keep = /*@__PURE__*/ (() => {
    const _keep = (predicate, seq) => () => {
        let result = seq();
        while (true) {
            if (isSome(result)) {
                if (predicate(result[SequenceLike_data])) {
                    return {
                        [SequenceLike_data]: result[SequenceLike_data],
                        [SequenceLike_next]: _keep(predicate, result[SequenceLike_next]),
                    };
                }
                else {
                    result = result[SequenceLike_next]();
                }
            }
            else {
                return result;
            }
        }
    };
    return (predicate) => (seq) => _keep(predicate, seq);
})();

export { Sequence$keep as default };
