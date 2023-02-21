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
  ToIterable,
  ToReadonlyArray,
  Zip,
} from "../containers.js";
import Iterable_toEnumerableObservable from "../containers/Iterable/__internal__/Iterable.toEnumerableObservable.js";
import ReadonlyArray_toRunnableObservable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import Sequence_toRunnableObservable from "../containers/Sequence/__internal__/Sequence.toRunnableObservable.js";
import { compose, returns } from "../functions.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import Enumerable_toEnumerableObservable from "../ix/Enumerable/__internal__/Enumerable.toEnumerableObservable.js";
import Enumerable_toRunnableObservable from "../ix/Enumerable/__internal__/Enumerable.toRunnableObservable.js";
import {
  EnumerableObservableLike,
  Retry,
  ScanAsync,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx.js";
import { ToFlowable } from "../streaming.js";
import EnumerableObservable_catchError from "./EnumerableObservable/__internal__/EnumerableObservable.catchError.js";
import EnumerableObservable_defer from "./EnumerableObservable/__internal__/EnumerableObservable.defer.js";
import EnumerableObservable_mergeAll from "./EnumerableObservable/__internal__/EnumerableObservable.mergeAll.js";
import EnumerableObservable_scanAsync from "./EnumerableObservable/__internal__/EnumerableObservable.scanAsync.js";
import EnumerableObservable_switchAll from "./EnumerableObservable/__internal__/EnumerableObservable.switchAll.js";
import EnumerableObservable_toAsyncEnumerable from "./EnumerableObservable/__internal__/EnumerableObservable.toAsyncEnumerable.js";
import EnumerableObservable_toEnumerable from "./EnumerableObservable/__internal__/EnumerableObservable.toEnumerable.js";
import EnumerableObservable_toIterable from "./EnumerableObservable/__internal__/EnumerableObservable.toIterable.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
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
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import RunnableObservable_toFlowable from "./RunnableObservable/__internal__/RunnableObservable.toFlowable.js";
import RunnableObservable_toReadonlyArray from "./RunnableObservable/__internal__/RunnableObservable.toReadonlyArray.js";
import RunnableObservable_toRunnable from "./RunnableObservable/__internal__/RunnableObservable.toRunnable.js";

export const buffer: Buffer<EnumerableObservableLike>["buffer"] =
  Observable_buffer as Buffer<EnumerableObservableLike>["buffer"];

export const catchError: CatchError<EnumerableObservableLike>["catchError"] =
  EnumerableObservable_catchError;

export const concat: Concat<EnumerableObservableLike>["concat"] =
  Observable_concat as Concat<EnumerableObservableLike>["concat"];

export const concatAll: ConcatAll<
  EnumerableObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export const decodeWithCharset: DecodeWithCharset<EnumerableObservableLike>["decodeWithCharset"] =
  Observable_decodeWithCharset as DecodeWithCharset<EnumerableObservableLike>["decodeWithCharset"];

export const defer: Defer<EnumerableObservableLike>["defer"] =
  EnumerableObservable_defer;

export const distinctUntilChanged: DistinctUntilChanged<EnumerableObservableLike>["distinctUntilChanged"] =
  Observable_distinctUntilChanged as DistinctUntilChanged<EnumerableObservableLike>["distinctUntilChanged"];

export const empty: Empty<EnumerableObservableLike>["empty"] =
  Observable_empty as Empty<EnumerableObservableLike>["empty"];

export const everySatisfy: EverySatisfy<EnumerableObservableLike>["everySatisfy"] =
  Observable_everySatisfy as EverySatisfy<EnumerableObservableLike>["everySatisfy"];

export const exhaust = /*@__PURE__*/ returns(
  EnumerableObservable_mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
  }),
) as ConcatAll<EnumerableObservableLike>["concatAll"];

export const forEach: ForEach<EnumerableObservableLike>["forEach"] =
  Observable_forEach as ForEach<EnumerableObservableLike>["forEach"];

export const fromEnumerable: FromEnumerable<EnumerableObservableLike>["fromEnumerable"] =
  Enumerable_toEnumerableObservable;

export const fromIterable: FromIterable<EnumerableObservableLike>["fromIterable"] =
  Iterable_toEnumerableObservable;

export const fromReadonlyArray: FromReadonlyArray<EnumerableObservableLike>["fromReadonlyArray"] =
  ReadonlyArray_toRunnableObservable as FromReadonlyArray<EnumerableObservableLike>["fromReadonlyArray"];

export const fromSequence: FromSequence<EnumerableObservableLike>["fromSequence"] =
  Sequence_toRunnableObservable as FromSequence<EnumerableObservableLike>["fromSequence"];

export const generate: Generate<EnumerableObservableLike>["generate"] =
  Observable_generate as Generate<EnumerableObservableLike>["generate"];

export const keep: Keep<EnumerableObservableLike>["keep"] =
  Observable_keep as Keep<EnumerableObservableLike>["keep"];

export const map: Map<EnumerableObservableLike>["map"] =
  Observable_map as Map<EnumerableObservableLike>["map"];

export const merge =
  Observable_merge as Concat<EnumerableObservableLike>["concat"];

export const mergeAll = EnumerableObservable_mergeAll as ConcatAll<
  EnumerableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"];

export const pairwise: Pairwise<EnumerableObservableLike>["pairwise"] =
  Observable_pairwise as Pairwise<EnumerableObservableLike>["pairwise"];

export const reduce: Reduce<EnumerableObservableLike>["reduce"] =
  Observable_reduce as Reduce<EnumerableObservableLike>["reduce"];

export const retry: Retry<EnumerableObservableLike>["retry"] =
  Observable_retry as Retry<EnumerableObservableLike>["retry"];

export const scan: Scan<EnumerableObservableLike>["scan"] =
  Observable_scan as Scan<EnumerableObservableLike>["scan"];

export const scanAsync: ScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>["scanAsync"] = EnumerableObservable_scanAsync;

export const skipFirst: SkipFirst<EnumerableObservableLike>["skipFirst"] =
  Observable_skipFirst as SkipFirst<EnumerableObservableLike>["skipFirst"];

export const someSatisfy: SomeSatisfy<EnumerableObservableLike>["someSatisfy"] =
  Observable_someSatisfy as SomeSatisfy<EnumerableObservableLike>["someSatisfy"];

export const switchAll: ConcatAll<EnumerableObservableLike>["concatAll"] =
  EnumerableObservable_switchAll;

export const takeFirst: TakeFirst<EnumerableObservableLike>["takeFirst"] =
  Observable_takeFirst as TakeFirst<EnumerableObservableLike>["takeFirst"];

export const takeLast: TakeLast<EnumerableObservableLike>["takeLast"] =
  Observable_takeLast as TakeLast<EnumerableObservableLike>["takeLast"];

export const takeWhile: TakeWhile<EnumerableObservableLike>["takeWhile"] =
  Observable_takeWhile as TakeWhile<EnumerableObservableLike>["takeWhile"];

export const throwIfEmpty: ThrowIfEmpty<EnumerableObservableLike>["throwIfEmpty"] =
  Observable_throwIfEmpty as ThrowIfEmpty<EnumerableObservableLike>["throwIfEmpty"];

export const toAsyncEnumerable: ToAsyncEnumerable<EnumerableObservableLike>["toAsyncEnumerable"] =
  EnumerableObservable_toAsyncEnumerable;

export const toEnumerable: ToEnumerable<EnumerableObservableLike>["toEnumerable"] =
  EnumerableObservable_toEnumerable;

export const toFlowable: ToFlowable<EnumerableObservableLike>["toFlowable"] =
  RunnableObservable_toFlowable;

export const toIterable: ToIterable<EnumerableObservableLike>["toIterable"] =
  EnumerableObservable_toIterable;

export const toReadonlyArray: ToReadonlyArray<EnumerableObservableLike>["toReadonlyArray"] =
  RunnableObservable_toReadonlyArray as ToReadonlyArray<EnumerableObservableLike>["toReadonlyArray"];

export const toRunnable: ToRunnable<EnumerableObservableLike>["toRunnable"] =
  RunnableObservable_toRunnable as ToRunnable<EnumerableObservableLike>["toRunnable"];

export const toRunnableObservable: ToRunnableObservable<
  EnumerableObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toRunnableObservable"] = o =>
  compose(toEnumerable(), Enumerable_toRunnableObservable(o));

export const toObservable: ToObservable<
  EnumerableObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toObservable"] = toRunnableObservable;

export const zip: Zip<EnumerableObservableLike>["zip"] =
  Observable_zip as Zip<EnumerableObservableLike>["zip"];

/** @ignore */
const EnumerableObservable = {
  buffer,
  catchError,
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
  takeWhile,
  throwIfEmpty,
  toAsyncEnumerable,
  toEnumerable,
  toFlowable,
  toIterable,
  toObservable,
  toReadonlyArray,
  toRunnable,
  toRunnableObservable,
  zip,
};

export default EnumerableObservable;
