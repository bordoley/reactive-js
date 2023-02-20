import {
  CatchError,
  Concat,
  ConcatAll,
  ContainerOperator,
  DecodeWithCharset,
  Defer,
  DistinctUntilChanged,
  Empty,
  EverySatisfy,
  ForEach,
  ForkConcat,
  ForkZip,
  FromIterable,
  FromReadonlyArray,
  FromSequence,
  Generate,
  Keep,
  Map,
  Never,
  Pairwise,
  Reduce,
  Repeat,
  Scan,
  SkipFirst,
  SomeSatisfy,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  Zip,
} from "../containers";
import Iterable_toRunnableObservable from "../containers/Iterable/__internal__/Iterable.toRunnableObservable";
import Promiseable_toObservable from "../containers/Promiseable/__internal__/Promiseable.toObservable";
import ReadonlyArray_toRunnableObservable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable";
import Sequence_toRunnableObservable from "../containers/Sequence/__internal__/Sequence.toRunnableObservable";
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
  returns,
} from "../functions";
import { FromEnumerable } from "../ix";
import Enumerable_toRunnableObservable from "../ix/Enumerable/__internal__/Enumerable.toRunnableObservable";
import {
  ObservableLike,
  ObserverLike,
  Retry,
  ScanAsync,
  TakeUntil,
  Throttle,
  Timeout,
  WithLatestFrom,
  ZipLatest,
  ZipWithLatestFrom,
} from "../rx";
import { SchedulerLike } from "../scheduling";
import { FromFlowable } from "../streaming";
import Flowable_toObservable from "../streaming/Flowable/__internal__/Flowable.toObservable";
import { DisposableLike, DisposableOrTeardown } from "../util";
import Disposable_toObservable from "../util/Disposable/__internal__/Disposable.toObservable";
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
} from "./Observable/__internal__/Observable.async";
import Observable_buffer from "./Observable/__internal__/Observable.buffer";
import Observable_catchError from "./Observable/__internal__/Observable.catchError";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest";
import Observable_concat from "./Observable/__internal__/Observable.concat";
import Observable_concatAll from "./Observable/__internal__/Observable.concatAll";
import Observable_create from "./Observable/__internal__/Observable.create";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset";
import Observable_defer from "./Observable/__internal__/Observable.defer";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged";
import Observable_empty from "./Observable/__internal__/Observable.empty";
import Observable_everySatisfy from "./Observable/__internal__/Observable.everySatisfy";
import Observable_forEach from "./Observable/__internal__/Observable.forEach";
import Observable_forkCombineLatest from "./Observable/__internal__/Observable.forkCombineLatest";
import Observable_forkMerge from "./Observable/__internal__/Observable.forkMerge";
import Observable_forkZipLatest from "./Observable/__internal__/Observable.forkZipLatest";
import Observable_generate from "./Observable/__internal__/Observable.generate";
import Observable_isEnumerable from "./Observable/__internal__/Observable.isEnumerable";
import Observable_isRunnable from "./Observable/__internal__/Observable.isRunnable";
import Observable_keep from "./Observable/__internal__/Observable.keep";
import Observable_map from "./Observable/__internal__/Observable.map";
import Observable_mapAsync from "./Observable/__internal__/Observable.mapAsync";
import Observable_merge from "./Observable/__internal__/Observable.merge";
import Observable_mergeAll from "./Observable/__internal__/Observable.mergeAll";
import Observable_multicast from "./Observable/__internal__/Observable.multicast";
import Observable_never from "./Observable/__internal__/Observable.never";
import Observable_onSubscribe from "./Observable/__internal__/Observable.onSubscribe";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise";
import Observable_reduce from "./Observable/__internal__/Observable.reduce";
import Observable_repeat from "./Observable/__internal__/Observable.repeat";
import Observable_retry from "./Observable/__internal__/Observable.retry";
import Observable_scan from "./Observable/__internal__/Observable.scan";
import Observable_scanAsync from "./Observable/__internal__/Observable.scanAsync";
import Observable_share from "./Observable/__internal__/Observable.share";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst";
import Observable_someSatisfy from "./Observable/__internal__/Observable.someSatisfy";
import Observable_subscribe from "./Observable/__internal__/Observable.subscribe";
import Observable_subscribeOn from "./Observable/__internal__/Observable.subscribeOn";
import Observable_switchAll from "./Observable/__internal__/Observable.switchAll";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast";
import Observable_takeUntil from "./Observable/__internal__/Observable.takeUntil";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile";
import Observable_throttle from "./Observable/__internal__/Observable.throttle";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty";
import Observable_timeout from "./Observable/__internal__/Observable.timeout";
import Observable_toPromise from "./Observable/__internal__/Observable.toPromise";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom";
import Observable_zip from "./Observable/__internal__/Observable.zip";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom";

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

export const combineLatest: Zip<ObservableLike>["zip"] =
  Observable_combineLatest;

export const concat: Concat<ObservableLike>["concat"] = Observable_concat;

export const concatAll: ConcatAll<
  ObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = Observable_concatAll;

export const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T> =
  Observable_create;

export const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: Defer<ObservableLike>["defer"] = Observable_defer;

export const distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const empty: Empty<ObservableLike, { delay?: number }>["empty"] =
  Observable_empty;

export const everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"] =
  Observable_everySatisfy;

export const exhaust = /*@__PURE__*/ returns(
  Observable_mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
  }),
) as ConcatAll<ObservableLike>["concatAll"];

export const forEach: ForEach<ObservableLike>["forEach"] = Observable_forEach;

export const forkCombineLatest: ForkZip<ObservableLike>["forkZip"] =
  Observable_forkCombineLatest;

export const forkMerge: ForkConcat<ObservableLike>["forkConcat"] =
  Observable_forkMerge;

export const forkZipLatest: ForkZip<ObservableLike>["forkZip"] =
  Observable_forkZipLatest;

export const fromDisposable = Disposable_toObservable;

export const fromEnumerable: FromEnumerable<
  ObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromEnumerable"] = Enumerable_toRunnableObservable;

export const fromIterable: FromIterable<
  ObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromIterable"] = Iterable_toRunnableObservable;

export const fromFlowable: FromFlowable<ObservableLike>["fromFlowable"] =
  Flowable_toObservable;

export const fromPromise = Promiseable_toObservable;

export const fromReadonlyArray: FromReadonlyArray<
  ObservableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["fromReadonlyArray"] = ReadonlyArray_toRunnableObservable;

export const fromSequence: FromSequence<
  ObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromSequence"] = Sequence_toRunnableObservable;

export const generate: Generate<
  ObservableLike,
  { readonly delay?: number; readonly delayStart?: boolean }
>["generate"] = Observable_generate;

export const isEnumerable = Observable_isEnumerable;

export const isRunnable = Observable_isRunnable;

export const keep: Keep<ObservableLike>["keep"] = Observable_keep;

export const map: Map<ObservableLike>["map"] = Observable_map;

export const mapAsync = Observable_mapAsync;

export const merge: Concat<ObservableLike>["concat"] = Observable_merge;

export const mergeAll = Observable_mergeAll as ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"];

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

export const skipFirst: SkipFirst<ObservableLike>["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"] =
  Observable_someSatisfy;

export const switchAll: ConcatAll<ObservableLike>["concatAll"] =
  Observable_switchAll;

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

export const timeout: Timeout<ObservableLike>["timeout"] = Observable_timeout;

export const toPromise = Observable_toPromise;

export const withLatestFrom: WithLatestFrom<ObservableLike>["withLatestFrom"] =
  Observable_withLatestFrom;

export const zip: Zip<ObservableLike>["zip"] = Observable_zip;

export const zipLatest: ZipLatest<ObservableLike>["zipLatest"] =
  Observable_zipLatest;

export const zipWithLatestFrom: ZipWithLatestFrom<ObservableLike>["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom;

/** @ignore */
const Observable = {
  async,
  buffer,
  catchError,
  combineLatest,
  concat,
  concatAll,
  decodeWithCharset,
  defer,
  distinctUntilChanged,
  empty,
  everySatisfy,
  forEach,
  fromEnumerable,
  fromFlowable,
  fromIterable,
  fromPromise,
  fromReadonlyArray,
  fromSequence,
  generate,
  isEnumerable,
  isRunnable,
  keep,
  map,
  never,
  onSubscribe,
  pairwise,
  reduce,
  repeat,
  retry,
  scan,
  scanAsync,
  share,
  skipFirst,
  someSatisfy,
  subscribe,
  takeFirst,
  takeLast,
  takeUntil,
  takeWhile,
  throttle,
  throwIfEmpty,
  timeout,
  toPromise,
  withLatestFrom,
  zip,
  zipLatest,
  zipWithLatestFrom,
};

export default Observable;
