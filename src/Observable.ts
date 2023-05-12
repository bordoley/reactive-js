import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatMany from "./Observable/__internal__/Observable.concatMany.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_create from "./Observable/__internal__/Observable.create.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_defer from "./Observable/__internal__/Observable.defer.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_encodeUtf8 from "./Observable/__internal__/Observable.encodeUtf8.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_forkConcat from "./Observable/__internal__/Observable.forkConcat.js";
import Observable_forkMerge from "./Observable/__internal__/Observable.forkMerge.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_isDeferredObservable from "./Observable/__internal__/Observable.isDeferredObservable.js";
import Observable_isEnumerable from "./Observable/__internal__/Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable/__internal__/Observable.isRunnable.js";
import Observable_isSharedObservable from "./Observable/__internal__/Observable.isSharedObservable.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_mergeMany from "./Observable/__internal__/Observable.mergeMany.js";
import Observable_mergeWith from "./Observable/__internal__/Observable.mergeWith.js";
import Observable_never from "./Observable/__internal__/Observable.never.js";
import Observable_onSubscribe from "./Observable/__internal__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
import Observable_subscribe from "./Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "./Observable/__internal__/Observable.subscribeOn.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throttle from "./Observable/__internal__/Observable.throttle.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "./Observable/__internal__/Observable.throws.js";
import Observable_toEventSource from "./Observable/__internal__/Observable.toEventSource.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Optional_toRunnable from "./Optional/__internal__/Optional.toRunnable.js";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Optional,
  Predicate,
  Reducer,
  SideEffect1,
  TypePredicate,
  Updater,
} from "./functions.js";
import {
  DeferredObservableLike,
  DispatcherLike,
  DisposableLike,
  DisposableOrTeardown,
  EnumerableLike,
  EventSourceLike,
  ObservableContainer,
  ObservableLike,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableLike,
  SchedulerLike,
  SharedObservableLike,
} from "./types.js";

export type EnumerableUpperBoundObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends EnumerableLike<TIn>
  ? EnumerableLike<TOut>
  : TObservableIn extends RunnableLike<TIn>
  ? RunnableLike<TOut>
  : TObservableIn extends DeferredObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : TObservableIn extends SharedObservableLike<TIn>
  ? SharedObservableLike<TOut>
  : never;

export type RunnableUpperBoundObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends RunnableLike<TIn>
  ? RunnableLike<TOut>
  : TObservableIn extends DeferredObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : TObservableIn extends SharedObservableLike<TIn>
  ? SharedObservableLike<TOut>
  : never;

export type DeferredObservableUpperBoundObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends DeferredObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : TObservableIn extends SharedObservableLike<TIn>
  ? SharedObservableLike<TOut>
  : never;

export type Type = ObservableContainer;

export namespace Animation {
  /**
   * @noInheritDoc
   */
  export interface Delay {
    readonly type: "delay";
    readonly duration: number;
  }

  /**
   * @noInheritDoc
   */
  export interface KeyFrame {
    readonly type: "keyframe";
    readonly from: number;
    readonly to: number;
    readonly duration: number;
    readonly easing?: Function1<number, number>;
  }

  /**
   * @noInheritDoc
   */
  export interface Frame {
    readonly type: "frame";
    readonly value: number;
  }

  /**
   * @noInheritDoc
   */
  export interface Loop<T> {
    readonly type: "loop";
    readonly animation: Animation<T> | readonly Animation<T>[];
    readonly count?: number;
  }

  /**
   * @noInheritDoc
   */
  export interface Spring {
    readonly type: "spring";
    readonly from: number;
    readonly to: number;
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
  }
}
export type Animation<T = number> =
  | Animation.Delay
  | Animation.Loop<T>
  | (T extends number
      ? (Animation.KeyFrame | Animation.Spring | Animation.Frame) & {
          readonly selector?: never;
        }
      : (Animation.KeyFrame | Animation.Spring | Animation.Frame) & {
          readonly selector: Function1<number, T>;
        });

type MaybeSharedObservableLike<T> = SharedObservableLike<T> | ObservableLike<T>;
type AnyObservableLike<T> =
  | EnumerableLike<T>
  | RunnableLike<T>
  | DeferredObservableLike<T>
  | SharedObservableLike<T>
  | ObservableLike<T>;

export interface Signature {
  animate<T = number>(
    configs: Animation<T> | readonly Animation<T>[],
  ): RunnableLike<T>;

  backpressureStrategy<T>(
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ): EnumerableUpperBoundObservableOperator<T, T>;

  concat<T>(
    fst: EnumerableLike<T>,
    snd: EnumerableLike<T>,
    ...tail: readonly EnumerableLike<T>[]
  ): EnumerableLike<T>;
  concat<T>(
    fst: RunnableLike<T>,
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): RunnableLike<T>;
  concat<T>(
    fst: DeferredObservableLike<T>,
    snd: DeferredObservableLike<T>,
    ...tail: readonly DeferredObservableLike<T>[]
  ): DeferredObservableLike<T>;
  concat<T>(
    fst: SharedObservableLike<T>,
    snd: DeferredObservableLike<T>,
    ...tail: readonly DeferredObservableLike<T>[]
  ): SharedObservableLike<T>;

  concatMany<T>(observables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
  concatMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
  concatMany<T>(
    observables: readonly DeferredObservableLike<T>[],
  ): DeferredObservableLike<T>;
  concatMany<T>(
    observables: readonly [
      SharedObservableLike<T>,
      ...DeferredObservableLike<T>[],
    ],
  ): SharedObservableLike<T>;

  concatWith<T>(
    snd: EnumerableLike<T>,
    ...tail: readonly EnumerableLike<T>[]
  ): EnumerableUpperBoundObservableOperator<T, T>;
  concatWith<T>(
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): RunnableUpperBoundObservableOperator<T, T>;
  concatWith<T>(
    snd: DeferredObservableLike<T>,
    ...tail: readonly DeferredObservableLike<T>[]
  ): DeferredObservableUpperBoundObservableOperator<T, T>;

  create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableLike<T>;

  currentTime(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }): RunnableLike<number>;

  decodeWithCharset(options?: {
    readonly charset?: string;
  }): EnumerableUpperBoundObservableOperator<ArrayBuffer, string>;

  defer<T>(
    f: Factory<SharedObservableLike<T> & DisposableLike>,
  ): DeferredObservableLike<T>;

  dispatchTo<T>(
    dispatcher: DispatcherLike<T>,
  ): EnumerableUpperBoundObservableOperator<T, T>;

  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): EnumerableUpperBoundObservableOperator<T, T>;

  empty<T>(): EnumerableLike<T>;
  empty<T>(options: { readonly delay: number }): RunnableLike<T>;

  encodeUtf8: EnumerableUpperBoundObservableOperator<string, Uint8Array>;

  endWith<T>(
    value: T,
    ...values: readonly T[]
  ): EnumerableUpperBoundObservableOperator<T, T>;

  enqueue<T>(
    queue: QueueableLike<T>,
  ): EnumerableUpperBoundObservableOperator<T, T>;

  firstAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
  firstAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<ObservableLike<T>, Promise<Optional<T>>>;

  forEach<T>(
    effect: SideEffect1<T>,
  ): EnumerableUpperBoundObservableOperator<T, T>;

  forkConcat<TObservableIn extends EnumerableLike<TIn>, TIn, TOut>(
    fst: Function1<TObservableIn, EnumerableLike<TOut>>,
    snd: Function1<TObservableIn, EnumerableLike<TOut>>,
    ...tail: readonly Function1<TObservableIn, EnumerableLike<TOut>>[]
  ): Function1<TObservableIn, EnumerableLike<TOut>>;
  forkConcat<TObservableIn extends RunnableLike<TIn>, TIn, TOut>(
    fst: Function1<TObservableIn, RunnableLike<TOut>>,
    snd: Function1<TObservableIn, RunnableLike<TOut>>,
    ...tail: readonly Function1<TObservableIn, RunnableLike<TOut>>[]
  ): Function1<TObservableIn, RunnableLike<TOut>>;
  forkConcat<TObservableIn extends DeferredObservableLike<TIn>, TIn, TOut>(
    fst: Function1<TObservableIn, DeferredObservableLike<TOut>>,
    snd: Function1<TObservableIn, DeferredObservableLike<TOut>>,
    ...tail: readonly Function1<TObservableIn, DeferredObservableLike<TOut>>[]
  ): Function1<TObservableIn, DeferredObservableLike<TOut>>;
  forkConcat<TObservableIn extends DeferredObservableLike<TIn>, TIn, TOut>(
    fst: Function1<TObservableIn, SharedObservableLike<TOut>>,
    snd: Function1<TObservableIn, DeferredObservableLike<TOut>>,
    ...tail: readonly Function1<TObservableIn, DeferredObservableLike<TOut>>[]
  ): Function1<TObservableIn, SharedObservableLike<TOut>>;

  forkMerge<TObservableIn extends EnumerableLike<TIn>, TIn, TOut>(
    fst: Function1<TObservableIn, EnumerableLike<TOut>>,
    snd: Function1<TObservableIn, EnumerableLike<TOut>>,
    ...tail: readonly Function1<TObservableIn, EnumerableLike<TOut>>[]
  ): Function1<TObservableIn, EnumerableLike<TOut>>;
  forkMerge<TObservableIn extends RunnableLike<TIn>, TIn, TOut>(
    fst: Function1<TObservableIn, RunnableLike<TOut>>,
    snd: Function1<TObservableIn, RunnableLike<TOut>>,
    ...tail: readonly Function1<TObservableIn, RunnableLike<TOut>>[]
  ): Function1<TObservableIn, RunnableLike<TOut>>;
  forkMerge<TObservableIn extends DeferredObservableLike<TIn>, TIn, TOut>(
    fst: Function1<TObservableIn, DeferredObservableLike<TOut>>,
    snd: Function1<TObservableIn, DeferredObservableLike<TOut>>,
    ...tail: readonly Function1<TObservableIn, DeferredObservableLike<TOut>>[]
  ): Function1<TObservableIn, DeferredObservableLike<TOut>>;
  forkMerge<TObservableIn extends SharedObservableLike<TIn>, TIn, TOut>(
    fst: Function1<TObservableIn, SharedObservableLike<TOut>>,
    snd: Function1<TObservableIn, SharedObservableLike<TOut>>,
    ...tail: readonly Function1<TObservableIn, SharedObservableLike<TOut>>[]
  ): Function1<TObservableIn, SharedObservableLike<TOut>>;
  forkMerge<TObservableIn extends DeferredObservableLike<TIn>, TIn, TOut>(
    fst: Function1<TObservableIn, MaybeSharedObservableLike<TOut>>,
    snd: Function1<TObservableIn, MaybeSharedObservableLike<TOut>>,
    ...tail: readonly Function1<
      TObservableIn,
      MaybeSharedObservableLike<TOut>
    >[]
  ): Function1<TObservableIn, SharedObservableLike<TOut>>;

  fromFactory<T>(): Function1<Factory<T>, EnumerableLike<T>>;
  fromFactory<T>(options: {
    readonly delay: number;
  }): Function1<Factory<T>, RunnableLike<T>>;

  fromOptional<T>(): Function1<Optional<T>, EnumerableLike<T>>;
  fromFactory<T>(options: {
    readonly delay: number;
  }): Function1<Factory<T>, RunnableLike<T>>;

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

  ignoreElements<T>(): EnumerableUpperBoundObservableOperator<unknown, T>;

  isDeferredObservable<T>(
    obs: ObservableLike<T>,
  ): obs is DeferredObservableLike<T>;

  isEnumerable<T>(obs: ObservableLike<T>): obs is EnumerableLike<T>;

  isRunnable<T>(obs: ObservableLike<T>): obs is RunnableLike<T>;

  isSharedObservable<T>(obs: ObservableLike<T>): obs is SharedObservableLike<T>;

  keep<T>(
    predicate: Predicate<T>,
  ): EnumerableUpperBoundObservableOperator<T, T>;

  keepType<TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): EnumerableUpperBoundObservableOperator<TA, TB>;

  lastAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
  lastAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<ObservableLike<T>, Promise<Optional<T>>>;

  map<TA, TB>(
    selector: Function1<TA, TB>,
  ): EnumerableUpperBoundObservableOperator<TA, TB>;

  merge<T>(
    fst: EnumerableLike<T>,
    snd: EnumerableLike<T>,
    ...tail: readonly EnumerableLike<T>[]
  ): EnumerableLike<T>;
  merge<T>(
    fst: RunnableLike<T>,
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): RunnableLike<T>;
  merge<T>(
    fst: DeferredObservableLike<T>,
    snd: DeferredObservableLike<T>,
    ...tail: readonly DeferredObservableLike<T>[]
  ): DeferredObservableLike<T>;
  merge<T>(
    fst: MaybeSharedObservableLike<T>,
    snd: MaybeSharedObservableLike<T>,
    ...tail: readonly MaybeSharedObservableLike<T>[]
  ): SharedObservableLike<T>;

  mergeWith<T>(
    snd: EnumerableLike<T>,
    ...tail: readonly EnumerableLike<T>[]
  ): EnumerableUpperBoundObservableOperator<T, T>;
  mergeWith<T>(
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): RunnableUpperBoundObservableOperator<T, T>;
  mergeWith<T>(
    snd: DeferredObservableLike<T>,
    ...tail: readonly DeferredObservableLike<T>[]
  ): DeferredObservableUpperBoundObservableOperator<T, T>;
  mergeWith<T>(
    snd: MaybeSharedObservableLike<T>,
    ...tail: readonly MaybeSharedObservableLike<T>[]
  ): Function1<ObservableLike<T>, SharedObservableLike<T>>;

  mergeMany<T>(observables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
  mergeMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
  mergeMany<T>(
    observables: readonly DeferredObservableLike<T>[],
  ): DeferredObservableLike<T>;
  mergeMany<T>(
    observables: readonly MaybeSharedObservableLike<T>[],
  ): SharedObservableLike<T>;

  mapTo<TA, TB>(value: TB): EnumerableUpperBoundObservableOperator<TA, TB>;

  never<T>(): SharedObservableLike<T>;

  onSubscribe<T>(
    f: Factory<DisposableOrTeardown | void>,
  ): EnumerableUpperBoundObservableOperator<T, T>;

  pairwise<T>(): EnumerableUpperBoundObservableOperator<T, readonly [T, T]>;

  pick<T, TKey extends keyof T>(
    key: TKey,
  ): EnumerableUpperBoundObservableOperator<T, T[TKey]>;
  pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(
    keyA: TKeyA,
    keyB: TKeyB,
  ): EnumerableUpperBoundObservableOperator<T, T[TKeyA][TKeyB]>;
  pick<
    T,
    TKeyA extends keyof T,
    TKeyB extends keyof T[TKeyA],
    TKeyC extends keyof T[TKeyA][TKeyB],
  >(
    keyA: TKeyA,
    keyB: TKeyB,
    keyC: TKeyC,
  ): EnumerableUpperBoundObservableOperator<T, T[TKeyA][TKeyB][TKeyC]>;

  scan<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): EnumerableUpperBoundObservableOperator<T, TAcc>;

  skipFirst<T>(options?: {
    readonly count?: number;
  }): EnumerableUpperBoundObservableOperator<T, T>;

  startWith<T>(
    value: T,
    ...values: readonly T[]
  ): EnumerableUpperBoundObservableOperator<T, T>;

  subscribe<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, DisposableLike>;

  subscribeOn<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<DeferredObservableLike<T>, DeferredObservableLike<T>>;
  subscribeOn<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<SharedObservableLike<T>, SharedObservableLike<T>>;

  takeFirst<T>(options?: {
    readonly count?: number;
  }): EnumerableUpperBoundObservableOperator<T, T>;

  takeLast<T>(options?: {
    readonly count?: number;
  }): EnumerableUpperBoundObservableOperator<T, T>;

  takeWhile<T>(
    predicate: Predicate<T>,
    options?: {
      readonly inclusive?: boolean;
    },
  ): EnumerableUpperBoundObservableOperator<T, T>;

  throttle<T>(
    duration: number,
    options?: { readonly mode?: "first" | "last" | "interval" },
  ): RunnableUpperBoundObservableOperator<T, T>;

  throwIfEmpty<T>(
    factory: Factory<unknown>,
    options?: undefined,
  ): EnumerableUpperBoundObservableOperator<T, T>;

  throws<T>(): EnumerableLike<T>;
  throws<T>(options: { readonly raise: Factory<unknown> }): EnumerableLike<T>;
  throws<T>(options: {
    readonly delay: number;
    readonly raise?: Factory<unknown>;
  }): RunnableLike<T>;

  toEventSource<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, EventSourceLike<T>>;

  withCurrentTime<TA, TB>(
    selector: Function2<number, TA, TB>,
  ): EnumerableUpperBoundObservableOperator<TA, TB>;

  withLastestFrom<TA, TB, T>(
    other: EnumerableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): EnumerableUpperBoundObservableOperator<TA, T>;
  withLastestFrom<TA, TB, T>(
    other: RunnableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): RunnableUpperBoundObservableOperator<TA, T>;
  withLastestFrom<TA, TB, T>(
    other: DeferredObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): DeferredObservableUpperBoundObservableOperator<TA, T>;
  withLastestFrom<TA, TB, T>(
    other: SharedObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): Function1<AnyObservableLike<TA>, SharedObservableLike<T>>;
}

export const backpressureStrategy: Signature["backpressureStrategy"] =
  Observable_backpressureStrategy;
export const concat: Signature["concat"] = Observable_concat;
export const concatMany: Signature["concatMany"] = Observable_concatMany;
export const concatWith: Signature["concatWith"] = Observable_concatWith;
export const create: Signature["create"] = Observable_create;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Observable_decodeWithCharset;
export const defer: Signature["defer"] = Observable_defer;
export const dispatchTo: Signature["dispatchTo"] = Observable_dispatchTo;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const empty: Signature["empty"] = Observable_empty;
export const encodeUtf8: Signature["encodeUtf8"] = Observable_encodeUtf8;
export const endWith: Signature["endWith"] = Observable_endWith;
export const enqueue: Signature["enqueue"] = Observable_enqueue;
export const firstAsync: Signature["firstAsync"] = Observable_firstAsync;
export const forEach: Signature["forEach"] = Observable_forEach;
export const forkConcat: Signature["forkConcat"] = Observable_forkConcat;
export const forkMerge: Signature["forkMerge"] = Observable_forkMerge;
export const fromFactory: Signature["fromFactory"] = Observable_fromFactory;
export const fromOptional: Signature["fromOptional"] = Optional_toRunnable;
export const generate: Signature["generate"] = Observable_generate;
export const ignoreElements: Signature["ignoreElements"] =
  Observable_ignoreElements;
export const isDeferredObservable: Signature["isDeferredObservable"] =
  Observable_isDeferredObservable;
export const isEnumerable: Signature["isEnumerable"] = Observable_isEnumerable;
export const isRunnable: Signature["isRunnable"] = Observable_isRunnable;
export const isSharedObservable: Signature["isSharedObservable"] =
  Observable_isSharedObservable;
export const keep: Signature["keep"] = Observable_keep;
export const keepType: Signature["keepType"] = Observable_keepType;
export const lastAsync: Signature["lastAsync"] = Observable_lastAsync;
export const map: Signature["map"] = Observable_map;
export const mapTo: Signature["mapTo"] = Observable_mapTo;
export const merge: Signature["merge"] = Observable_merge;
export const mergeMany: Signature["mergeMany"] = Observable_mergeMany;
export const mergeWith: Signature["mergeWith"] = Observable_mergeWith;
export const never: Signature["never"] = Observable_never;
export const onSubscribe: Signature["onSubscribe"] = Observable_onSubscribe;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const pick: Signature["pick"] = Observable_pick;
export const scan: Signature["scan"] = Observable_scan;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const startWith: Signature["startWith"] = Observable_startWith;
export const subscribe: Signature["subscribe"] = Observable_subscribe;
export const subscribeOn: Signature["subscribeOn"] = Observable_subscribeOn;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const throttle: Signature["throttle"] = Observable_throttle;
export const throwIfEmpty: Signature["throwIfEmpty"] = Observable_throwIfEmpty;
export const throws: Signature["throws"] = Observable_throws;
export const toEventSource: Signature["toEventSource"] =
  Observable_toEventSource;
export const withCurrentTime: Signature["withCurrentTime"] =
  Observable_withCurrentTime;
export const withLatestFrom: Signature["withLastestFrom"] =
  Observable_withLatestFrom;
