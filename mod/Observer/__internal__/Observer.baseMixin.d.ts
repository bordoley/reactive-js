import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, ObserverLike, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity, SchedulerLike, SinkLike_notify } from "../../types.js";
type TObserverBaseMixin<T> = Omit<ObserverLike<T>, keyof SchedulerLike | typeof SinkLike_notify>;
declare const Observer_baseMixin: <T>() => Mixin1<TObserverBaseMixin<T>, {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [QueueableLike_capacity]: number;
}, DisposableLike>;
export default Observer_baseMixin;
