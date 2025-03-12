import { Mixin1 } from "../../__internal__/mixins.js";
import { ObserverLike } from "../../utils.js";
import { ObserverMixinBaseLike } from "./ObserverMixin.js";
export declare const LiftedObserverLike_delegate: unique symbol;
export interface LiftedObserverLike<TA, TB = TA, TObserver extends ObserverLike<TB> = ObserverLike<TB>> extends ObserverLike<TA> {
    readonly [LiftedObserverLike_delegate]: TObserver & Partial<ObserverMixinBaseLike<TB>>;
}
declare const LiftedObserverMixin: <TA, TB = TA, TObserver extends ObserverLike<TB> = ObserverLike<TB>>() => Mixin1<LiftedObserverLike<TA, TB, TObserver>, TObserver, ObserverLike<TA>>;
export default LiftedObserverMixin;
