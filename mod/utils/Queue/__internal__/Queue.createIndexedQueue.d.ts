import { IndexedQueueLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../utils.js";
declare const Queue_createIndexedQueue: <T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => IndexedQueueLike<T>;
export default Queue_createIndexedQueue;
