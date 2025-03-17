import { Mixin1 } from "../../__internal__/mixins.js";
import { Comparator, Optional } from "../../functions.js";
import { BackpressureStrategy, ConsumerLike, ConsumerLike_backpressureStrategy, ConsumerLike_capacity, ConsumerLike_isReady, DisposableLike, EnumeratorLike_moveNext, EventListenerLike_notify, QueueLike, SinkLike_complete } from "../../utils.js";
declare const QueueingConsumerMixin: <T>() => Mixin1<QueueLike<T> & ConsumerLike<T>, Optional<{
    autoDispose?: boolean;
    capacity?: number;
    comparator?: Comparator<T>;
    backpressureStrategy?: BackpressureStrategy;
}>, DisposableLike, Pick<QueueLike<T> & ConsumerLike<T>, typeof ConsumerLike_isReady | typeof ConsumerLike_capacity | typeof ConsumerLike_backpressureStrategy | typeof EnumeratorLike_moveNext | typeof EventListenerLike_notify | typeof SinkLike_complete>>;
export default QueueingConsumerMixin;
