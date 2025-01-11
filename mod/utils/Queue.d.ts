import { Comparator } from "../functions.js";
import { BackpressureStrategy, QueueLike } from "../utils.js";
export declare const create: <T>(options?: {
    capacity?: number;
    comparator?: Comparator<T>;
    backpressureStrategy?: BackpressureStrategy;
}) => QueueLike<T>;
