import { Mixin2 } from "../../../__internal__/mixins.js";
import { BufferLike_capacity, ObserverLike, ObserverLike_notify, QueueableLike, QueueableLike_backpressureStrategy } from "../../../core.js";
type TObserverDelegatingMixin<T> = Omit<ObserverLike<T>, typeof ObserverLike_notify>;
declare const Observer_delegatingMixin: <T>() => Mixin2<TObserverDelegatingMixin<T>, ObserverLike, {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
}>;
export default Observer_delegatingMixin;
