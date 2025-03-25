import { SourceLike, SourceLike_subscribe } from "../../computations.js";
import { Function1 } from "../../functions.js";
import { EventListenerLike } from "../../utils.js";

export const LiftedOperatorLike_notify = Symbol("LiftedOperatorLike_notify");
export const LiftedOperatorLike_complete = Symbol(
  "LiftedOperatorLike_complete",
);
export const LiftedOperatorLike_isCompleted = Symbol(
  "LiftedOperatorLike_isCompleted",
);

export interface LiftedOperatorLike<T> {
  readonly [LiftedOperatorLike_isCompleted]: boolean;

  [LiftedOperatorLike_notify](next: T): void;

  [LiftedOperatorLike_complete](): void;
}

export type LiftOperator<TA, TB> = Function1<
  LiftedOperatorLike<TB>,
  LiftedOperatorLike<TA>
>;

export const LiftedSourceLike_operators = Symbol("LiftedSourceLike_operators");
export const LiftedSourceLike_source = Symbol("LiftedSourceLike_source");

export interface LiftedSourceLike<
  TIn,
  TOut,
  TEventListenerIn extends EventListenerLike<TIn>,
  TEventListenerOut extends EventListenerLike<TOut>,
  TSource extends SourceLike<TIn, TEventListenerIn>,
> extends SourceLike<TOut, TEventListenerOut> {
  readonly [LiftedSourceLike_source]: TSource;
  readonly [LiftedSourceLike_operators]: ReadonlyArray<LiftOperator<any, any>>;

  [SourceLike_subscribe](listener: TEventListenerOut): void;
}
