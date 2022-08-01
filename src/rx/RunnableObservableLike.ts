import {
  DecodeWithCharset,
  DistinctUntilChanged,
  ForEach,
  Keep,
  Map,
  Pairwise,
  ReadonlyArrayLike,
  Reduce,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToReadonlyArray,
} from "../containers";
import { Factory, Function1, isSome, pipe } from "../functions";
import { RunnableObservableLike } from "../rx";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../scheduling";
import { run } from "../util/ContinuationLike";
import { addTo, getException } from "../util/DisposableLike";
import {
  decodeWithCharset as decodeWithCharsetObs,
  distinctUntilChanged as distinctUntilChangedObs,
  forEach as forEachObs,
  keep as keepObs,
  map as mapObs,
  pairwise as pairwiseObs,
  reduce as reduceObs,
  scan as scanObs,
  skipFirst as skipFirstObs,
  subscribe,
  takeFirst as takeFirstObs,
  takeLast as takeLastObs,
  takeWhile as takeWhileObs,
  throwIfEmpty as throwIfEmptyObs,
} from "./ObservableLike";

export const decodeWithCharset: DecodeWithCharset<RunnableObservableLike>["decodeWithCharset"] =
  decodeWithCharsetObs;
export const decodeWithCharsetT: DecodeWithCharset<RunnableObservableLike> = {
  decodeWithCharset,
};

export const distinctUntilChanged: DistinctUntilChanged<RunnableObservableLike>["distinctUntilChanged"] =
  distinctUntilChangedObs;
export const distinctUntilChangedT: DistinctUntilChanged<RunnableObservableLike> =
  { distinctUntilChanged };

export const forEach: ForEach<RunnableObservableLike>["forEach"] = forEachObs;
export const forEachT: ForEach<RunnableObservableLike> = { forEach };

export const keep: Keep<RunnableObservableLike>["keep"] = keepObs;
export const keepT: Keep<RunnableObservableLike> = { keep };

export const map: Map<RunnableObservableLike>["map"] = mapObs;
export const mapT: Map<RunnableObservableLike> = { map };

export const pairwise: Pairwise<RunnableObservableLike>["pairwise"] =
  pairwiseObs;
export const pairwiseT: Pairwise<RunnableObservableLike> = { pairwise };

export const reduce: Reduce<RunnableObservableLike>["reduce"] = reduceObs;
export const reduceT: Reduce<RunnableObservableLike> = { reduce };

export const scan: Scan<RunnableObservableLike>["scan"] = scanObs;
export const scanT: Scan<RunnableObservableLike> = { scan };

export const skipFirst: SkipFirst<RunnableObservableLike>["skipFirst"] =
  skipFirstObs;
export const skipFirstT: SkipFirst<RunnableObservableLike> = { skipFirst };

export const takeFirst: TakeFirst<RunnableObservableLike>["takeFirst"] =
  takeFirstObs;
export const takeFirstT: TakeFirst<RunnableObservableLike> = { takeFirst };

export const takeLast: TakeLast<RunnableObservableLike>["takeLast"] =
  takeLastObs;
export const takeLastT: TakeLast<RunnableObservableLike> = { takeLast };

export const takeWhile: TakeWhile<RunnableObservableLike>["takeWhile"] =
  takeWhileObs;
export const takeWhileT: TakeWhile<RunnableObservableLike> = { takeWhile };

export const throwIfEmpty: ThrowIfEmpty<RunnableObservableLike>["throwIfEmpty"] =
  throwIfEmptyObs;
export const throwIfEmptyT: ThrowIfEmpty<RunnableObservableLike> = {
  throwIfEmpty,
};

export const toReadonlyArray: ToReadonlyArray<
  RunnableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
>["toReadonlyArray"] =
  <T>(
    options: {
      readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
    } = {},
  ): Function1<RunnableObservableLike<T>, ReadonlyArrayLike<T>> =>
  observable => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();
    const result: T[] = [];

    pipe(
      observable,
      forEach(next => {
        result.push(next);
      }),
      subscribe(scheduler),
      addTo(scheduler),
    );

    pipe(scheduler, run);
    const exception = getException(scheduler);

    if (isSome(exception)) {
      throw exception.cause;
    }

    return result;
  };
export const toReadonlyArrayT: ToReadonlyArray<
  RunnableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
> = { toReadonlyArray };
