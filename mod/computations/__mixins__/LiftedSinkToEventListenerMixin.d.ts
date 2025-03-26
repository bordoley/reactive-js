import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, EventListenerLike, EventListenerLike_notify } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
export declare const LiftedSinkToEventListenerLike_operator: unique symbol;
export interface LiftedSinkToEventListenerLike<TSubscription extends EventListenerLike, T> extends EventListenerLike<T> {
    readonly [LiftedSinkToEventListenerLike_operator]: LiftedSinkLike<TSubscription, T>;
}
type TReturn<TSubscription extends EventListenerLike, T> = Omit<LiftedSinkToEventListenerLike<TSubscription, T>, keyof DisposableLike>;
type TPrototype<TSubscription extends EventListenerLike, T> = Pick<LiftedSinkToEventListenerLike<TSubscription, T>, typeof EventListenerLike_notify>;
declare const LiftedSinkToEventListenerMixin: <TSubscription extends EventListenerLike, T>() => Mixin1<TReturn<TSubscription, T>, LiftedSinkLike<TSubscription, T>, TPrototype<TSubscription, T>>;
export default LiftedSinkToEventListenerMixin;
