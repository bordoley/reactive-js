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
import EnumerableObservableLike__never from "./__internal__/EnumerableObservableLike/EnumerableObservableLike.never";
import ObservableLike__buffer from "./__internal__/ObservableLike/ObservableLike.buffer";
import ObservableLike__concat from "./__internal__/ObservableLike/ObservableLike.concat";
import ObservableLike__decodeWithCharset from "./__internal__/ObservableLike/ObservableLike.decodeWithCharset";
import ObservableLike__distinctUntilChanged from "./__internal__/ObservableLike/ObservableLike.distinctUntilChanged";
import ObservableLike__empty from "./__internal__/ObservableLike/ObservableLike.empty";
import ObservableLike__everySatisfy from "./__internal__/ObservableLike/ObservableLike.everySatisfy";
import ObservableLike__forEach from "./__internal__/ObservableLike/ObservableLike.forEach";
import ObservableLike__fromArray from "./__internal__/ObservableLike/ObservableLike.fromArray";
import ObservableLike__generate from "./__internal__/ObservableLike/ObservableLike.generate";
import ObservableLike__keep from "./__internal__/ObservableLike/ObservableLike.keep";
import ObservableLike__map from "./__internal__/ObservableLike/ObservableLike.map";
import ObservableLike__merge from "./__internal__/ObservableLike/ObservableLike.merge";
import ObservableLike__pairwise from "./__internal__/ObservableLike/ObservableLike.pairwise";
import ObservableLike__reduce from "./__internal__/ObservableLike/ObservableLike.reduce";
import ObservableLike__scan from "./__internal__/ObservableLike/ObservableLike.scan";
import ObservableLike__skipFirst from "./__internal__/ObservableLike/ObservableLike.skipFirst";
import ObservableLike__someSatisfy from "./__internal__/ObservableLike/ObservableLike.someSatisfy";
import ObservableLike__takeFirst from "./__internal__/ObservableLike/ObservableLike.takeFirst";
import ObservableLike__takeLast from "./__internal__/ObservableLike/ObservableLike.takeLast";
import ObservableLike__takeWhile from "./__internal__/ObservableLike/ObservableLike.takeWhile";
import ObservableLike__throwIfEmpty from "./__internal__/ObservableLike/ObservableLike.throwIfEmpty";
import ObservableLike__toEnumerable from "./__internal__/ObservableLike/ObservableLike.toEnumerable";
import ObservableLike__toFlowable from "./__internal__/ObservableLike/ObservableLike.toFlowable";
import ObservableLike__toPromise from "./__internal__/ObservableLike/ObservableLike.toPromise";
import ObservableLike__toReadonlyArray from "./__internal__/ObservableLike/ObservableLike.toReadonlyArray";
import ObservableLike__toRunnable from "./__internal__/ObservableLike/ObservableLike.toRunnable";
import ObservableLike__zip from "./__internal__/ObservableLike/ObservableLike.zip";
import RunnableObservableLike__catchError from "./__internal__/RunnableObservableLike/RunnableObservableLike.catchError";
import RunnableObservableLike__create from "./__internal__/RunnableObservableLike/RunnableObservableLike.create";
import RunnableObservableLike__defer from "./__internal__/RunnableObservableLike/RunnableObservableLike.defer";
import RunnableObservableLike__mergeAll from "./__internal__/RunnableObservableLike/RunnableObservableLike.mergeAll";
import RunnableObservableLike__scanAsync from "./__internal__/RunnableObservableLike/RunnableObservableLike.scanAsync";
import RunnableObservableLike__switchAll from "./__internal__/RunnableObservableLike/RunnableObservableLike.switchAll";

export const buffer =
  ObservableLike__buffer as Buffer<RunnableObservableLike>["buffer"];

export const catchError: CatchError<RunnableObservableLike>["catchError"] =
  RunnableObservableLike__catchError;

export const concat =
  ObservableLike__concat as Concat<RunnableObservableLike>["concat"];

export const concatAll: ConcatAll<
  RunnableObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export const create = RunnableObservableLike__create;

export const decodeWithCharset =
  ObservableLike__decodeWithCharset as DecodeWithCharset<RunnableObservableLike>["decodeWithCharset"];

export const defer: Defer<RunnableObservableLike>["defer"] =
  RunnableObservableLike__defer;

export const distinctUntilChanged =
  ObservableLike__distinctUntilChanged as DistinctUntilChanged<RunnableObservableLike>["distinctUntilChanged"];

export const empty = ObservableLike__empty as Empty<
  RunnableObservableLike,
  { delay: number }
>["empty"];

export const everySatisfy =
  ObservableLike__everySatisfy as EverySatisfy<RunnableObservableLike>["everySatisfy"];

export const exhaust: ConcatAll<RunnableObservableLike>["concatAll"] = <T>() =>
  mergeAll<T>({
    maxBufferSize: 1,
    maxConcurrency: 1,
  });

export const forEach =
  ObservableLike__forEach as ForEach<RunnableObservableLike>["forEach"];

export const fromArray = ObservableLike__fromArray as FromArray<
  RunnableObservableLike,
  {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
  }
>["fromArray"];

export const generate = ObservableLike__generate as Generate<
  RunnableObservableLike,
  { readonly delay: number; readonly delayStart: boolean }
>["generate"];

export const keep =
  ObservableLike__keep as Keep<RunnableObservableLike>["keep"];

export const map = ObservableLike__map as Map<RunnableObservableLike>["map"];

export const merge =
  ObservableLike__merge as Concat<RunnableObservableLike>["concat"];

export const mergeAll: ConcatAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = RunnableObservableLike__mergeAll;

export const never =
  EnumerableObservableLike__never as Never<RunnableObservableLike>["never"];

export const pairwise =
  ObservableLike__pairwise as Pairwise<RunnableObservableLike>["pairwise"];

export const reduce =
  ObservableLike__reduce as Reduce<RunnableObservableLike>["reduce"];

export const scan =
  ObservableLike__scan as Scan<RunnableObservableLike>["scan"];

export const scanAsync: ScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>["scanAsync"] = RunnableObservableLike__scanAsync;

export const skipFirst =
  ObservableLike__skipFirst as SkipFirst<RunnableObservableLike>["skipFirst"];

export const someSatisfy =
  ObservableLike__someSatisfy as SomeSatisfy<RunnableObservableLike>["someSatisfy"];

export const switchAll: ConcatAll<RunnableObservableLike>["concatAll"] =
  RunnableObservableLike__switchAll;

export const takeFirst =
  ObservableLike__takeFirst as TakeFirst<RunnableObservableLike>["takeFirst"];

export const takeLast =
  ObservableLike__takeLast as TakeLast<RunnableObservableLike>["takeLast"];

export const takeWhile =
  ObservableLike__takeWhile as TakeWhile<RunnableObservableLike>["takeWhile"];

export const throwIfEmpty =
  ObservableLike__throwIfEmpty as ThrowIfEmpty<RunnableObservableLike>["throwIfEmpty"];

export const toEnumerable: ToEnumerable<RunnableObservableLike>["toEnumerable"] =
  ObservableLike__toEnumerable;

export const toFlowable: ToFlowable<RunnableObservableLike>["toFlowable"] =
  ObservableLike__toFlowable;

export const toPromise: ToPromiseable<
  RunnableObservableLike,
  SchedulerLike
>["toPromise"] = ObservableLike__toPromise;

export const toReadonlyArray =
  ObservableLike__toReadonlyArray as ToReadonlyArray<
    RunnableObservableLike,
    {
      readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
    }
  >["toReadonlyArray"];

export const toRunnable =
  ObservableLike__toRunnable as ToRunnable<RunnableObservableLike>["toRunnable"];

export const zip = ObservableLike__zip as Zip<RunnableObservableLike>["zip"];
