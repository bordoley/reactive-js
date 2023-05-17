import DeferredObservable_catchError from "./DeferredObservable/__internal__/DeferredObservable.catchError.js";
import DeferredObservable_concatAll from "./DeferredObservable/__internal__/DeferredObservable.concatAll.js";
import DeferredObservable_concatMap from "./DeferredObservable/__internal__/DeferredObservable.concatMap.js";
import DeferredObservable_exhaust from "./DeferredObservable/__internal__/DeferredObservable.exhaust.js";
import DeferredObservable_exhaustMap from "./DeferredObservable/__internal__/DeferredObservable.exhaustMap.js";
import DeferredObservable_mergeAll from "./DeferredObservable/__internal__/DeferredObservable.mergeAll.js";
import DeferredObservable_mergeMap from "./DeferredObservable/__internal__/DeferredObservable.mergeMap.js";
import DeferredObservable_multicast from "./DeferredObservable/__internal__/DeferredObservable.multicast.js";
import DeferredObservable_repeat from "./DeferredObservable/__internal__/DeferredObservable.repeat.js";
import DeferredObservable_retry from "./DeferredObservable/__internal__/DeferredObservable.retry.js";
import DeferredObservable_share from "./DeferredObservable/__internal__/DeferredObservable.share.js";
import DeferredObservable_switchAll from "./DeferredObservable/__internal__/DeferredObservable.switchAll.js";
import DeferredObservable_switchMap from "./DeferredObservable/__internal__/DeferredObservable.switchMap.js";
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
  ReplayObservableLike,
  RunnableLike,
  SchedulerLike,
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

export interface DeferredObservableModule
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
    ReplayObservableLike<T> & DisposableLike
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
  ): Function1<DeferredObservableLike<T>, MulticastObservableLike<T>>;
}

export type Signature = DeferredObservableModule;

export const catchError: Signature["catchError"] =
  DeferredObservable_catchError;
export const compute: Signature["compute"] = DeferredObservable_compute;
export const concatAll: Signature["concatAll"] = DeferredObservable_concatAll;
export const concatMap: Signature["concatMap"] = DeferredObservable_concatMap;
export const exhaust: Signature["exhaust"] = DeferredObservable_exhaust;
export const exhaustMap: Signature["exhaustMap"] =
  DeferredObservable_exhaustMap;
export const mergeAll: Signature["mergeAll"] = DeferredObservable_mergeAll;
export const mergeMap: Signature["mergeMap"] = DeferredObservable_mergeMap;
export const multicast: Signature["multicast"] = DeferredObservable_multicast;
export const repeat: Signature["repeat"] = DeferredObservable_repeat;
export const retry: Signature["retry"] = DeferredObservable_retry;
export const share: Signature["share"] = DeferredObservable_share;
export const switchAll: Signature["switchAll"] = DeferredObservable_switchAll;
export const switchMap: Signature["switchMap"] = DeferredObservable_switchMap;
