import { Comparator } from "../functions.js";
import { BackpressureStrategy, FlowControlQueueLike, QueueLike } from "../utils.js";
export declare const create: <T>(options?: {
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
}) => QueueLike<T>;
export declare const createWithFlowControl: <T>(options?: {
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
}) => FlowControlQueueLike<T>;
export declare const createSorted: <T>(comparator: Comparator<T>) => QueueLike<T>;
