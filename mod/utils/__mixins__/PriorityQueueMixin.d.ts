import { Mixin2 } from "../../__internal__/mixins.js";
import { Comparator, Optional } from "../../functions.js";
import { BackpressureStrategy, QueueLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../utils.js";
declare const PriorityQueueMixin: <T>() => Mixin2<QueueLike<T>, Comparator<T>, Optional<{
    readonly [QueueableLike_backpressureStrategy]?: BackpressureStrategy;
    readonly [QueueableLike_capacity]?: number;
}>>;
export default PriorityQueueMixin;
