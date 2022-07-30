import {
  Lift,
  TReactive,
  createSkipFirstOperator,
  createTakeFirstOperator,
  createTakeWhileOperator,
  reactive,
} from "../__internal__/containers/StatefulContainerLikeInternal";
import {
  DisposableLike,
  bindTo,
} from "../__internal__/util/DisposableLikeInternal";
import {
  PropertyTypeOf,
  createObjectFactory,
  mixWith,
} from "../__internal__/util/Object";
import {
  DelegatingSink_delegate,
  createDelegatingSink,
  createSink,
  delegatingSinkMixin,
  distinctUntilChangedSinkMixin,
  keepSinkMixin,
  mapSinkMixin,
  onNotifySinkMixin,
  scanSinkMixin,
  skipFirstSinkMixin,
  takeFirstSinkMixin,
  takeLastSinkMixin,
  takeWhileSinkMixin,
} from "../__internal__/util/SinkLikeMixin";
import {
  Concat,
  ConcatAll,
  ContainerOperator,
  DistinctUntilChanged,
  Keep,
  Map,
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
  getLength,
  isSome,
  newInstance,
  pipe,
  pipeLazy,
  pipeUnsafe,
  raise,
  strictEquality,
} from "../functions";
import {
  ReactiveContainerLike_sinkInto,
  RunnableLike,
  createRunnable,
  emptyRunnable,
  emptyRunnableT,
} from "../rx";
import { DisposableLike_error, SinkLike, SinkLike_notify } from "../util";
import { addTo, dispose, isDisposed } from "../util/DisposableLike";
import { sourceFrom } from "./ReactiveContainerLike";

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
) =>
  createRunnable((sink: SinkLike<T>) => {
    const runnablesLength = getLength(runnables);
    for (let i = 0; i < runnablesLength && !isDisposed(sink); i++) {
      pipe(
        createDelegatingSink(sink),
        addTo(sink),
        sourceFrom(runnables[i]),
        dispose(),
      );
    }
  });

export const concatT: Concat<RunnableLike> = {
  concat,
};

export const concatAll: ConcatAll<RunnableLike>["concatAll"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedDelegatingSinkMixin = delegatingSinkMixin<T>();

  return pipeLazy(
    {
      [SinkLike_notify](
        this: PropertyTypeOf<[typeof typedDelegatingSinkMixin]> &
          DisposableLike,
        next: RunnableLike<T>,
      ) {
        const { [DelegatingSink_delegate]: delegate } = this;
        pipe(
          createDelegatingSink(delegate),
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
    mixin =>
      lift<RunnableLike, T>(delegate =>
        pipe(mixin(delegate), bindTo(delegate)),
      ),
  );
})();

export const concatAllT: ConcatAll<RunnableLike> = {
  concatAll,
};

export const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const typedDistinctUntilChangedSinkMixin =
      distinctUntilChangedSinkMixin<T>();

    const createInstance = pipe(
      typedDistinctUntilChangedSinkMixin,
      createObjectFactory<
        SinkLike<T>,
        PropertyTypeOf<[typeof typedDistinctUntilChangedSinkMixin]>,
        SinkLike<T>,
        Equality<T>
      >(),
    );

    return (options?: { readonly equality?: Equality<T> }) => {
      const { equality = strictEquality } = options ?? {};
      const operator = (delegate: SinkLike<T>): SinkLike<T> =>
        createInstance(delegate, equality);
      return lift(operator);
    };
  })();

export const distinctUntilChangedT: DistinctUntilChanged<RunnableLike> = {
  distinctUntilChanged,
};

export const keep: Keep<RunnableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedKeepSinkMixin = keepSinkMixin<T>();

  const createInstance = pipe(
    typedKeepSinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedKeepSinkMixin]>,
      SinkLike<T>,
      Predicate<T>
    >(),
  );

  return (mapper: Predicate<T>) => {
    const operator = (delegate: SinkLike<T>): SinkLike<T> =>
      createInstance(delegate, mapper);
    return lift(operator);
  };
})();

export const keepT: Keep<RunnableLike> = { keep };

export const map: Map<RunnableLike>["map"] = /*@__PURE__*/ (<TA, TB>() => {
  const typedMapSinkMixin = mapSinkMixin<TA, TB>();

  const createInstance = pipe(
    typedMapSinkMixin,
    createObjectFactory<
      SinkLike<TA>,
      PropertyTypeOf<[typeof typedMapSinkMixin]>,
      SinkLike<TB>,
      Function1<TA, TB>
    >(),
  );

  return (mapper: Function1<TA, TB>) => {
    const operator = (delegate: SinkLike<TB>): SinkLike<TA> =>
      createInstance(delegate, mapper);
    return lift(operator);
  };
})();

export const mapT: Map<RunnableLike> = { map };

export const onNotify: <T>(
  onNotify: SideEffect1<T>,
) => ContainerOperator<RunnableLike, T, T> = /*@__PURE__*/ (<T>() => {
  const typedOnNotifySinkMixin = onNotifySinkMixin<T>();

  const createInstance = pipe(
    typedOnNotifySinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedOnNotifySinkMixin]>,
      SinkLike<T>,
      SideEffect1<T>
    >(),
  );

  return (onNotify: SideEffect1<T>) => {
    const operator = (delegate: SinkLike<T>): SinkLike<T> =>
      createInstance(delegate, onNotify);
    return lift(operator);
  };
})();

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

  const createInstance = pipe(
    typedScanSinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedScanSinkMixin]>,
      SinkLike<TAcc>,
      Reducer<T, TAcc>,
      Factory<TAcc>
    >(),
  );

  return (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => {
    const operator = (delegate: SinkLike<TAcc>): SinkLike<T> =>
      createInstance(delegate, reducer, initialValue);
    return lift(operator);
  };
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

  const createSink = pipe(
    typedTakeLastSinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedTakeLastSinkMixin]>,
      SinkLike<T>,
      number
    >(),
  );

  return (
    options: { readonly count?: number } = {},
  ): ContainerOperator<RunnableLike, T, T> => {
    const { count = 1 } = options;

    const operator = lift((delegate: SinkLike<T>) =>
      createSink(delegate, count),
    );

    return (source: RunnableLike<T>) =>
      count > 0 ? pipe(source, operator) : emptyRunnable();
  };
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
        onNotify<T>(x => result.push(x)),
        run(),
      );
      return result;
    };

export const toReadonlyArrayT: ToReadonlyArray<RunnableLike> = {
  toReadonlyArray,
};
