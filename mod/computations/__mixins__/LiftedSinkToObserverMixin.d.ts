import { Mixin1 } from "../../__internal__/mixins.js";
import { ObserverLike } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
import { LiftedSinkToConsumerLike } from "./LiftedSinkToConsumerMixin.js";
export interface LiftedSinkToObserverLike<TSubscription extends ObserverLike, T> extends LiftedSinkToConsumerLike<TSubscription, T>, ObserverLike<T> {
}
type TReturn<TSubscription extends ObserverLike, T> = LiftedSinkToObserverLike<TSubscription, T>;
declare const LiftedSinkToObserverMixin: <TSubscription extends ObserverLike, T>() => Mixin1<TReturn<TSubscription, T>, LiftedSinkLike<TSubscription, T>>;
export default LiftedSinkToObserverMixin;
