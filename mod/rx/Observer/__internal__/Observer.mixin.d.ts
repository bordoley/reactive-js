import { Mixin2 } from "../../../__internal__/mixins.js";
import { ObserverMixin_scheduler } from "../../../__internal__/symbols.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { BufferLike_capacity, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
export { ObserverMixin_scheduler };
export type TObserverMixin<T, TScheduler extends SchedulerLike = SchedulerLike> = Omit<ObserverLike<T>, typeof ObserverLike_notify> & {
    [ObserverMixin_scheduler]: TScheduler;
};
declare const Observer_mixin: <T, TScheduler extends SchedulerLike = SchedulerLike>() => Mixin2<TObserverMixin<T, TScheduler>, SchedulerLike, {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
}>;
export default Observer_mixin;
