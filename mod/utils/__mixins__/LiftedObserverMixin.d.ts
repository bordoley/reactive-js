import { Mixin2 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, DisposableLike, ObserverLike } from "../../utils.js";
export declare const LiftedObserverLike_delegate: unique symbol;
export declare const LiftedObserverLike_notify: unique symbol;
export interface LiftedObserverLike<TA = unknown, TB = TA, TDelegateObserver extends ObserverLike<TB> = ObserverLike<TB>> extends ObserverLike<TA> {
    readonly [LiftedObserverLike_delegate]: TDelegateObserver & Partial<LiftedObserverLike<TB>>;
    [LiftedObserverLike_notify](next: TA): boolean;
}
declare const LiftedObserverMixin: <TA, TB = TA, TDelegateObserver extends ObserverLike<TB> = ObserverLike<TB>>() => Mixin2<LiftedObserverLike<TA, TB, TDelegateObserver>, TDelegateObserver, Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>, Pick<LiftedObserverLike<TA, TB, TDelegateObserver>, keyof DisposableLike | typeof LiftedObserverLike_notify>>;
export default LiftedObserverMixin;
