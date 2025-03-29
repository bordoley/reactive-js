import { Mixin2 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, ConsumerLike, DisposableLike, FlowControllerLike, SinkLike_isCompleted } from "../../utils.js";
export declare const ConsumerMixinLike_notify: unique symbol;
export declare const ConsumerMixinLike_complete: unique symbol;
export declare const ConsumerMixinLike_consumer: unique symbol;
export interface ConsumerMixinLike<TConsumer extends ConsumerLike, T> {
    readonly [ConsumerMixinLike_consumer]: TConsumer;
    [ConsumerMixinLike_notify](next: T): void;
    [ConsumerMixinLike_complete](): void;
}
type TReturn<TConsumer extends ConsumerLike, T> = ConsumerMixinLike<TConsumer, T> & Omit<ConsumerLike<T>, keyof DisposableLike>;
type TPrototype<TConsumer extends ConsumerLike, T> = Omit<ConsumerLike<T> & ConsumerMixinLike<TConsumer, T>, keyof DisposableLike | keyof FlowControllerLike | typeof SinkLike_isCompleted | typeof ConsumerMixinLike_consumer>;
declare const ConsumerMixin: <TConsumer extends ConsumerLike, T>() => Mixin2<TReturn<TConsumer, T>, TConsumer, Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>, TPrototype<TConsumer, T>, DisposableLike>;
export default ConsumerMixin;
