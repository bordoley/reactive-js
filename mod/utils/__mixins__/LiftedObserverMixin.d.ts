import { Mixin2 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, ObserverLike } from "../../utils.js";
import { LiftedConsumerLike } from "./LiftedConsumerMixin.js";
export interface LiftedObserverLike<TA = unknown, TB = TA> extends LiftedConsumerLike<TA, TB, ObserverLike<TB>, ObserverLike>, ObserverLike<TA> {
}
interface LiftedObserverMixinModule {
    <TA, TB = TA>(): Mixin2<LiftedObserverLike<TA, TB>, ObserverLike<TB>, Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
    }>>;
    <T, TDelegateObserver extends ObserverLike<T> = ObserverLike<T>>(): Mixin2<LiftedObserverLike<T, T>, TDelegateObserver, Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
    }>>;
}
declare const LiftedObserverMixin: LiftedObserverMixinModule;
export default LiftedObserverMixin;
