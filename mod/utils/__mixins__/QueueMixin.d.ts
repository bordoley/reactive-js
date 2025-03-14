import { Mixin1 } from "../../__internal__/mixins.js";
import { Comparator, Optional } from "../../functions.js";
import { BackpressureStrategy, DisposableLike, EventListenerLike_notify, QueueLike, QueueLike_dequeue, QueueLike_head, QueueableLike_isReady, SinkLike_complete } from "../../utils.js";
declare const QueueMixin: <T>() => Mixin1<QueueLike<T>, Optional<{
    capacity?: number;
    comparator?: Comparator<T>;
    backpressureStrategy?: BackpressureStrategy;
}>, DisposableLike, Pick<QueueLike<T>, typeof QueueLike_head | typeof QueueableLike_isReady | typeof QueueLike_dequeue | typeof Symbol.iterator | typeof EventListenerLike_notify | typeof SinkLike_complete>>;
export default QueueMixin;
