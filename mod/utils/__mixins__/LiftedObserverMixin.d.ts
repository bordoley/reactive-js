import { Mixin2 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, DisposableLike, ObserverLike } from "../../utils.js";
export declare const LiftedObserverLike_notify: unique symbol;
export declare const LiftedObserverLike_notifyDelegate: unique symbol;
export declare const LiftedObserverLike_complete: unique symbol;
export declare const LiftedObserverLike_completeDelegate: unique symbol;
export declare const LiftedObserverLike_delegate: unique symbol;
export declare const LiftedObserverLike_isReady: unique symbol;
export interface LiftedObserverLike<TA = unknown, TB = TA> extends ObserverLike<TA> {
    readonly [LiftedObserverLike_delegate]: ObserverLike<TB>;
    readonly [LiftedObserverLike_isReady]: boolean;
    [LiftedObserverLike_notify](next: TA): void;
    [LiftedObserverLike_complete](): void;
    [LiftedObserverLike_notifyDelegate](next: TB): void;
    [LiftedObserverLike_completeDelegate](): void;
}
interface LiftedObserverMixinModule {
    <TA, TB = TA>(): Mixin2<LiftedObserverLike<TA, TB>, ObserverLike<TB>, Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
    }>, Pick<LiftedObserverLike<TA, TB>, keyof DisposableLike>>;
    <T, TDelegateObserver extends ObserverLike<T> = ObserverLike<T>>(): Mixin2<LiftedObserverLike<T, T>, TDelegateObserver, Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
    }>, Pick<LiftedObserverLike<T, T>, keyof DisposableLike | typeof LiftedObserverLike_notify>>;
}
declare const LiftedObserverMixin: LiftedObserverMixinModule;
export default LiftedObserverMixin;
