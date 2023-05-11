import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_defer from "./Observable/__internal__/Observable.defer.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_encodeUtf8 from "./Observable/__internal__/Observable.encodeUtf8.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_isDeferredObservable from "./Observable/__internal__/Observable.isDeferredObservable.js";
import Observable_isEnumerable from "./Observable/__internal__/Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable/__internal__/Observable.isRunnable.js";
import Observable_isSharedObservable from "./Observable/__internal__/Observable.isSharedObservable.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_subscribe from "./Observable/__internal__/Observable.subscribe.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_toEventSource from "./Observable/__internal__/Observable.toEventSource.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Optional,
  Predicate,
  Reducer,
  SideEffect1,
  Updater,
} from "./functions.js";
import {
  Container,
  Container_T,
  Container_type,
  DeferredObservableLike,
  DispatcherLike,
  DisposableLike,
  EnumerableLike,
  EventSourceLike,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableLike,
  SchedulerLike,
  SharedObservableLike,
} from "./types.js";

export type ObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: ObservableLike<TIn>,
) => TObservableIn extends EnumerableLike<TIn>
  ? EnumerableLike<TOut>
  : TObservableIn extends RunnableLike<TIn>
  ? RunnableLike<TOut>
  : TObservableIn extends DeferredObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : TObservableIn extends SharedObservableLike<TIn>
  ? SharedObservableLike<TOut>
  : never;

export interface Type extends Container {
  readonly [Container_type]?: ObservableLike<this[typeof Container_T]>;
}

export interface Signature {
  backpressureStrategy<T>(
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ): ObservableOperator<T, T>;

  currentTime(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }): RunnableLike<number>;

  decodeWithCharset(options?: {
    readonly charset?: string;
  }): ObservableOperator<ArrayBuffer, string>;

  defer<T>(
    f: Factory<SharedObservableLike<T> & DisposableLike>,
  ): DeferredObservableLike<T>;

  dispatchTo<T>(dispatcher: DispatcherLike<T>): ObservableOperator<T, T>;

  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): ObservableOperator<T, T>;

  encodeUtf8: ObservableOperator<string, Uint8Array>;

  enqueue<T>(queue: QueueableLike<T>): ObservableOperator<T, T>;

  forEach<T>(effect: SideEffect1<T>): ObservableOperator<T, T>;

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

  ignoreElements<T>(): ObservableOperator<unknown, T>;

  isDeferredObservable<T>(
    obs: ObservableLike<T>,
  ): obs is DeferredObservableLike<T>;

  isEnumerable<T>(obs: ObservableLike<T>): obs is EnumerableLike<T>;

  isRunnable<T>(obs: ObservableLike<T>): obs is RunnableLike<T>;

  isSharedObservable<T>(obs: ObservableLike<T>): obs is SharedObservableLike<T>;

  keep<T>(predicate: Predicate<T>): ObservableOperator<T, T>;

  lastAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
  lastAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<ObservableLike<T>, Promise<Optional<T>>>;

  map<TA, TB>(selector: Function1<TA, TB>): ObservableOperator<TA, TB>;

  mapTo<TA, TB>(value: TB): ObservableOperator<TA, TB>;

  pairwise<T>(): ObservableOperator<T, readonly [T, T]>;

  pick<T, TKey extends keyof T>(key: TKey): ObservableOperator<T, T[TKey]>;
  pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(
    keyA: TKeyA,
    keyB: TKeyB,
  ): ObservableOperator<T, T[TKeyA][TKeyB]>;
  pick<
    T,
    TKeyA extends keyof T,
    TKeyB extends keyof T[TKeyA],
    TKeyC extends keyof T[TKeyA][TKeyB],
  >(
    keyA: TKeyA,
    keyB: TKeyB,
    keyC: TKeyC,
  ): ObservableOperator<T, T[TKeyA][TKeyB][TKeyC]>;

  scan<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ObservableOperator<T, TAcc>;

  skipFirst<T>(options?: { readonly count?: number }): ObservableOperator<T, T>;

  subscribe<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, DisposableLike>;

  takeFirst<T>(options?: { readonly count?: number }): ObservableOperator<T, T>;

  takeLast<T>(options?: { readonly count?: number }): ObservableOperator<T, T>;

  takeWhile<T>(
    predicate: Predicate<T>,
    options?: {
      readonly inclusive?: boolean;
    },
  ): ObservableOperator<T, T>;

  throwIfEmpty<T>(
    factory: Factory<unknown>,
    options?: undefined,
  ): ObservableOperator<T, T>;

  toEventSource<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, EventSourceLike<T>>;

  withCurrentTime<TA, TB>(
    selector: Function2<number, TA, TB>,
  ): ObservableOperator<TA, TB>;
}

export const backpressureStrategy: Signature["backpressureStrategy"] =
  Observable_backpressureStrategy;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Observable_decodeWithCharset;
export const defer: Signature["defer"] = Observable_defer;
export const dispatchTo: Signature["dispatchTo"] = Observable_dispatchTo;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const encodeUtf8: Signature["encodeUtf8"] = Observable_encodeUtf8;
export const enqueue: Signature["enqueue"] = Observable_enqueue;
export const forEach: Signature["forEach"] = Observable_forEach;
export const ignoreElements: Signature["ignoreElements"] =
  Observable_ignoreElements;
export const isDeferredObservable: Signature["isDeferredObservable"] =
  Observable_isDeferredObservable;
export const isEnumerable: Signature["isEnumerable"] = Observable_isEnumerable;
export const isRunnable: Signature["isRunnable"] = Observable_isRunnable;
export const isSharedObservable: Signature["isSharedObservable"] =
  Observable_isSharedObservable;
export const keep: Signature["keep"] = Observable_keep;
export const lastAsync: Signature["lastAsync"] = Observable_lastAsync;
export const map: Signature["map"] = Observable_map;
export const mapTo: Signature["mapTo"] = Observable_mapTo;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const pick: Signature["pick"] = Observable_pick;
export const scan: Signature["scan"] = Observable_scan;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const subscribe: Signature["subscribe"] = Observable_subscribe;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const throwIfEmpty: Signature["throwIfEmpty"] = Observable_throwIfEmpty;
export const toEventSource: Signature["toEventSource"] =
  Observable_toEventSource;
export const withCurrentTime: Signature["withCurrentTime"] =
  Observable_withCurrentTime;
