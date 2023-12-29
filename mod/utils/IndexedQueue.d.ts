import { IndexedQueueLike, QueueableLike, QueueableLike_backpressureStrategy } from "../utils.js";
export declare const create: <T>(options?: {
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => IndexedQueueLike<T>;
