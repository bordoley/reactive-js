import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../__internal__/mixins";
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
import ContainerLike__repeat from "../containers/__internal__/ContainerLike/ContainerLike.repeat";
import ReadonlyArrayLike__toRunnable from "../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable";
import StatefulContainerLike__buffer from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.buffer";
import StatefulContainerLike__decodeWithCharset from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.decodeWithCharset";
import StatefulContainerLike__distinctUntilChanged from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged";
import StatefulContainerLike__forEach from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach";
import StatefulContainerLike__keep from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep";
import StatefulContainerLike__map from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map";
import StatefulContainerLike__reduce from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.reduce";
import StatefulContainerLike__scan from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan";
import StatefulContainerLike__skipFirst from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.skipFirst";
import StatefulContainerLike__takeFirst from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeFirst";
import StatefulContainerLike__takeLast from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast";
import StatefulContainerLike__takeWhile from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile";
import StatefulContainerLike__throwIfEmpty from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.throwIfEmpty";
import {
  Lift,
  TReactive,
  reactive,
} from "../containers/__internal__/containers.internal";
import {
  Factory,
  Function1,
  Optional,
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
import { DisposableLike_exception, DisposableOrTeardown } from "../util";
import DisposableLike__addTo from "../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__bindTo from "../util/__internal__/DisposableLike/DisposableLike.bindTo";
import DisposableLike__dispose from "../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__isDisposed from "../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DelegateSinkLike__create from "./__internal__/DelegatingSinkLike/DelegatingSinkLike.create";
import DelegateSinkLike__mixin from "./__internal__/DelegatingSinkLike/DelegatingSinkLike.mixin";
import ReactiveContainerLike__onSink from "./__internal__/ReactiveContainerLike/ReactiveContainerLike.onSink";
import RunnableLike__create from "./__internal__/RunnableLike/RunnableLike.create";
import SinkLike__bufferMixin from "./__internal__/SinkLike/SinkLike.bufferMixin";
import SinkLike__catchErrorMixin from "./__internal__/SinkLike/SinkLike.catchErrorMixin";
import SinkLike__create from "./__internal__/SinkLike/SinkLike.create";
import SinkLike__decodeWithCharsetMixin from "./__internal__/SinkLike/SinkLike.decodeWithCharsetMixin";
import SinkLike__distinctUntilChangedMixin from "./__internal__/SinkLike/SinkLike.distinctUntilChangedMixin";
import SinkLike__everySatisfyMixin from "./__internal__/SinkLike/SinkLike.everySatisfyMixin";
import SinkLike__forEachMixin from "./__internal__/SinkLike/SinkLike.forEachMixin";
import SinkLike__keepMixin from "./__internal__/SinkLike/SinkLike.keepMixin";
import SinkLike__mapMixin from "./__internal__/SinkLike/SinkLike.mapMixin";
import SinkLike__pairwiseMixin from "./__internal__/SinkLike/SinkLike.pairwiseMixin";
import SinkLike__reduceMixin from "./__internal__/SinkLike/SinkLike.reduceMixin";
import SinkLike__scanMixin from "./__internal__/SinkLike/SinkLike.scanMixin";
import SinkLike__skipFirstMixin from "./__internal__/SinkLike/SinkLike.skipFirstMixin";
import SinkLike__someSatisfyMixin from "./__internal__/SinkLike/SinkLike.someSatisfyMixin";
import SinkLike__sourceFrom from "./__internal__/SinkLike/SinkLike.sourceFrom";
import SinkLike_takeFirstMixin from "./__internal__/SinkLike/SinkLike.takeFirstMixin";
import SinkLike__takeLastMixin from "./__internal__/SinkLike/SinkLike.takeLastMixin";
import SinkLike__takeWhileMixin from "./__internal__/SinkLike/SinkLike.takeWhileMixin";
import SinkLike__throwIfEmptyMixin from "./__internal__/SinkLike/SinkLike.throwIfEmptyMixin";
import {
  DelegateSinkLike,
  DelegatingSinkLike_delegate,
} from "./__internal__/rx.internal";

export const create = RunnableLike__create;

const lift: Lift<RunnableLike, TReactive>["lift"] = /*@__PURE__*/ (() => {
  class LiftedRunnable<TA, TB> implements RunnableLike<TB> {
    constructor(
      readonly src: RunnableLike<TA>,
      readonly operators: readonly Function1<SinkLike<any>, SinkLike<any>>[],
    ) {}

    [ReactiveContainerLike_sinkInto](sink: SinkLike<TB>) {
      pipeUnsafe(sink, ...this.operators, SinkLike__sourceFrom(this.src));
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
  const typedBufferSinkMixin = SinkLike__bufferMixin<
    RunnableLike,
    SinkLike<readonly T[]>,
    T
  >(ReadonlyArrayLike__toRunnable());

  return pipe(
    createInstanceFactory(typedBufferSinkMixin),
    StatefulContainerLike__buffer<RunnableLike, T, TReactive>(liftT),
  );
})();
export const bufferT: Buffer<RunnableLike> = { buffer };

export const catchError: CatchError<RunnableLike>["catchError"] =
  /*@__PURE__*/ (() => {
    const createCatchErrorObserver = (<T>() =>
      createInstanceFactory(
        SinkLike__catchErrorMixin<RunnableLike, SinkLike<T>, T>(),
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
) => pipe(runnables, ReadonlyArrayLike__toRunnable(), concatAll());
export const concatT: Concat<RunnableLike> = {
  concat,
};

export const concatAll: ConcatAll<RunnableLike>["concatAll"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedDelegatingSinkMixin = DelegateSinkLike__mixin<T>();

  return pipeLazy(
    createInstanceFactory(
      mix(
        include(typedDelegatingSinkMixin),
        function RunnableConcatAll(
          instance: Pick<SinkLike<RunnableLike<T>>, typeof SinkLike_notify>,
          delegate: SinkLike<T>,
        ): SinkLike<RunnableLike<T>> {
          init(typedDelegatingSinkMixin, instance, delegate);
          pipe(instance, DisposableLike__bindTo(delegate));

          return instance;
        },
        {},
        {
          [SinkLike_notify](this: DelegateSinkLike<T>, next: RunnableLike<T>) {
            const { [DelegatingSinkLike_delegate]: delegate } = this;
            pipe(
              DelegateSinkLike__create(delegate),
              DisposableLike__addTo<SinkLike<T>>(this),
              SinkLike__sourceFrom(next),
              DisposableLike__dispose(),
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
    const typedDecodeWithCharsetMixin = SinkLike__decodeWithCharsetMixin(
      ReadonlyArrayLike__toRunnable(),
    );

    return pipe(
      createInstanceFactory(typedDecodeWithCharsetMixin),
      StatefulContainerLike__decodeWithCharset(liftT),
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
      SinkLike__distinctUntilChangedMixin<T>();

    return pipe(
      createInstanceFactory(typedDistinctUntilChangedSinkMixin),
      StatefulContainerLike__distinctUntilChanged<RunnableLike, T, TReactive>(
        liftT,
      ),
    );
  })();
export const distinctUntilChangedT: DistinctUntilChanged<RunnableLike> = {
  distinctUntilChanged,
};

export const empty: Empty<RunnableLike>["empty"] = <T>() =>
  create<T>(sink => {
    pipe(sink, DisposableLike__dispose());
  });
export const emptyT: Empty<RunnableLike> = { empty };

export const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedEverySatisfySinkMixin = SinkLike__everySatisfyMixin<
      RunnableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArrayLike__toRunnable());

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(typedEverySatisfySinkMixin),
        partial(predicate),
        lift,
      );
  })();
export const everySatisfyT: EverySatisfy<RunnableLike> = { everySatisfy };

export const first =
  <T>(): Function1<RunnableLike<T>, Optional<T>> =>
  src => {
    let result: Optional<T> = none;

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
  const typedForEachSinkMixin = SinkLike__forEachMixin<T>();

  return pipe(
    createInstanceFactory(typedForEachSinkMixin),
    StatefulContainerLike__forEach<RunnableLike, T, TReactive>(liftT),
  );
})();
export const forEachT: ForEach<RunnableLike> = { forEach };

export const generate: Generate<RunnableLike>["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
) =>
  create((sink: SinkLike<T>) => {
    let acc = initialValue();
    while (!DisposableLike__isDisposed(sink)) {
      acc = generator(acc);
      sink[SinkLike_notify](acc);
    }
  });
export const generateT: Generate<RunnableLike> = {
  generate,
};

export const keep: Keep<RunnableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedKeepSinkMixin = SinkLike__keepMixin<T>();

  return pipe(
    createInstanceFactory(typedKeepSinkMixin),
    StatefulContainerLike__keep<RunnableLike, T, TReactive>(liftT),
  );
})();
export const keepT: Keep<RunnableLike> = { keep };

export const last =
  <T>(): Function1<RunnableLike<T>, Optional<T>> =>
  src => {
    let result: Optional<T> = none;

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
  const typedMapSinkMixin = SinkLike__mapMixin<TA, TB>();

  return pipe(
    createInstanceFactory(typedMapSinkMixin),
    StatefulContainerLike__map<RunnableLike, TA, TB, TReactive>(liftT),
  );
})();
export const mapT: Map<RunnableLike> = { map };

export const never: Never<RunnableLike>["never"] = () => create(ignore);
export const neverT: Never<RunnableLike> = {
  never: never,
};

export const onRun =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (runnable: RunnableLike<T>): RunnableLike<T> =>
    ReactiveContainerLike__onSink(create, runnable, f);

export const pairwise: Pairwise<RunnableLike>["pairwise"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedPairwiseSinkMixin = SinkLike__pairwiseMixin<T>();

  return pipe(createInstanceFactory(typedPairwiseSinkMixin), lift, returns);
})();
export const pairwiseT: Pairwise<RunnableLike> = { pairwise };

export const reduce: Reduce<RunnableLike>["reduce"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedReduceSinkMixin = SinkLike__reduceMixin<
    RunnableLike,
    SinkLike<TAcc>,
    T,
    TAcc
  >(ReadonlyArrayLike__toRunnable());

  return pipe(
    createInstanceFactory(typedReduceSinkMixin),
    StatefulContainerLike__reduce<RunnableLike, T, TAcc, TReactive>(liftT),
  );
})();
export const reduceT: Reduce<RunnableLike> = { reduce };

export const repeat = /*@__PURE__*/ (<T>() => {
  return ContainerLike__repeat<RunnableLike, T>((delegate, predicate) =>
    create(sink => {
      let count = 0;
      do {
        pipe(
          DelegateSinkLike__create(sink),
          DisposableLike__addTo(sink),
          SinkLike__sourceFrom(delegate),
          DisposableLike__dispose(),
        );
        count++;
      } while (!DisposableLike__isDisposed(sink) && predicate(count));
    }),
  );
})();
export const repeatT: Repeat<RunnableLike> = { repeat };

export const run =
  <T>() =>
  (runnable: RunnableLike<T>): void =>
    pipe(
      SinkLike__create(),
      SinkLike__sourceFrom(runnable),
      DisposableLike__dispose(),
      ({ [DisposableLike_exception]: error }) => {
        if (isSome(error)) {
          raise(error.cause);
        }
      },
    );

export const scan: Scan<RunnableLike>["scan"] = /*@__PURE__*/ (<T, TAcc>() => {
  const typedScanSinkMixin = SinkLike__scanMixin<T, TAcc>();

  return pipe(
    createInstanceFactory(typedScanSinkMixin),
    StatefulContainerLike__scan<RunnableLike, T, TAcc, TReactive>(liftT),
  );
})();
export const scanT: Scan<RunnableLike> = { scan };

export const skipFirst: SkipFirst<RunnableLike>["skipFirst"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedSkipFirstSinkMixin = SinkLike__skipFirstMixin<T>();

  return pipe(
    createInstanceFactory(typedSkipFirstSinkMixin),
    StatefulContainerLike__skipFirst<RunnableLike, T, TReactive>(liftT),
  );
})();
export const skipFirstT: SkipFirst<RunnableLike> = { skipFirst };

export const someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedSomeSatisfySinkMixin = SinkLike__someSatisfyMixin<
      RunnableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArrayLike__toRunnable());

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
  const typedTakeFirstSinkMixin = SinkLike_takeFirstMixin<T>();

  return pipe(
    createInstanceFactory(typedTakeFirstSinkMixin),
    StatefulContainerLike__takeFirst<RunnableLike, T, TReactive>({
      ...liftT,
    }),
  );
})();
export const takeFirstT: TakeFirst<RunnableLike> = { takeFirst };

export const takeLast: TakeLast<RunnableLike>["takeLast"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedTakeLastSinkMixin = SinkLike__takeLastMixin<
    RunnableLike<T>,
    SinkLike<T>,
    T
  >(ReadonlyArrayLike__toRunnable());

  return pipe(
    createInstanceFactory(typedTakeLastSinkMixin),
    StatefulContainerLike__takeLast<RunnableLike, T, TReactive>({
      ...liftT,
    }),
  );
})();
export const takeLastT: TakeLast<RunnableLike> = { takeLast };

export const takeWhile: TakeWhile<RunnableLike>["takeWhile"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedTakeWhileSinkMixin = SinkLike__takeWhileMixin<T>();

  return pipe(
    createInstanceFactory(typedTakeWhileSinkMixin),
    StatefulContainerLike__takeWhile<RunnableLike, T, TReactive>(liftT),
  );
})();
export const takeWhileT: TakeWhile<RunnableLike> = { takeWhile };

export const throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (<T>() => {
    const typedThrowIfEmptySinkMixin = SinkLike__throwIfEmptyMixin<T>();
    return pipe(
      createInstanceFactory(typedThrowIfEmptySinkMixin),
      StatefulContainerLike__throwIfEmpty<RunnableLike, T, TReactive>(liftT),
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
