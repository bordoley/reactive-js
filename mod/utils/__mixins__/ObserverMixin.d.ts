import { Mixin3 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, ConsumerLike, DisposableLike, FlowControllerLike, ObserverLike, SchedulerLike } from "../../utils.js";
import { ConsumerMixinLike, ConsumerMixinLike_consumer } from "./ConsumerMixin.js";
type TReturn<TConsumer extends ConsumerLike, T> = ConsumerMixinLike<TConsumer, T> & Omit<ObserverLike<T>, keyof DisposableLike>;
type TPrototype<TConsumer extends ConsumerLike, T> = Omit<ObserverLike<T> & ConsumerMixinLike<TConsumer, T>, keyof DisposableLike | keyof SchedulerLike | keyof FlowControllerLike | typeof ConsumerMixinLike_consumer>;
declare const ObserverMixin: <TConsumer extends ConsumerLike, T>() => Mixin3<TReturn<TConsumer, T>, TConsumer, SchedulerLike, Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>, TPrototype<TConsumer, T>, DisposableLike>;
export default ObserverMixin;
