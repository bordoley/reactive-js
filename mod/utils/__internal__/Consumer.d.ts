import { BackpressureStrategy, CollectionEnumeratorLike, ConsumerLike } from "../../utils.js";
export declare const create: <T>(options?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => ConsumerLike<T> & CollectionEnumeratorLike<T>;
