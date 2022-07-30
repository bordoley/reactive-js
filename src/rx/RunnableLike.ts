import {
  Lift,
  TReactive,
  createDistinctUntilChangedOperator,
  createForEachOperator,
  createKeepOperator,
  createMapOperator,
  createScanOperator,
  createSkipFirstOperator,
  createTakeFirstOperator,
  createTakeLastOperator,
  createTakeWhileOperator,
  reactive,
} from "../__internal__/containers/StatefulContainerLikeInternal";
import {
  DisposableLike,
  bindTo,
  isDisposed,
} from "../__internal__/util/DisposableLikeInternal";
import {
  Object_init,
  PropertyTypeOf,
  createObjectFactory,
  init,
  mixWith,
} from "../__internal__/util/Object";
import {
  DelegatingSink_delegate,
  createDelegatingSink,
  createSink,
  delegatingSinkMixin,
  distinctUntilChangedSinkMixin,
  forEachSinkMixin,
  keepSinkMixin,
  mapSinkMixin,
  pairwiseSinkMixin,
  scanSinkMixin,
  skipFirstSinkMixin,
  takeFirstSinkMixin,
  takeLastSinkMixin,
  takeWhileSinkMixin,
} from "../__internal__/util/SinkLikeMixin";
import {
  Concat,
  ConcatAll,
  DistinctUntilChanged,
  ForEach,
  Keep,
  Map,
  Pairwise,
  Repeat,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ToReadonlyArray,
} from "../containers";
import { toRunnable } from "../containers/ReadonlyArrayLike";
import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  isSome,
  newInstance,
  pipe,
  pipeLazy,
  pipeUnsafe,
  raise,
  returns,
} from "../functions";
import {
  ReactiveContainerLike_sinkInto,
  RunnableLike,
  emptyRunnableT,
  createRunnable,
} from "../rx";
import { DisposableLike_error, SinkLike, SinkLike_notify } from "../util";
import { addTo, dispose } from "../util/DisposableLike";
import { sourceFrom } from "./ReactiveContainerLike";
import { createRepeatOperator } from "../__internal__/containers/ContainerLikeInternal";

const lift: Lift<RunnableLike, TReactive>["lift"] = /*@__PURE__*/ (() => {
  class LiftedRunnable<T> implements RunnableLike<T> {
    constructor(
      readonly src: RunnableLike<any>,
      readonly operators: readonly Function1<SinkLike<any>, SinkLike<any>>[],
    ) {}

    [ReactiveContainerLike_sinkInto](sink: SinkLike<T>) {
      pipe(
        pipeUnsafe(sink, ...this.operators) as SinkLike<T>,
        sourceFrom(this.src),
        dispose(),
      );
    }
  }

  return <TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>) =>
    (runnable: RunnableLike<TA>): RunnableLike<TB> => {
      const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;

      const allFunctions =
        runnable instanceof LiftedRunnable
          ? [operator, ...runnable.operators]
          : [operator];

      return newInstance(LiftedRunnable, src, allFunctions);
    };
})();

const liftT: Lift<RunnableLike, TReactive> = {
  lift,
  variance: reactive,
};

export const concat: Concat<RunnableLike>["concat"] = <T>(
  ...runnables: readonly RunnableLike<T>[]
) => pipe(runnables, toRunnable(), concatAll());

export const concatT: Concat<RunnableLike> = {
  concat,
};

export const concatAll: ConcatAll<RunnableLike>["concatAll"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedDelegatingSinkMixin = delegatingSinkMixin<T>();

  return pipeLazy(
    {
      [Object_init](
        this: PropertyTypeOf<[typeof typedDelegatingSinkMixin]> &
          DisposableLike,
        delegate: SinkLike<T>,
      ) {
        init(typedDelegatingSinkMixin, this, delegate);
        pipe(this, bindTo(delegate));
      },
      [SinkLike_notify](
        this: PropertyTypeOf<[typeof typedDelegatingSinkMixin]> &
          DisposableLike,
        next: RunnableLike<T>,
      ) {
        const { [DelegatingSink_delegate]: delegate } = this;
        pipe(
          delegate,
          createDelegatingSink,
          addTo<SinkLike<T>>(this),
          sourceFrom(next),
          dispose(),
        );
      },
    },
    mixWith(typedDelegatingSinkMixin),
    createObjectFactory<
      SinkLike<RunnableLike<T>>,
      PropertyTypeOf<[typeof typedDelegatingSinkMixin]> & DisposableLike,
      SinkLike<T>
    >(),
    lift,
  );
})();

export const concatAllT: ConcatAll<RunnableLike> = {
  concatAll,
};

export const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const typedDistinctUntilChangedSinkMixin =
      distinctUntilChangedSinkMixin<T>();

    return pipe(
      typedDistinctUntilChangedSinkMixin,
      createObjectFactory<
        SinkLike<T>,
        PropertyTypeOf<[typeof typedDistinctUntilChangedSinkMixin]>,
        SinkLike<T>,
        Equality<T>
      >(),
      createDistinctUntilChangedOperator<RunnableLike, T, TReactive>(liftT),
    );
  })();

export const distinctUntilChangedT: DistinctUntilChanged<RunnableLike> = {
  distinctUntilChanged,
};

export const forEach: ForEach<RunnableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedForEachSinkMixin = forEachSinkMixin<T>();

  return pipe(
    typedForEachSinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedForEachSinkMixin]>,
      SinkLike<T>,
      SideEffect1<T>
    >(),
    createForEachOperator<RunnableLike, T, TReactive>(liftT),
  );
})();

export const forEachT: ForEach<RunnableLike> = { forEach };

export const keep: Keep<RunnableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedKeepSinkMixin = keepSinkMixin<T>();

  return pipe(
    typedKeepSinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedKeepSinkMixin]>,
      SinkLike<T>,
      Predicate<T>
    >(),
    createKeepOperator<RunnableLike, T, TReactive>(liftT),
  );
})();

export const keepT: Keep<RunnableLike> = { keep };

export const map: Map<RunnableLike>["map"] = /*@__PURE__*/ (<TA, TB>() => {
  const typedMapSinkMixin = mapSinkMixin<TA, TB>();

  return pipe(
    typedMapSinkMixin,
    createObjectFactory<
      SinkLike<TA>,
      PropertyTypeOf<[typeof typedMapSinkMixin]>,
      SinkLike<TB>,
      Function1<TA, TB>
    >(),
    createMapOperator<RunnableLike, TA, TB, TReactive>(liftT),
  );
})();

export const mapT: Map<RunnableLike> = { map };

export const pairwise: Pairwise<RunnableLike>["pairwise"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedPairwiseSinkMixin = pairwiseSinkMixin<T>();

  return pipe(
    typedPairwiseSinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedPairwiseSinkMixin]>,
      SinkLike<readonly [T, T]>
    >(),
    lift,
    returns,
  );
})();

export const pairwiseT: Pairwise<RunnableLike> = { pairwise };

export const repeat = /*@__PURE__*/ (<T>() => {
  return createRepeatOperator<RunnableLike, T>((delegate, predicate) =>
    createRunnable(sink => {
      let count = 0;
      do {
        pipe(
          createDelegatingSink(sink),
          addTo(sink),
          sourceFrom(delegate),
          dispose(),
        );
        count++;
      } while (!isDisposed(sink) && predicate(count));
    }),
  );
})();

export const repeatT: Repeat<RunnableLike> = { repeat };

export const run =
  <T>() =>
  (runnable: RunnableLike<T>): void =>
    pipe(
      createSink(),
      sourceFrom(runnable),
      dispose(),
      ({ [DisposableLike_error]: error }) => {
        if (isSome(error)) {
          raise(error.cause);
        }
      },
    );

export const scan: Scan<RunnableLike>["scan"] = /*@__PURE__*/ (<T, TAcc>() => {
  const typedScanSinkMixin = scanSinkMixin<T, TAcc>();

  return pipe(
    typedScanSinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedScanSinkMixin]>,
      SinkLike<TAcc>,
      Reducer<T, TAcc>,
      Factory<TAcc>
    >(),
    createScanOperator<RunnableLike, T, TAcc, TReactive>(liftT),
  );
})();

export const scanT: Scan<RunnableLike> = { scan };

export const skipFirst: SkipFirst<RunnableLike>["skipFirst"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedSkipFirstSinkMixin = skipFirstSinkMixin<T>();

  return pipe(
    typedSkipFirstSinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedSkipFirstSinkMixin]>,
      SinkLike<T>,
      number
    >(),
    createSkipFirstOperator<RunnableLike, T, TReactive>(liftT),
  );
})();

export const skipFirstT: SkipFirst<RunnableLike> = { skipFirst };

export const takeFirst: TakeFirst<RunnableLike>["takeFirst"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedTakeFirstSinkMixin = takeFirstSinkMixin<T>();

  return pipe(
    typedTakeFirstSinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedTakeFirstSinkMixin]>,
      SinkLike<T>,
      number
    >(),
    createTakeFirstOperator<RunnableLike, T, TReactive>({
      ...liftT,
      ...emptyRunnableT,
    }),
  );
})();

export const takeFirstT: TakeFirst<RunnableLike> = { takeFirst };

export const takeLast: TakeLast<RunnableLike>["takeLast"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedTakeLastSinkMixin = takeLastSinkMixin<
    RunnableLike<T>,
    SinkLike<T>,
    T
  >(toRunnable());

  return pipe(
    typedTakeLastSinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedTakeLastSinkMixin]>,
      SinkLike<T>,
      number
    >(),
    createTakeLastOperator<RunnableLike, T, TReactive>({
      ...liftT,
      ...emptyRunnableT,
    }),
  );
})();

export const takeLastT: TakeLast<RunnableLike> = { takeLast };

export const takeWhile: TakeWhile<RunnableLike>["takeWhile"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedTakeWhileSinkMixin = takeWhileSinkMixin<T>();

  return pipe(
    typedTakeWhileSinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedTakeWhileSinkMixin]>,
      SinkLike<T>,
      Predicate<T>,
      boolean
    >(),
    createTakeWhileOperator<RunnableLike, T, TReactive>(liftT),
  );
})();

export const takeWhileT: TakeWhile<RunnableLike> = { takeWhile };

export const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"] =

    <T>() =>
    (runnable: RunnableLike<T>) => {
      const result: T[] = [];
      pipe(
        runnable,
        forEach<T>(x => result.push(x)),
        run(),
      );
      return result;
    };

export const toReadonlyArrayT: ToReadonlyArray<RunnableLike> = {
  toReadonlyArray,
};
