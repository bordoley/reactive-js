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
  ToReadonlyArray,
  Zip,
} from "../containers";
import { Factory } from "../functions";
import { ToEnumerable } from "../ix";
import { EnumerableObservableLike, ScanAsync, ToRunnable } from "../rx";
import { SchedulerLike, VirtualTimeSchedulerLike } from "../scheduling";
import { ToFlowable } from "../streaming";
import EnumerableObservable_catchError from "./__internal__/EnumerableObservable/EnumerableObservable.catchError";
import EnumerableObservable_create from "./__internal__/EnumerableObservable/EnumerableObservable.create";
import EnumerableObservable_defer from "./__internal__/EnumerableObservable/EnumerableObservable.defer";
import EnumerableObservable_mergeAll from "./__internal__/EnumerableObservable/EnumerableObservable.mergeAll";
import EnumerableObservable_never from "./__internal__/EnumerableObservable/EnumerableObservable.never";
import EnumerableObservable_scanAsync from "./__internal__/EnumerableObservable/EnumerableObservable.scanAsync";
import EnumerableObservable_switchAll from "./__internal__/EnumerableObservable/EnumerableObservable.switchAll";
import Observable_buffer from "./__internal__/Observable/Observable.buffer";
import Observable_concat from "./__internal__/Observable/Observable.concat";
import Observable_decodeWithCharset from "./__internal__/Observable/Observable.decodeWithCharset";
import Observable_distinctUntilChanged from "./__internal__/Observable/Observable.distinctUntilChanged";
import Observable_empty from "./__internal__/Observable/Observable.empty";
import Observable_everySatisfy from "./__internal__/Observable/Observable.everySatisfy";
import Observable_forEach from "./__internal__/Observable/Observable.forEach";
import Observable_fromArray from "./__internal__/Observable/Observable.fromArray";
import Observable_generate from "./__internal__/Observable/Observable.generate";
import Observable_keep from "./__internal__/Observable/Observable.keep";
import Observable_map from "./__internal__/Observable/Observable.map";
import Observable_merge from "./__internal__/Observable/Observable.merge";
import Observable_pairwise from "./__internal__/Observable/Observable.pairwise";
import Observable_reduce from "./__internal__/Observable/Observable.reduce";
import Observable_scan from "./__internal__/Observable/Observable.scan";
import Observable_skipFirst from "./__internal__/Observable/Observable.skipFirst";
import Observable_someSatisfy from "./__internal__/Observable/Observable.someSatisfy";
import Observable_takeFirst from "./__internal__/Observable/Observable.takeFirst";
import Observable_takeLast from "./__internal__/Observable/Observable.takeLast";
import Observable_takeWhile from "./__internal__/Observable/Observable.takeWhile";
import Observable_throwIfEmpty from "./__internal__/Observable/Observable.throwIfEmpty";
import Observable_toEnumerable from "./__internal__/Observable/Observable.toEnumerable";
import Observable_toFlowable from "./__internal__/Observable/Observable.toFlowable";
import Observable_toPromise from "./__internal__/Observable/Observable.toPromise";
import Observable_toReadonlyArray from "./__internal__/Observable/Observable.toReadonlyArray";
import Observable_toRunnable from "./__internal__/Observable/Observable.toRunnable";
import Observable_zip from "./__internal__/Observable/Observable.zip";

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

export const create = EnumerableObservable_create;

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

export const fromArray =
  Observable_fromArray as FromArray<EnumerableObservableLike>["fromArray"];

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

export const never = EnumerableObservable_never;

export const pairwise =
  Observable_pairwise as Pairwise<EnumerableObservableLike>["pairwise"];

export const reduce =
  Observable_reduce as Reduce<EnumerableObservableLike>["reduce"];

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
  Observable_toEnumerable;

export const toFlowable: ToFlowable<EnumerableObservableLike>["toFlowable"] =
  Observable_toFlowable;

export const toPromise: ToPromiseable<
  EnumerableObservableLike,
  SchedulerLike
>["toPromise"] = Observable_toPromise;

export const toReadonlyArray = Observable_toReadonlyArray as ToReadonlyArray<
  EnumerableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
>["toReadonlyArray"];

export const toRunnable =
  Observable_toRunnable as ToRunnable<EnumerableObservableLike>["toRunnable"];

export const zip = Observable_zip as Zip<EnumerableObservableLike>["zip"];

/** @ignore */
const EnumerableObservable: Buffer<EnumerableObservableLike> &
  CatchError<EnumerableObservableLike> &
  Concat<EnumerableObservableLike> &
  ConcatAll<
    EnumerableObservableLike,
    {
      maxBufferSize?: number;
    }
  > &
  DecodeWithCharset<EnumerableObservableLike> &
  Defer<EnumerableObservableLike> &
  DistinctUntilChanged<EnumerableObservableLike> &
  Empty<EnumerableObservableLike, { delay: number }> &
  EverySatisfy<EnumerableObservableLike> &
  ForEach<EnumerableObservableLike> &
  FromArray<EnumerableObservableLike> &
  Generate<EnumerableObservableLike> &
  Keep<EnumerableObservableLike> &
  Map<EnumerableObservableLike> &
  Pairwise<EnumerableObservableLike> &
  Reduce<EnumerableObservableLike> &
  Scan<EnumerableObservableLike> &
  ScanAsync<EnumerableObservableLike, EnumerableObservableLike> &
  SkipFirst<EnumerableObservableLike> &
  SomeSatisfy<EnumerableObservableLike> &
  TakeFirst<EnumerableObservableLike> &
  TakeLast<EnumerableObservableLike> &
  TakeWhile<EnumerableObservableLike> &
  ThrowIfEmpty<EnumerableObservableLike> &
  ToEnumerable<EnumerableObservableLike> &
  ToFlowable<EnumerableObservableLike> &
  ToPromiseable<EnumerableObservableLike, SchedulerLike> &
  ToReadonlyArray<EnumerableObservableLike> &
  ToRunnable<EnumerableObservableLike> &
  Zip<EnumerableObservableLike> = {
  buffer,
  catchError,
  concat,
  concatAll,
  decodeWithCharset,
  defer,
  distinctUntilChanged,
  empty,
  everySatisfy,
  forEach,
  fromArray,
  generate,
  keep,
  map,
  pairwise,
  reduce,
  scan,
  scanAsync,
  skipFirst,
  someSatisfy,
  takeFirst,
  takeLast,
  takeWhile,
  throwIfEmpty,
  toEnumerable,
  toFlowable,
  toPromise,
  toReadonlyArray,
  toRunnable,
  zip,
};

export default EnumerableObservable;
