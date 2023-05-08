import { Mixin1 } from "../../../__internal__/mixins.js";
import { BufferLike_capacity, DisposableLike, ObserverLike, ObserverLike_notify, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../core.js";
type TObserverBaseMixin<T> = Omit<ObserverLike<T>, keyof SchedulerLike | typeof ObserverLike_notify>;
declare const Observer_baseMixin: <T>() => Mixin1<TObserverBaseMixin<T>, {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
}, DisposableLike>;
export default Observer_baseMixin;
