import { Mixin2 } from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../rx.js";
import { BufferLike_capacity, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../util.js";
declare const Observer_mixin: <T>() => Mixin2<ObserverLike<T>, SchedulerLike, {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
}>;
export default Observer_mixin;
