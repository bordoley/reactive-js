import { IndexedQueueLike } from "../../__internal__/types.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../types.js";
declare const Queue_createIndexedQueue: <T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => IndexedQueueLike<T>;
export default Queue_createIndexedQueue;
