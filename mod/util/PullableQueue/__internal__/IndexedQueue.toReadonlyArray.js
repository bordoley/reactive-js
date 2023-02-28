/// <reference types="./IndexedQueue.toReadonlyArray.d.ts" />

import { newInstance } from "../../../functions.js";
import { QueueLike_count } from "../../../util.js";
import { IndexedQueueLike_get, } from "../../__internal__/util.internal.js";
const IndexedQueue_toReadonlyArray = () => (queue) => {
    const count = queue[QueueLike_count];
    const result = newInstance(Array, count);
    for (let i = 0; i < count; i++) {
        result[i] = queue[IndexedQueueLike_get](i);
    }
    return result;
};
export default IndexedQueue_toReadonlyArray;
