import { IndexedQueueLike } from "../../../__internal__/util.internal.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const IndexedQueue_createFifoQueue: <T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => IndexedQueueLike<T>;
export default IndexedQueue_createFifoQueue;
