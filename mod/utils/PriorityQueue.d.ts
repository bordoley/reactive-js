import { Comparator } from "../functions.js";
import { BackpressureStrategy, QueueLike } from "../utils.js";
export declare const create: <T>(comparator: Comparator<T>, options?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => QueueLike<T>;
