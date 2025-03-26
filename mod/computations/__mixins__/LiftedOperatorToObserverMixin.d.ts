import { Mixin1 } from "../../__internal__/mixins.js";
import { ObserverLike } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
import { LiftedOperatorToConsumerLike } from "./LiftedOperatorToConsumerMixin.js";
export interface LiftedOperatorToObserverLike<TSubscription extends ObserverLike, T> extends LiftedOperatorToConsumerLike<TSubscription, T>, ObserverLike<T> {
}
type TReturn<TSubscription extends ObserverLike, T> = LiftedOperatorToObserverLike<TSubscription, T>;
declare const LiftedOperatorToObserverMixin: <TSubscription extends ObserverLike, T>() => Mixin1<TReturn<TSubscription, T>, LiftedSinkLike<TSubscription, T>>;
export default LiftedOperatorToObserverMixin;
