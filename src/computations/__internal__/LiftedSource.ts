import {
  EventSourceLike,
  EventSourceLike_subscribe,
} from "../../computations.js";
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

export const LiftedEventSourceLike_sink = Symbol("LiftedEventSourceLike_sink");
export const LiftedEventSourceLike_source = Symbol(
  "LiftedEventSourceLike_source",
);

export interface LiftedEventSourceLike<
  TIn,
  TOut,
  TEventListenerIn extends SinkLike<TIn>,
  TEventListenerOut extends SinkLike<TOut>,
  TSource extends EventSourceLike<TIn, TEventListenerIn>,
> extends EventSourceLike<TOut, TEventListenerOut> {
  readonly [LiftedEventSourceLike_source]: TSource;
  readonly [LiftedEventSourceLike_sink]: ReadonlyArray<
    LiftOperator<TEventListenerOut, unknown, unknown>
  >;

  [EventSourceLike_subscribe](listener: TEventListenerOut): void;
}
