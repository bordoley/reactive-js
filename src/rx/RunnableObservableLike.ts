import {
  Concat,
  ContainerOperator,
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
import {
  ObservableLike,
  RunnableObservableLike,
  createObservable,
} from "../rx";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../scheduling";
import { getScheduler } from "../scheduling/ObserverLike";
import { toPausableScheduler } from "../scheduling/SchedulerLike";
import { FlowMode, FlowableLike, createLiftedFlowable } from "../streaming";
import { run } from "../util/ContinuationLike";
import {
  add,
  addTo,
  bindTo,
  getException,
  toObservable,
} from "../util/DisposableLike";
import { pause, resume } from "../util/PauseableLike";
import {
  concat as concatObs,
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
  subscribeOn,
  takeFirst as takeFirstObs,
  takeLast as takeLastObs,
  takeUntil as takeUntilObs,
  takeWhile as takeWhileObs,
  throwIfEmpty as throwIfEmptyObs,
} from "./ObservableLike";
import { sourceFrom } from "./ReactiveContainerLike";

export const concat: Concat<RunnableObservableLike>["concat"] = concatObs;
export const concatT: Concat<RunnableObservableLike> = {
  concat,
};

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

export const takeUntil: <T>(
  notifier: RunnableObservableLike,
) => ContainerOperator<RunnableObservableLike, T, T> = takeUntilObs;

export const takeWhile: TakeWhile<RunnableObservableLike>["takeWhile"] =
  takeWhileObs;
export const takeWhileT: TakeWhile<RunnableObservableLike> = { takeWhile };

export const throwIfEmpty: ThrowIfEmpty<RunnableObservableLike>["throwIfEmpty"] =
  throwIfEmptyObs;
export const throwIfEmptyT: ThrowIfEmpty<RunnableObservableLike> = {
  throwIfEmpty,
};

export const toFlowable =
  <T>(): Function1<RunnableObservableLike<T>, FlowableLike<T>> =>
  observable =>
    createLiftedFlowable((modeObs: ObservableLike<FlowMode>) =>
      createObservable(observer => {
        const pausableScheduler = pipe(
          observer,
          getScheduler,
          toPausableScheduler,
        );

        pipe(
          observer,
          sourceFrom(
            pipe(
              observable,
              subscribeOn(pausableScheduler),
              takeUntilObs(pipe(pausableScheduler, toObservable())),
            ),
          ),
          add(
            pipe(
              modeObs,
              forEach((mode: FlowMode) => {
                switch (mode) {
                  case "pause":
                    pause(pausableScheduler);
                    break;
                  case "resume":
                    resume(pausableScheduler);
                    break;
                }
              }),
              subscribe(getScheduler(observer)),
              bindTo(pausableScheduler),
            ),
          ),
          add(pausableScheduler),
        );
      }),
    );

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
