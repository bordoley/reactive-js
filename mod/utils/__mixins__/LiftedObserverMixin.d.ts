import { Mixin2 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, DisposableLike, ObserverLike } from "../../utils.js";
export declare const LiftedObserverLike_delegate: unique symbol;
export declare const LiftedObserverLike_notify: unique symbol;
export declare const LiftedObserverLike_notifyDelegate: unique symbol;
export declare const LiftedObserverLike_complete: unique symbol;
export interface LiftedObserverLike<TA = unknown, TB = TA, TDelegateObserver extends ObserverLike<TB> = ObserverLike<TB>> extends ObserverLike<TA> {
    readonly [LiftedObserverLike_delegate]: TDelegateObserver;
    [LiftedObserverLike_notify](next: TA): void;
    [LiftedObserverLike_notifyDelegate](next: TB): void;
    [LiftedObserverLike_complete](): void;
}
declare const LiftedObserverMixin: <TA, TB = TA, TDelegateObserver extends ObserverLike<TB> = ObserverLike<TB>>() => Mixin2<LiftedObserverLike<TA, TB, TDelegateObserver>, TDelegateObserver, Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>, Pick<LiftedObserverLike<TA, TB, TDelegateObserver>, typeof LiftedObserverLike_notify | keyof DisposableLike>>;
export default LiftedObserverMixin;
