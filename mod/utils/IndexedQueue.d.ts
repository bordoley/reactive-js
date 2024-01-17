import { BackpressureStrategy, IndexedQueueLike } from "../utils.js";
export declare const create: <T>(options?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => IndexedQueueLike<T>;
