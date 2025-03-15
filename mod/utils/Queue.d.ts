import { Comparator } from "../functions.js";
import { BackpressureStrategy, QueueLike, QueueableLike } from "../utils.js";
export declare const create: <T>(options?: {
    autoDispose?: boolean;
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => QueueLike<T>;
export declare const createSorted: <T>(comparator: Comparator<T>, options?: {
    autoDispose?: boolean;
}) => QueueLike<T>;
export declare const createDropOldestWithoutBackpressure: <T>(capacity: number, options?: {
    autoDispose?: boolean;
}) => QueueLike<T>;
export declare const createCollector: <T>(options?: {
    autoDispose?: boolean;
}) => QueueableLike<T> & {
    readonly values: readonly T[];
};
