/// <reference types="./Enumerator.takeLast.d.ts" />

import IndexedCollection_toReadonlyArray from "../../IndexedCollection/__internal__/IndexedCollection.toReadonlyArray.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { pipe } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_move, QueueableLike_enqueue, } from "../../types.js";
const Enumerator_takeLast = (count) => (enumerator) => {
    const queue = Queue_createIndexedQueue(count, "drop-oldest");
    while (enumerator[EnumeratorLike_move]()) {
        const next = enumerator[EnumeratorLike_current];
        queue[QueueableLike_enqueue](next);
    }
    return pipe(queue, IndexedCollection_toReadonlyArray(), ReadonlyArray_enumerate());
};
export default Enumerator_takeLast;
