import { Mixin1 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, CollectionEnumeratorLike, ConsumerLike } from "../../utils.js";
export declare const ConsumerQueueMixin: <T>() => Mixin1<ConsumerLike<T> & CollectionEnumeratorLike<T>, Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>>;
