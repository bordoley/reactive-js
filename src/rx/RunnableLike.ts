import { createRepeatOperator } from "../__internal__/containers/__internal__ContainerLike";
import {
  Lift,
  TReactive,
  createBufferOperator,
  createDecodeWithCharsetOperator,
  createDistinctUntilChangedOperator,
  createForEachOperator,
  createKeepOperator,
  createMapOperator,
  createReduceOperator,
  createScanOperator,
  createSkipFirstOperator,
  createTakeFirstOperator,
  createTakeLastOperator,
  createTakeWhileOperator,
  createThrowIfEmptyOperator,
  reactive,
} from "../__internal__/containers/__internal__StatefulContainerLike";
import { createOnSink } from "../__internal__/rx/__internal__ReactiveContainerLike";
import { create as createRunnable } from "../__internal__/rx/__internal__RunnableLike.create";
import {
  DelegateSinkLike,
  DelegatingSink_delegate,
  bufferSinkMixin,
  catchErrorSinkMixin,
  createDelegatingSink,
  createSink,
  decodeWithCharsetSinkMixin,
  delegatingSinkMixin,
  distinctUntilChangedSinkMixin,
  everySatisfySinkMixin,
  forEachSinkMixin,
  keepSinkMixin,
  mapSinkMixin,
  pairwiseSinkMixin,
  reduceSinkMixin,
  scanSinkMixin,
  skipFirstSinkMixin,
  someSatisfySinkMixin,
  takeFirstSinkMixin,
  takeLastSinkMixin,
  takeWhileSinkMixin,
  throwIfEmptySinkMixin,
} from "../__internal__/rx/__internal__Sinks";
import {
  createInstanceFactory,
  include,
  init,
  mixin,
} from "../__internal__/util/__internal__Objects";
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
  Repeat,
  Scan,
  SkipFirst,
  SomeSatisfy,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToReadonlyArray,
} from "../containers";
import { toRunnable as arrayToRunnable } from "../containers/ReadonlyArrayLike";
import {
  Factory,
  Function1,
  Option,
  Predicate,
  Updater,
  identity,
  ignore,
  isSome,
  newInstance,
  none,
  partial,
  pipe,
  pipeLazy,
  pipeUnsafe,
  raise,
  returns,
} from "../functions";
import {
  ReactiveContainerLike_sinkInto,
  RunnableLike,
  SinkLike,
  SinkLike_notify,
  ToRunnable,
} from "../rx";
import { sourceFrom } from "../rx/SinkLike";
import { DisposableLike_exception, DisposableOrTeardown } from "../util";
import { addTo, bindTo, dispose, isDisposed } from "../util/DisposableLike";

export const create = createRunnable;

const lift: Lift<RunnableLike, TReactive>["lift"] = /*@__PURE__*/ (() => {
  class LiftedRunnable<TA, TB> implements RunnableLike<TB> {
    constructor(
      readonly src: RunnableLike<TA>,
      readonly operators: readonly Function1<SinkLike<any>, SinkLike<any>>[],
    ) {}

    [ReactiveContainerLike_sinkInto](sink: SinkLike<TB>) {
      pipeUnsafe(sink, ...this.operators, sourceFrom(this.src));
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

export const buffer: Buffer<RunnableLike>["buffer"] = /*@__PURE__*/ (<T>() => {
  const typedBufferSinkMixin = bufferSinkMixin<
    RunnableLike,
    SinkLike<readonly T[]>,
    T
  >(arrayToRunnable());

  return pipe(
    createInstanceFactory(typedBufferSinkMixin),
    createBufferOperator<RunnableLike, T, TReactive>(liftT),
  );
})();
export const bufferT: Buffer<RunnableLike> = { buffer };

export const catchError: CatchError<RunnableLike>["catchError"] =
  /*@__PURE__*/ (() => {
    const createCatchErrorObserver = (<T>() =>
      createInstanceFactory(
        catchErrorSinkMixin<RunnableLike, SinkLike<T>, T>(),
      ))();

    return (errorHandler =>
      pipe(
        createCatchErrorObserver,
        partial(errorHandler),
        lift,
      )) as CatchError<RunnableLike>["catchError"];
  })();

export const catchErrorT: CatchError<RunnableLike> = { catchError };

export const concat: Concat<RunnableLike>["concat"] = <T>(
  ...runnables: readonly RunnableLike<T>[]
) => pipe(runnables, arrayToRunnable(), concatAll());
export const concatT: Concat<RunnableLike> = {
  concat,
};

export const concatAll: ConcatAll<RunnableLike>["concatAll"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedDelegatingSinkMixin = delegatingSinkMixin<T>();

  return pipeLazy(
    createInstanceFactory(
      mixin(
        include(typedDelegatingSinkMixin),
        function RunnableConcatAll(
          instance: Pick<SinkLike<RunnableLike<T>>, typeof SinkLike_notify>,
          delegate: SinkLike<T>,
        ): SinkLike<RunnableLike<T>> {
          init(typedDelegatingSinkMixin, instance, delegate);
          pipe(instance, bindTo(delegate));

          return instance;
        },
        {},
        {
          [SinkLike_notify](this: DelegateSinkLike<T>, next: RunnableLike<T>) {
            const { [DelegatingSink_delegate]: delegate } = this;
            pipe(
              createDelegatingSink(delegate),
              addTo<SinkLike<T>>(this),
              sourceFrom(next),
              dispose(),
            );
          },
        },
      ),
    ),
    lift,
  );
})();
export const concatAllT: ConcatAll<RunnableLike> = {
  concatAll,
};

export const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"] =
  /*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = decodeWithCharsetSinkMixin(
      arrayToRunnable(),
    );

    return pipe(
      createInstanceFactory(typedDecodeWithCharsetMixin),
      createDecodeWithCharsetOperator(liftT),
    );
  })();
export const decodeWithCharsetT: DecodeWithCharset<RunnableLike> = {
  decodeWithCharset,
};

export const defer: Defer<RunnableLike>["defer"] = f =>
  create(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
  });
export const deferT: Defer<RunnableLike> = { defer };

export const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const typedDistinctUntilChangedSinkMixin =
      distinctUntilChangedSinkMixin<T>();

    return pipe(
      createInstanceFactory(typedDistinctUntilChangedSinkMixin),
      createDistinctUntilChangedOperator<RunnableLike, T, TReactive>(liftT),
    );
  })();
export const distinctUntilChangedT: DistinctUntilChanged<RunnableLike> = {
  distinctUntilChanged,
};

export const empty: Empty<RunnableLike>["empty"] = <T>() =>
  create<T>(sink => {
    pipe(sink, dispose());
  });
export const emptyT: Empty<RunnableLike> = { empty };

export const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedEverySatisfySinkMixin = everySatisfySinkMixin<
      RunnableLike<boolean>,
      SinkLike<boolean>,
      T
    >(arrayToRunnable());

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(typedEverySatisfySinkMixin),
        partial(predicate),
        lift,
      );
  })();
export const everySatisfyT: EverySatisfy<RunnableLike> = { everySatisfy };

export const first =
  <T>(): Function1<RunnableLike<T>, Option<T>> =>
  src => {
    let result: Option<T> = none;

    pipe(
      src,
      takeFirst(),
      forEach(next => {
        result = next;
      }),
      run(),
    );
    return result;
  };

export const forEach: ForEach<RunnableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedForEachSinkMixin = forEachSinkMixin<T>();

  return pipe(
    createInstanceFactory(typedForEachSinkMixin),
    createForEachOperator<RunnableLike, T, TReactive>(liftT),
  );
})();
export const forEachT: ForEach<RunnableLike> = { forEach };

export const generate: Generate<RunnableLike>["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
) =>
  create((sink: SinkLike<T>) => {
    let acc = initialValue();
    while (!isDisposed(sink)) {
      acc = generator(acc);
      sink[SinkLike_notify](acc);
    }
  });
export const generateT: Generate<RunnableLike> = {
  generate,
};

export const keep: Keep<RunnableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedKeepSinkMixin = keepSinkMixin<T>();

  return pipe(
    createInstanceFactory(typedKeepSinkMixin),
    createKeepOperator<RunnableLike, T, TReactive>(liftT),
  );
})();
export const keepT: Keep<RunnableLike> = { keep };

export const last =
  <T>(): Function1<RunnableLike<T>, Option<T>> =>
  src => {
    let result: Option<T> = none;

    pipe(
      src,
      forEach(next => {
        result = next;
      }),
      run(),
    );
    return result;
  };

export const map: Map<RunnableLike>["map"] = /*@__PURE__*/ (<TA, TB>() => {
  const typedMapSinkMixin = mapSinkMixin<TA, TB>();

  return pipe(
    createInstanceFactory(typedMapSinkMixin),
    createMapOperator<RunnableLike, TA, TB, TReactive>(liftT),
  );
})();
export const mapT: Map<RunnableLike> = { map };

export const never: Never<RunnableLike>["never"] = () => create(ignore);
export const neverT: Never<RunnableLike> = {
  never: never,
};

export const onRun =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (runnable: RunnableLike<T>): RunnableLike<T> => {
    return createOnSink(create, runnable, f);
  };

export const pairwise: Pairwise<RunnableLike>["pairwise"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedPairwiseSinkMixin = pairwiseSinkMixin<T>();

  return pipe(createInstanceFactory(typedPairwiseSinkMixin), lift, returns);
})();
export const pairwiseT: Pairwise<RunnableLike> = { pairwise };

export const reduce: Reduce<RunnableLike>["reduce"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedReduceSinkMixin = reduceSinkMixin<
    RunnableLike,
    SinkLike<TAcc>,
    T,
    TAcc
  >(arrayToRunnable());

  return pipe(
    createInstanceFactory(typedReduceSinkMixin),
    createReduceOperator<RunnableLike, T, TAcc, TReactive>(liftT),
  );
})();
export const reduceT: Reduce<RunnableLike> = { reduce };

export const repeat = /*@__PURE__*/ (<T>() => {
  return createRepeatOperator<RunnableLike, T>((delegate, predicate) =>
    create(sink => {
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
      ({ [DisposableLike_exception]: error }) => {
        if (isSome(error)) {
          raise(error.cause);
        }
      },
    );

export const scan: Scan<RunnableLike>["scan"] = /*@__PURE__*/ (<T, TAcc>() => {
  const typedScanSinkMixin = scanSinkMixin<T, TAcc>();

  return pipe(
    createInstanceFactory(typedScanSinkMixin),
    createScanOperator<RunnableLike, T, TAcc, TReactive>(liftT),
  );
})();
export const scanT: Scan<RunnableLike> = { scan };

export const skipFirst: SkipFirst<RunnableLike>["skipFirst"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedSkipFirstSinkMixin = skipFirstSinkMixin<T>();

  return pipe(
    createInstanceFactory(typedSkipFirstSinkMixin),
    createSkipFirstOperator<RunnableLike, T, TReactive>(liftT),
  );
})();
export const skipFirstT: SkipFirst<RunnableLike> = { skipFirst };

export const someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedSomeSatisfySinkMixin = someSatisfySinkMixin<
      RunnableLike<boolean>,
      SinkLike<boolean>,
      T
    >(arrayToRunnable());

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(typedSomeSatisfySinkMixin),
        partial(predicate),
        lift,
      );
  })();
export const someSatisfyT: SomeSatisfy<RunnableLike> = { someSatisfy };

export const takeFirst: TakeFirst<RunnableLike>["takeFirst"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedTakeFirstSinkMixin = takeFirstSinkMixin<T>();

  return pipe(
    createInstanceFactory(typedTakeFirstSinkMixin),
    createTakeFirstOperator<RunnableLike, T, TReactive>({
      ...liftT,
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
  >(arrayToRunnable());

  return pipe(
    createInstanceFactory(typedTakeLastSinkMixin),
    createTakeLastOperator<RunnableLike, T, TReactive>({
      ...liftT,
    }),
  );
})();
export const takeLastT: TakeLast<RunnableLike> = { takeLast };

export const takeWhile: TakeWhile<RunnableLike>["takeWhile"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedTakeWhileSinkMixin = takeWhileSinkMixin<T>();

  return pipe(
    createInstanceFactory(typedTakeWhileSinkMixin),
    createTakeWhileOperator<RunnableLike, T, TReactive>(liftT),
  );
})();
export const takeWhileT: TakeWhile<RunnableLike> = { takeWhile };

export const throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (<T>() => {
    const typedThrowIfEmptySinkMixin = throwIfEmptySinkMixin<T>();
    return pipe(
      createInstanceFactory(typedThrowIfEmptySinkMixin),
      createThrowIfEmptyOperator<RunnableLike, T, TReactive>(liftT),
    );
  })();
export const throwIfEmptyT: ThrowIfEmpty<RunnableLike> = {
  throwIfEmpty,
};

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

export const toRunnable: ToRunnable<RunnableLike>["toRunnable"] =
  returns(identity);
export const toRunnableT: ToRunnable<RunnableLike> = {
  toRunnable,
};
