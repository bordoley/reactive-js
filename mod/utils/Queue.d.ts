import { Comparator } from "../functions.js";
import { BackpressureStrategy, QueueLike } from "../utils.js";
export declare const create: <T>(options?: {
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
}) => QueueLike<T>;
export declare const createSorted: <T>(comparator: Comparator<T>) => QueueLike<T>;
