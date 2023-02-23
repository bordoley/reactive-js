/// <reference types="./Sequence.takeLast.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { callWith, isSome, pipe } from "../../../functions.js";
import ReadonlyArray_getLength from "../../ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_toSequence from "../../ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
const Sequence_takeLast = 
/*@__PURE__*/ (() => {
    const _takeLast = (maxCount, seq) => () => {
        const last = [];
        let result = seq();
        while (true) {
            if (isSome(result)) {
                last.push(result[SequenceLike_data]);
                if (ReadonlyArray_getLength(last) > maxCount) {
                    last.shift();
                }
                result = result[SequenceLike_next]();
            }
            else {
                break;
            }
        }
        return pipe(last, ReadonlyArray_toSequence(), callWith());
    };
    return (options = {}) => (seq) => {
        const { count = 1 } = options;
        return _takeLast(count, seq);
    };
})();
export default Sequence_takeLast;
