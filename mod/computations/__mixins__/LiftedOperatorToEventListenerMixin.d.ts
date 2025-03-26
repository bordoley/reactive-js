import { Mixin1 } from "../../__internal__/mixins.js";
import { EventListenerLike, EventListenerLike_notify } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
export declare const LiftedOperatorToEventListenerLike_operator: unique symbol;
export interface LiftedOperatorToEventListenerLike<TSubscription extends EventListenerLike, T> extends EventListenerLike<T> {
    readonly [LiftedOperatorToEventListenerLike_operator]: LiftedSinkLike<TSubscription, T>;
}
type TReturn<TSubscription extends EventListenerLike, T> = LiftedOperatorToEventListenerLike<TSubscription, T>;
type TPrototype<TSubscription extends EventListenerLike, T> = Pick<LiftedOperatorToEventListenerLike<TSubscription, T>, typeof EventListenerLike_notify>;
declare const LiftedOperatorToEventListenerMixin: <TSubscription extends EventListenerLike, T>() => Mixin1<TReturn<TSubscription, T>, LiftedSinkLike<TSubscription, T>, TPrototype<TSubscription, T>>;
export default LiftedOperatorToEventListenerMixin;
