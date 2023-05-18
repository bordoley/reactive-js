import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import type * as MulticastObservable from "./MulticastObservable.js";
import Observable_animate from "./Observable/__internal__/Observable.animate.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_catchError from "./Observable/__internal__/Observable.catchError.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatMany from "./Observable/__internal__/Observable.concatMany.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_create from "./Observable/__internal__/Observable.create.js";
import Observable_createPublisher from "./Observable/__internal__/Observable.createPublisher.js";
import Observable_createRefCountedPublisher from "./Observable/__internal__/Observable.createRefCountedPublisher.js";
import Observable_currentTime from "./Observable/__internal__/Observable.currentTime.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_defer from "./Observable/__internal__/Observable.defer.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_encodeUtf8 from "./Observable/__internal__/Observable.encodeUtf8.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_flatMapAsync from "./Observable/__internal__/Observable.flatMapAsync.js";
import Observable_flatMapIterable from "./Observable/__internal__/Observable.flatMapIterable.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_forkCombineLatest from "./Observable/__internal__/Observable.forkCombineLatest.js";
import Observable_forkConcat from "./Observable/__internal__/Observable.forkConcat.js";
import Observable_forkMerge from "./Observable/__internal__/Observable.forkMerge.js";
import Observable_forkZip from "./Observable/__internal__/Observable.forkZip.js";
import Observable_forkZipLatest from "./Observable/__internal__/Observable.forkZipLatest.js";
import Observable_fromAsyncFactory from "./Observable/__internal__/Observable.fromAsyncFactory.js";
import Observable_fromEnumeratorFactory from "./Observable/__internal__/Observable.fromEnumeratorFactory.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_fromValue from "./Observable/__internal__/Observable.fromValue.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_isDeferredObservable from "./Observable/__internal__/Observable.isDeferredObservable.js";
import Observable_isEnumerable from "./Observable/__internal__/Observable.isEnumerable.js";
import Observable_isMulticastObservable from "./Observable/__internal__/Observable.isMulticastObservable.js";
import Observable_isRunnable from "./Observable/__internal__/Observable.isRunnable.js";
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
import Observable_takeUntil from "./Observable/__internal__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throttle from "./Observable/__internal__/Observable.throttle.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "./Observable/__internal__/Observable.throws.js";
import Observable_toEventSource from "./Observable/__internal__/Observable.toEventSource.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";
import Optional_toObservable from "./Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "./ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
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
  TypePredicate,
  Updater,
} from "./functions.js";
import {
  Container,
  ContainerOf,
  Container_T,
  Container_type,
  DeferredObservableLike,
  DispatcherLike,
  DisposableLike,
  EnumerableLike,
  EnumeratorLike,
  EventSourceLike,
  MulticastObservableLike,
  ObservableLike,
  ObserverLike,
  PublisherLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableLike,
  SchedulerLike,
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
  : TObservableIn extends MulticastObservableLike<TIn>
  ? MulticastObservableLike<TOut>
  : ObservableLike<TOut>;

export type RunnableUpperBoundObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends RunnableLike<TIn>
  ? RunnableLike<TOut>
  : TObservableIn extends DeferredObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : TObservableIn extends MulticastObservableLike<TIn>
  ? MulticastObservableLike<TOut>
  : ObservableLike<TOut>;

export type DeferredObservableUpperBoundObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends DeferredObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : TObservableIn extends MulticastObservableLike<TIn>
  ? MulticastObservableLike<TOut>
  : ObservableLike<TOut>;

/**
 * @noInheritDoc
 * @category Container
 */
export interface ObservableContainer extends Container {
  readonly [Container_type]?: ObservableLike<this[typeof Container_T]>;
}

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

export type MaybeMulticastObservableLike<T> =
  | MulticastObservableLike<T>
  | ObservableLike<T>;
export type AnyObservableLike<T> =
  | EnumerableLike<T>
  | RunnableLike<T>
  | DeferredObservableLike<T>
  | MulticastObservableLike<T>
  | ObservableLike<T>;

export interface ObservableModule {
  animate<T = number>(
    configs: Animation<T> | readonly Animation<T>[],
  ): RunnableLike<T>;

  backpressureStrategy<T>(
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ): EnumerableUpperBoundObservableOperator<T, T>;

  buffer<T>(options?: {
    count?: number;
  }): EnumerableUpperBoundObservableOperator<T, readonly T[]>;

  catchError<T>(
    onError: SideEffect1<Error>,
  ): EnumerableUpperBoundObservableOperator<T, T>;

  combineLatest<TA, TB>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
  ): RunnableLike<readonly [TA, TB]>;
  combineLatest<TA, TB, TC>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
  ): RunnableLike<readonly [TA, TB, TC]>;
  combineLatest<TA, TB, TC, TD>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
  ): RunnableLike<readonly [TA, TB, TC, TD]>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE]>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE, TF]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
    i: RunnableLike<TI>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  combineLatest<TA, TB>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
  ): DeferredObservableLike<readonly [TA, TB]>;
  combineLatest<TA, TB, TC>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
  ): DeferredObservableLike<readonly [TA, TB, TC]>;
  combineLatest<TA, TB, TC, TD>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD]>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE]>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
    g: DeferredObservableLike<TG>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
    g: DeferredObservableLike<TG>,
    h: DeferredObservableLike<TH>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
    g: DeferredObservableLike<TG>,
    h: DeferredObservableLike<TH>,
    i: DeferredObservableLike<TI>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  combineLatest<TA, TB>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
  ): MulticastObservableLike<readonly [TA, TB]>;
  combineLatest<TA, TB, TC>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: DeferredObservableLike<TC>,
  ): MulticastObservableLike<readonly [TA, TB, TC]>;
  combineLatest<TA, TB, TC, TD>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
  ): MulticastObservableLike<readonly [TA, TB, TC, TD]>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
  ): MulticastObservableLike<readonly [TA, TB, TC, TD, TE]>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
  ): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
    g: MaybeMulticastObservableLike<TG>,
  ): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
    g: MaybeMulticastObservableLike<TG>,
    h: MaybeMulticastObservableLike<TH>,
  ): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
    g: MaybeMulticastObservableLike<TG>,
    h: MaybeMulticastObservableLike<TH>,
    i: MaybeMulticastObservableLike<TI>,
  ): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

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
    fst: MulticastObservableLike<T>,
    snd: DeferredObservableLike<T>,
    ...tail: readonly DeferredObservableLike<T>[]
  ): MulticastObservableLike<T>;

  concatMany<T>(observables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
  concatMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
  concatMany<T>(
    observables: readonly DeferredObservableLike<T>[],
  ): DeferredObservableLike<T>;
  concatMany<T>(
    observables: readonly [
      MulticastObservableLike<T>,
      ...DeferredObservableLike<T>[],
    ],
  ): MulticastObservableLike<T>;

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

  createPublisher<T>(options?: { readonly replay?: number }): PublisherLike<T>;

  createRefCountedPublisher<T>(options?: {
    readonly replay?: number;
  }): PublisherLike<T>;

  currentTime(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }): RunnableLike<number>;

  decodeWithCharset(options?: {
    readonly charset?: string;
  }): EnumerableUpperBoundObservableOperator<ArrayBuffer, string>;

  defer<T>(f: Factory<MulticastObservableLike<T>>): DeferredObservableLike<T>;

  dispatchTo<T>(
    dispatcher: DispatcherLike<T>,
  ): EnumerableUpperBoundObservableOperator<T, T>;

  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): EnumerableUpperBoundObservableOperator<T, T>;

  empty<T>(): EnumerableLike<T>;
  empty<T>(options: { readonly delay: number }): RunnableLike<T>;

  encodeUtf8(): EnumerableUpperBoundObservableOperator<string, Uint8Array>;

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

  flatMapAsync<TA, TB>(
    f: Function2<TA, AbortSignal, Promise<TB>>,
  ): DeferredObservableUpperBoundObservableOperator<TA, TB>;

  /**
   * @category Operator
   */
  flatMapIterable<TA, TB>(
    selector: Function1<TA, Iterable<TB>>,
  ): EnumerableUpperBoundObservableOperator<TA, TB>;

  forEach<T>(
    effect: SideEffect1<T>,
  ): EnumerableUpperBoundObservableOperator<T, T>;

  forkCombineLatest<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB>(
    a: Function1<TObservableIn, EnumerableLike<TA>>,
    b: Function1<TObservableIn, EnumerableLike<TB>>,
  ): Function1<TObservableIn, EnumerableLike<[TA, TB]>>;
  forkCombineLatest<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB, TC>(
    a: Function1<TObservableIn, EnumerableLike<TA>>,
    b: Function1<TObservableIn, EnumerableLike<TB>>,
    c: Function1<TObservableIn, EnumerableLike<TC>>,
  ): Function1<TObservableIn, EnumerableLike<[TA, TB, TC]>>;
  forkCombineLatest<
    TObservableIn extends EnumerableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
    TD,
  >(
    a: Function1<TObservableIn, EnumerableLike<TA>>,
    b: Function1<TObservableIn, EnumerableLike<TB>>,
    c: Function1<TObservableIn, EnumerableLike<TC>>,
    d: Function1<TObservableIn, EnumerableLike<TD>>,
  ): Function1<TObservableIn, EnumerableLike<[TA, TB, TC, TD]>>;

  forkCombineLatest<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB>(
    a: Function1<TObservableIn, RunnableLike<TA>>,
    b: Function1<TObservableIn, RunnableLike<TB>>,
  ): Function1<TObservableIn, RunnableLike<[TA, TB]>>;
  forkCombineLatest<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB, TC>(
    a: Function1<TObservableIn, RunnableLike<TA>>,
    b: Function1<TObservableIn, RunnableLike<TB>>,
    c: Function1<TObservableIn, RunnableLike<TC>>,
  ): Function1<TObservableIn, RunnableLike<[TA, TB, TC]>>;
  forkCombineLatest<
    TObservableIn extends RunnableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
    TD,
  >(
    a: Function1<TObservableIn, RunnableLike<TA>>,
    b: Function1<TObservableIn, RunnableLike<TB>>,
    c: Function1<TObservableIn, RunnableLike<TC>>,
    d: Function1<TObservableIn, RunnableLike<TD>>,
  ): Function1<TObservableIn, RunnableLike<[TA, TB, TC, TD]>>;

  forkCombineLatest<
    TObservableIn extends DeferredObservableLike<TIn>,
    TIn,
    TA,
    TB,
  >(
    a: Function1<TObservableIn, DeferredObservableLike<TA>>,
    b: Function1<TObservableIn, DeferredObservableLike<TB>>,
  ): Function1<TObservableIn, DeferredObservableLike<[TA, TB]>>;
  forkCombineLatest<
    TObservableIn extends DeferredObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
  >(
    a: Function1<TObservableIn, DeferredObservableLike<TA>>,
    b: Function1<TObservableIn, DeferredObservableLike<TB>>,
    c: Function1<TObservableIn, DeferredObservableLike<TC>>,
  ): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC]>>;
  forkCombineLatest<
    TObservableIn extends DeferredObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
    TD,
  >(
    a: Function1<TObservableIn, DeferredObservableLike<TA>>,
    b: Function1<TObservableIn, DeferredObservableLike<TB>>,
    c: Function1<TObservableIn, DeferredObservableLike<TC>>,
    d: Function1<TObservableIn, DeferredObservableLike<TD>>,
  ): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC, TD]>>;

  forkCombineLatest<
    TObservableIn extends MulticastObservableLike<TIn>,
    TIn,
    TA,
    TB,
  >(
    a: Function1<TObservableIn, MulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MulticastObservableLike<TB>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB]>>;
  forkCombineLatest<
    TObservableIn extends MulticastObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
  >(
    a: Function1<TObservableIn, MulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MulticastObservableLike<TB>>,
    c: Function1<TObservableIn, MulticastObservableLike<TC>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC]>>;
  forkCombineLatest<
    TObservableIn extends MulticastObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
    TD,
  >(
    a: Function1<TObservableIn, MulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MulticastObservableLike<TB>>,
    c: Function1<TObservableIn, MulticastObservableLike<TC>>,
    d: Function1<TObservableIn, MulticastObservableLike<TD>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC, TD]>>;

  forkCombineLatest<
    TObservableIn extends DeferredObservableLike<TIn>,
    TIn,
    TA,
    TB,
  >(
    a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB]>>;
  forkCombineLatest<
    TObservableIn extends DeferredObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
  >(
    a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>,
    c: Function1<TObservableIn, MaybeMulticastObservableLike<TC>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC]>>;
  forkCombineLatest<
    TObservableIn extends DeferredObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
    TD,
  >(
    a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>,
    c: Function1<TObservableIn, MaybeMulticastObservableLike<TC>>,
    d: Function1<TObservableIn, MaybeMulticastObservableLike<TD>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC, TD]>>;

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
    fst: Function1<TObservableIn, MulticastObservableLike<TOut>>,
    snd: Function1<TObservableIn, DeferredObservableLike<TOut>>,
    ...tail: readonly Function1<TObservableIn, DeferredObservableLike<TOut>>[]
  ): Function1<TObservableIn, MulticastObservableLike<TOut>>;

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
  forkMerge<TObservableIn extends MulticastObservableLike<TIn>, TIn, TOut>(
    fst: Function1<TObservableIn, MulticastObservableLike<TOut>>,
    snd: Function1<TObservableIn, MulticastObservableLike<TOut>>,
    ...tail: readonly Function1<TObservableIn, MulticastObservableLike<TOut>>[]
  ): Function1<TObservableIn, MulticastObservableLike<TOut>>;
  forkMerge<TObservableIn extends DeferredObservableLike<TIn>, TIn, TOut>(
    fst: Function1<TObservableIn, MaybeMulticastObservableLike<TOut>>,
    snd: Function1<TObservableIn, MaybeMulticastObservableLike<TOut>>,
    ...tail: readonly Function1<
      TObservableIn,
      MaybeMulticastObservableLike<TOut>
    >[]
  ): Function1<TObservableIn, MulticastObservableLike<TOut>>;

  forkZip<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB>(
    a: Function1<TObservableIn, EnumerableLike<TA>>,
    b: Function1<TObservableIn, EnumerableLike<TB>>,
  ): Function1<TObservableIn, EnumerableLike<[TA, TB]>>;
  forkZip<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB, TC>(
    a: Function1<TObservableIn, EnumerableLike<TA>>,
    b: Function1<TObservableIn, EnumerableLike<TB>>,
    c: Function1<TObservableIn, EnumerableLike<TC>>,
  ): Function1<TObservableIn, EnumerableLike<[TA, TB, TC]>>;
  forkZip<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB, TC, TD>(
    a: Function1<TObservableIn, EnumerableLike<TA>>,
    b: Function1<TObservableIn, EnumerableLike<TB>>,
    c: Function1<TObservableIn, EnumerableLike<TC>>,
    d: Function1<TObservableIn, EnumerableLike<TD>>,
  ): Function1<TObservableIn, EnumerableLike<[TA, TB, TC, TD]>>;

  forkZip<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB>(
    a: Function1<TObservableIn, RunnableLike<TA>>,
    b: Function1<TObservableIn, RunnableLike<TB>>,
  ): Function1<TObservableIn, RunnableLike<[TA, TB]>>;
  forkZip<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB, TC>(
    a: Function1<TObservableIn, RunnableLike<TA>>,
    b: Function1<TObservableIn, RunnableLike<TB>>,
    c: Function1<TObservableIn, RunnableLike<TC>>,
  ): Function1<TObservableIn, RunnableLike<[TA, TB, TC]>>;
  forkZip<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB, TC, TD>(
    a: Function1<TObservableIn, RunnableLike<TA>>,
    b: Function1<TObservableIn, RunnableLike<TB>>,
    c: Function1<TObservableIn, RunnableLike<TC>>,
    d: Function1<TObservableIn, RunnableLike<TD>>,
  ): Function1<TObservableIn, RunnableLike<[TA, TB, TC, TD]>>;

  forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB>(
    a: Function1<TObservableIn, DeferredObservableLike<TA>>,
    b: Function1<TObservableIn, DeferredObservableLike<TB>>,
  ): Function1<TObservableIn, DeferredObservableLike<[TA, TB]>>;
  forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC>(
    a: Function1<TObservableIn, DeferredObservableLike<TA>>,
    b: Function1<TObservableIn, DeferredObservableLike<TB>>,
    c: Function1<TObservableIn, DeferredObservableLike<TC>>,
  ): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC]>>;
  forkZip<
    TObservableIn extends DeferredObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
    TD,
  >(
    a: Function1<TObservableIn, DeferredObservableLike<TA>>,
    b: Function1<TObservableIn, DeferredObservableLike<TB>>,
    c: Function1<TObservableIn, DeferredObservableLike<TC>>,
    d: Function1<TObservableIn, DeferredObservableLike<TD>>,
  ): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC, TD]>>;

  forkZip<TObservableIn extends MulticastObservableLike<TIn>, TIn, TA, TB>(
    a: Function1<TObservableIn, MulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MulticastObservableLike<TB>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB]>>;
  forkZip<TObservableIn extends MulticastObservableLike<TIn>, TIn, TA, TB, TC>(
    a: Function1<TObservableIn, MulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MulticastObservableLike<TB>>,
    c: Function1<TObservableIn, MulticastObservableLike<TC>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC]>>;
  forkZip<
    TObservableIn extends MulticastObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
    TD,
  >(
    a: Function1<TObservableIn, MulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MulticastObservableLike<TB>>,
    c: Function1<TObservableIn, MulticastObservableLike<TC>>,
    d: Function1<TObservableIn, MulticastObservableLike<TD>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC, TD]>>;

  forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB>(
    a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB]>>;
  forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC>(
    a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>,
    c: Function1<TObservableIn, MaybeMulticastObservableLike<TC>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC]>>;
  forkZip<
    TObservableIn extends DeferredObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
    TD,
  >(
    a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>,
    c: Function1<TObservableIn, MaybeMulticastObservableLike<TC>>,
    d: Function1<TObservableIn, MaybeMulticastObservableLike<TD>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC, TD]>>;

  forkZipLatest<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB>(
    a: Function1<TObservableIn, EnumerableLike<TA>>,
    b: Function1<TObservableIn, EnumerableLike<TB>>,
  ): Function1<TObservableIn, EnumerableLike<[TA, TB]>>;
  forkZipLatest<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB, TC>(
    a: Function1<TObservableIn, EnumerableLike<TA>>,
    b: Function1<TObservableIn, EnumerableLike<TB>>,
    c: Function1<TObservableIn, EnumerableLike<TC>>,
  ): Function1<TObservableIn, EnumerableLike<[TA, TB, TC]>>;
  forkZipLatest<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB, TC, TD>(
    a: Function1<TObservableIn, EnumerableLike<TA>>,
    b: Function1<TObservableIn, EnumerableLike<TB>>,
    c: Function1<TObservableIn, EnumerableLike<TC>>,
    d: Function1<TObservableIn, EnumerableLike<TD>>,
  ): Function1<TObservableIn, EnumerableLike<[TA, TB, TC, TD]>>;

  forkZipLatest<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB>(
    a: Function1<TObservableIn, RunnableLike<TA>>,
    b: Function1<TObservableIn, RunnableLike<TB>>,
  ): Function1<TObservableIn, RunnableLike<[TA, TB]>>;
  forkZipLatest<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB, TC>(
    a: Function1<TObservableIn, RunnableLike<TA>>,
    b: Function1<TObservableIn, RunnableLike<TB>>,
    c: Function1<TObservableIn, RunnableLike<TC>>,
  ): Function1<TObservableIn, RunnableLike<[TA, TB, TC]>>;
  forkZipLatest<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB, TC, TD>(
    a: Function1<TObservableIn, RunnableLike<TA>>,
    b: Function1<TObservableIn, RunnableLike<TB>>,
    c: Function1<TObservableIn, RunnableLike<TC>>,
    d: Function1<TObservableIn, RunnableLike<TD>>,
  ): Function1<TObservableIn, RunnableLike<[TA, TB, TC, TD]>>;

  forkZipLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB>(
    a: Function1<TObservableIn, DeferredObservableLike<TA>>,
    b: Function1<TObservableIn, DeferredObservableLike<TB>>,
  ): Function1<TObservableIn, DeferredObservableLike<[TA, TB]>>;
  forkZipLatest<
    TObservableIn extends DeferredObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
  >(
    a: Function1<TObservableIn, DeferredObservableLike<TA>>,
    b: Function1<TObservableIn, DeferredObservableLike<TB>>,
    c: Function1<TObservableIn, DeferredObservableLike<TC>>,
  ): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC]>>;
  forkZipLatest<
    TObservableIn extends DeferredObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
    TD,
  >(
    a: Function1<TObservableIn, DeferredObservableLike<TA>>,
    b: Function1<TObservableIn, DeferredObservableLike<TB>>,
    c: Function1<TObservableIn, DeferredObservableLike<TC>>,
    d: Function1<TObservableIn, DeferredObservableLike<TD>>,
  ): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC, TD]>>;

  forkZipLatest<
    TObservableIn extends MulticastObservableLike<TIn>,
    TIn,
    TA,
    TB,
  >(
    a: Function1<TObservableIn, MulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MulticastObservableLike<TB>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB]>>;
  forkZipLatest<
    TObservableIn extends MulticastObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
  >(
    a: Function1<TObservableIn, MulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MulticastObservableLike<TB>>,
    c: Function1<TObservableIn, MulticastObservableLike<TC>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC]>>;
  forkZipLatest<
    TObservableIn extends MulticastObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
    TD,
  >(
    a: Function1<TObservableIn, MulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MulticastObservableLike<TB>>,
    c: Function1<TObservableIn, MulticastObservableLike<TC>>,
    d: Function1<TObservableIn, MulticastObservableLike<TD>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC, TD]>>;

  forkZipLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB>(
    a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB]>>;
  forkZipLatest<
    TObservableIn extends DeferredObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
  >(
    a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>,
    c: Function1<TObservableIn, MaybeMulticastObservableLike<TC>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC]>>;
  forkZipLatest<
    TObservableIn extends DeferredObservableLike<TIn>,
    TIn,
    TA,
    TB,
    TC,
    TD,
  >(
    a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>,
    b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>,
    c: Function1<TObservableIn, MaybeMulticastObservableLike<TC>>,
    d: Function1<TObservableIn, MaybeMulticastObservableLike<TD>>,
  ): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC, TD]>>;

  fromAsyncFactory<T>(): Function1<
    Function1<AbortSignal, Promise<T>>,
    DeferredObservableLike<T>
  >;

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

  ignoreElements<T>(): EnumerableUpperBoundObservableOperator<unknown, T>;

  isDeferredObservable<T>(
    obs: ObservableLike<T>,
  ): obs is DeferredObservableLike<T>;

  isEnumerable<T>(obs: ObservableLike<T>): obs is EnumerableLike<T>;

  isRunnable<T>(obs: ObservableLike<T>): obs is RunnableLike<T>;

  isMulticastObservable<T>(
    obs: ObservableLike<T>,
  ): obs is MulticastObservableLike<T>;

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
    fst: MaybeMulticastObservableLike<T>,
    snd: MaybeMulticastObservableLike<T>,
    ...tail: readonly MaybeMulticastObservableLike<T>[]
  ): MulticastObservableLike<T>;

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
    snd: MaybeMulticastObservableLike<T>,
    ...tail: readonly MaybeMulticastObservableLike<T>[]
  ): Function1<ObservableLike<T>, MulticastObservableLike<T>>;

  mergeMany<T>(observables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
  mergeMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
  mergeMany<T>(
    observables: readonly DeferredObservableLike<T>[],
  ): DeferredObservableLike<T>;
  mergeMany<T>(
    observables: readonly MaybeMulticastObservableLike<T>[],
  ): MulticastObservableLike<T>;

  mapTo<TA, TB>(value: TB): EnumerableUpperBoundObservableOperator<TA, TB>;

  never<T>(): MulticastObservableLike<T>;

  onSubscribe<T>(
    f: Factory<DisposableLike>,
  ): EnumerableUpperBoundObservableOperator<T, T>;
  onSubscribe<T>(
    f: Factory<SideEffect1<Optional<Error>>>,
  ): EnumerableUpperBoundObservableOperator<T, T>;
  onSubscribe<T>(f: SideEffect): EnumerableUpperBoundObservableOperator<T, T>;

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
  ): DeferredObservableUpperBoundObservableOperator<T, T>;

  takeFirst<T>(options?: {
    readonly count?: number;
  }): EnumerableUpperBoundObservableOperator<T, T>;

  takeLast<T>(options?: {
    readonly count?: number;
  }): EnumerableUpperBoundObservableOperator<T, T>;

  takeUntil<T>(
    notifier: EnumerableLike,
  ): EnumerableUpperBoundObservableOperator<T, T>;
  takeUntil<T>(
    notifier: RunnableLike,
  ): RunnableUpperBoundObservableOperator<T, T>;
  takeUntil<T>(
    notifier: DeferredObservableLike,
  ): DeferredObservableUpperBoundObservableOperator<T, T>;
  takeUntil<T>(
    notifier: MulticastObservableLike,
  ): Function1<ObservableLike<T>, MulticastObservableLike<T>>;

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

  withLatestFrom<TA, TB, T>(
    other: EnumerableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): EnumerableUpperBoundObservableOperator<TA, T>;
  withLatestFrom<TA, TB, T>(
    other: RunnableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): RunnableUpperBoundObservableOperator<TA, T>;
  withLatestFrom<TA, TB, T>(
    other: DeferredObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): DeferredObservableUpperBoundObservableOperator<TA, T>;
  withLatestFrom<TA, TB, T>(
    other: MulticastObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): Function1<AnyObservableLike<TA>, MulticastObservableLike<T>>;

  zip<TA, TB>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
  ): EnumerableLike<readonly [TA, TB]>;
  zip<TA, TB, TC>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
  ): EnumerableLike<readonly [TA, TB, TC]>;
  zip<TA, TB, TC, TD>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
  ): EnumerableLike<readonly [TA, TB, TC, TD]>;
  zip<TA, TB, TC, TD, TE>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
  ): EnumerableLike<readonly [TA, TB, TC, TD, TE]>;
  zip<TA, TB, TC, TD, TE, TF>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
  ): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF]>;
  zip<TA, TB, TC, TD, TE, TF, TG>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
    g: EnumerableLike<TG>,
  ): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
    g: EnumerableLike<TG>,
    h: EnumerableLike<TH>,
  ): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
    g: EnumerableLike<TG>,
    h: EnumerableLike<TH>,
    i: EnumerableLike<TI>,
  ): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  zip<TA, TB>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
  ): RunnableLike<readonly [TA, TB]>;
  zip<TA, TB, TC>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
  ): RunnableLike<readonly [TA, TB, TC]>;
  zip<TA, TB, TC, TD>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
  ): RunnableLike<readonly [TA, TB, TC, TD]>;
  zip<TA, TB, TC, TD, TE>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE]>;
  zip<TA, TB, TC, TD, TE, TF>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE, TF]>;
  zip<TA, TB, TC, TD, TE, TF, TG>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
    i: RunnableLike<TI>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  zip<TA, TB>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
  ): DeferredObservableLike<readonly [TA, TB]>;
  zip<TA, TB, TC>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
  ): DeferredObservableLike<readonly [TA, TB, TC]>;
  zip<TA, TB, TC, TD>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD]>;
  zip<TA, TB, TC, TD, TE>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE]>;
  zip<TA, TB, TC, TD, TE, TF>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
  zip<TA, TB, TC, TD, TE, TF, TG>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
    g: DeferredObservableLike<TG>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
    g: DeferredObservableLike<TG>,
    h: DeferredObservableLike<TH>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
    g: DeferredObservableLike<TG>,
    h: DeferredObservableLike<TH>,
    i: DeferredObservableLike<TI>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  zip<TA, TB>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
  ): MulticastObservableLike<readonly [TA, TB]>;
  zip<TA, TB, TC>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
  ): ContainerOf<MulticastObservable.Type, readonly [TA, TB, TC]>;
  zip<TA, TB, TC, TD>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
  ): ContainerOf<MulticastObservable.Type, readonly [TA, TB, TC, TD]>;
  zip<TA, TB, TC, TD, TE>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
  ): ContainerOf<MulticastObservable.Type, readonly [TA, TB, TC, TD, TE]>;
  zip<TA, TB, TC, TD, TE, TF>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
  ): ContainerOf<MulticastObservable.Type, readonly [TA, TB, TC, TD, TE, TF]>;
  zip<TA, TB, TC, TD, TE, TF, TG>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
    g: MaybeMulticastObservableLike<TG>,
  ): ContainerOf<
    MulticastObservable.Type,
    readonly [TA, TB, TC, TD, TE, TF, TG]
  >;
  zip<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
    g: MaybeMulticastObservableLike<TG>,
    h: MaybeMulticastObservableLike<TH>,
  ): ContainerOf<
    MulticastObservable.Type,
    readonly [TA, TB, TC, TD, TE, TF, TG, TH]
  >;
  zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
    g: MaybeMulticastObservableLike<TG>,
    h: MaybeMulticastObservableLike<TH>,
    i: MaybeMulticastObservableLike<TI>,
  ): ContainerOf<
    MulticastObservable.Type,
    readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]
  >;

  zipLatest<TA, TB>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
  ): RunnableLike<readonly [TA, TB]>;
  zipLatest<TA, TB, TC>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
  ): RunnableLike<readonly [TA, TB, TC]>;
  zipLatest<TA, TB, TC, TD>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
  ): RunnableLike<readonly [TA, TB, TC, TD]>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE]>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE, TF]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
    i: RunnableLike<TI>,
  ): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  zipLatest<TA, TB>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
  ): DeferredObservableLike<readonly [TA, TB]>;
  zipLatest<TA, TB, TC>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
  ): DeferredObservableLike<readonly [TA, TB, TC]>;
  zipLatest<TA, TB, TC, TD>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD]>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE]>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
    g: DeferredObservableLike<TG>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
    g: DeferredObservableLike<TG>,
    h: DeferredObservableLike<TH>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: DeferredObservableLike<TA>,
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
    g: DeferredObservableLike<TG>,
    h: DeferredObservableLike<TH>,
    i: DeferredObservableLike<TI>,
  ): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  zipLatest<TA, TB>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
  ): MulticastObservableLike<readonly [TA, TB]>;
  zipLatest<TA, TB, TC>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: DeferredObservableLike<TC>,
  ): MulticastObservableLike<readonly [TA, TB, TC]>;
  zipLatest<TA, TB, TC, TD>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
  ): MulticastObservableLike<readonly [TA, TB, TC, TD]>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
  ): MulticastObservableLike<readonly [TA, TB, TC, TD, TE]>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
  ): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
    g: MaybeMulticastObservableLike<TG>,
  ): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
    g: MaybeMulticastObservableLike<TG>,
    h: MaybeMulticastObservableLike<TH>,
  ): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: MaybeMulticastObservableLike<TA>,
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
    g: MaybeMulticastObservableLike<TG>,
    h: MaybeMulticastObservableLike<TH>,
    i: MaybeMulticastObservableLike<TI>,
  ): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  zipWith<TA, TB>(
    b: EnumerableLike<TB>,
  ): EnumerableUpperBoundObservableOperator<TA, readonly [TA, TB]>;
  zipWith<TA, TB, TC>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
  ): EnumerableUpperBoundObservableOperator<TA, readonly [TA, TB, TC]>;
  zipWith<TA, TB, TC, TD>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
  ): EnumerableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD]>;
  zipWith<TA, TB, TC, TD, TE>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
  ): EnumerableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE]>;
  zipWith<TA, TB, TC, TD, TE, TF>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
  ): EnumerableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD, TE, TF]
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
    g: EnumerableLike<TG>,
  ): EnumerableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD, TE, TF, TG]
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
    g: EnumerableLike<TG>,
    h: EnumerableLike<TH>,
  ): EnumerableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD, TE, TF, TG, TH]
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
    g: EnumerableLike<TG>,
    h: EnumerableLike<TH>,
    i: EnumerableLike<TI>,
  ): EnumerableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]
  >;

  zipWith<TA, TB>(
    b: RunnableLike<TB>,
  ): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB]>;
  zipWith<TA, TB, TC>(
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
  ): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC]>;
  zipWith<TA, TB, TC, TD>(
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
  ): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD]>;
  zipWith<TA, TB, TC, TD, TE>(
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
  ): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE]>;
  zipWith<TA, TB, TC, TD, TE, TF>(
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
  ): RunnableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD, TE, TF]
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG>(
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
  ): RunnableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD, TE, TF, TG]
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
  ): RunnableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD, TE, TF, TG, TH]
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
    i: RunnableLike<TI>,
  ): RunnableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]
  >;

  zipWith<TA, TB>(
    b: DeferredObservableLike<TB>,
  ): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB]>;
  zipWith<TA, TB, TC>(
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
  ): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC]>;
  zipWith<TA, TB, TC, TD>(
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
  ): DeferredObservableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD]
  >;
  zipWith<TA, TB, TC, TD, TE>(
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
  ): DeferredObservableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD, TE]
  >;
  zipWith<TA, TB, TC, TD, TE, TF>(
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
  ): DeferredObservableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD, TE, TF]
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG>(
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
    g: DeferredObservableLike<TG>,
  ): DeferredObservableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD, TE, TF, TG]
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
    g: DeferredObservableLike<TG>,
    h: DeferredObservableLike<TH>,
  ): DeferredObservableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD, TE, TF, TG, TH]
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    b: DeferredObservableLike<TB>,
    c: DeferredObservableLike<TC>,
    d: DeferredObservableLike<TD>,
    e: DeferredObservableLike<TE>,
    f: DeferredObservableLike<TF>,
    g: DeferredObservableLike<TG>,
    h: DeferredObservableLike<TH>,
    i: DeferredObservableLike<TI>,
  ): DeferredObservableUpperBoundObservableOperator<
    TA,
    readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]
  >;

  zipWith<TA, TB>(
    b: MulticastObservableLike<TB>,
  ): Function1<
    AnyObservableLike<TA>,
    MulticastObservableLike<readonly [TA, TB]>
  >;
  zipWith<TA, TB, TC>(
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
  ): Function1<
    AnyObservableLike<TA>,
    MulticastObservableLike<readonly [TA, TB, TC]>
  >;
  zipWith<TA, TB, TC, TD>(
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
  ): Function1<
    AnyObservableLike<TA>,
    MulticastObservableLike<readonly [TA, TB, TC, TD]>
  >;
  zipWith<TA, TB, TC, TD, TE>(
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
  ): Function1<
    AnyObservableLike<TA>,
    MulticastObservableLike<readonly [TA, TB, TC, TD, TE]>
  >;
  zipWith<TA, TB, TC, TD, TE, TF>(
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
  ): Function1<
    AnyObservableLike<TA>,
    MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF]>
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG>(
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
    g: MaybeMulticastObservableLike<TG>,
  ): Function1<
    AnyObservableLike<TA>,
    MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
    g: MaybeMulticastObservableLike<TG>,
    h: MaybeMulticastObservableLike<TH>,
  ): Function1<
    AnyObservableLike<TA>,
    MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    b: MaybeMulticastObservableLike<TB>,
    c: MaybeMulticastObservableLike<TC>,
    d: MaybeMulticastObservableLike<TD>,
    e: MaybeMulticastObservableLike<TE>,
    f: MaybeMulticastObservableLike<TF>,
    g: MaybeMulticastObservableLike<TG>,
    h: MaybeMulticastObservableLike<TH>,
    i: MaybeMulticastObservableLike<TI>,
  ): Function1<
    AnyObservableLike<TA>,
    MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>
  >;

  zipWithLatestFrom<TA, TB, T>(
    other: EnumerableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): EnumerableUpperBoundObservableOperator<TA, T>;
  zipWithLatestFrom<TA, TB, T>(
    other: RunnableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): RunnableUpperBoundObservableOperator<TA, T>;
  zipWithLatestFrom<TA, TB, T>(
    other: DeferredObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): DeferredObservableUpperBoundObservableOperator<TA, T>;
  zipWithLatestFrom<TA, TB, T>(
    other: MulticastObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): Function1<AnyObservableLike<TA>, MulticastObservableLike<T>>;
}

export type Signature = ObservableModule;

export const animate: Signature["animate"] = Observable_animate;
export const backpressureStrategy: Signature["backpressureStrategy"] =
  Observable_backpressureStrategy;
export const buffer: Signature["buffer"] = Observable_buffer;
export const catchError: Signature["catchError"] = Observable_catchError;
export const combineLatest: Signature["combineLatest"] =
  Observable_combineLatest;
export const concat: Signature["concat"] = Observable_concat;
export const concatMany: Signature["concatMany"] = Observable_concatMany;
export const concatWith: Signature["concatWith"] = Observable_concatWith;
export const create: Signature["create"] = Observable_create;
export const createPublisher: Signature["createPublisher"] =
  Observable_createPublisher;
export const createRefCountedPublisher: Signature["createRefCountedPublisher"] =
  Observable_createRefCountedPublisher;
export const currentTime: Signature["currentTime"] = Observable_currentTime;
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
export const flatMapAsync: Signature["flatMapAsync"] = Observable_flatMapAsync;
export const flatMapIterable: Signature["flatMapIterable"] =
  Observable_flatMapIterable;
export const forEach: Signature["forEach"] = Observable_forEach;
export const forkCombineLatest: Signature["forkCombineLatest"] =
  Observable_forkCombineLatest;
export const forkConcat: Signature["forkConcat"] = Observable_forkConcat;
export const forkMerge: Signature["forkMerge"] = Observable_forkMerge;
export const forkZip: Signature["forkZip"] = Observable_forkZip;
export const forkZipLatest: Signature["forkZipLatest"] =
  Observable_forkZipLatest;
export const fromAsyncFactory: Signature["fromAsyncFactory"] =
  Observable_fromAsyncFactory;
export const fromEnumeratorFactory: Signature["fromEnumeratorFactory"] =
  Observable_fromEnumeratorFactory;
export const fromFactory: Signature["fromFactory"] = Observable_fromFactory;
export const fromIterable: Signature["fromIterable"] = Iterable_toObservable;
export const fromOptional: Signature["fromOptional"] = Optional_toObservable;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  ReadonlyArray_toObservable;
export const fromValue: Signature["fromValue"] = Observable_fromValue;
export const generate: Signature["generate"] = Observable_generate;
export const ignoreElements: Signature["ignoreElements"] =
  Observable_ignoreElements;
export const isDeferredObservable: Signature["isDeferredObservable"] =
  Observable_isDeferredObservable;
export const isEnumerable: Signature["isEnumerable"] = Observable_isEnumerable;
export const isRunnable: Signature["isRunnable"] = Observable_isRunnable;
export const isMulticastObservable: Signature["isMulticastObservable"] =
  Observable_isMulticastObservable;
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
export const takeUntil: Signature["takeUntil"] = Observable_takeUntil;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const throttle: Signature["throttle"] = Observable_throttle;
export const throwIfEmpty: Signature["throwIfEmpty"] = Observable_throwIfEmpty;
export const throws: Signature["throws"] = Observable_throws;
export const toEventSource: Signature["toEventSource"] =
  Observable_toEventSource;
export const withCurrentTime: Signature["withCurrentTime"] =
  Observable_withCurrentTime;
export const withLatestFrom: Signature["withLatestFrom"] =
  Observable_withLatestFrom;
export const zip: Signature["zip"] = Observable_zip;
export const zipLatest: Signature["zipLatest"] = Observable_zipLatest;
export const zipWith: Signature["zipWith"] = Observable_zipWith;
export const zipWithLatestFrom: Signature["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom;
