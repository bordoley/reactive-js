import { Mixin1 } from "../../__internal__/mixins.js";
import { SinkLike, SinkLike_complete, SinkLike_isCompleted } from "../../utils.js";
import { LiftedOperatorLike } from "../__internal__/LiftedSource.js";
import { LiftedOperatorToEventListenerLike } from "./LiftedOperatorToEventListenerMixin.js";
export interface LiftedOperatorToSinkLike<TSubscription extends SinkLike, T> extends LiftedOperatorToEventListenerLike<TSubscription, T>, SinkLike<T> {
}
type TReturn<TSubscription extends SinkLike, T> = LiftedOperatorToSinkLike<TSubscription, T>;
type TPrototype<TSubscription extends SinkLike, T> = Pick<LiftedOperatorToSinkLike<TSubscription, T>, typeof SinkLike_complete | typeof SinkLike_isCompleted>;
declare const LiftedOperatorToSinkMixin: <TSubscription extends SinkLike, T>() => Mixin1<TReturn<TSubscription, T>, LiftedOperatorLike<TSubscription, T>, TPrototype<TSubscription, T>>;
export default LiftedOperatorToSinkMixin;
