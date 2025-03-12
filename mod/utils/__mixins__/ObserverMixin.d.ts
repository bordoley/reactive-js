import { Mixin2 } from "../../__internal__/mixins.js";
import { DisposableLike, ObserverLike, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity, SchedulerLike } from "../../utils.js";
export declare const ObserverMixinBaseLike_notify: unique symbol;
export interface ObserverMixinBaseLike<T = unknown> {
    [ObserverMixinBaseLike_notify](next: T): boolean;
}
declare const ObserverMixin: <T>() => Mixin2<ObserverLike<T>, SchedulerLike, Pick<QueueableLike, typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy>, ObserverMixinBaseLike<T> & DisposableLike>;
export default ObserverMixin;
