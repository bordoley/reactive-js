import { Function1 } from "../functions.js";
import { IndexedQueueLike, QueueableLike, QueueableLike_backpressureStrategy } from "../utils.js";
export declare const create: <T>(options?: {
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => IndexedQueueLike<T>;
export declare const toReadonlyArray: <T>() => Function1<IndexedQueueLike<T>, readonly T[]>;
