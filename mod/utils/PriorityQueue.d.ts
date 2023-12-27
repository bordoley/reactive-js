import { Comparator } from "../functions.js";
import { QueueLike, QueueableLike, QueueableLike_backpressureStrategy } from "../utils.js";
export declare const create: <T>(comparator: Comparator<T>, options?: {
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => QueueLike<T>;
