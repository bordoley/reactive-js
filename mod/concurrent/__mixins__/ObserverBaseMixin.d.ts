import { Mixin1 } from "../../__internal__/mixins.js";
import { ObserverLike, SchedulerLike } from "../../concurrent.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity, SinkLike_notify } from "../../utils.js";
type TObserverBaseMixin<T> = Omit<ObserverLike<T>, keyof SchedulerLike | typeof SinkLike_notify>;
declare const ObserverBaseMixin: <T>() => Mixin1<TObserverBaseMixin<T>, {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [QueueableLike_capacity]: number;
}, DisposableLike>;
export default ObserverBaseMixin;
