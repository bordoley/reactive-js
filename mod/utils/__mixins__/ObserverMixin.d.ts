import { Mixin3 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, ConsumerLike, DisposableLike, FlowControllerLike, ObserverLike, SchedulerLike, SinkLike_isCompleted } from "../../utils.js";
import { SinkMixinLike, SinkMixinLike_delegate, SinkMixinLike_doComplete, SinkMixinLike_doNotify, SinkMixinLike_isCompleted } from "./SinkMixin.js";
type TReturn<TObserver extends ConsumerLike, T> = SinkMixinLike<TObserver, T> & Omit<ObserverLike<T>, keyof DisposableLike>;
type TPrototype<TObserver extends ConsumerLike, T> = Omit<ObserverLike<T> & SinkMixinLike<TObserver, T>, keyof DisposableLike | keyof SchedulerLike | keyof FlowControllerLike | typeof SinkMixinLike_delegate | typeof SinkLike_isCompleted | typeof SinkMixinLike_doNotify | typeof SinkMixinLike_doComplete | typeof SinkMixinLike_isCompleted>;
declare const ObserverMixin: <TObserver extends ConsumerLike, T>() => Mixin3<TReturn<TObserver, T>, TObserver, SchedulerLike, Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>, TPrototype<TObserver, T>, DisposableLike>;
export default ObserverMixin;
