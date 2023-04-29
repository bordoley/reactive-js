import { Mixin1 } from "../../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import { BufferLike_capacity, DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../util.js";
type TObserverBaseMixin<T> = Omit<ObserverLike<T>, keyof DisposableLike | keyof SchedulerLike | typeof ObserverLike_notify>;
declare const Observer_baseMixin: <T>() => Mixin1<TObserverBaseMixin<T>, {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
}>;
export default Observer_baseMixin;
