import {
  Computation,
  Computation_T,
  Computation_type,
  PureComputationModule,
} from "../computations.js";
import {
  DeferredObservableLike,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
  SchedulerLike,
} from "../concurrent.js";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Optional,
  Predicate,
  Reducer,
  SideEffect,
  SideEffect1,
  Tuple2,
} from "../functions.js";
import { DispatcherLike } from "../rx.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../utils.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_create from "./Observable/__internal__/Observable.create.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_encodeUtf8 from "./Observable/__internal__/Observable.encodeUtf8.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_fromIterable from "./Observable/__internal__/Observable.fromIterable.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_isPure from "./Observable/__internal__/Observable.isPure.js";
import Observable_isRunnable from "./Observable/__internal__/Observable.isRunnable.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_onSubscribe from "./Observable/__internal__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_reduce from "./Observable/__internal__/Observable.reduce.js";
import Observable_run from "./Observable/__internal__/Observable.run.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_subscribe from "./Observable/__internal__/Observable.subscribe.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throttle from "./Observable/__internal__/Observable.throttle.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";

export type PureObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends RunnableLike<TIn>
  ? RunnableLike<TOut>
  : TObservableIn extends RunnableWithSideEffectsLike<TIn>
  ? RunnableWithSideEffectsLike<TOut>
  : TObservableIn extends DeferredObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : TObservableIn extends MulticastObservableLike<TIn>
  ? MulticastObservableLike<TOut>
  : ObservableLike<TOut>;

export type ObservableOperatorWithSideEffects<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends RunnableLike<TIn> | RunnableWithSideEffectsLike<TIn>
  ? RunnableWithSideEffectsLike<TOut>
  : TObservableIn extends
      | DeferredObservableLike<TIn>
      | MulticastObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : ObservableLike<TOut>;

export type DeferredObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => DeferredObservableLike<TOut>;

export interface ObservableComputation extends Computation {
  readonly [Computation_type]?: ObservableLike<this[typeof Computation_T]>;
}

export type Type = ObservableComputation;

/**
 * @noInheritDoc
 * @category Module
 */
export interface ObservableModule
  extends PureComputationModule<ObservableComputation> {
  backpressureStrategy<T>(
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ): PureObservableOperator<T, T>;

  buffer<T>(options?: {
    count?: number;
  }): PureObservableOperator<T, readonly T[]>;

  create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableLike<T>;

  decodeWithCharset(options?: {
    readonly charset?: string;
  }): PureObservableOperator<ArrayBuffer, string>;

  dispatchTo<T>(
    dispatcher: DispatcherLike<T>,
  ): ObservableOperatorWithSideEffects<T, T>;

  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): PureObservableOperator<T, T>;

  empty<T>(): RunnableLike<T>;

  encodeUtf8(): PureObservableOperator<string, Uint8Array>;

  enqueue<T>(queue: QueueableLike<T>): ObservableOperatorWithSideEffects<T, T>;

  forEach<T>(effect: SideEffect1<T>): ObservableOperatorWithSideEffects<T, T>;

  fromIterable<T>(options?: {
    delay: number;
    delayStart?: boolean;
  }): Function1<Iterable<T>, DeferredObservableLike<T>>;

  ignoreElements<T>(): PureObservableOperator<unknown, T>;

  isPure<T>(obs: ObservableLike<T>): obs is ObservableLike<T> & {
    [ObservableLike_isPure]: true;
  };

  isRunnable<T>(obs: ObservableLike<T>): obs is ObservableLike<T> & {
    [ObservableLike_isDeferred]: true;
    [ObservableLike_isRunnable]: true;
  };

  keep<T>(predicate: Predicate<T>): PureObservableOperator<T, T>;

  map<TA, TB>(selector: Function1<TA, TB>): PureObservableOperator<TA, TB>;

  onSubscribe<T>(
    f: Factory<DisposableLike>,
  ): ObservableOperatorWithSideEffects<T, T>;
  onSubscribe<T>(
    f: Factory<SideEffect1<Optional<Error>>>,
  ): ObservableOperatorWithSideEffects<T, T>;
  onSubscribe<T>(f: SideEffect): ObservableOperatorWithSideEffects<T, T>;

  pairwise<T>(): PureObservableOperator<T, Tuple2<T, T>>;

  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<RunnableLike<T> | RunnableWithSideEffectsLike<T>, TAcc>;

  run<T>(options?: {
    readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  }): SideEffect1<RunnableLike<T> | RunnableWithSideEffectsLike<T>>;

  scan<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): PureObservableOperator<T, TAcc>;

  skipFirst<T>(options?: {
    readonly count?: number;
  }): PureObservableOperator<T, T>;

  subscribe<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, DisposableLike>;

  takeFirst<T>(options?: {
    readonly count?: number;
  }): PureObservableOperator<T, T>;

  takeLast<T>(options?: {
    readonly count?: number;
  }): PureObservableOperator<T, T>;

  takeWhile<T>(
    predicate: Predicate<T>,
    options?: { readonly inclusive?: boolean },
  ): PureObservableOperator<T, T>;

  throttle<T>(
    duration: number,
    options?: { readonly mode?: "first" | "last" | "interval" },
  ): ObservableOperatorWithSideEffects<T, T>;

  throwIfEmpty<T>(
    factory: Factory<unknown>,
    options?: undefined,
  ): PureObservableOperator<T, T>;

  withCurrentTime<TA, TB>(
    selector: Function2<number, TA, TB>,
  ): PureObservableOperator<TA, TB>;

  withLatestFrom<TA, TB, T>(
    other: RunnableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): PureObservableOperator<TA, T>;
  withLatestFrom<TA, TB, T>(
    other: RunnableWithSideEffectsLike<TB>,
    selector: Function2<TA, TB, T>,
  ): ObservableOperatorWithSideEffects<TA, T>;
  withLatestFrom<TA, TB, T>(
    other: DeferredObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): DeferredObservableOperator<TA, T>;
  withLatestFrom<TA, TB, T>(
    other: MulticastObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): Function1<ObservableLike<TA>, MulticastObservableLike<T>>;
}

export type Signature = ObservableModule;

export const backpressureStrategy: Signature["backpressureStrategy"] =
  Observable_backpressureStrategy;
export const buffer: Signature["buffer"] = Observable_buffer;
export const create: Signature["create"] = Observable_create;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Observable_decodeWithCharset;
export const dispatchTo: Signature["dispatchTo"] = Observable_dispatchTo;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const empty: Signature["empty"] = Observable_empty;
export const encodeUtf8: Signature["encodeUtf8"] = Observable_encodeUtf8;
export const enqueue: Signature["enqueue"] = Observable_enqueue;
export const forEach: Signature["forEach"] = Observable_forEach;
export const fromIterable: Signature["fromIterable"] = Observable_fromIterable;
export const ignoreElements: Signature["ignoreElements"] =
  Observable_ignoreElements;
export const isPure: Signature["isPure"] = Observable_isPure;
export const isRunnable: Signature["isRunnable"] = Observable_isRunnable;
export const keep: Signature["keep"] = Observable_keep;
export const map: Signature["map"] = Observable_map;
export const onSubscribe: Signature["onSubscribe"] = Observable_onSubscribe;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const reduce: Signature["reduce"] = Observable_reduce;
export const run: Signature["run"] = Observable_run;
export const scan: Signature["scan"] = Observable_scan;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const subscribe: Signature["subscribe"] = Observable_subscribe;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const throttle: Signature["throttle"] = Observable_throttle;
export const throwIfEmpty: Signature["throwIfEmpty"] = Observable_throwIfEmpty;
export const withCurrentTime: Signature["withCurrentTime"] =
  Observable_withCurrentTime;
export const withLatestFrom: Signature["withLatestFrom"] =
  Observable_withLatestFrom;
