import { Mixin2 } from "../../__internal__/mixins.js";
import { Comparator, Optional } from "../../functions.js";
import { QueueCollectionLike, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../utils.js";
declare const PriorityQueueMixin: <T>() => Mixin2<QueueCollectionLike<T>, Comparator<T>, Optional<{
    readonly [QueueableLike_backpressureStrategy]?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [QueueableLike_capacity]?: number;
}>>;
export default PriorityQueueMixin;
