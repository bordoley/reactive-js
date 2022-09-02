import { MAX_SAFE_INTEGER } from "../__internal__/constants";
import {
  createEnumerableObservable,
  deferEnumerableObservable,
} from "../__internal__/rx/ObservableLike.create";
import {
  catchErrorEnumerableObservable,
  mergeAllEnumerableObservable,
  scanAsyncEnumerableObservable,
  switchAllEnumerableObservable,
} from "../__internal__/rx/ObservableLike.higher-order";
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
import { Factory } from "../functions";
import { EnumerableObservableLike, ScanAsync } from "../rx";
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

export const create = createEnumerableObservable;

export const defer: Defer<EnumerableObservableLike>["defer"] =
  deferEnumerableObservable;
export const deferT: Defer<EnumerableObservableLike> = {
  defer,
};

export const bufferT: Buffer<EnumerableObservableLike> = {
  buffer: buffer as Buffer<EnumerableObservableLike>["buffer"],
};

export const catchError: CatchError<EnumerableObservableLike>["catchError"] =
  catchErrorEnumerableObservable;
export const catchErrorT: CatchError<EnumerableObservableLike> = { catchError };

export const concatT: Concat<EnumerableObservableLike> = {
  concat: concat as Concat<EnumerableObservableLike>["concat"],
};

/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
export const concatAll: ConcatAll<
  EnumerableObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export const decodeWithCharsetT: DecodeWithCharset<EnumerableObservableLike> = {
  decodeWithCharset:
    decodeWithCharset as DecodeWithCharset<EnumerableObservableLike>["decodeWithCharset"],
};

export const distinctUntilChangedT: DistinctUntilChanged<EnumerableObservableLike> =
  {
    distinctUntilChanged:
      distinctUntilChanged as DistinctUntilChanged<EnumerableObservableLike>["distinctUntilChanged"],
  };

export const emptyT: Empty<EnumerableObservableLike> = {
  empty,
};

export const everySatisfyT: EverySatisfy<EnumerableObservableLike> = {
  everySatisfy:
    everySatisfy as EverySatisfy<EnumerableObservableLike>["everySatisfy"],
};

export const exhaust: ConcatAll<EnumerableObservableLike>["concatAll"] = <
  T,
>() =>
  mergeAll<T>({
    maxBufferSize: 1,
    maxConcurrency: 1,
  });
export const exhaustT: ConcatAll<EnumerableObservableLike> = {
  concatAll: exhaust,
};

export const forEachT: ForEach<EnumerableObservableLike> = {
  forEach: forEach as ForEach<EnumerableObservableLike>["forEach"],
};

export const generateeT: Generate<EnumerableObservableLike> = { generate };

export const keepT: Keep<EnumerableObservableLike> = {
  keep: keep as Keep<EnumerableObservableLike>["keep"],
};

export const mapT: Map<EnumerableObservableLike> = {
  map: map as Map<EnumerableObservableLike>["map"],
};

export const mergeT: Concat<EnumerableObservableLike> = {
  concat: merge as Concat<EnumerableObservableLike>["concat"],
};

export const mergeAll: ConcatAll<
  EnumerableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = mergeAllEnumerableObservable;
export const mergeAllT: ConcatAll<
  EnumerableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
> = { concatAll: mergeAll };

export const neverT: Never<EnumerableObservableLike> = {
  never,
};

export const pairwiseT: Pairwise<EnumerableObservableLike> = {
  pairwise: pairwise as Pairwise<EnumerableObservableLike>["pairwise"],
};

export const reduceT: Reduce<EnumerableObservableLike> = {
  reduce: reduce as Reduce<EnumerableObservableLike>["reduce"],
};

export const scanT: Scan<EnumerableObservableLike> = {
  scan: scan as Scan<EnumerableObservableLike>["scan"],
};

export const scanAsync: ScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>["scanAsync"] = scanAsyncEnumerableObservable;
export const scanAsyncT: ScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
> = { scanAsync };

export const skipFirstT: SkipFirst<EnumerableObservableLike> = {
  skipFirst: skipFirst as SkipFirst<EnumerableObservableLike>["skipFirst"],
};

export const someSatisfyT: SomeSatisfy<EnumerableObservableLike> = {
  someSatisfy:
    someSatisfy as SomeSatisfy<EnumerableObservableLike>["someSatisfy"],
};

export const switchAll: ConcatAll<EnumerableObservableLike>["concatAll"] =
  switchAllEnumerableObservable;
export const switchAllT: ConcatAll<EnumerableObservableLike> = {
  concatAll: switchAll,
};

export const takeFirstT: TakeFirst<EnumerableObservableLike> = {
  takeFirst: takeFirst as TakeFirst<EnumerableObservableLike>["takeFirst"],
};

export const takeLastT: TakeLast<EnumerableObservableLike> = {
  takeLast: takeLast as TakeLast<EnumerableObservableLike>["takeLast"],
};

export const takeWhileT: TakeWhile<EnumerableObservableLike> = {
  takeWhile: takeWhile as TakeWhile<EnumerableObservableLike>["takeWhile"],
};

export const throwIfEmptyT: ThrowIfEmpty<EnumerableObservableLike> = {
  throwIfEmpty:
    throwIfEmpty as ThrowIfEmpty<EnumerableObservableLike>["throwIfEmpty"],
};

export const toReadonlyArrayT: ToReadonlyArray<
  EnumerableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
> = { toReadonlyArray };

export const zipT: Zip<EnumerableObservableLike> = {
  zip: zip as Zip<EnumerableObservableLike>["zip"],
};
