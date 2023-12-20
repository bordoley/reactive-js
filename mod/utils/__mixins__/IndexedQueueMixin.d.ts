import { Mixin1 } from "../../__internal__/mixins.js";
import { CollectionLike_count, EnumerableLike_enumerate } from "../../collections.js";
import { Optional } from "../../functions.js";
import { IndexedQueueLike, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../utils.js";
declare const IndexedQueueMixin: <T>() => Mixin1<IndexedQueueLike<T>, Optional<{
    readonly [QueueableLike_backpressureStrategy]?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [QueueableLike_capacity]?: number;
}>, unknown, Omit<IndexedQueueLike<T>, typeof QueueableLike_backpressureStrategy | typeof CollectionLike_count | typeof QueueableLike_capacity | typeof EnumerableLike_enumerate>>;
export default IndexedQueueMixin;
