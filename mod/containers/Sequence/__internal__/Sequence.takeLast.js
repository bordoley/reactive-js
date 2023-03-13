/// <reference types="./Sequence.takeLast.d.ts" />

import { max } from "../../../__internal__/math.js";
import { QueueLike_pull } from "../../../__internal__/util.internal.js";
import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { callWith, isSome, pipe } from "../../../functions.js";
import { QueueableLike_push } from "../../../util.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import IndexedQueue_toReadonlyArray from "../../../util/Queue/__internal__/IndexedQueue.toReadonlyArray.js";
import ReadonlyArray_toSequence from "../../ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
const Sequence_takeLast = 
/*@__PURE__*/ (() => {
    const _takeLast = (maxBufferSize, seq) => () => {
        const last = IndexedQueue_createFifoQueue({ maxBufferSize });
        let result = seq();
        while (true) {
            if (isSome(result)) {
                if (!last[QueueableLike_push](result[SequenceLike_data])) {
                    last[QueueLike_pull]();
                }
                result = result[SequenceLike_next]();
            }
            else {
                break;
            }
        }
        return pipe(last, IndexedQueue_toReadonlyArray(), ReadonlyArray_toSequence(), callWith());
    };
    return (options = {}) => (seq) => {
        const { count = 1 } = options;
        return _takeLast(max(count, 0), seq);
    };
})();
export default Sequence_takeLast;
