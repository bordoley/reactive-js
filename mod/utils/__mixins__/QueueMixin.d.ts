import { Mixin2 } from "../../__internal__/mixins.js";
import { Comparator, Optional } from "../../functions.js";
import { BackpressureStrategy, QueueLike, QueueLike_count, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../utils.js";
declare const QueueMixin: <T>() => Mixin2<QueueLike<T>, Optional<Comparator<T>>, Optional<{
    readonly [QueueableLike_backpressureStrategy]?: BackpressureStrategy;
    readonly [QueueableLike_capacity]?: number;
}>, unknown, Omit<QueueLike<T>, typeof QueueableLike_backpressureStrategy | typeof QueueLike_count | typeof QueueableLike_capacity>>;
export default QueueMixin;
