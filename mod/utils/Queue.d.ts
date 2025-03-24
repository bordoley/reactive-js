import { Comparator } from "../functions.js";
import { BackpressureStrategy, QueueLike } from "../utils.js";
export declare const create: <T>(options?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => QueueLike<T>;
export declare const createSorted: <T>(comparator: Comparator<T>) => QueueLike<T>;
export declare const createDropOldest: <T>(capacity: number) => QueueLike<T>;
