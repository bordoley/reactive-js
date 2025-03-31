import { SourceLike, SourceLike_subscribe } from "../../computations.js";
import { Function1 } from "../../functions.js";
import { SinkLike } from "../../utils.js";

export const LiftedSinkLike_subscription = Symbol(
  "LiftedSinkLike_subscription",
);

export interface LiftedSinkLike<TSubscription extends SinkLike, T>
  extends SinkLike<T> {
  readonly [LiftedSinkLike_subscription]: TSubscription;
}

export type LiftOperator<TSubscription extends SinkLike, TA, TB> = Function1<
  LiftedSinkLike<TSubscription, TB>,
  LiftedSinkLike<TSubscription, TA>
>;

export const LiftedSourceLike_sink = Symbol("LiftedSourceLike_sink");
export const LiftedSourceLike_source = Symbol("LiftedSourceLike_source");

export interface LiftedSourceLike<
  TIn,
  TOut,
  TEventListenerIn extends SinkLike<TIn>,
  TEventListenerOut extends SinkLike<TOut>,
  TSource extends SourceLike<TIn, TEventListenerIn>,
> extends SourceLike<TOut, TEventListenerOut> {
  readonly [LiftedSourceLike_source]: TSource;
  readonly [LiftedSourceLike_sink]: ReadonlyArray<
    LiftOperator<TEventListenerOut, unknown, unknown>
  >;

  [SourceLike_subscribe](listener: TEventListenerOut): void;
}
