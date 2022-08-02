import {
  Concat,
  ContainerOf,
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
import {
  Equality,
  Factory,
  Function1,
  Option,
  Predicate,
  Reducer,
  SideEffect1,
  isSome,
  pipe,
} from "../functions";
import {
  EnumerableObservableLike,
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
import { FlowMode, ToFlowable, createLiftedFlowable } from "../streaming";
import { run } from "../util/ContinuationLike";
import {
  add,
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
  forkMerge as forkMergeObs,
  keep as keepObs,
  map as mapObs,
  merge as mergeObs,
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

interface ConcatRunnableObservable {
  <T>(
    fst: RunnableObservableLike<T>,
    snd: RunnableObservableLike<T>,
    ...tail: readonly RunnableObservableLike<T>[]
  ): RunnableObservableLike<T>;
  <T>(
    fst: EnumerableObservableLike<T>,
    snd: EnumerableObservableLike<T>,
    ...tail: readonly EnumerableObservableLike<T>[]
  ): EnumerableObservableLike<T>;
}
export const concat: ConcatRunnableObservable = concatObs;
export const concatT: Concat<RunnableObservableLike> = {
  concat,
};

interface DecodeWithCharsetRunnableObservable {
  (charset?: string | undefined): ContainerOperator<
    RunnableObservableLike,
    ArrayBuffer,
    string
  >;
  (charset?: string | undefined): ContainerOperator<
    EnumerableObservableLike,
    ArrayBuffer,
    string
  >;
}
export const decodeWithCharset: DecodeWithCharsetRunnableObservable =
  decodeWithCharsetObs;
export const decodeWithCharsetT: DecodeWithCharset<RunnableObservableLike> = {
  decodeWithCharset,
};

interface DistinctUntilChangedRunnableObservable {
  <T>(
    options?: Option<{
      readonly equality?: Equality<T>;
    }>,
  ): ContainerOperator<RunnableObservableLike, T, T>;
  <T>(
    options?: Option<{
      readonly equality?: Equality<T>;
    }>,
  ): ContainerOperator<EnumerableObservableLike, T, T>;
}
export const distinctUntilChanged: DistinctUntilChangedRunnableObservable =
  distinctUntilChangedObs;
export const distinctUntilChangedT: DistinctUntilChanged<RunnableObservableLike> =
  { distinctUntilChanged };

interface ForEachRunnableObservable {
  <T>(effect: SideEffect1<T>): ContainerOperator<RunnableObservableLike, T, T>;
  <T>(effect: SideEffect1<T>): ContainerOperator<
    EnumerableObservableLike,
    T,
    T
  >;
}
export const forEach: ForEachRunnableObservable = forEachObs;
export const forEachT: ForEach<RunnableObservableLike> = { forEach };

interface ForkMergeRunnableObservable {
  <TIn, TOut>(
    fst: ContainerOperator<RunnableObservableLike, TIn, TOut>,
    snd: ContainerOperator<RunnableObservableLike, TIn, TOut>,
    ...tail: readonly ContainerOperator<RunnableObservableLike, TIn, TOut>[]
  ): ContainerOperator<RunnableObservableLike, TIn, TOut>;
  <TIn, TOut>(
    fst: ContainerOperator<EnumerableObservableLike, TIn, TOut>,
    snd: ContainerOperator<EnumerableObservableLike, TIn, TOut>,
    ...tail: readonly ContainerOperator<EnumerableObservableLike, TIn, TOut>[]
  ): ContainerOperator<EnumerableObservableLike, TIn, TOut>;
}
export const forkMerge: ForkMergeRunnableObservable = forkMergeObs;

interface KeephRunnableObservable {
  <T>(predicate: Predicate<T>): ContainerOperator<RunnableObservableLike, T, T>;
  <T>(predicate: Predicate<T>): ContainerOperator<
    EnumerableObservableLike,
    T,
    T
  >;
}
export const keep: KeephRunnableObservable = keepObs;
export const keepT: Keep<RunnableObservableLike> = { keep };

interface MaphRunnableObservable {
  <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<
    RunnableObservableLike,
    TA,
    TB
  >;
  <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<
    EnumerableObservableLike,
    TA,
    TB
  >;
}
export const map: MaphRunnableObservable = mapObs;
export const mapT: Map<RunnableObservableLike> = { map };

interface MergeRunnableObservable {
  <T>(
    fst: RunnableObservableLike<T>,
    snd: RunnableObservableLike<T>,
    ...tail: readonly RunnableObservableLike<T>[]
  ): ObservableLike<T>;
  <T>(
    fst: EnumerableObservableLike<T>,
    snd: EnumerableObservableLike<T>,
    ...tail: readonly EnumerableObservableLike<T>[]
  ): ObservableLike<T>;
}
export const merge: MergeRunnableObservable = mergeObs;
export const mergeT: Concat<ObservableLike<unknown>> = {
  concat: merge,
};

interface PairwiseRunnableObservable {
  <T>(): ContainerOperator<RunnableObservableLike, T, readonly [T, T]>;
  <T>(): ContainerOperator<EnumerableObservableLike, T, readonly [T, T]>;
}
export const pairwise: PairwiseRunnableObservable = pairwiseObs;
export const pairwiseT: Pairwise<RunnableObservableLike> = { pairwise };

interface ReduceRunnableObservable {
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<RunnableObservableLike, T, TAcc>;
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<EnumerableObservableLike, T, TAcc>;
}
export const reduce: ReduceRunnableObservable = reduceObs;
export const reduceT: Reduce<RunnableObservableLike> = { reduce };

interface ScanRunnableObservable {
  <T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<RunnableObservableLike, T, TAcc>;
  <T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<EnumerableObservableLike, T, TAcc>;
}
export const scan: ScanRunnableObservable = scanObs;
export const scanT: Scan<RunnableObservableLike> = { scan };

interface SkipFirstnRunnableObservable {
  <T>(options?: { readonly count?: number }): ContainerOperator<
    RunnableObservableLike,
    T,
    T
  >;
  <T>(options?: { readonly count?: number }): ContainerOperator<
    EnumerableObservableLike,
    T,
    T
  >;
}
export const skipFirst: SkipFirstnRunnableObservable = skipFirstObs;
export const skipFirstT: SkipFirst<RunnableObservableLike> = { skipFirst };

interface TakeFirstRunnableObservable {
  <T>(options?: { readonly count?: number }): ContainerOperator<
    RunnableObservableLike,
    T,
    T
  >;
  <T>(options?: { readonly count?: number }): ContainerOperator<
    EnumerableObservableLike,
    T,
    T
  >;
}
export const takeFirst: TakeFirstRunnableObservable = takeFirstObs;
export const takeFirstT: TakeFirst<RunnableObservableLike> = { takeFirst };

interface TakeLastRunnableObservable {
  <T>(options?: { readonly count?: number }): ContainerOperator<
    RunnableObservableLike,
    T,
    T
  >;
  <T>(options?: { readonly count?: number }): ContainerOperator<
    EnumerableObservableLike,
    T,
    T
  >;
}
export const takeLast: TakeLastRunnableObservable = takeLastObs;
export const takeLastT: TakeLast<RunnableObservableLike> = { takeLast };

interface TakeUntilRunnableObservable {
  <T>(notifier: RunnableObservableLike | EnumerableObservableLike): Function1<
    | ContainerOf<RunnableObservableLike, T>
    | ContainerOf<EnumerableObservableLike, T>,
    ContainerOf<RunnableObservableLike, T>
  >;
}
export const takeUntil: TakeUntilRunnableObservable = takeUntilObs;

interface TakeWhileRunnableObservable {
  <T>(
    predicate: Predicate<T>,
    options?: {
      readonly inclusive?: boolean;
    },
  ): ContainerOperator<RunnableObservableLike, T, T>;
  <T>(
    predicate: Predicate<T>,
    options?: {
      readonly inclusive?: boolean;
    },
  ): ContainerOperator<EnumerableObservableLike, T, T>;
}
export const takeWhile: TakeWhileRunnableObservable = takeWhileObs;
export const takeWhileT: TakeWhile<RunnableObservableLike> = { takeWhile };

interface ThrowIfEmptyRunnableObservable {
  <T>(factory: Factory<unknown>): ContainerOperator<
    RunnableObservableLike,
    T,
    T
  >;
  <T>(factory: Factory<unknown>): ContainerOperator<
    EnumerableObservableLike,
    T,
    T
  >;
}
export const throwIfEmpty: ThrowIfEmptyRunnableObservable = throwIfEmptyObs;
export const throwIfEmptyT: ThrowIfEmpty<RunnableObservableLike> = {
  throwIfEmpty,
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
export const toFlowableT: ToFlowable<RunnableObservableLike> = { toFlowable };

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
  ): Function1<RunnableObservableLike<T>, ReadonlyArrayLike<T>> =>
  observable => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();
    const result: T[] = [];

    const subscription = pipe(
      observable,
      forEach(next => {
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
