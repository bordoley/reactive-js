import { MAX_SAFE_INTEGER } from "../constants";
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
  FromReadonlyArray,
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
} from "../containers";
import { Factory, compose } from "../functions";
import { ToEnumerable } from "../ix";
import Enumerable_toRunnableObservable from "../ix/Enumerable/__internal__/Enumerable.toRunnableObservable";
import {
  EnumerableObservableLike,
  Retry,
  ScanAsync,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx";
import { VirtualTimeSchedulerLike } from "../scheduling";
import { ToFlowable } from "../streaming";
import EnumerableObservable_catchError from "./EnumerableObservable/__internal__/EnumerableObservable.catchError";
import EnumerableObservable_defer from "./EnumerableObservable/__internal__/EnumerableObservable.defer";
import EnumerableObservable_mergeAll from "./EnumerableObservable/__internal__/EnumerableObservable.mergeAll";
import EnumerableObservable_scanAsync from "./EnumerableObservable/__internal__/EnumerableObservable.scanAsync";
import EnumerableObservable_switchAll from "./EnumerableObservable/__internal__/EnumerableObservable.switchAll";
import EnumerableObservable_toEnumerable from "./EnumerableObservable/__internal__/EnumerableObservable.toEnumerable";
import Observable_buffer from "./Observable/__internal__/Observable.buffer";
import Observable_concat from "./Observable/__internal__/Observable.concat";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged";
import Observable_empty from "./Observable/__internal__/Observable.empty";
import Observable_everySatisfy from "./Observable/__internal__/Observable.everySatisfy";
import Observable_forEach from "./Observable/__internal__/Observable.forEach";
import Observable_fromReadonlyArray from "./Observable/__internal__/Observable.fromReadonlyArray";
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
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty";
import Observable_toFlowable from "./Observable/__internal__/Observable.toFlowable";
import Observable_zip from "./Observable/__internal__/Observable.zip";
import RunnableObservable_toReadonlyArray from "./RunnableObservable/__internal__/RunnableObservable.toReadonlyArray";
import RunnableObservable_toRunnable from "./RunnableObservable/__internal__/RunnableObservable.toRunnable";

export const buffer =
  Observable_buffer as Buffer<EnumerableObservableLike>["buffer"];

export const catchError: CatchError<EnumerableObservableLike>["catchError"] =
  EnumerableObservable_catchError;

export const concat =
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

export const decodeWithCharset =
  Observable_decodeWithCharset as DecodeWithCharset<EnumerableObservableLike>["decodeWithCharset"];

export const defer: Defer<EnumerableObservableLike>["defer"] =
  EnumerableObservable_defer;

export const distinctUntilChanged =
  Observable_distinctUntilChanged as DistinctUntilChanged<EnumerableObservableLike>["distinctUntilChanged"];

export const empty = Observable_empty as Empty<
  EnumerableObservableLike,
  { delay: number }
>["empty"];

export const everySatisfy =
  Observable_everySatisfy as EverySatisfy<EnumerableObservableLike>["everySatisfy"];

export const exhaust: ConcatAll<EnumerableObservableLike>["concatAll"] = <
  T,
>() =>
  mergeAll<T>({
    maxBufferSize: 1,
    maxConcurrency: 1,
  });

export const forEach =
  Observable_forEach as ForEach<EnumerableObservableLike>["forEach"];

export const fromReadonlyArray =
  Observable_fromReadonlyArray as FromReadonlyArray<EnumerableObservableLike>["fromReadonlyArray"];

export const generate =
  Observable_generate as Generate<EnumerableObservableLike>["generate"];

export const keep = Observable_keep as Keep<EnumerableObservableLike>["keep"];

export const map = Observable_map as Map<EnumerableObservableLike>["map"];

export const merge =
  Observable_merge as Concat<EnumerableObservableLike>["concat"];

export const mergeAll: ConcatAll<
  EnumerableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = EnumerableObservable_mergeAll;

export const pairwise =
  Observable_pairwise as Pairwise<EnumerableObservableLike>["pairwise"];

export const reduce =
  Observable_reduce as Reduce<EnumerableObservableLike>["reduce"];

export const retry: Retry<EnumerableObservableLike>["retry"] =
  Observable_retry as Retry<EnumerableObservableLike>["retry"];

export const scan = Observable_scan as Scan<EnumerableObservableLike>["scan"];

export const scanAsync: ScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>["scanAsync"] = EnumerableObservable_scanAsync;

export const skipFirst =
  Observable_skipFirst as SkipFirst<EnumerableObservableLike>["skipFirst"];

export const someSatisfy =
  Observable_someSatisfy as SomeSatisfy<EnumerableObservableLike>["someSatisfy"];

export const switchAll: ConcatAll<EnumerableObservableLike>["concatAll"] =
  EnumerableObservable_switchAll;

export const takeFirst =
  Observable_takeFirst as TakeFirst<EnumerableObservableLike>["takeFirst"];

export const takeLast =
  Observable_takeLast as TakeLast<EnumerableObservableLike>["takeLast"];

export const takeWhile =
  Observable_takeWhile as TakeWhile<EnumerableObservableLike>["takeWhile"];

export const throwIfEmpty =
  Observable_throwIfEmpty as ThrowIfEmpty<EnumerableObservableLike>["throwIfEmpty"];

export const toEnumerable: ToEnumerable<EnumerableObservableLike>["toEnumerable"] =
  EnumerableObservable_toEnumerable;

export const toFlowable: ToFlowable<EnumerableObservableLike>["toFlowable"] =
  Observable_toFlowable;

export const toReadonlyArray =
  RunnableObservable_toReadonlyArray as ToReadonlyArray<
    EnumerableObservableLike,
    {
      readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
    }
  >["toReadonlyArray"];

export const toRunnable =
  RunnableObservable_toRunnable as ToRunnable<EnumerableObservableLike>["toRunnable"];

export const toRunnableObservable: ToRunnableObservable<EnumerableObservableLike>["toRunnableObservable"] =
  o => compose(toEnumerable(), Enumerable_toRunnableObservable(o));

export const toObservable: ToObservable<EnumerableObservableLike>["toObservable"] =
  toRunnableObservable;

export const zip = Observable_zip as Zip<EnumerableObservableLike>["zip"];

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
  fromReadonlyArray,
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
  toEnumerable,
  toFlowable,
  toObservable,
  toReadonlyArray,
  toRunnable,
  toRunnableObservable,
  zip,
};

export default EnumerableObservable;
