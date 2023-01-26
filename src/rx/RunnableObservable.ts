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
import EnumerableObservable$never from "./__internal__/EnumerableObservable/EnumerableObservable.never";
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
import RunnableObservable$catchError from "./__internal__/RunnableObservable/RunnableObservable.catchError";
import RunnableObservable$create from "./__internal__/RunnableObservable/RunnableObservable.create";
import RunnableObservable$defer from "./__internal__/RunnableObservable/RunnableObservable.defer";
import RunnableObservable$mergeAll from "./__internal__/RunnableObservable/RunnableObservable.mergeAll";
import RunnableObservable$scanAsync from "./__internal__/RunnableObservable/RunnableObservable.scanAsync";
import RunnableObservable$switchAll from "./__internal__/RunnableObservable/RunnableObservable.switchAll";

export const buffer =
  Observable$buffer as Buffer<RunnableObservableLike>["buffer"];

export const catchError: CatchError<RunnableObservableLike>["catchError"] =
  RunnableObservable$catchError;

export const concat =
  Observable$concat as Concat<RunnableObservableLike>["concat"];

export const concatAll: ConcatAll<
  RunnableObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export const create = RunnableObservable$create;

export const decodeWithCharset =
  Observable$decodeWithCharset as DecodeWithCharset<RunnableObservableLike>["decodeWithCharset"];

export const defer: Defer<RunnableObservableLike>["defer"] =
  RunnableObservable$defer;

export const distinctUntilChanged =
  Observable$distinctUntilChanged as DistinctUntilChanged<RunnableObservableLike>["distinctUntilChanged"];

export const empty = Observable$empty as Empty<
  RunnableObservableLike,
  { delay: number }
>["empty"];

export const everySatisfy =
  Observable$everySatisfy as EverySatisfy<RunnableObservableLike>["everySatisfy"];

export const exhaust: ConcatAll<RunnableObservableLike>["concatAll"] = <T>() =>
  mergeAll<T>({
    maxBufferSize: 1,
    maxConcurrency: 1,
  });

export const forEach =
  Observable$forEach as ForEach<RunnableObservableLike>["forEach"];

export const fromArray = Observable$fromArray as FromArray<
  RunnableObservableLike,
  {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
  }
>["fromArray"];

export const generate = Observable$generate as Generate<
  RunnableObservableLike,
  { readonly delay: number; readonly delayStart: boolean }
>["generate"];

export const keep = Observable$keep as Keep<RunnableObservableLike>["keep"];

export const map = Observable$map as Map<RunnableObservableLike>["map"];

export const merge =
  Observable$merge as Concat<RunnableObservableLike>["concat"];

export const mergeAll: ConcatAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = RunnableObservable$mergeAll;

export const never =
  EnumerableObservable$never as Never<RunnableObservableLike>["never"];

export const pairwise =
  Observable$pairwise as Pairwise<RunnableObservableLike>["pairwise"];

export const reduce =
  Observable$reduce as Reduce<RunnableObservableLike>["reduce"];

export const scan = Observable$scan as Scan<RunnableObservableLike>["scan"];

export const scanAsync: ScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>["scanAsync"] = RunnableObservable$scanAsync;

export const skipFirst =
  Observable$skipFirst as SkipFirst<RunnableObservableLike>["skipFirst"];

export const someSatisfy =
  Observable$someSatisfy as SomeSatisfy<RunnableObservableLike>["someSatisfy"];

export const switchAll: ConcatAll<RunnableObservableLike>["concatAll"] =
  RunnableObservable$switchAll;

export const takeFirst =
  Observable$takeFirst as TakeFirst<RunnableObservableLike>["takeFirst"];

export const takeLast =
  Observable$takeLast as TakeLast<RunnableObservableLike>["takeLast"];

export const takeWhile =
  Observable$takeWhile as TakeWhile<RunnableObservableLike>["takeWhile"];

export const throwIfEmpty =
  Observable$throwIfEmpty as ThrowIfEmpty<RunnableObservableLike>["throwIfEmpty"];

export const toEnumerable: ToEnumerable<RunnableObservableLike>["toEnumerable"] =
  Observable$toEnumerable;

export const toFlowable: ToFlowable<RunnableObservableLike>["toFlowable"] =
  Observable$toFlowable;

export const toPromise: ToPromiseable<
  RunnableObservableLike,
  SchedulerLike
>["toPromise"] = Observable$toPromise;

export const toReadonlyArray = Observable$toReadonlyArray as ToReadonlyArray<
  RunnableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
>["toReadonlyArray"];

export const toRunnable =
  Observable$toRunnable as ToRunnable<RunnableObservableLike>["toRunnable"];

export const zip = Observable$zip as Zip<RunnableObservableLike>["zip"];
