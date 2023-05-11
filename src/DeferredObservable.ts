import DeferredObservable_multicast from "./DeferredObservable/__internal__/DeferredObservable.multicast.js";
import DeferredObservable_repeat from "./DeferredObservable/__internal__/DeferredObservable.repeat.js";
import DeferredObservable_retry from "./DeferredObservable/__internal__/DeferredObservable.retry.js";
import DeferredObservable_share from "./DeferredObservable/__internal__/DeferredObservable.share.js";
import { DeferredObservable_compute } from "./Observable/__internal__/Observable.compute.js";
import { Factory, Function1, Predicate } from "./functions.js";
import { HigherOrderObservableBaseTypeClass } from "./type-classes.js";
import {
  DeferredObservableContainer,
  DeferredObservableLike,
  DisposableLike,
  EnumerableLike,
  MulticastObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableLike,
  SchedulerLike,
  SharedObservableLike,
} from "./types.js";

export type EnumerableUpperBoundObservableOperator<TIn, TOut> = <
  TObservableIn extends DeferredObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends EnumerableLike<TIn>
  ? EnumerableLike<TOut>
  : TObservableIn extends RunnableLike<TIn>
  ? RunnableLike<TOut>
  : TObservableIn extends DeferredObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : never;

export type Type = DeferredObservableContainer;

export interface Signature
  extends HigherOrderObservableBaseTypeClass<Type, Type> {
  compute<T>(
    computation: Factory<T>,
    options?: {
      mode?: "batched" | "combine-latest";
    },
  ): DeferredObservableLike<T>;

  multicast<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<
    DeferredObservableLike<T>,
    MulticastObservableLike<T> & DisposableLike
  >;

  repeat<T>(
    predicate: Predicate<number>,
  ): EnumerableUpperBoundObservableOperator<T, T>;
  repeat<T>(count: number): EnumerableUpperBoundObservableOperator<T, T>;
  repeat<T>(): EnumerableUpperBoundObservableOperator<T, T>;

  retry<T>(
    shouldRetry: (count: number, error: Error) => boolean,
  ): EnumerableUpperBoundObservableOperator<T, T>;

  share<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly replay?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<DeferredObservableLike<T>, SharedObservableLike<T>>;
}

export const compute: Signature["compute"] = DeferredObservable_compute;
export const multicast: Signature["multicast"] = DeferredObservable_multicast;
export const repeat: Signature["repeat"] = DeferredObservable_repeat;
export const retry: Signature["retry"] = DeferredObservable_retry;
export const share: Signature["share"] = DeferredObservable_share;
