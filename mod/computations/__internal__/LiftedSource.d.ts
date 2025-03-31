import { SourceLike, SourceLike_subscribe } from "../../computations.js";
import { Function1 } from "../../functions.js";
import { SinkLike } from "../../utils.js";
export declare const LiftedSinkLike_subscription: unique symbol;
export interface LiftedSinkLike<TSubscription extends SinkLike, T> extends SinkLike<T> {
    readonly [LiftedSinkLike_subscription]: TSubscription;
}
export type LiftOperator<TSubscription extends SinkLike, TA, TB> = Function1<LiftedSinkLike<TSubscription, TB>, LiftedSinkLike<TSubscription, TA>>;
export declare const LiftedSourceLike_sink: unique symbol;
export declare const LiftedSourceLike_source: unique symbol;
export interface LiftedSourceLike<TIn, TOut, TEventListenerIn extends SinkLike<TIn>, TEventListenerOut extends SinkLike<TOut>, TSource extends SourceLike<TIn, TEventListenerIn>> extends SourceLike<TOut, TEventListenerOut> {
    readonly [LiftedSourceLike_source]: TSource;
    readonly [LiftedSourceLike_sink]: ReadonlyArray<LiftOperator<TEventListenerOut, unknown, unknown>>;
    [SourceLike_subscribe](listener: TEventListenerOut): void;
}
