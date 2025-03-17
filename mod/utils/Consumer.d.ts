import { BackpressureStrategy, ConsumerLike, QueueLike } from "../utils.js";
export declare const create: <T>(options?: {
    autoDispose?: boolean;
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => ConsumerLike<T> & QueueLike<T>;
export declare const createDropOldestWithoutBackpressure: <T>(capacity: number, options?: {
    autoDispose?: boolean;
}) => ConsumerLike<T> & QueueLike<T>;
