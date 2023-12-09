import { Mixin1 } from "../../__internal__/mixins.js";
import { ObserverLike, SchedulerLike } from "../../concurrent.js";
import { SinkLike_notify } from "../../events.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../utils.js";
type TObserverBaseMixin<T> = Omit<ObserverLike<T>, keyof SchedulerLike | typeof SinkLike_notify>;
declare const ObserverBaseMixin: <T>() => Mixin1<TObserverBaseMixin<T>, {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [QueueableLike_capacity]: number;
}, DisposableLike>;
export default ObserverBaseMixin;
