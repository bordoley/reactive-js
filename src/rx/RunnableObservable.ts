import { MAX_SAFE_INTEGER } from "../constants";
import {
  Buffer,
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
  FromArray,
  Generate,
  Keep,
  Map,
  Pairwise,
  Reduce,
  Scan,
  SkipFirst,
  SomeSatisfy,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToPromiseable,
  Zip,
} from "../containers";
import {
  Retry,
  RunnableObservableLike,
  ScanAsync,
  TakeUntil,
  Timeout,
  WithLatestFrom,
  ZipLatest,
  ZipWithLatestFrom,
} from "../rx";
import { SchedulerLike } from "../scheduling";
import { ToFlowable } from "../streaming";
import Observable_buffer from "./Observable/__internal__/Observable.buffer";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest";
import Observable_concat from "./Observable/__internal__/Observable.concat";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged";
import Observable_empty from "./Observable/__internal__/Observable.empty";
import Observable_everySatisfy from "./Observable/__internal__/Observable.everySatisfy";
import Observable_forEach from "./Observable/__internal__/Observable.forEach";
import Observable_fromArray from "./Observable/__internal__/Observable.fromArray";
import Observable_generate from "./Observable/__internal__/Observable.generate";
import Observable_keep from "./Observable/__internal__/Observable.keep";
import Observable_map from "./Observable/__internal__/Observable.map";
import Observable_merge from "./Observable/__internal__/Observable.merge";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise";
import Observable_reduce from "./Observable/__internal__/Observable.reduce";
import Observable_retry from "./Observable/__internal__/Observable.retry";
import Observable_scan from "./Observable/__internal__/Observable.scan";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst";
import Observable_someSatisfy from "./Observable/__internal__/Observable.someSatisfy";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast";
import Observable_takeUntil from "./Observable/__internal__/Observable.takeUntil";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile";
import Observable_throttle from "./Observable/__internal__/Observable.throttle";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty";
import Observable_timeout from "./Observable/__internal__/Observable.timeout";
import Observable_toFlowable from "./Observable/__internal__/Observable.toFlowable";
import Observable_toPromise from "./Observable/__internal__/Observable.toPromise";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom";
import Observable_zip from "./Observable/__internal__/Observable.zip";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom";
import RunnableObservable_catchError from "./RunnableObservable/__internal__/RunnableObservable.catchError";
import RunnableObservable_defer from "./RunnableObservable/__internal__/RunnableObservable.defer";
import RunnableObservable_mergeAll from "./RunnableObservable/__internal__/RunnableObservable.mergeAll";
import RunnableObservable_scanAsync from "./RunnableObservable/__internal__/RunnableObservable.scanAsync";
import RunnableObservable_switchAll from "./RunnableObservable/__internal__/RunnableObservable.switchAll";
import RunnableObservable_toReadonlyArray from "./RunnableObservable/__internal__/RunnableObservable.toReadonlyArray";
import RunnableObservable_toRunnable from "./RunnableObservable/__internal__/RunnableObservable.toRunnable";

export const buffer =
  Observable_buffer as Buffer<RunnableObservableLike>["buffer"];

export const catchError: CatchError<RunnableObservableLike>["catchError"] =
  RunnableObservable_catchError;

export const combineLatest: Zip<RunnableObservableLike>["zip"] =
  Observable_combineLatest as Zip<RunnableObservableLike>["zip"];

export const concat =
  Observable_concat as Concat<RunnableObservableLike>["concat"];

export const concatAll: ConcatAll<
  RunnableObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export const decodeWithCharset =
  Observable_decodeWithCharset as DecodeWithCharset<RunnableObservableLike>["decodeWithCharset"];

export const defer: Defer<RunnableObservableLike>["defer"] =
  RunnableObservable_defer;

export const distinctUntilChanged =
  Observable_distinctUntilChanged as DistinctUntilChanged<RunnableObservableLike>["distinctUntilChanged"];

export const empty = Observable_empty as Empty<
  RunnableObservableLike,
  { delay: number }
>["empty"];

export const everySatisfy =
  Observable_everySatisfy as EverySatisfy<RunnableObservableLike>["everySatisfy"];

export const exhaust: ConcatAll<RunnableObservableLike>["concatAll"] = <T>() =>
  mergeAll<T>({
    maxBufferSize: 1,
    maxConcurrency: 1,
  });

export const forEach =
  Observable_forEach as ForEach<RunnableObservableLike>["forEach"];

export const fromArray = Observable_fromArray as FromArray<
  RunnableObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromArray"];

export const generate = Observable_generate as Generate<
  RunnableObservableLike,
  { readonly delay?: number; readonly delayStart?: boolean }
>["generate"];

export const keep = Observable_keep as Keep<RunnableObservableLike>["keep"];

export const map = Observable_map as Map<RunnableObservableLike>["map"];

export const merge =
  Observable_merge as Concat<RunnableObservableLike>["concat"];

export const mergeAll: ConcatAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = RunnableObservable_mergeAll;

export const pairwise =
  Observable_pairwise as Pairwise<RunnableObservableLike>["pairwise"];

export const reduce =
  Observable_reduce as Reduce<RunnableObservableLike>["reduce"];

export const retry: Retry<RunnableObservableLike>["retry"] =
  Observable_retry as Retry<RunnableObservableLike>["retry"];

export const scan = Observable_scan as Scan<RunnableObservableLike>["scan"];

export const scanAsync: ScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>["scanAsync"] = RunnableObservable_scanAsync;

export const skipFirst =
  Observable_skipFirst as SkipFirst<RunnableObservableLike>["skipFirst"];

export const someSatisfy =
  Observable_someSatisfy as SomeSatisfy<RunnableObservableLike>["someSatisfy"];

export const switchAll: ConcatAll<RunnableObservableLike>["concatAll"] =
  RunnableObservable_switchAll;

export const takeFirst =
  Observable_takeFirst as TakeFirst<RunnableObservableLike>["takeFirst"];

export const takeLast =
  Observable_takeLast as TakeLast<RunnableObservableLike>["takeLast"];

export const takeUntil =
  Observable_takeUntil as TakeUntil<RunnableObservableLike>["takeUntil"];

export const takeWhile =
  Observable_takeWhile as TakeWhile<RunnableObservableLike>["takeWhile"];

// FIXME: We could support duration: Function1<T, ObservableLike> version as well,
// but that will require additional rework.
export const throttle = Observable_throttle as <T>(
  duration: number,
  options?: { readonly mode?: "first" | "last" | "interval" },
) => ContainerOperator<RunnableObservableLike, T, T>;

export const throwIfEmpty =
  Observable_throwIfEmpty as ThrowIfEmpty<RunnableObservableLike>["throwIfEmpty"];

export const timeout =
  Observable_timeout as Timeout<RunnableObservableLike>["timeout"];

export const toFlowable: ToFlowable<RunnableObservableLike>["toFlowable"] =
  Observable_toFlowable;

export const toPromise: ToPromiseable<
  RunnableObservableLike,
  SchedulerLike
>["toPromise"] = Observable_toPromise;

export const toReadonlyArray = RunnableObservable_toReadonlyArray;

export const toRunnable = RunnableObservable_toRunnable;

export const withLatestFrom =
  Observable_withLatestFrom as WithLatestFrom<RunnableObservableLike>["withLatestFrom"];

export const zip = Observable_zip as Zip<RunnableObservableLike>["zip"];

export const zipLatest =
  Observable_zipLatest as ZipLatest<RunnableObservableLike>["zipLatest"];

export const zipWithLatestFrom =
  Observable_zipWithLatestFrom as ZipWithLatestFrom<RunnableObservableLike>["zipWithLatestFrom"];

/** @ignore */
const RunnableObservable = {
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
  exhaust,
  forEach,
  fromArray,
  generate,
  keep,
  map,
  merge,
  pairwise,
  reduce,
  retry,
  scan,
  scanAsync,
  skipFirst,
  someSatisfy,
  switchAll,
  takeFirst,
  takeLast,
  takeUntil,
  takeWhile,
  throttle,
  throwIfEmpty,
  timeout,
  toFlowable,
  toPromise,
  toReadonlyArray,
  toRunnable,
  withLatestFrom,
  zip,
  zipLatest,
  zipWithLatestFrom,
};

export default RunnableObservable;
