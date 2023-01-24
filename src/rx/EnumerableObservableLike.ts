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
import EnumerableObservableLike__catchError from "./__internal__/EnumerableObservableLike/EnumerableObservableLike.catchError";
import EnumerableObservableLike__create from "./__internal__/EnumerableObservableLike/EnumerableObservableLike.create";
import EnumerableObservableLike__defer from "./__internal__/EnumerableObservableLike/EnumerableObservableLike.defer";
import EnumerableObservableLike__mergeAll from "./__internal__/EnumerableObservableLike/EnumerableObservableLike.mergeAll";
import EnumerableObservableLike__never from "./__internal__/EnumerableObservableLike/EnumerableObservableLike.never";
import EnumerableObservableLike__scanAsync from "./__internal__/EnumerableObservableLike/EnumerableObservableLike.scanAsync";
import EnumerableObservableLike__switchAll from "./__internal__/EnumerableObservableLike/EnumerableObservableLike.switchAll";
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

export const buffer =
  ObservableLike__buffer as Buffer<EnumerableObservableLike>["buffer"];

export const catchError: CatchError<EnumerableObservableLike>["catchError"] =
  EnumerableObservableLike__catchError;

export const concat =
  ObservableLike__concat as Concat<EnumerableObservableLike>["concat"];

export const concatAll: ConcatAll<
  EnumerableObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export const create = EnumerableObservableLike__create;

export const decodeWithCharset =
  ObservableLike__decodeWithCharset as DecodeWithCharset<EnumerableObservableLike>["decodeWithCharset"];

export const defer: Defer<EnumerableObservableLike>["defer"] =
  EnumerableObservableLike__defer;

export const distinctUntilChanged =
  ObservableLike__distinctUntilChanged as DistinctUntilChanged<EnumerableObservableLike>["distinctUntilChanged"];

export const empty = ObservableLike__empty as Empty<
  EnumerableObservableLike,
  { delay: number }
>["empty"];

export const everySatisfy =
  ObservableLike__everySatisfy as EverySatisfy<EnumerableObservableLike>["everySatisfy"];

export const exhaust: ConcatAll<EnumerableObservableLike>["concatAll"] = <
  T,
>() =>
  mergeAll<T>({
    maxBufferSize: 1,
    maxConcurrency: 1,
  });

export const forEach =
  ObservableLike__forEach as ForEach<EnumerableObservableLike>["forEach"];

export const fromArray =
  ObservableLike__fromArray as FromArray<EnumerableObservableLike>["fromArray"];

export const generate =
  ObservableLike__generate as Generate<EnumerableObservableLike>["generate"];

export const keep =
  ObservableLike__keep as Keep<EnumerableObservableLike>["keep"];

export const map = ObservableLike__map as Map<EnumerableObservableLike>["map"];

export const merge =
  ObservableLike__merge as Concat<EnumerableObservableLike>["concat"];

export const mergeAll: ConcatAll<
  EnumerableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = EnumerableObservableLike__mergeAll;

export const never = EnumerableObservableLike__never;

export const pairwise =
  ObservableLike__pairwise as Pairwise<EnumerableObservableLike>["pairwise"];

export const reduce =
  ObservableLike__reduce as Reduce<EnumerableObservableLike>["reduce"];

export const scan =
  ObservableLike__scan as Scan<EnumerableObservableLike>["scan"];

export const scanAsync: ScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>["scanAsync"] = EnumerableObservableLike__scanAsync;

export const skipFirst =
  ObservableLike__skipFirst as SkipFirst<EnumerableObservableLike>["skipFirst"];

export const someSatisfy =
  ObservableLike__someSatisfy as SomeSatisfy<EnumerableObservableLike>["someSatisfy"];

export const switchAll: ConcatAll<EnumerableObservableLike>["concatAll"] =
  EnumerableObservableLike__switchAll;

export const takeFirst =
  ObservableLike__takeFirst as TakeFirst<EnumerableObservableLike>["takeFirst"];

export const takeLast =
  ObservableLike__takeLast as TakeLast<EnumerableObservableLike>["takeLast"];

export const takeWhile =
  ObservableLike__takeWhile as TakeWhile<EnumerableObservableLike>["takeWhile"];

export const throwIfEmpty =
  ObservableLike__throwIfEmpty as ThrowIfEmpty<EnumerableObservableLike>["throwIfEmpty"];

export const toEnumerable: ToEnumerable<EnumerableObservableLike>["toEnumerable"] =
  ObservableLike__toEnumerable;

export const toFlowable: ToFlowable<EnumerableObservableLike>["toFlowable"] =
  ObservableLike__toFlowable;

export const toPromise: ToPromiseable<
  EnumerableObservableLike,
  SchedulerLike
>["toPromise"] = ObservableLike__toPromise;

export const toReadonlyArray =
  ObservableLike__toReadonlyArray as ToReadonlyArray<
    EnumerableObservableLike,
    {
      readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
    }
  >["toReadonlyArray"];

export const toRunnable =
  ObservableLike__toRunnable as ToRunnable<EnumerableObservableLike>["toRunnable"];

export const zip = ObservableLike__zip as Zip<EnumerableObservableLike>["zip"];
