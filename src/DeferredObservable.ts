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
import DeferredObservable_scanLast from "./DeferredObservable/__internal__/DeferredObservable.scanLast.js";
import DeferredObservable_scanMany from "./DeferredObservable/__internal__/DeferredObservable.scanMany.js";
import DeferredObservable_share from "./DeferredObservable/__internal__/DeferredObservable.share.js";
import DeferredObservable_switchAll from "./DeferredObservable/__internal__/DeferredObservable.switchAll.js";
import DeferredObservable_switchMap from "./DeferredObservable/__internal__/DeferredObservable.switchMap.js";
import EnumeratorFactory_toObservable from "./EnumeratorFactory/__internal__/EnumeratorFactory.toObservable.js";
import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import { DeferredObservable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_flatMapIterable from "./Observable/__internal__/Observable.flatMapIterable.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_fromValue from "./Observable/__internal__/Observable.fromValue.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throws from "./Observable/__internal__/Observable.throws.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Optional_toObservable from "./Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "./ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { Factory, Function1, Predicate, identityLazy } from "./functions.js";
import {
  Container,
  Container_T,
  Container_type,
  DeferredObservableLike,
  DisposableLike,
  EnumerableLike,
  HigherOrderObservableTypeClass,
  MulticastObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  ReplayObservableLike,
  RunnableLike,
  SchedulerLike,
  StatefulTypeClass,
} from "./types.js";

export type DeferredObservableOperator<TIn, TOut> = <
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

/**
 * @noInheritDoc
 * @category Container
 */
export interface DeferredObservableContainer extends Container {
  readonly [Container_type]?: DeferredObservableLike<this[typeof Container_T]>;
}

export type Type = DeferredObservableContainer;

/**
 * @noInheritDoc
 */
export interface DeferredObservableModule
  extends StatefulTypeClass<Type>,
    HigherOrderObservableTypeClass<Type, Type> {
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

  repeat<T>(predicate: Predicate<number>): DeferredObservableOperator<T, T>;
  repeat<T>(count: number): DeferredObservableOperator<T, T>;
  repeat<T>(): DeferredObservableOperator<T, T>;

  retry<T>(
    shouldRetry: (count: number, error: Error) => boolean,
  ): DeferredObservableOperator<T, T>;

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

export const buffer: Signature["buffer"] = Observable_buffer;
export const catchError: Signature["catchError"] =
  DeferredObservable_catchError;
export const compute: Signature["compute"] = DeferredObservable_compute;
export const concat: Signature["concat"] = Observable_concat;
export const concatAll: Signature["concatAll"] = DeferredObservable_concatAll;
export const concatMap: Signature["concatMap"] = DeferredObservable_concatMap;
export const concatWith: Signature["concatWith"] = Observable_concatWith;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const empty: Signature["empty"] = Observable_empty;
export const endWith: Signature["endWith"] = Observable_endWith;
export const exhaust: Signature["exhaust"] = DeferredObservable_exhaust;
export const exhaustMap: Signature["exhaustMap"] =
  DeferredObservable_exhaustMap;
export const flatMapIterable: Signature["flatMapIterable"] =
  Observable_flatMapIterable;
export const forEach: Signature["forEach"] = Observable_forEach;
export const fromEnumerable: Signature["fromEnumerable"] = identityLazy;
export const fromEnumeratorFactory: Signature["fromEnumeratorFactory"] =
  EnumeratorFactory_toObservable;
export const fromFactory: Signature["fromFactory"] = Observable_fromFactory;
export const fromIterable: Signature["fromIterable"] = Iterable_toObservable;
export const fromOptional: Signature["fromOptional"] = Optional_toObservable;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  ReadonlyArray_toObservable;
export const fromValue: Signature["fromValue"] = Observable_fromValue;
export const generate: Signature["generate"] = Observable_generate;
export const ignoreElements: Signature["ignoreElements"] =
  Observable_ignoreElements;
export const keep: Signature["keep"] = Observable_keep;
export const keepType: Signature["keepType"] =
  Observable_keepType as Signature["keepType"];
export const map: Signature["map"] = Observable_map;
export const mapTo: Signature["mapTo"] = Observable_mapTo;
export const mergeAll: Signature["mergeAll"] = DeferredObservable_mergeAll;
export const mergeMap: Signature["mergeMap"] = DeferredObservable_mergeMap;
export const multicast: Signature["multicast"] = DeferredObservable_multicast;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const pick: Signature["pick"] = Observable_pick;
export const repeat: Signature["repeat"] = DeferredObservable_repeat;
export const retry: Signature["retry"] = DeferredObservable_retry;
export const scan: Signature["scan"] = Observable_scan;
export const scanLast: Signature["scanLast"] = DeferredObservable_scanLast;
export const scanMany: Signature["scanMany"] = DeferredObservable_scanMany;
export const share: Signature["share"] = DeferredObservable_share;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const startWith: Signature["startWith"] = Observable_startWith;
export const switchAll: Signature["switchAll"] = DeferredObservable_switchAll;
export const switchMap: Signature["switchMap"] = DeferredObservable_switchMap;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const throws: Signature["throws"] = Observable_throws;
export const toObservable: Signature["toObservable"] = identityLazy;
export const zip: Signature["zip"] = Observable_zip;
export const zipWith: Signature["zipWith"] = Observable_zipWith;
