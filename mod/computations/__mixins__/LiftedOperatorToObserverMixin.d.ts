import { Mixin2 } from "../../__internal__/mixins.js";
import { ObserverLike } from "../../utils.js";
import { LiftedOperatorLike } from "../__internal__/LiftedSource.js";
import { LiftedOperatorToConsumerLike } from "./LiftedOperatorToConsumerMixin.js";
export interface LiftedOperatorToObserverLike<T, TDelegate extends ObserverLike> extends LiftedOperatorToConsumerLike<T, TDelegate>, ObserverLike<T> {
}
type TReturn<T, TDelegate extends ObserverLike> = LiftedOperatorToObserverLike<T, TDelegate>;
declare const LiftedOperatorToObserverMixin: <T, TDelegate extends ObserverLike>() => Mixin2<TReturn<T, TDelegate>, LiftedOperatorLike<T>, TDelegate>;
export default LiftedOperatorToObserverMixin;
