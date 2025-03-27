import { Mixin1 } from "../../__internal__/mixins.js";
import { IterableLike } from "../../computations.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, ConsumerLike } from "../../utils.js";
export declare const ConsumerQueueMixin: <T>() => Mixin1<ConsumerLike<T> & IterableLike<T>, Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>>;
