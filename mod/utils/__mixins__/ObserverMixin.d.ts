import { Mixin3 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, ConsumerLike, DisposableLike, ObserverLike, SchedulerLike } from "../../utils.js";
export declare const ObserverMixinLike_notify: unique symbol;
export declare const ObserverMixinLike_complete: unique symbol;
export declare const ObserverMixinLike_consumer: unique symbol;
export interface ObserverMixinLike<T, TConsumer extends ConsumerLike> {
    readonly [ObserverMixinLike_consumer]: TConsumer;
    [ObserverMixinLike_notify](next: T): void;
    [ObserverMixinLike_complete](): void;
}
type TReturn<T, TConsumer extends ConsumerLike> = ObserverMixinLike<T, TConsumer> & Omit<ObserverLike<T>, keyof DisposableLike>;
declare const ObserverMixin: <T, TConsumer extends ConsumerLike>() => Mixin3<TReturn<T, TConsumer>, TConsumer, SchedulerLike, Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>>;
export default ObserverMixin;
