import { Mixin2 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, ConsumerLike, DisposableLike, FlowControllerLike, SinkLike_isCompleted } from "../../utils.js";
import { SinkMixinLike, SinkMixinLike_delegate, SinkMixinLike_doComplete, SinkMixinLike_doNotify, SinkMixinLike_isCompleted } from "./SinkMixin.js";
type TReturn<TConsumer extends ConsumerLike, T> = SinkMixinLike<TConsumer, T> & Omit<ConsumerLike<T>, keyof DisposableLike>;
type TPrototype<TConsumer extends ConsumerLike, T> = Omit<ConsumerLike<T> & SinkMixinLike<TConsumer, T>, keyof DisposableLike | keyof FlowControllerLike | typeof SinkMixinLike_delegate | typeof SinkLike_isCompleted | typeof SinkMixinLike_doNotify | typeof SinkMixinLike_doComplete | typeof SinkMixinLike_isCompleted>;
declare const ConsumerMixin: <TConsumer extends ConsumerLike<T>, T>() => Mixin2<TReturn<TConsumer, T>, TConsumer, Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>, TPrototype<TConsumer, T>, DisposableLike>;
export default ConsumerMixin;
