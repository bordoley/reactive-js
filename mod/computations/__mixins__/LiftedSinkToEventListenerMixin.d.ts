import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, EventListenerLike, EventListenerLike_notify, SinkLike } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
export declare const LiftedSinkToEventListenerLike_liftedSink: unique symbol;
export interface LiftedSinkToEventListenerLike<TSubscription extends SinkLike, T> extends EventListenerLike<T> {
    readonly [LiftedSinkToEventListenerLike_liftedSink]: LiftedSinkLike<TSubscription, T>;
}
type TReturn<TSubscription extends SinkLike, T> = Omit<LiftedSinkToEventListenerLike<TSubscription, T>, keyof DisposableLike>;
type TPrototype<TSubscription extends SinkLike, T> = Pick<LiftedSinkToEventListenerLike<TSubscription, T>, typeof EventListenerLike_notify>;
declare const LiftedSinkToEventListenerMixin: <TSubscription extends SinkLike, T>() => Mixin1<TReturn<TSubscription, T>, LiftedSinkLike<TSubscription, T>, TPrototype<TSubscription, T>>;
export default LiftedSinkToEventListenerMixin;
