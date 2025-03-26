import { Mixin3 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, ConsumerLike, DisposableLike, ObserverLike, SchedulerLike } from "../../utils.js";
export declare const ObserverMixinLike_notify: unique symbol;
export declare const ObserverMixinLike_complete: unique symbol;
export declare const ObserverMixinLike_consumer: unique symbol;
export interface ObserverMixinLike<TConsumer extends ConsumerLike, T> {
    readonly [ObserverMixinLike_consumer]: TConsumer;
    [ObserverMixinLike_notify](next: T): void;
    [ObserverMixinLike_complete](): void;
}
type TReturn<TConsumer extends ConsumerLike, T> = ObserverMixinLike<TConsumer, T> & Omit<ObserverLike<T>, keyof DisposableLike>;
declare const ObserverMixin: <TConsumer extends ConsumerLike, T>() => Mixin3<TReturn<TConsumer, T>, TConsumer, SchedulerLike, Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>>;
export default ObserverMixin;
