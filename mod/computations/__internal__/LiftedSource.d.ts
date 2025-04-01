import { ReactiveSourceLike, ReactiveSourceLike_subscribe } from "../../computations.js";
import { Function1 } from "../../functions.js";
import { SinkLike } from "../../utils.js";
export declare const LiftedSinkLike_subscription: unique symbol;
export interface LiftedSinkLike<TSubscription extends SinkLike, T> extends SinkLike<T> {
    readonly [LiftedSinkLike_subscription]: TSubscription;
}
export type LiftOperator<TSubscription extends SinkLike, TA, TB> = Function1<LiftedSinkLike<TSubscription, TB>, LiftedSinkLike<TSubscription, TA>>;
export declare const LiftedReactiveSourceLike_sink: unique symbol;
export declare const LiftedReactiveSourceLike_source: unique symbol;
export interface LiftedReactiveSourceLike<TIn, TOut, TEventListenerIn extends SinkLike<TIn>, TEventListenerOut extends SinkLike<TOut>, TSource extends ReactiveSourceLike<TIn, TEventListenerIn>> extends ReactiveSourceLike<TOut, TEventListenerOut> {
    readonly [LiftedReactiveSourceLike_source]: TSource;
    readonly [LiftedReactiveSourceLike_sink]: ReadonlyArray<LiftOperator<TEventListenerOut, unknown, unknown>>;
    [ReactiveSourceLike_subscribe](listener: TEventListenerOut): void;
}
