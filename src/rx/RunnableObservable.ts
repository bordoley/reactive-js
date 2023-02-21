import { MAX_SAFE_INTEGER } from "../constants.js";
import {
  Buffer,
  CatchError,
  Concat,
  ConcatAll,
  DecodeWithCharset,
  Defer,
  DistinctUntilChanged,
  Empty,
  EverySatisfy,
  ForEach,
  FromIterable,
  FromReadonlyArray,
  FromSequence,
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
  ToReadonlyArray,
  Zip,
} from "../containers.js";
import Iterable_toRunnableObservable from "../containers/Iterable/__internal__/Iterable.toRunnableObservable.js";
import ReadonlyArray_toRunnableObservable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import Sequence_toRunnableObservable from "../containers/Sequence/__internal__/Sequence.toRunnableObservable.js";
import { identity, returns } from "../functions.js";
import { FromEnumerable } from "../ix.js";
import Enumerable_toRunnableObservable from "../ix/Enumerable/__internal__/Enumerable.toRunnableObservable.js";
import {
  Retry,
  RunnableObservableLike,
  ScanAsync,
  TakeUntil,
  Throttle,
  Timeout,
  ToObservable,
  ToRunnable,
  WithLatestFrom,
  ZipLatest,
  ZipWithLatestFrom,
} from "../rx.js";
import { ToFlowable } from "../streaming.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_everySatisfy from "./Observable/__internal__/Observable.everySatisfy.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_reduce from "./Observable/__internal__/Observable.reduce.js";
import Observable_retry from "./Observable/__internal__/Observable.retry.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_someSatisfy from "./Observable/__internal__/Observable.someSatisfy.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__internal__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_timeout from "./Observable/__internal__/Observable.timeout.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";
import RunnableObservable_catchError from "./RunnableObservable/__internal__/RunnableObservable.catchError.js";
import RunnableObservable_defer from "./RunnableObservable/__internal__/RunnableObservable.defer.js";
import RunnableObservable_mergeAll from "./RunnableObservable/__internal__/RunnableObservable.mergeAll.js";
import RunnableObservable_scanAsync from "./RunnableObservable/__internal__/RunnableObservable.scanAsync.js";
import RunnableObservable_switchAll from "./RunnableObservable/__internal__/RunnableObservable.switchAll.js";
import RunnableObservable_toFlowable from "./RunnableObservable/__internal__/RunnableObservable.toFlowable.js";
import RunnableObservable_toReadonlyArray from "./RunnableObservable/__internal__/RunnableObservable.toReadonlyArray.js";
import RunnableObservable_toRunnable from "./RunnableObservable/__internal__/RunnableObservable.toRunnable.js";
import RunnableObservable_throttle from "./RunnableObservable/__internal__/RunnableObservableLike.throttle.js";

export const buffer: Buffer<RunnableObservableLike>["buffer"] =
  Observable_buffer as Buffer<RunnableObservableLike>["buffer"];

export const catchError: CatchError<RunnableObservableLike>["catchError"] =
  RunnableObservable_catchError;

export const combineLatest =
  Observable_combineLatest as Zip<RunnableObservableLike>["zip"];

export const concat: Concat<RunnableObservableLike>["concat"] =
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

export const decodeWithCharset: DecodeWithCharset<RunnableObservableLike>["decodeWithCharset"] =
  Observable_decodeWithCharset as DecodeWithCharset<RunnableObservableLike>["decodeWithCharset"];

export const defer: Defer<RunnableObservableLike>["defer"] =
  RunnableObservable_defer;

export const distinctUntilChanged: DistinctUntilChanged<RunnableObservableLike>["distinctUntilChanged"] =
  Observable_distinctUntilChanged as DistinctUntilChanged<RunnableObservableLike>["distinctUntilChanged"];

export const empty: Empty<RunnableObservableLike, { delay: number }>["empty"] =
  Observable_empty as Empty<RunnableObservableLike, { delay: number }>["empty"];

export const everySatisfy: EverySatisfy<RunnableObservableLike>["everySatisfy"] =
  Observable_everySatisfy as EverySatisfy<RunnableObservableLike>["everySatisfy"];

export const exhaust = /*@__PURE__*/ returns(
  RunnableObservable_mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
  }),
) as ConcatAll<RunnableObservableLike>["concatAll"];

export const forEach: ForEach<RunnableObservableLike>["forEach"] =
  Observable_forEach as ForEach<RunnableObservableLike>["forEach"];

export const fromEnumerable: FromEnumerable<
  RunnableObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromEnumerable"] = Enumerable_toRunnableObservable;

export const fromIterable: FromIterable<
  RunnableObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromIterable"] = Iterable_toRunnableObservable;

export const fromReadonlyArray: FromReadonlyArray<
  RunnableObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromReadonlyArray"] = ReadonlyArray_toRunnableObservable;

export const fromSequence: FromSequence<RunnableObservableLike>["fromSequence"] =
  Sequence_toRunnableObservable;

export const generate: Generate<
  RunnableObservableLike,
  { readonly delay?: number; readonly delayStart?: boolean }
>["generate"] = Observable_generate as Generate<
  RunnableObservableLike,
  { readonly delay?: number; readonly delayStart?: boolean }
>["generate"];

export const keep: Keep<RunnableObservableLike>["keep"] =
  Observable_keep as Keep<RunnableObservableLike>["keep"];

export const map: Map<RunnableObservableLike>["map"] =
  Observable_map as Map<RunnableObservableLike>["map"];

export const merge =
  Observable_merge as Concat<RunnableObservableLike>["concat"];

export const mergeAll = RunnableObservable_mergeAll as ConcatAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"];

export const pairwise: Pairwise<RunnableObservableLike>["pairwise"] =
  Observable_pairwise as Pairwise<RunnableObservableLike>["pairwise"];

export const reduce: Reduce<RunnableObservableLike>["reduce"] =
  Observable_reduce as Reduce<RunnableObservableLike>["reduce"];

export const retry: Retry<RunnableObservableLike>["retry"] =
  Observable_retry as Retry<RunnableObservableLike>["retry"];

export const scan: Scan<RunnableObservableLike>["scan"] =
  Observable_scan as Scan<RunnableObservableLike>["scan"];

export const scanAsync: ScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>["scanAsync"] = RunnableObservable_scanAsync;

export const skipFirst: SkipFirst<RunnableObservableLike>["skipFirst"] =
  Observable_skipFirst as SkipFirst<RunnableObservableLike>["skipFirst"];

export const someSatisfy: SomeSatisfy<RunnableObservableLike>["someSatisfy"] =
  Observable_someSatisfy as SomeSatisfy<RunnableObservableLike>["someSatisfy"];

export const switchAll: ConcatAll<RunnableObservableLike>["concatAll"] =
  RunnableObservable_switchAll;

export const takeFirst: TakeFirst<RunnableObservableLike>["takeFirst"] =
  Observable_takeFirst as TakeFirst<RunnableObservableLike>["takeFirst"];

export const takeLast: TakeLast<RunnableObservableLike>["takeLast"] =
  Observable_takeLast as TakeLast<RunnableObservableLike>["takeLast"];

export const takeUntil: TakeUntil<RunnableObservableLike>["takeUntil"] =
  Observable_takeUntil as TakeUntil<RunnableObservableLike>["takeUntil"];

export const takeWhile: TakeWhile<RunnableObservableLike>["takeWhile"] =
  Observable_takeWhile as TakeWhile<RunnableObservableLike>["takeWhile"];

export const throttle: Throttle<RunnableObservableLike>["throttle"] =
  RunnableObservable_throttle;

export const throwIfEmpty: ThrowIfEmpty<RunnableObservableLike>["throwIfEmpty"] =
  Observable_throwIfEmpty as ThrowIfEmpty<RunnableObservableLike>["throwIfEmpty"];

export const timeout: Timeout<RunnableObservableLike>["timeout"] =
  Observable_timeout as Timeout<RunnableObservableLike>["timeout"];

export const toFlowable: ToFlowable<RunnableObservableLike>["toFlowable"] =
  RunnableObservable_toFlowable;

export const toObservable: ToObservable<RunnableObservableLike>["toObservable"] =
  /*@__PURE__*/ returns(identity);

export const toReadonlyArray: ToReadonlyArray<RunnableObservableLike>["toReadonlyArray"] =
  RunnableObservable_toReadonlyArray;

export const toRunnable: ToRunnable<RunnableObservableLike>["toRunnable"] =
  RunnableObservable_toRunnable;

export const withLatestFrom: WithLatestFrom<RunnableObservableLike>["withLatestFrom"] =
  Observable_withLatestFrom as WithLatestFrom<RunnableObservableLike>["withLatestFrom"];

export const zip: Zip<RunnableObservableLike>["zip"] =
  Observable_zip as Zip<RunnableObservableLike>["zip"];

export const zipLatest: ZipLatest<RunnableObservableLike>["zipLatest"] =
  Observable_zipLatest as ZipLatest<RunnableObservableLike>["zipLatest"];

export const zipWithLatestFrom: ZipWithLatestFrom<RunnableObservableLike>["zipWithLatestFrom"] =
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
  fromEnumerable,
  fromIterable,
  fromReadonlyArray,
  fromSequence,
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
  toObservable,
  toReadonlyArray,
  toRunnable,
  withLatestFrom,
  zip,
  zipLatest,
  zipWithLatestFrom,
};

export default RunnableObservable;
