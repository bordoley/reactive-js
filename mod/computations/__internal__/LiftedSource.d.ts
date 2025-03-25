import { SourceLike, SourceLike_subscribe } from "../../computations.js";
import { Function1 } from "../../functions.js";
import { EventListenerLike } from "../../utils.js";
export declare const LiftedOperatorLike_notify: unique symbol;
export declare const LiftedOperatorLike_complete: unique symbol;
export declare const LiftedOperatorLike_isCompleted: unique symbol;
export interface LiftedOperatorLike<T> {
    readonly [LiftedOperatorLike_isCompleted]: boolean;
    [LiftedOperatorLike_notify](next: T): void;
    [LiftedOperatorLike_complete](): void;
}
export type LiftOperator<TA, TB> = Function1<LiftedOperatorLike<TB>, LiftedOperatorLike<TA>>;
export declare const LiftedSourceLike_operators: unique symbol;
export declare const LiftedSourceLike_source: unique symbol;
export interface LiftedSourceLike<TIn, TOut, TEventListenerIn extends EventListenerLike<TIn>, TEventListenerOut extends EventListenerLike<TOut>, TSource extends SourceLike<TIn, TEventListenerIn>> extends SourceLike<TOut, TEventListenerOut> {
    readonly [LiftedSourceLike_source]: TSource;
    readonly [LiftedSourceLike_operators]: ReadonlyArray<LiftOperator<any, any>>;
    [SourceLike_subscribe](listener: TEventListenerOut): void;
}
