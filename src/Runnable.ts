import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import { Runnable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_flatMapIterable from "./Observable/__internal__/Observable.flatMapIterable.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_fromEnumeratorFactory from "./Observable/__internal__/Observable.fromEnumeratorFactory.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_fromValue from "./Observable/__internal__/Observable.fromValue.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
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
import Runnable_concatAll from "./Runnable/__internal__/Runnable.concatAll.js";
import Runnable_concatMap from "./Runnable/__internal__/Runnable.concatMap.js";
import Runnable_contains from "./Runnable/__internal__/Runnable.contains.js";
import Runnable_everySatisfy from "./Runnable/__internal__/Runnable.everySatisfy.js";
import Runnable_exhaust from "./Runnable/__internal__/Runnable.exhaust.js";
import Runnable_exhaustMap from "./Runnable/__internal__/Runnable.exhaustMap.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_flow from "./Runnable/__internal__/Runnable.flow.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";
import Runnable_mergeAll from "./Runnable/__internal__/Runnable.mergeAll.js";
import Runnable_mergeMap from "./Runnable/__internal__/Runnable.mergeMap.js";
import Runnable_noneSatisfy from "./Runnable/__internal__/Runnable.noneSatisfy.js";
import Runnable_reduce from "./Runnable/__internal__/Runnable.reduce.js";
import Runnable_run from "./Runnable/__internal__/Runnable.run.js";
import Runnable_someSatisfy from "./Runnable/__internal__/Runnable.someSatisfy.js";
import Runnable_switchAll from "./Runnable/__internal__/Runnable.switchAll.js";
import Runnable_switchMap from "./Runnable/__internal__/Runnable.switchMap.js";
import Runnable_toReadonlyArray from "./Runnable/__internal__/Runnable.toReadonlyArray.js";
import {
  Factory,
  Function1,
  Optional,
  SideEffect1,
  Updater,
  identityLazy,
} from "./functions.js";
import {
  HigherOrderObservableBaseTypeClass,
  RunnableContainerTypeClass,
} from "./type-classes.js";
import {
  DisposableLike,
  EnumerableLike,
  EnumeratorLike,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableContainer,
  RunnableLike,
  SchedulerLike,
} from "./types.js";

export type Type = RunnableContainer;

export interface RunnableModule
  extends RunnableContainerTypeClass<Type>,
    HigherOrderObservableBaseTypeClass<Type, Type> {
  compute<T>(
    computation: Factory<T>,
    options?: {
      mode?: "batched" | "combine-latest";
    },
  ): RunnableLike<T>;

  // FIXME: should be defined on a typeclass
  flow<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<RunnableLike<T>, PauseableObservableLike<T> & DisposableLike>;

  fromEnumeratorFactory<T>(): Function1<
    Factory<EnumeratorLike<T>>,
    EnumerableLike<T>
  >;
  fromEnumeratorFactory<T>(options: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<Factory<EnumeratorLike<T>>, RunnableLike<T>>;

  fromFactory<T>(): Function1<Factory<T>, EnumerableLike<T>>;
  fromFactory<T>(options: {
    readonly delay: number;
  }): Function1<Factory<T>, RunnableLike<T>>;

  fromIterable<T>(): Function1<Iterable<T>, EnumerableLike<T>>;
  fromIterable<T>(options: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<Iterable<T>, RunnableLike<T>>;

  fromOptional<T>(): Function1<Optional<T>, EnumerableLike<T>>;
  fromOptional<T>(options: {
    readonly delay: number;
  }): Function1<Optional<T>, RunnableLike<T>>;

  fromReadonlyArray<T>(): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
  fromReadonlyArray<T>(options: {
    readonly count: number;
  }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
  fromReadonlyArray<T>(options: {
    readonly count: number;
    readonly start: number;
  }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
  fromReadonlyArray<T>(options: {
    readonly start: number;
  }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
  fromReadonlyArray<T>(options: {
    readonly delay: number;
    readonly delayStart?: boolean;
    readonly count?: number;
    readonly start?: number;
  }): Function1<ReadonlyArray<T>, RunnableLike<T>>;

  fromValue<T>(): Function1<T, EnumerableLike<T>>;
  fromValue<T>(options: {
    readonly delay: number;
  }): Function1<T, RunnableLike<T>>;

  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
  ): EnumerableLike<T>;
  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options: { readonly delay: number; readonly delayStart?: boolean },
  ): RunnableLike<T>;
  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: { readonly delay?: number; readonly delayStart?: boolean },
  ): RunnableLike<T>;

  run<T>(options?: {
    readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  }): SideEffect1<RunnableLike<T>>;

  throws<T>(): EnumerableLike<T>;
  throws<T>(options: { readonly raise: Factory<unknown> }): EnumerableLike<T>;
  throws<T>(options: {
    readonly delay: number;
    readonly raise?: Factory<unknown>;
  }): RunnableLike<T>;
}

export type Signature = RunnableModule;

export const buffer: Signature["buffer"] = Observable_buffer;
export const compute: Signature["compute"] = Runnable_compute;
export const concat: Signature["concat"] = Observable_concat;
export const concatWith: Signature["concatWith"] = Observable_concatWith;
export const contains: Signature["contains"] = Runnable_contains;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const empty: Signature["empty"] = Observable_empty;
export const endWith: Signature["endWith"] = Observable_endWith;
export const everySatisfy: Signature["everySatisfy"] = Runnable_everySatisfy;
export const concatAll: Signature["concatAll"] = Runnable_concatAll;
export const concatMap: Signature["concatMap"] = Runnable_concatMap;
export const exhaust: Signature["exhaust"] = Runnable_exhaust;
export const exhaustMap: Signature["exhaustMap"] = Runnable_exhaustMap;
export const first: Signature["first"] = Runnable_first;
export const flatMapIterable: Signature["flatMapIterable"] =
  Observable_flatMapIterable;
export const flow: Signature["flow"] = Runnable_flow;
export const forEach: Signature["forEach"] = Observable_forEach;
export const fromEnumerable: Signature["fromEnumerable"] = identityLazy;
export const fromEnumeratorFactory: Signature["fromEnumeratorFactory"] =
  Observable_fromEnumeratorFactory;
export const fromFactory: Signature["fromFactory"] = Observable_fromFactory;
export const fromIterable: Signature["fromIterable"] = Iterable_toObservable;
export const fromOptional: Signature["fromOptional"] = Optional_toObservable;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  ReadonlyArray_toObservable;
export const fromValue: Signature["fromValue"] = Observable_fromValue;
export const generate: Signature["generate"] = Observable_generate;
export const keep: Signature["keep"] = Observable_keep;
export const keepType: Signature["keepType"] =
  Observable_keepType as Signature["keepType"];
export const last: Signature["last"] = Runnable_last;
export const map: Signature["map"] = Observable_map;
export const mapTo: Signature["mapTo"] = Observable_mapTo;
export const mergeAll: Signature["mergeAll"] = Runnable_mergeAll;
export const mergeMap: Signature["mergeMap"] = Runnable_mergeMap;
export const noneSatisfy: Signature["noneSatisfy"] = Runnable_noneSatisfy;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const pick: Signature["pick"] = Observable_pick;
export const reduce: Signature["reduce"] = Runnable_reduce;
export const run: Signature["run"] = Runnable_run;
export const scan: Signature["scan"] = Observable_scan;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const someSatisfy: Signature["someSatisfy"] = Runnable_someSatisfy;
export const startWith: Signature["startWith"] = Observable_startWith;
export const switchAll: Signature["switchAll"] = Runnable_switchAll;
export const switchMap: Signature["switchMap"] = Runnable_switchMap;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const throws: Signature["throws"] = Observable_throws;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Runnable_toReadonlyArray;
export const zip: Signature["zip"] = Observable_zip;
export const zipWith: Signature["zipWith"] = Observable_zipWith;
