import { MAX_SAFE_INTEGER } from "../__internal__/__internal__env";
import {
  Lift,
  TReactive,
} from "../__internal__/containers/__internal__StatefulContainerLike";
import {
  createCatchError,
  createMergeAll,
  createScanAsync,
  createSwitchAll,
} from "../__internal__/rx/__internal__ObservableLike";
import {
  Buffer,
  CatchError,
  Concat,
  ConcatAll,
  DecodeWithCharset,
  DistinctUntilChanged,
  ForEach,
  Keep,
  Map,
  Pairwise,
  Reduce,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToReadonlyArray,
  Zip,
} from "../containers";
import { Factory, Function1, newInstance, pipeUnsafe } from "../functions";
import {
  EnumerableObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ReactiveContainerLike_sinkInto,
  ScanAsync,
  createEnumerableObservable,
} from "../rx";
import { ObserverLike, VirtualTimeSchedulerLike } from "../scheduling";
import { sourceFrom } from "../util/SinkLike";
import {
  buffer,
  concat,
  decodeWithCharset,
  distinctUntilChanged,
  forEach,
  keep,
  map,
  merge,
  pairwise,
  reduce,
  scan,
  skipFirst,
  takeFirst,
  takeLast,
  takeWhile,
  throwIfEmpty,
  toReadonlyArray,
  zip,
} from "./ObservableLike";

const lift: Lift<EnumerableObservableLike, TReactive>["lift"] =
  /*@__PURE__*/ (() => {
    class LiftedRunnableObservable<TIn, TOut>
      implements EnumerableObservableLike<TOut>
    {
      readonly [ObservableLike_isEnumerable] = true;
      readonly [ObservableLike_isRunnable] = true;

      constructor(
        readonly source: EnumerableObservableLike<TIn>,
        readonly operators: readonly Function1<
          ObserverLike<any>,
          ObserverLike<any>
        >[],
      ) {}

      [ReactiveContainerLike_sinkInto](observer: ObserverLike<TOut>) {
        pipeUnsafe(observer, ...this.operators, sourceFrom(this.source));
      }
    }

    return <TA, TB>(
        operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
      ): Function1<
        EnumerableObservableLike<TA>,
        EnumerableObservableLike<TB>
      > =>
      source => {
        const sourceSource =
          source instanceof LiftedRunnableObservable ? source.source : source;

        const allFunctions =
          source instanceof LiftedRunnableObservable
            ? [operator, ...source.operators]
            : [operator];

        return newInstance(
          LiftedRunnableObservable,
          sourceSource,
          allFunctions,
        );
      };
  })();

export const bufferT: Buffer<EnumerableObservableLike> = {
  buffer: buffer as Buffer<EnumerableObservableLike>["buffer"],
};

export const catchError: CatchError<EnumerableObservableLike>["catchError"] =
  /*@__PURE__*/ createCatchError<EnumerableObservableLike>(
    lift,
  ) as CatchError<EnumerableObservableLike>["catchError"];
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
>["concatAll"] = /*@__PURE__*/ createMergeAll<EnumerableObservableLike>(
  lift,
) as ConcatAll<
  EnumerableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"];
export const mergeAllT: ConcatAll<
  EnumerableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
> = { concatAll: mergeAll };

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
>["scanAsync"] = createScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>(createEnumerableObservable);
export const scanAsyncT: ScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
> = { scanAsync };

export const skipFirstT: SkipFirst<EnumerableObservableLike> = {
  skipFirst: skipFirst as SkipFirst<EnumerableObservableLike>["skipFirst"],
};

export const switchAll: ConcatAll<EnumerableObservableLike>["concatAll"] =
  /*@__PURE__*/ createSwitchAll<EnumerableObservableLike>(lift);
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
