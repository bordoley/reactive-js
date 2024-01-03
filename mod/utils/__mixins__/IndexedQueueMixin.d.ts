import { Mixin1 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { IndexedQueueLike, QueueLike_count, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../utils.js";
declare const IndexedQueueMixin: <T>() => Mixin1<IndexedQueueLike<T>, Optional<{
    readonly [QueueableLike_backpressureStrategy]?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [QueueableLike_capacity]?: number;
}>, unknown, Omit<IndexedQueueLike<T>, typeof QueueableLike_backpressureStrategy | typeof QueueLike_count | typeof QueueableLike_capacity>>;
export default IndexedQueueMixin;
