/// <reference types="./SequenceLike.repeat.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { isSome, none } from '../../../functions.mjs';
import ContainerLike__repeat from '../ContainerLike/ContainerLike.repeat.mjs';

const SequenceLike__repeat = /*@__PURE__*/ (() => {
    const _repeat = (src, predicate, count, seq) => () => {
        const result = seq();
        if (isSome(result)) {
            return {
                [SequenceLike_data]: result[SequenceLike_data],
                [SequenceLike_next]: _repeat(src, predicate, count, result[SequenceLike_next]),
            };
        }
        else if (predicate(count)) {
            return _repeat(src, predicate, count + 1, src)();
        }
        else {
            return none;
        }
    };
    return ContainerLike__repeat((seq, predicate) => _repeat(seq, predicate, 1, seq));
})();

export { SequenceLike__repeat as default };
