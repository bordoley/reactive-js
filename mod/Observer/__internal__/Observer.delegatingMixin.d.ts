import { Mixin2 } from "../../__internal__/mixins.js";
import { BufferLike_capacity, ObserverLike, QueueableLike, QueueableLike_backpressureStrategy, SinkLike_notify } from "../../types.js";
type TObserverDelegatingMixin<T> = Omit<ObserverLike<T>, typeof SinkLike_notify>;
declare const Observer_delegatingMixin: <T>() => Mixin2<TObserverDelegatingMixin<T>, ObserverLike, {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
}>;
export default Observer_delegatingMixin;
