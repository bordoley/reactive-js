/// <reference types="./Sequence.repeat.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { isSome, none } from "../../../functions.js";
import Container_repeat from "../../Container/__internal__/Container.repeat.js";
const Sequence_repeat = /*@__PURE__*/ (() => {
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
    return Container_repeat((seq, predicate) => _repeat(seq, predicate, 1, seq));
})();
export default Sequence_repeat;
