import { Mixin3 } from "../../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
type TObserverMixinReturn<T> = Omit<ObserverLike<T>, keyof DisposableLike | typeof ObserverLike_notify>;
declare const Observer_mixin: <T>() => Mixin3<TObserverMixinReturn<T>, SchedulerLike, number, QueueableLike[typeof QueueableLike_backpressureStrategy]>;
export declare function initObserverMixinFromDelegate<T>(instance: unknown, delegate: ObserverLike): asserts instance is TObserverMixinReturn<T>;
export default Observer_mixin;
