import { IndexedQueueLike } from "../../../__internal__/util.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Queue_createIndexedQueue: <T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => IndexedQueueLike<T>;
export default Queue_createIndexedQueue;
