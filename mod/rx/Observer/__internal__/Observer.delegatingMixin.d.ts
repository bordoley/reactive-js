import { Mixin2 } from "../../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import { BufferLike_capacity, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
type TObserverDelegatingMixin<T> = Omit<ObserverLike<T>, typeof ObserverLike_notify>;
declare const Observer_delegatingMixin: <T>() => Mixin2<TObserverDelegatingMixin<T>, ObserverLike, {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
}>;
export default Observer_delegatingMixin;
