import {
  Concat,
  ConcatAll,
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
  EnumerableObservableLike,
  HotObservableLike,
  ObservableLike,
  RunnableObservableLike,
  createHotObservable,
} from "../rx";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../scheduling";
import { getScheduler } from "../scheduling/ObserverLike";
import { toPausableScheduler } from "../scheduling/SchedulerLike";
import { FlowMode, ToFlowable, createLiftedFlowable } from "../streaming";
import { run } from "../util/ContinuationLike";
import {
  add,
  bindTo,
  getException,
  toObservable,
} from "../util/DisposableLike";
import { pause, resume } from "../util/PauseableLike";
import { sourceFrom } from "../util/SinkLike";
import {
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
  subscribe,
  subscribeOn,
  switchAll,
  takeFirst,
  takeLast,
  takeUntil,
  takeWhile,
  throwIfEmpty,
} from "./ObservableLike";

export const concatT: Concat<RunnableObservableLike> = {
  concat,
};

export const decodeWithCharsetT: DecodeWithCharset<RunnableObservableLike> = {
  decodeWithCharset,
};

export const distinctUntilChangedT: DistinctUntilChanged<RunnableObservableLike> =
  { distinctUntilChanged };

export const forEachT: ForEach<RunnableObservableLike> = { forEach };

export const keepT: Keep<RunnableObservableLike> = { keep };

export const mapT: Map<RunnableObservableLike> = { map };

export const mergeT: Concat<ObservableLike<unknown>> = {
  concat: merge,
};

export const pairwiseT: Pairwise<RunnableObservableLike> = { pairwise };

export const reduceT: Reduce<RunnableObservableLike> = { reduce };

export const scanT: Scan<RunnableObservableLike> = { scan };

export const skipFirstT: SkipFirst<RunnableObservableLike> = { skipFirst };

export const switchAllT: ConcatAll<RunnableObservableLike> = {
  concatAll: switchAll,
};

export const takeFirstT: TakeFirst<RunnableObservableLike> = { takeFirst };

export const takeLastT: TakeLast<RunnableObservableLike> = { takeLast };

export const takeWhileT: TakeWhile<RunnableObservableLike> = { takeWhile };

export const throwIfEmptyT: ThrowIfEmpty<RunnableObservableLike> = {
  throwIfEmpty,
};

export const toFlowable: ToFlowable<
  RunnableObservableLike | EnumerableObservableLike
>["toFlowable"] = () => observable =>
  createLiftedFlowable((modeObs: HotObservableLike<FlowMode>) =>
    createHotObservable(observer => {
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
            takeUntil<unknown>(pipe(pausableScheduler, toObservable())),
          ),
        ),
        add(
          pipe(
            modeObs,
            forEach<HotObservableLike, FlowMode>((mode: FlowMode) => {
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
export const toFlowableT: ToFlowable<RunnableObservableLike> = { toFlowable };

export const toHotObservable =
  <T>(): Function1<RunnableObservableLike<T>, HotObservableLike<T>> =>
  v =>
    v as unknown as HotObservableLike<T>;

interface ToReadonlyArrayObservable {
  <T>(
    options?: Partial<{
      readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
    }>,
  ): Function1<RunnableObservableLike<T>, ReadonlyArrayLike<T>>;
  <T>(
    options?: Partial<{
      readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
    }>,
  ): Function1<EnumerableObservableLike<T>, ReadonlyArrayLike<T>>;
}
export const toReadonlyArray: ToReadonlyArrayObservable =
  <T>(
    options: {
      readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
    } = {},
  ): Function1<ObservableLike<T>, ReadonlyArrayLike<T>> =>
  observable => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();
    const result: T[] = [];

    const subscription = pipe(
      observable,
      forEach<T>(next => {
        result.push(next);
      }),
      subscribe(scheduler),
    );

    run(scheduler);
    const exception = getException(subscription);

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
