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
import EnumerableObservable$catchError from "./__internal__/EnumerableObservable/EnumerableObservable.catchError";
import EnumerableObservable$create from "./__internal__/EnumerableObservable/EnumerableObservable.create";
import EnumerableObservable$defer from "./__internal__/EnumerableObservable/EnumerableObservable.defer";
import EnumerableObservable$mergeAll from "./__internal__/EnumerableObservable/EnumerableObservable.mergeAll";
import EnumerableObservable$never from "./__internal__/EnumerableObservable/EnumerableObservable.never";
import EnumerableObservable$scanAsync from "./__internal__/EnumerableObservable/EnumerableObservable.scanAsync";
import EnumerableObservable$switchAll from "./__internal__/EnumerableObservable/EnumerableObservable.switchAll";
import Observable$buffer from "./__internal__/Observable/Observable.buffer";
import Observable$concat from "./__internal__/Observable/Observable.concat";
import Observable$decodeWithCharset from "./__internal__/Observable/Observable.decodeWithCharset";
import Observable$distinctUntilChanged from "./__internal__/Observable/Observable.distinctUntilChanged";
import Observable$empty from "./__internal__/Observable/Observable.empty";
import Observable$everySatisfy from "./__internal__/Observable/Observable.everySatisfy";
import Observable$forEach from "./__internal__/Observable/Observable.forEach";
import Observable$fromArray from "./__internal__/Observable/Observable.fromArray";
import Observable$generate from "./__internal__/Observable/Observable.generate";
import Observable$keep from "./__internal__/Observable/Observable.keep";
import Observable$map from "./__internal__/Observable/Observable.map";
import Observable$merge from "./__internal__/Observable/Observable.merge";
import Observable$pairwise from "./__internal__/Observable/Observable.pairwise";
import Observable$reduce from "./__internal__/Observable/Observable.reduce";
import Observable$scan from "./__internal__/Observable/Observable.scan";
import Observable$skipFirst from "./__internal__/Observable/Observable.skipFirst";
import Observable$someSatisfy from "./__internal__/Observable/Observable.someSatisfy";
import Observable$takeFirst from "./__internal__/Observable/Observable.takeFirst";
import Observable$takeLast from "./__internal__/Observable/Observable.takeLast";
import Observable$takeWhile from "./__internal__/Observable/Observable.takeWhile";
import Observable$throwIfEmpty from "./__internal__/Observable/Observable.throwIfEmpty";
import Observable$toEnumerable from "./__internal__/Observable/Observable.toEnumerable";
import Observable$toFlowable from "./__internal__/Observable/Observable.toFlowable";
import Observable$toPromise from "./__internal__/Observable/Observable.toPromise";
import Observable$toReadonlyArray from "./__internal__/Observable/Observable.toReadonlyArray";
import Observable$toRunnable from "./__internal__/Observable/Observable.toRunnable";
import Observable$zip from "./__internal__/Observable/Observable.zip";

export const buffer =
  Observable$buffer as Buffer<EnumerableObservableLike>["buffer"];

export const catchError: CatchError<EnumerableObservableLike>["catchError"] =
  EnumerableObservable$catchError;

export const concat =
  Observable$concat as Concat<EnumerableObservableLike>["concat"];

export const concatAll: ConcatAll<
  EnumerableObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export const create = EnumerableObservable$create;

export const decodeWithCharset =
  Observable$decodeWithCharset as DecodeWithCharset<EnumerableObservableLike>["decodeWithCharset"];

export const defer: Defer<EnumerableObservableLike>["defer"] =
  EnumerableObservable$defer;

export const distinctUntilChanged =
  Observable$distinctUntilChanged as DistinctUntilChanged<EnumerableObservableLike>["distinctUntilChanged"];

export const empty = Observable$empty as Empty<
  EnumerableObservableLike,
  { delay: number }
>["empty"];

export const everySatisfy =
  Observable$everySatisfy as EverySatisfy<EnumerableObservableLike>["everySatisfy"];

export const exhaust: ConcatAll<EnumerableObservableLike>["concatAll"] = <
  T,
>() =>
  mergeAll<T>({
    maxBufferSize: 1,
    maxConcurrency: 1,
  });

export const forEach =
  Observable$forEach as ForEach<EnumerableObservableLike>["forEach"];

export const fromArray =
  Observable$fromArray as FromArray<EnumerableObservableLike>["fromArray"];

export const generate =
  Observable$generate as Generate<EnumerableObservableLike>["generate"];

export const keep = Observable$keep as Keep<EnumerableObservableLike>["keep"];

export const map = Observable$map as Map<EnumerableObservableLike>["map"];

export const merge =
  Observable$merge as Concat<EnumerableObservableLike>["concat"];

export const mergeAll: ConcatAll<
  EnumerableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = EnumerableObservable$mergeAll;

export const never = EnumerableObservable$never;

export const pairwise =
  Observable$pairwise as Pairwise<EnumerableObservableLike>["pairwise"];

export const reduce =
  Observable$reduce as Reduce<EnumerableObservableLike>["reduce"];

export const scan = Observable$scan as Scan<EnumerableObservableLike>["scan"];

export const scanAsync: ScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>["scanAsync"] = EnumerableObservable$scanAsync;

export const skipFirst =
  Observable$skipFirst as SkipFirst<EnumerableObservableLike>["skipFirst"];

export const someSatisfy =
  Observable$someSatisfy as SomeSatisfy<EnumerableObservableLike>["someSatisfy"];

export const switchAll: ConcatAll<EnumerableObservableLike>["concatAll"] =
  EnumerableObservable$switchAll;

export const takeFirst =
  Observable$takeFirst as TakeFirst<EnumerableObservableLike>["takeFirst"];

export const takeLast =
  Observable$takeLast as TakeLast<EnumerableObservableLike>["takeLast"];

export const takeWhile =
  Observable$takeWhile as TakeWhile<EnumerableObservableLike>["takeWhile"];

export const throwIfEmpty =
  Observable$throwIfEmpty as ThrowIfEmpty<EnumerableObservableLike>["throwIfEmpty"];

export const toEnumerable: ToEnumerable<EnumerableObservableLike>["toEnumerable"] =
  Observable$toEnumerable;

export const toFlowable: ToFlowable<EnumerableObservableLike>["toFlowable"] =
  Observable$toFlowable;

export const toPromise: ToPromiseable<
  EnumerableObservableLike,
  SchedulerLike
>["toPromise"] = Observable$toPromise;

export const toReadonlyArray = Observable$toReadonlyArray as ToReadonlyArray<
  EnumerableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
>["toReadonlyArray"];

export const toRunnable =
  Observable$toRunnable as ToRunnable<EnumerableObservableLike>["toRunnable"];

export const zip = Observable$zip as Zip<EnumerableObservableLike>["zip"];
