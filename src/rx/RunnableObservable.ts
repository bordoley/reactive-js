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
  Never,
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
import { RunnableObservableLike, ScanAsync, ToRunnable } from "../rx";
import { SchedulerLike, VirtualTimeSchedulerLike } from "../scheduling";
import { ToFlowable } from "../streaming";
import EnumerableObservable_never from "./__internal__/EnumerableObservable/EnumerableObservable.never";
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
import RunnableObservable_catchError from "./__internal__/RunnableObservable/RunnableObservable.catchError";
import RunnableObservable_create from "./__internal__/RunnableObservable/RunnableObservable.create";
import RunnableObservable_defer from "./__internal__/RunnableObservable/RunnableObservable.defer";
import RunnableObservable_mergeAll from "./__internal__/RunnableObservable/RunnableObservable.mergeAll";
import RunnableObservable_scanAsync from "./__internal__/RunnableObservable/RunnableObservable.scanAsync";
import RunnableObservable_switchAll from "./__internal__/RunnableObservable/RunnableObservable.switchAll";

export const buffer =
  Observable_buffer as Buffer<RunnableObservableLike>["buffer"];

export const catchError: CatchError<RunnableObservableLike>["catchError"] =
  RunnableObservable_catchError;

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

export const create = RunnableObservable_create;

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
    readonly start?: number;
    readonly count?: number;
  }
>["fromArray"];

export const generate = Observable_generate as Generate<
  RunnableObservableLike,
  { readonly delay: number; readonly delayStart: boolean }
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

export const never =
  EnumerableObservable_never as Never<RunnableObservableLike>["never"];

export const pairwise =
  Observable_pairwise as Pairwise<RunnableObservableLike>["pairwise"];

export const reduce =
  Observable_reduce as Reduce<RunnableObservableLike>["reduce"];

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

export const takeWhile =
  Observable_takeWhile as TakeWhile<RunnableObservableLike>["takeWhile"];

export const throwIfEmpty =
  Observable_throwIfEmpty as ThrowIfEmpty<RunnableObservableLike>["throwIfEmpty"];

export const toEnumerable: ToEnumerable<RunnableObservableLike>["toEnumerable"] =
  Observable_toEnumerable;

export const toFlowable: ToFlowable<RunnableObservableLike>["toFlowable"] =
  Observable_toFlowable;

export const toPromise: ToPromiseable<
  RunnableObservableLike,
  SchedulerLike
>["toPromise"] = Observable_toPromise;

export const toReadonlyArray = Observable_toReadonlyArray as ToReadonlyArray<
  RunnableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
>["toReadonlyArray"];

export const toRunnable =
  Observable_toRunnable as ToRunnable<RunnableObservableLike>["toRunnable"];

export const zip = Observable_zip as Zip<RunnableObservableLike>["zip"];
