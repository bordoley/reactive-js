import { Mixin1 } from "../../__internal__/mixins.js";
import { Comparator, Optional } from "../../functions.js";
import { BackpressureStrategy, QueueLike, QueueLike_count, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isCompleted, QueueableLike_onReady } from "../../utils.js";
declare const QueueMixin: <T>() => Mixin1<QueueLike<T>, Optional<{
    capacity?: number;
    comparator?: Comparator<T>;
    backpressureStrategy?: BackpressureStrategy;
}>, unknown, Omit<QueueLike<T>, typeof QueueableLike_backpressureStrategy | typeof QueueLike_count | typeof QueueableLike_capacity | typeof QueueableLike_isCompleted | typeof QueueableLike_onReady>>;
export default QueueMixin;
