/// <reference types="./IndexedQueue.toReadonlyArray.d.ts" />

import { IndexedQueueLike_get, QueueLike_count, } from "../../../__internal__/util.internal.js";
import { newInstance } from "../../../functions.js";
const IndexedQueue_toReadonlyArray = () => (queue) => {
    const count = queue[QueueLike_count];
    const result = newInstance(Array, count);
    for (let i = 0; i < count; i++) {
        result[i] = queue[IndexedQueueLike_get](i);
    }
    return result;
};
export default IndexedQueue_toReadonlyArray;
