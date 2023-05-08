import { IndexedQueueLike } from "../../../__internal__/core.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../core.js";
declare const Queue_createIndexedQueue: <T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => IndexedQueueLike<T>;
export default Queue_createIndexedQueue;
