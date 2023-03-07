import {
  CatchError,
  Compute,
  Concat,
  ConcatAll,
  ConcatMap,
  ConcatWith,
  ContainerOperator,
  Contains,
  DecodeWithCharset,
  Defer,
  DistinctUntilChanged,
  Empty,
  EncodeUtf8,
  EndWith,
  EverySatisfy,
  FlatMapIterable,
  ForEach,
  ForkConcat,
  ForkZip,
  FromAsyncIterable,
  FromIterable,
  FromOptional,
  FromReadonlyArray,
  FromSequence,
  Generate,
  IgnoreElements,
  Keep,
  KeepType,
  Map,
  MapTo,
  Never,
  Pairwise,
  Reduce,
  Repeat,
  Scan,
  SkipFirst,
  SomeSatisfy,
  StartWith,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  Throws,
  Zip,
  ZipWith,
} from "../containers.js";
import AsyncIterable_toObservable from "../containers/AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import Iterable_toObservable from "../containers/Iterable/__internal__/Iterable.toObservable.js";
import Optional_toObservable from "../containers/Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import Sequence_toObservable from "../containers/Sequence/__internal__/Sequence.toObservable.js";
import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  Function6,
  SideEffect,
  SideEffect1,
  SideEffect2,
  SideEffect3,
  SideEffect4,
  SideEffect5,
  SideEffect6,
} from "../functions.js";
import {
  CombineLatest,
  Exhaust,
  ExhaustMap,
  ForkCombineLatest,
  ForkMerge,
  ForkZipLatest,
  Merge,
  MergeAll,
  MergeMap,
  MergeWith,
  ObservableLike,
  ObserverLike,
  Retry,
  ScanAsync,
  SwitchAll,
  SwitchMap,
  TakeUntil,
  Throttle,
  Timeout,
  ToEnumerable,
  ToRunnable,
  WithLatestFrom,
  ZipLatest,
  ZipWithLatestFrom,
} from "../rx.js";
import { SchedulerLike } from "../scheduling.js";
import { FromAsyncEnumerable, FromFlowable } from "../streaming.js";
import AsyncEnumerable_toObservable from "../streaming/AsyncEnumerable/__internal__/AsyncEnumerable.toObservable.js";
import Flowable_toObservable from "../streaming/Flowable/__internal__/Flowable.toObservable.js";
import { DisposableLike, DisposableOrTeardown } from "../util.js";
import {
  Observable_async,
  Observable_async__await,
  Observable_async__currentScheduler,
  Observable_async__do,
  Observable_async__memo,
  Observable_async__observe,
  Observable_async__state,
  Observable_async__stream,
  Observable_async__using,
} from "./Observable/__internal__/Observable.async.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_catchError from "./Observable/__internal__/Observable.catchError.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import Observable_compute from "./Observable/__internal__/Observable.compute.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatAll from "./Observable/__internal__/Observable.concatAll.js";
import Observable_concatMap from "./Observable/__internal__/Observable.concatMap.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_contains from "./Observable/__internal__/Observable.contains.js";
import Observable_create from "./Observable/__internal__/Observable.create.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_defer from "./Observable/__internal__/Observable.defer.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_encodeUtf8 from "./Observable/__internal__/Observable.encodeUtf8.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_everySatisfy from "./Observable/__internal__/Observable.everySatisfy.js";
import Observable_exhaust from "./Observable/__internal__/Observable.exhaust.js";
import Observable_exhaustMap from "./Observable/__internal__/Observable.exhaustMap.js";
import Observable_flatMapIterable from "./Observable/__internal__/Observable.flatMapIterable.js";
import Observable_flatMapPromise from "./Observable/__internal__/Observable.flatMapPromise.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_forkCombineLatest from "./Observable/__internal__/Observable.forkCombineLatest.js";
import Observable_forkConcat from "./Observable/__internal__/Observable.forkConcat.js";
import Observable_forkMerge from "./Observable/__internal__/Observable.forkMerge.js";
import Observable_forkZip from "./Observable/__internal__/Observable.forkZip.js";
import Observable_forkZipLatest from "./Observable/__internal__/Observable.forkZipLatest.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_mergeAll from "./Observable/__internal__/Observable.mergeAll.js";
import Observable_mergeMap from "./Observable/__internal__/Observable.mergeMap.js";
import Observable_mergeWith from "./Observable/__internal__/Observable.mergeWith.js";
import Observable_multicast from "./Observable/__internal__/Observable.multicast.js";
import Observable_never from "./Observable/__internal__/Observable.never.js";
import Observable_observeWith from "./Observable/__internal__/Observable.observeWith.js";
import Observable_onSubscribe from "./Observable/__internal__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_reduce from "./Observable/__internal__/Observable.reduce.js";
import Observable_repeat from "./Observable/__internal__/Observable.repeat.js";
import Observable_retry from "./Observable/__internal__/Observable.retry.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_scanAsync from "./Observable/__internal__/Observable.scanAsync.js";
import Observable_share from "./Observable/__internal__/Observable.share.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_someSatisfy from "./Observable/__internal__/Observable.someSatisfy.js";
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
import Observable_subscribe from "./Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "./Observable/__internal__/Observable.subscribeOn.js";
import Observable_switchAll from "./Observable/__internal__/Observable.switchAll.js";
import Observable_switchMap from "./Observable/__internal__/Observable.switchMap.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__internal__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throttle from "./Observable/__internal__/Observable.throttle.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "./Observable/__internal__/Observable.throws.js";
import Observable_timeout from "./Observable/__internal__/Observable.timeout.js";
import Observable_toEnumerable from "./Observable/__internal__/Observable.toEnumerable.js";
import Observable_toPromise from "./Observable/__internal__/Observable.toPromise.js";
import Observable_toRunnable from "./Observable/__internal__/Observable.toRunnable.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";

interface __Memo {
  <T>(fn: Factory<T>): T;
  <TA, T>(fn: Function1<TA, T>, a: TA): T;
  <TA, TB, T>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
  <TA, TB, TC, T>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
  <TA, TB, TC, TD, T>(
    fn: Function4<TA, TB, TC, TD, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): T;
  <TA, TB, TC, TD, TE, T>(
    fn: Function5<TA, TB, TC, TD, TE, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): T;
  <TA, TB, TC, TD, TE, TF, T>(
    fn: Function6<TA, TB, TC, TD, TE, TF, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): T;
}

/**
 * @category AsyncEffect
 */
export const __memo: __Memo = Observable_async__memo;

/**
 * @category AsyncEffect
 */
export const __await = Observable_async__await;

/**
 * @category AsyncEffect
 */
export const __currentScheduler = Observable_async__currentScheduler;

interface __Do {
  (fn: SideEffect): void;
  <TA>(fn: SideEffect1<TA>, a: TA): void;
  <TA, TB>(fn: SideEffect2<TA, TB>, a: TA, b: TB): void;
  <TA, TB, TC>(fn: SideEffect3<TA, TB, TC>, a: TA, b: TB, c: TC): void;
  <TA, TB, TC, TD>(
    fn: SideEffect4<TA, TB, TC, TD>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): void;
  <TA, TB, TC, TD, TE>(
    fn: SideEffect5<TA, TB, TC, TD, TE>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): void;
  <TA, TB, TC, TD, TE, TF>(
    fn: SideEffect6<TA, TB, TC, TD, TE, TF>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): void;
}

/**
 * @category AsyncEffect
 */
export const __do: __Do = Observable_async__do;

/**
 * @category AsyncEffect
 */
export const __observe = Observable_async__observe;

/**
 * @category AsyncEffect
 */
export const __state = Observable_async__state;

/**
 * @category AsyncEffect
 */
export const __stream = Observable_async__stream;

interface __Using {
  <T extends DisposableLike>(fn: Factory<T>): T;
  <TA, T extends DisposableLike>(fn: Function1<TA, T>, a: TA): T;
  <TA, TB, T extends DisposableLike>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
  <TA, TB, TC, T extends DisposableLike>(
    fn: Function3<TA, TB, TC, T>,
    a: TA,
    b: TB,
    c: TC,
  ): T;
  <TA, TB, TC, TD, T extends DisposableLike>(
    fn: Function4<TA, TB, TC, TD, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): T;
  <TA, TB, TC, TD, TE, T extends DisposableLike>(
    fn: Function5<TA, TB, TC, TD, TE, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): T;
  <TA, TB, TC, TD, TE, TF, T extends DisposableLike>(
    fn: Function6<TA, TB, TC, TD, TE, TF, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): T;
}
/**
 * @category AsyncEffect
 */
export const __using: __Using = Observable_async__using;

export const async = Observable_async;

export const buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableLike>;
  readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]> = Observable_buffer;

export const catchError: CatchError<ObservableLike>["catchError"] =
  Observable_catchError;

export const combineLatest: CombineLatest<ObservableLike>["combineLatest"] =
  Observable_combineLatest;

export const compute: Compute<ObservableLike, { delay: number }>["compute"] =
  Observable_compute;

export const concat: Concat<ObservableLike>["concat"] = Observable_concat;

export const concatAll: ConcatAll<
  ObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = Observable_concatAll;

export const concatMap: ConcatMap<ObservableLike>["concatMap"] =
  Observable_concatMap;

export const concatWith: ConcatWith<ObservableLike>["concatWith"] =
  Observable_concatWith;

export const contains: Contains<ObservableLike>["contains"] =
  Observable_contains;

export const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T> =
  Observable_create;

export const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: Defer<ObservableLike>["defer"] = Observable_defer;

export const distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const empty: Empty<ObservableLike, { delay?: number }>["empty"] =
  Observable_empty;

export const encodeUtf8: EncodeUtf8<ObservableLike>["encodeUtf8"] =
  Observable_encodeUtf8;

export const endWith: EndWith<ObservableLike>["endWith"] = Observable_endWith;

export const everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"] =
  Observable_everySatisfy;

export const exhaust: Exhaust<ObservableLike>["exhaust"] = Observable_exhaust;

export const exhaustMap: ExhaustMap<ObservableLike>["exhaustMap"] =
  Observable_exhaustMap;

export const flatMapIterable: FlatMapIterable<ObservableLike>["flatMapIterable"] =
  Observable_flatMapIterable;

export const flatMapPromise = Observable_flatMapPromise;

export const forEach: ForEach<ObservableLike>["forEach"] = Observable_forEach;

export const forkCombineLatest: ForkCombineLatest<ObservableLike>["forkCombineLatest"] =
  Observable_forkCombineLatest;

export const forkConcat: ForkConcat<ObservableLike>["forkConcat"] =
  Observable_forkConcat;

export const forkMerge: ForkMerge<ObservableLike>["forkMerge"] =
  Observable_forkMerge;

export const forkZip: ForkZip<ObservableLike>["forkZip"] = Observable_forkZip;

export const forkZipLatest: ForkZipLatest<ObservableLike>["forkZipLatest"] =
  Observable_forkZipLatest;

export const fromAsyncEnumerable: FromAsyncEnumerable<ObservableLike>["fromAsyncEnumerable"] =
  AsyncEnumerable_toObservable;

export const fromAsyncIterable: FromAsyncIterable<
  ObservableLike,
  { maxBuffer?: number }
>["fromAsyncIterable"] = AsyncIterable_toObservable;

export const fromIterable: FromIterable<
  ObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromIterable"] = Iterable_toObservable;

export const fromFlowable: FromFlowable<ObservableLike>["fromFlowable"] =
  Flowable_toObservable;

export const fromOptional: FromOptional<
  ObservableLike,
  { delay?: number }
>["fromOptional"] = Optional_toObservable;

export const fromReadonlyArray: FromReadonlyArray<
  ObservableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["fromReadonlyArray"] = ReadonlyArray_toObservable;

export const fromSequence: FromSequence<
  ObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromSequence"] = Sequence_toObservable;

export const generate: Generate<
  ObservableLike,
  { readonly delay?: number; readonly delayStart?: boolean }
>["generate"] = Observable_generate;

export const ignoreElements: IgnoreElements<ObservableLike>["ignoreElements"] =
  Observable_ignoreElements;

export const keep: Keep<ObservableLike>["keep"] = Observable_keep;

export const keepType: KeepType<ObservableLike>["keepType"] =
  Observable_keepType;

export const map: Map<ObservableLike>["map"] = Observable_map;

export const mapTo: MapTo<ObservableLike>["mapTo"] = Observable_mapTo;

export const merge: Merge<ObservableLike>["merge"] = Observable_merge;

export const mergeAll: MergeAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["mergeAll"] = Observable_mergeAll;

export const mergeMap: MergeMap<ObservableLike>["mergeMap"] =
  Observable_mergeMap;

export const mergeWith: MergeWith<ObservableLike>["mergeWith"] =
  Observable_mergeWith;

/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
export const multicast = Observable_multicast;

export const never: Never<ObservableLike>["never"] = Observable_never;

export const onSubscribe: <T>(
  f: Factory<DisposableOrTeardown | void>,
) => ContainerOperator<ObservableLike, T, T> = Observable_onSubscribe;

export const pairwise: Pairwise<ObservableLike>["pairwise"] =
  Observable_pairwise;

export const reduce: Reduce<ObservableLike>["reduce"] = Observable_reduce;

export const repeat: Repeat<ObservableLike>["repeat"] = Observable_repeat;

export const retry: Retry<ObservableLike>["retry"] = Observable_retry;

export const scan: Scan<ObservableLike>["scan"] = Observable_scan;

export const scanAsync: ScanAsync<ObservableLike, ObservableLike>["scanAsync"] =
  Observable_scanAsync;

/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
export const share = Observable_share;

export const observeWith = Observable_observeWith;

export const skipFirst: SkipFirst<ObservableLike>["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"] =
  Observable_someSatisfy;

export const startWith: StartWith<ObservableLike>["startWith"] =
  Observable_startWith;

export const switchAll: SwitchAll<ObservableLike>["switchAll"] =
  Observable_switchAll;

export const switchMap: SwitchMap<ObservableLike>["switchMap"] =
  Observable_switchMap;

export const subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = Observable_subscribe;

export const subscribeOn = Observable_subscribeOn;

export const takeFirst: TakeFirst<ObservableLike>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: TakeLast<ObservableLike>["takeLast"] =
  Observable_takeLast;

export const takeUntil: TakeUntil<ObservableLike>["takeUntil"] =
  Observable_takeUntil;

export const takeWhile: TakeWhile<ObservableLike>["takeWhile"] =
  Observable_takeWhile;

export const throttle: Throttle<ObservableLike>["throttle"] =
  Observable_throttle;

export const throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"] =
  Observable_throwIfEmpty;

export const throws: Throws<ObservableLike, { delay?: number }>["throws"] =
  Observable_throws;

export const timeout: Timeout<ObservableLike>["timeout"] = Observable_timeout;

export const toEnumerable: ToEnumerable<ObservableLike>["toEnumerable"] =
  Observable_toEnumerable;

export const toRunnable: ToRunnable<ObservableLike>["toRunnable"] =
  Observable_toRunnable;

export const toPromise = Observable_toPromise;

export const withLatestFrom: WithLatestFrom<ObservableLike>["withLatestFrom"] =
  Observable_withLatestFrom;

export const zip: Zip<ObservableLike>["zip"] = Observable_zip;

export const zipLatest: ZipLatest<ObservableLike>["zipLatest"] =
  Observable_zipLatest;

export const zipWith: ZipWith<ObservableLike>["zipWith"] = Observable_zipWith;

export const zipWithLatestFrom: ZipWithLatestFrom<ObservableLike>["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom;
