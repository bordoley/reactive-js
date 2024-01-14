import { Mixin2 } from "../../__internal__/mixins.js";
import { ObserverLike, SchedulerLike } from "../../concurrent.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../utils.js";
declare const ObserverMixin: <T>() => Mixin2<ObserverLike<T>, SchedulerLike, Pick<QueueableLike, typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy>, DisposableLike>;
export default ObserverMixin;
