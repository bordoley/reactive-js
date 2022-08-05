import {
  Buffer,
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
} from "../containers";
import { Factory, pipe } from "../functions";
import {
  EnumerableObservableLike,
  ObservableLike,
  RunnableObservableLike,
  createObservable,
} from "../rx";
import { VirtualTimeSchedulerLike } from "../scheduling";
import { getScheduler } from "../scheduling/ObserverLike";
import { toPausableScheduler } from "../scheduling/SchedulerLike";
import { FlowMode, ToFlowable, createLiftedFlowable } from "../streaming";
import { add, bindTo, toObservable } from "../util/DisposableLike";
import { pause, resume } from "../util/PauseableLike";
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
  subscribe,
  subscribeOn,
  switchAll,
  takeFirst,
  takeLast,
  takeUntil,
  takeWhile,
  throwIfEmpty,
  toReadonlyArray,
} from "./ObservableLike";

export const bufferT: Buffer<RunnableObservableLike> = {
  buffer: buffer as Buffer<RunnableObservableLike>["buffer"],
};

export const concatT: Concat<RunnableObservableLike> = {
  concat: concat as Concat<RunnableObservableLike>["concat"],
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
export const forEachT: ForEach<RunnableObservableLike> = {
  forEach: forEach as ForEach<RunnableObservableLike>["forEach"],
};

export const keepT: Keep<RunnableObservableLike> = {
  keep: keep as Keep<RunnableObservableLike>["keep"],
};

export const mapT: Map<RunnableObservableLike> = {
  map: map as Map<RunnableObservableLike>["map"],
};

export const mergeT: Concat<RunnableObservableLike> = {
  concat: merge as Concat<RunnableObservableLike>["concat"],
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

export const skipFirstT: SkipFirst<RunnableObservableLike> = {
  skipFirst: skipFirst as SkipFirst<RunnableObservableLike>["skipFirst"],
};

export const switchAllT: ConcatAll<RunnableObservableLike> = {
  concatAll: switchAll as ConcatAll<RunnableObservableLike>["concatAll"],
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

export const toFlowable: ToFlowable<
  RunnableObservableLike | EnumerableObservableLike
>["toFlowable"] = () => observable =>
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
            takeUntil<unknown>(pipe(pausableScheduler, toObservable())),
          ),
        ),
        add(
          pipe(
            modeObs,
            forEach<FlowMode>(mode => {
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

export const toReadonlyArrayT: ToReadonlyArray<
  RunnableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
> = { toReadonlyArray };
