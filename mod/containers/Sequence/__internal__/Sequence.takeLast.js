/// <reference types="./Sequence.takeLast.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { callWith, isSome, pipe } from "../../../functions.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import IndexedQueue_createFifoQueue from "../../../util/PullableQueue/__internal__/IndexedQueue.createFifoQueue.js";
import IndexedQueue_toReadonlyArray from "../../../util/PullableQueue/__internal__/IndexedQueue.toReadonlyArray.js";
import { PullableQueueLike_pull } from "../../../util/__internal__/util.internal.js";
import ReadonlyArray_toSequence from "../../ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
const Sequence_takeLast = 
/*@__PURE__*/ (() => {
    const _takeLast = (maxCount, seq) => () => {
        const last = IndexedQueue_createFifoQueue();
        let result = seq();
        while (true) {
            if (isSome(result)) {
                last[QueueLike_push](result[SequenceLike_data]);
                if (last[QueueLike_count] > maxCount) {
                    last[PullableQueueLike_pull]();
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
        return _takeLast(count, seq);
    };
})();
export default Sequence_takeLast;
