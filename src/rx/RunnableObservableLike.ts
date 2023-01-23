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
  ToReadonlyArray,
  Zip,
} from "../containers";
import ReadonlyArrayLike__toRunnableObservable from "../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
import { Factory } from "../functions";
import { RunnableObservableLike, ScanAsync } from "../rx";
import { VirtualTimeSchedulerLike } from "../scheduling";
import {
  buffer,
  concat,
  decodeWithCharset,
  distinctUntilChanged,
  empty,
  everySatisfy,
  forEach,
  generate,
  keep,
  map,
  merge,
  never,
  pairwise,
  reduce,
  scan,
  skipFirst,
  someSatisfy,
  takeFirst,
  takeLast,
  takeWhile,
  throwIfEmpty,
  toReadonlyArray,
  zip,
} from "./ObservableLike";
import RunnableObservableLike__catchError from "./__internal__/RunnableObservableLike/RunnableObservableLike.catchError";
import RunnableObservableLike__create from "./__internal__/RunnableObservableLike/RunnableObservableLike.create";
import RunnableObservableLike__defer from "./__internal__/RunnableObservableLike/RunnableObservableLike.defer";
import RunnableObservableLike__mergeAll from "./__internal__/RunnableObservableLike/RunnableObservableLike.mergeAll";
import RunnableObservableLike__scanAsync from "./__internal__/RunnableObservableLike/RunnableObservableLike.scanAsync";
import RunnableObservableLike__switchAll from "./__internal__/RunnableObservableLike/RunnableObservableLike.switchAll";

export const create = RunnableObservableLike__create;

export const defer: Defer<RunnableObservableLike>["defer"] =
  RunnableObservableLike__defer;
export const deferT: Defer<RunnableObservableLike> = {
  defer,
};

export const bufferT: Buffer<RunnableObservableLike> = {
  buffer: buffer as Buffer<RunnableObservableLike>["buffer"],
};

export const catchError: CatchError<RunnableObservableLike>["catchError"] =
  RunnableObservableLike__catchError;
export const catchErrorT: CatchError<RunnableObservableLike> = { catchError };

export const concatT: Concat<RunnableObservableLike> = {
  concat: concat as Concat<RunnableObservableLike>["concat"],
};

/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
export const concatAll: ConcatAll<
  RunnableObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export const decodeWithCharsetT: DecodeWithCharset<RunnableObservableLike> = {
  decodeWithCharset:
    decodeWithCharset as DecodeWithCharset<RunnableObservableLike>["decodeWithCharset"],
};

export const distinctUntilChangedT: DistinctUntilChanged<RunnableObservableLike> =
  {
    distinctUntilChanged:
      distinctUntilChanged as DistinctUntilChanged<RunnableObservableLike>["distinctUntilChanged"],
  };

export const emptyT: Empty<RunnableObservableLike, { delay: number }> = {
  empty,
};

export const everySatisfyT: EverySatisfy<RunnableObservableLike> = {
  everySatisfy:
    everySatisfy as EverySatisfy<RunnableObservableLike>["everySatisfy"],
};

export const exhaust: ConcatAll<RunnableObservableLike>["concatAll"] = <T>() =>
  mergeAll<T>({
    maxBufferSize: 1,
    maxConcurrency: 1,
  });
export const exhaustT: ConcatAll<RunnableObservableLike> = {
  concatAll: exhaust,
};

export const forEachT: ForEach<RunnableObservableLike> = {
  forEach: forEach as ForEach<RunnableObservableLike>["forEach"],
};

export const fromArrayT: FromArray<
  RunnableObservableLike,
  {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
  }
> = {
  fromArray: ReadonlyArrayLike__toRunnableObservable,
};

export const generateT: Generate<
  RunnableObservableLike,
  { readonly delay: number; readonly delayStart: boolean }
> = { generate };

export const keepT: Keep<RunnableObservableLike> = {
  keep: keep as Keep<RunnableObservableLike>["keep"],
};

export const mapT: Map<RunnableObservableLike> = {
  map: map as Map<RunnableObservableLike>["map"],
};

export const mergeT: Concat<RunnableObservableLike> = {
  concat: merge as Concat<RunnableObservableLike>["concat"],
};

export const mergeAll: ConcatAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = RunnableObservableLike__mergeAll;
export const mergeAllT: ConcatAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
> = { concatAll: mergeAll };

export const neverT: Never<RunnableObservableLike> = {
  never,
};

export const pairwiseT: Pairwise<RunnableObservableLike> = {
  pairwise: pairwise as Pairwise<RunnableObservableLike>["pairwise"],
};

export const reduceT: Reduce<RunnableObservableLike> = {
  reduce: reduce as Reduce<RunnableObservableLike>["reduce"],
};

export const scanT: Scan<RunnableObservableLike> = {
  scan: scan as Scan<RunnableObservableLike>["scan"],
};

export const scanAsync: ScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>["scanAsync"] = RunnableObservableLike__scanAsync;
export const scanAsyncT: ScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
> = { scanAsync };

export const skipFirstT: SkipFirst<RunnableObservableLike> = {
  skipFirst: skipFirst as SkipFirst<RunnableObservableLike>["skipFirst"],
};

export const someSatisfyT: SomeSatisfy<RunnableObservableLike> = {
  someSatisfy:
    someSatisfy as SomeSatisfy<RunnableObservableLike>["someSatisfy"],
};

export const switchAll: ConcatAll<RunnableObservableLike>["concatAll"] =
  RunnableObservableLike__switchAll;
export const switchAllT: ConcatAll<RunnableObservableLike> = {
  concatAll: switchAll,
};

export const takeFirstT: TakeFirst<RunnableObservableLike> = {
  takeFirst: takeFirst as TakeFirst<RunnableObservableLike>["takeFirst"],
};

export const takeLastT: TakeLast<RunnableObservableLike> = {
  takeLast: takeLast as TakeLast<RunnableObservableLike>["takeLast"],
};

export const takeWhileT: TakeWhile<RunnableObservableLike> = {
  takeWhile: takeWhile as TakeWhile<RunnableObservableLike>["takeWhile"],
};

export const throwIfEmptyT: ThrowIfEmpty<RunnableObservableLike> = {
  throwIfEmpty:
    throwIfEmpty as ThrowIfEmpty<RunnableObservableLike>["throwIfEmpty"],
};

export const toReadonlyArrayT: ToReadonlyArray<
  RunnableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
> = { toReadonlyArray };

export const zipT: Zip<RunnableObservableLike> = {
  zip: zip as Zip<RunnableObservableLike>["zip"],
};
