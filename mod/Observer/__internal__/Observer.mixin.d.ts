import { Mixin2 } from "../../__internal__/mixins.js";
import { BufferLike_capacity, DisposableLike, ObserverLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../types.js";
declare const Observer_mixin: <T>() => Mixin2<ObserverLike<T>, SchedulerLike, {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
}, DisposableLike>;
export default Observer_mixin;
