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
import { Factory, Function1, newInstance, pipeUnsafe } from "../functions";
import {
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ReactiveContainerLike_sinkInto,
  RunnableObservableLike,
  ScanAsync,
  createRunnableObservable,
} from "../rx";
import { ObserverLike, VirtualTimeSchedulerLike } from "../scheduling";
import { sourceFrom } from "../util/SinkLike";
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

const lift: Lift<RunnableObservableLike, TReactive>["lift"] =
  /*@__PURE__*/ (() => {
    class LiftedRunnableObservable<TIn, TOut>
      implements RunnableObservableLike<TOut>
    {
      readonly [ObservableLike_isEnumerable] = false;
      readonly [ObservableLike_isRunnable] = true;

      constructor(
        readonly source: RunnableObservableLike<TIn>,
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
      ): Function1<RunnableObservableLike<TA>, RunnableObservableLike<TB>> =>
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

export const bufferT: Buffer<RunnableObservableLike> = {
  buffer: buffer as Buffer<RunnableObservableLike>["buffer"],
};

export const catchError: CatchError<RunnableObservableLike>["catchError"] =
  /*@__PURE__*/ createCatchError<RunnableObservableLike>(
    lift,
  ) as CatchError<RunnableObservableLike>["catchError"];
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
>["concatAll"] = /*@__PURE__*/ createMergeAll<RunnableObservableLike>(
  lift,
) as ConcatAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"];
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
>["scanAsync"] = createScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>(createRunnableObservable);
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
  /*@__PURE__*/ createSwitchAll<RunnableObservableLike>(lift);
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
