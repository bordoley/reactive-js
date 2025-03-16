import { Mixin1 } from "../../__internal__/mixins.js";
import { Comparator, Optional } from "../../functions.js";
import { BackpressureStrategy, ConsumerLike_backpressureStrategy, ConsumerLike_capacity, ConsumerLike_isReady, DisposableLike, EventListenerLike_notify, QueueLike, QueueLike_dequeue, QueueLike_head, SinkLike_complete } from "../../utils.js";
declare const QueueMixin: <T>() => Mixin1<QueueLike<T>, Optional<{
    autoDispose?: boolean;
    capacity?: number;
    comparator?: Comparator<T>;
    backpressureStrategy?: BackpressureStrategy;
}>, DisposableLike, Pick<QueueLike<T>, typeof QueueLike_head | typeof ConsumerLike_isReady | typeof ConsumerLike_capacity | typeof ConsumerLike_backpressureStrategy | typeof QueueLike_dequeue | typeof Symbol.iterator | typeof EventListenerLike_notify | typeof SinkLike_complete>>;
export default QueueMixin;
