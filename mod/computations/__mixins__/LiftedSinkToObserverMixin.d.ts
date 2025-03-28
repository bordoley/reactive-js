import { Mixin2 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, ObserverLike } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
import { LiftedSinkToConsumerLike } from "./LiftedSinkToConsumerMixin.js";
export interface LiftedSinkToObserverLike<TSubscription extends ObserverLike, T> extends LiftedSinkToConsumerLike<TSubscription, T>, ObserverLike<T> {
}
type TReturn<TSubscription extends ObserverLike, T> = LiftedSinkToObserverLike<TSubscription, T>;
declare const LiftedSinkToObserverMixin: <TSubscription extends ObserverLike, T>() => Mixin2<TReturn<TSubscription, T>, LiftedSinkLike<TSubscription, T>, Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>>;
export default LiftedSinkToObserverMixin;
