import { Mixin2 } from "../../__internal__/mixins.js";
import { ObserverLike, SchedulerLike } from "../../concurrent.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../utils.js";
declare const ObserverMixin: <T>() => Mixin2<ObserverLike<T>, SchedulerLike, {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [QueueableLike_capacity]: number;
}, DisposableLike>;
export default ObserverMixin;
