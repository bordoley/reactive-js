import { BackpressureStrategy, CollectionEnumeratorLike, ConsumerLike } from "../utils.js";
export declare const create: <T>(options?: {
    autoDispose?: boolean;
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => ConsumerLike<T> & CollectionEnumeratorLike<T>;
export declare const createDropOldestWithoutBackpressure: <T>(capacity: number, options?: {
    autoDispose?: boolean;
}) => ConsumerLike<T> & CollectionEnumeratorLike<T>;
