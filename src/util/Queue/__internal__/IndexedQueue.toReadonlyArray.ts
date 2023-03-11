import {
  IndexedQueueLike,
  IndexedQueueLike_get,
} from "../../../__internal__/util.internal.js";
import { newInstance } from "../../../functions.js";
import { QueueableLike_count } from "../../../util.js";

const IndexedQueue_toReadonlyArray =
  <T>() =>
  (queue: IndexedQueueLike<T>) => {
    const count = queue[QueueableLike_count];
    const result = newInstance<Array<T>, number>(Array, count);

    for (let i = 0; i < count; i++) {
      result[i] = queue[IndexedQueueLike_get](i);
    }

    return result;
  };

export default IndexedQueue_toReadonlyArray;
