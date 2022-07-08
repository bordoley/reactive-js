import { getDelegate } from "./__internal__.delegating";
import { MAX_SAFE_INTEGER } from "./__internal__.env";
import { decorateMap } from "./__internal__.functions";
import {
  TReactive,
  createDistinctUntilChangedOperator,
  createKeepOperator,
  createMapOperator,
  createOnNotifyOperator,
  createPairwiseOperator,
  createScanOperator,
  createSkipFirstOperator,
  createTakeFirstOperator,
  createTakeWhileOperator,
  createThrowIfEmptyOperator,
} from "./__internal__.liftable";
import {
  createCatchErrorOperator,
  createDecodeWithCharsetOperator,
  createEverySatisfyOperator,
  createNever,
  createOnSink,
  createReduceOperator,
  createSomeSatisfyOperator,
  createTakeLastOperator,
  createUsing,
  decorateWithCatchErrorNotify,
  decorateWithDecodeWithCharsetNotify,
  decorateWithDistinctUntilChangedNotify,
  decorateWithEverySatisfyNotify,
  decorateWithKeepNotify,
  decorateWithMapNotify,
  decorateWithOnNotifyNotify,
  decorateWithPairwiseNotify,
  decorateWithReduceNotify,
  decorateWithScanNotify,
  decorateWithSkipFirstNotify,
  decorateWithSomeSatisfyNotify,
  decorateWithTakeFirstNotify,
  decorateWithTakeLastNotify,
  decorateWithTakeWhileNotify,
  decorateWithThrowIfEmptyNotify,
} from "./__internal__.reactiveContainer";
import { empty as emptyArray } from "./__internal__.readonlyArray";
import {
  Buffer,
  Concat,
  Container,
  ContainerLike,
  ContainerOf,
  DistinctUntilChanged,
  EverySatisfy,
  Generate,
  Keep,
  Map,
  Pairwise,
  Reduce,
  Repeat,
  Scan,
  SkipFirst,
  SomeSatisfy,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ToArray,
  fromValue,
} from "./container";
import { addTo, dispose, isDisposed, onComplete } from "./disposable";
import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  Updater,
  alwaysTrue,
  compose,
  getLength,
  identity,
  isEmpty,
  max,
  newInstanceWith,
  pipe,
} from "./functions";
import {
  CatchError,
  DecodeWithCharset,
  ThrowIfEmpty,
  Using,
} from "./liftableContainer";
import { Option, getOrDefault, isNone, none } from "./option";
import {
  Never,
  ReactiveContainerLike,
  sinkInto,
  sourceFrom,
} from "./reactiveContainer";
import { ReactiveSinkLike } from "./reactiveSink";
import { createRunnable, createT } from "./runnable/createRunnable";
import { first } from "./runnable/first";
import { fromArrayT } from "./runnable/fromArray";
import { lift, liftT } from "./runnable/lift";
import {
  AbstractDelegatingRunnableSink,
  createDelegatingRunnableSink,
  decorateNotifyWithAssertions,
} from "./runnable/runnableSink";

export interface RunnableLike<T> extends ReactiveContainerLike {
  readonly T: unknown;
  readonly TContainerOf: RunnableLike<this["T"]>;
  readonly TLiftableContainerState: ReactiveSinkLike<this["T"]>;

  sinkInto(this: RunnableLike<T>, sink: ReactiveSinkLike<T>): void;
}

export type RunnableOperator<TA, TB> = Function1<
  RunnableLike<TA>,
  RunnableLike<TB>
>;

export interface ToRunnable<C extends ContainerLike> extends Container<C> {
  toRunnable<T>(): Function1<ContainerOf<C, T>, RunnableLike<T>>;
}

export { concatAll, concatAllT } from "./runnable/concat";
export { createRunnable, createT } from "./runnable/createRunnable";
export { first } from "./runnable/first";
export { forEach } from "./runnable/forEach";
export { fromArray, fromArrayT } from "./runnable/fromArray";
export { last } from "./runnable/last";

export const buffer: Buffer<RunnableLike<unknown>>["buffer"] =
  /*@__PURE__*/ (() => {
    class BufferSink<T> extends AbstractDelegatingRunnableSink<
      T,
      readonly T[]
    > {
      buffer: T[] = [];
      constructor(
        delegate: ReactiveSinkLike<readonly T[]>,
        readonly maxBufferSize: number,
      ) {
        super(delegate);
      }

      notify(next: T) {
        const { buffer, maxBufferSize } = this;

        buffer.push(next);

        if (getLength(buffer) === maxBufferSize) {
          const buffer = this.buffer;
          this.buffer = [];

          getDelegate(this).notify(buffer);
        }
      }
    }

    return <T>(
      options: {
        readonly maxBufferSize?: number;
      } = {},
    ): RunnableOperator<T, readonly T[]> => {
      const maxBufferSize = max(options.maxBufferSize ?? MAX_SAFE_INTEGER, 1);

      return lift((delegate: ReactiveSinkLike<readonly T[]>) =>
        pipe(
          BufferSink,
          newInstanceWith(delegate, maxBufferSize),
          addTo(delegate),
          onComplete(function onDispose(this: BufferSink<T>) {
            const { buffer } = this;
            this.buffer = [];

            if (isEmpty(buffer)) {
              pipe(this, getDelegate, dispose());
            } else {
              pipe(buffer, fromValue(fromArrayT), sinkInto(getDelegate(this)));
            }
          }),
        ),
      );
    };
  })();

export const bufferT: Buffer<RunnableLike<unknown>> = {
  buffer,
};

export const catchError: CatchError<RunnableLike<unknown>>["catchError"] =
  /*@__PURE__*/ decorateMap(
    class CatchErrorSink<T> extends AbstractDelegatingRunnableSink<T, T> {},
    decorateWithCatchErrorNotify(),
    decorateNotifyWithAssertions,
    createCatchErrorOperator(liftT),
  );

export const catchErrorT: CatchError<RunnableLike<unknown>> = {
  catchError,
};

export const concat: Concat<RunnableLike<unknown>>["concat"] = <T>(
  ...runnables: readonly RunnableLike<T>[]
) =>
  createRunnable((sink: ReactiveSinkLike<T>) => {
    const runnablesLength = getLength(runnables);
    for (let i = 0; i < runnablesLength && !isDisposed(sink); i++) {
      pipe(
        createDelegatingRunnableSink(sink),
        addTo(sink),
        sourceFrom(runnables[i]),
        dispose(),
      );
    }
  });

export const concatT: Concat<RunnableLike<unknown>> = {
  concat,
};

export const decodeWithCharset: DecodeWithCharset<
  RunnableLike<unknown>
>["decodeWithCharset"] = /*@__PURE__*/ decorateMap(
  class DecodeWithCharsetSink extends AbstractDelegatingRunnableSink<
    ArrayBuffer,
    string
  > {
    constructor(
      delegate: ReactiveSinkLike<string>,
      readonly textDecoder: TextDecoder,
    ) {
      super(delegate);
    }
  },
  decorateWithDecodeWithCharsetNotify(),
  decorateNotifyWithAssertions,
  createDecodeWithCharsetOperator({
    ...liftT,
    ...fromArrayT,
  }),
);

export const decodeWithCharsetT: DecodeWithCharset<RunnableLike<unknown>> = {
  decodeWithCharset,
};

export const distinctUntilChanged: DistinctUntilChanged<
  RunnableLike<unknown>
>["distinctUntilChanged"] = /*@__PURE__*/ (() => {
  class DistinctUntilChangedSink<T> extends AbstractDelegatingRunnableSink<
    T,
    T
  > {
    prev: Option<T> = none;
    hasValue = false;

    constructor(delegate: ReactiveSinkLike<T>, readonly equality: Equality<T>) {
      super(delegate);
    }
  }

  decorateWithDistinctUntilChangedNotify<RunnableLike<unknown>>(
    DistinctUntilChangedSink,
  );
  decorateNotifyWithAssertions(DistinctUntilChangedSink);
  return createDistinctUntilChangedOperator(liftT, DistinctUntilChangedSink);
})();

export const distinctUntilChangedT: DistinctUntilChanged<
  RunnableLike<unknown>
> = {
  distinctUntilChanged,
};

export const everySatisfy: EverySatisfy<RunnableLike<unknown>>["everySatisfy"] =
  /*@__PURE__*/ decorateMap(
    class EverySatisfySink<T> extends AbstractDelegatingRunnableSink<
      T,
      boolean
    > {
      constructor(
        delegate: ReactiveSinkLike<boolean>,
        readonly predicate: Predicate<T>,
      ) {
        super(delegate);
      }
    },
    decorateWithEverySatisfyNotify<RunnableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createEverySatisfyOperator({ ...fromArrayT, ...liftT }),
  );

export const everySatisfyT: EverySatisfy<RunnableLike<unknown>> = {
  everySatisfy,
};

export const generate: Generate<RunnableLike<unknown>>["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
) => {
  const run = (sink: ReactiveSinkLike<T>) => {
    let acc = initialValue();
    while (!isDisposed(sink)) {
      acc = generator(acc);
      sink.notify(acc);
    }
  };
  return createRunnable(run);
};

export const generateT: Generate<RunnableLike<unknown>> = {
  generate,
};

export const keep: Keep<RunnableLike<unknown>>["keep"] = /*@__PURE__*/ (() => {
  class KeepSink<T> extends AbstractDelegatingRunnableSink<T, T> {
    constructor(
      delegate: ReactiveSinkLike<T>,
      readonly predicate: Predicate<T>,
    ) {
      super(delegate);
    }
  }
  decorateWithKeepNotify<RunnableLike<unknown>>(KeepSink);
  decorateNotifyWithAssertions(KeepSink);
  return createKeepOperator(liftT, KeepSink);
})();

export const keepT: Keep<RunnableLike<unknown>> = {
  keep,
};

export const map: Map<RunnableLike<unknown>>["map"] = /*@__PURE__*/ (() => {
  class MapSink<TA, TB> extends AbstractDelegatingRunnableSink<TA, TB> {
    constructor(
      delegate: ReactiveSinkLike<TB>,
      readonly mapper: Function1<TA, TB>,
    ) {
      super(delegate);
    }
  }
  decorateWithMapNotify<RunnableLike<unknown>>(MapSink);
  decorateNotifyWithAssertions(MapSink);
  return createMapOperator<RunnableLike<unknown>, TReactive>(liftT, MapSink);
})();

export const mapT: Map<RunnableLike<unknown>> = {
  map,
};

export const never: Never<RunnableLike<unknown>>["never"] =
  /*@__PURE__*/ createNever(createT);

export const neverT: Never<RunnableLike<unknown>> = {
  never,
};

/**
 * Returns an `RunnableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export const onNotify: <T>(onNotify: SideEffect1<T>) => RunnableOperator<T, T> =
  /*@__PURE__*/ (() => {
    class OnNotifySink<T> extends AbstractDelegatingRunnableSink<T, T> {
      constructor(
        delegate: ReactiveSinkLike<T>,
        readonly onNotify: SideEffect1<T>,
      ) {
        super(delegate);
      }
    }
    decorateWithOnNotifyNotify<RunnableLike<unknown>>(OnNotifySink);
    decorateNotifyWithAssertions(OnNotifySink);
    return createOnNotifyOperator(liftT, OnNotifySink);
  })();

export const onSink = /*@__PURE__*/ createOnSink(createT);

export const pairwise: Pairwise<RunnableLike<unknown>>["pairwise"] =
  /*@__PURE__*/ (() => {
    class PairwiseSink<T> extends AbstractDelegatingRunnableSink<
      T,
      [Option<T>, T]
    > {
      prev: Option<T>;
      hasPrev = false;
    }
    decorateWithPairwiseNotify<RunnableLike<unknown>>(PairwiseSink);
    decorateNotifyWithAssertions(PairwiseSink);
    return createPairwiseOperator<RunnableLike<unknown>, TReactive>(
      liftT,
      PairwiseSink,
    );
  })();

export const pairwiseT: Pairwise<RunnableLike<unknown>> = {
  pairwise,
};

export const reduce: Reduce<RunnableLike<unknown>>["reduce"] =
  /*@__PURE__*/ decorateMap(
    class ReducerSink<T, TAcc> extends AbstractDelegatingRunnableSink<T, TAcc> {
      constructor(
        delegate: ReactiveSinkLike<TAcc>,
        readonly reducer: Reducer<T, TAcc>,
        public acc: TAcc,
      ) {
        super(delegate);
      }
    },
    decorateWithReduceNotify<RunnableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createReduceOperator({ ...fromArrayT, ...liftT }),
  );

export const reduceT: Reduce<RunnableLike<unknown>> = {
  reduce,
};

export const repeat: Repeat<RunnableLike<unknown>>["repeat"] = <T>(
  predicate?: Predicate<number> | number,
): RunnableOperator<T, T> => {
  const shouldRepeat = isNone(predicate)
    ? alwaysTrue
    : typeof predicate === "number"
    ? (count: number) => count < predicate
    : (count: number) => predicate(count);

  return runnable =>
    createRunnable(sink => {
      let count = 0;
      do {
        pipe(
          createDelegatingRunnableSink(sink),
          addTo(sink),
          sourceFrom(runnable),
          dispose(),
        );
        count++;
      } while (!isDisposed(sink) && shouldRepeat(count));
    });
};

export const repeatT: Repeat<RunnableLike<unknown>> = {
  repeat,
};

export const scan: Scan<RunnableLike<unknown>>["scan"] = /*@__PURE__*/ (() => {
  class ScanSink<T, TAcc> extends AbstractDelegatingRunnableSink<T, TAcc> {
    constructor(
      delegate: ReactiveSinkLike<TAcc>,
      readonly reducer: Reducer<T, TAcc>,
      public acc: TAcc,
    ) {
      super(delegate);
    }
  }
  decorateWithScanNotify<RunnableLike<unknown>>(ScanSink);
  decorateNotifyWithAssertions(ScanSink);
  return createScanOperator<RunnableLike<unknown>, TReactive>(liftT, ScanSink);
})();

export const scanT: Scan<RunnableLike<unknown>> = {
  scan,
};

export const skipFirst: SkipFirst<RunnableLike<unknown>>["skipFirst"] =
  /*@__PURE__*/ (() => {
    class SkipFirstSink<T> extends AbstractDelegatingRunnableSink<T, T> {
      count = 0;

      constructor(delegate: ReactiveSinkLike<T>, readonly skipCount: number) {
        super(delegate);
      }
    }
    decorateWithSkipFirstNotify<RunnableLike<unknown>>(SkipFirstSink);
    decorateNotifyWithAssertions(SkipFirstSink);
    return createSkipFirstOperator<RunnableLike<unknown>, TReactive>(
      liftT,
      SkipFirstSink,
    );
  })();

export const skipFirstT: SkipFirst<RunnableLike<unknown>> = {
  skipFirst,
};

export const someSatisfy: SomeSatisfy<RunnableLike<unknown>>["someSatisfy"] =
  /*@__PURE__*/ decorateMap(
    class SomeSatisfySink<T> extends AbstractDelegatingRunnableSink<
      T,
      boolean
    > {
      constructor(
        delegate: ReactiveSinkLike<boolean>,
        readonly predicate: Predicate<T>,
      ) {
        super(delegate);
      }
    },
    decorateWithSomeSatisfyNotify<RunnableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createSomeSatisfyOperator({ ...fromArrayT, ...liftT }),
  );

export const someSatisfyT: SomeSatisfy<RunnableLike<unknown>> = {
  someSatisfy,
};

export const takeFirst: TakeFirst<RunnableLike<unknown>>["takeFirst"] =
  /*@__PURE__*/ (() => {
    class TakeFirstSink<T> extends AbstractDelegatingRunnableSink<T, T> {
      count = 0;

      constructor(delegate: ReactiveSinkLike<T>, readonly maxCount: number) {
        super(delegate);
      }
    }
    decorateWithTakeFirstNotify<RunnableLike<unknown>>(TakeFirstSink);
    decorateNotifyWithAssertions(TakeFirstSink);
    return createTakeFirstOperator<RunnableLike<unknown>, TReactive>(
      { ...fromArrayT, ...liftT },
      TakeFirstSink,
    );
  })();

export const takeFirstT: TakeFirst<RunnableLike<unknown>> = {
  takeFirst,
};

export const takeLast: TakeLast<RunnableLike<unknown>>["takeLast"] =
  /*@__PURE__*/ decorateMap(
    class TakeLastSink<T> extends AbstractDelegatingRunnableSink<T, T> {
      readonly last: T[] = [];

      constructor(delegate: ReactiveSinkLike<T>, readonly maxCount: number) {
        super(delegate);
      }
    },
    decorateWithTakeLastNotify<RunnableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createTakeLastOperator({ ...fromArrayT, ...liftT }),
  );

export const takeLastT: TakeLast<RunnableLike<unknown>> = {
  takeLast,
};

export const takeWhile: TakeWhile<RunnableLike<unknown>>["takeWhile"] =
  /*@__PURE__*/ (() => {
    class TakeWhileSink<T> extends AbstractDelegatingRunnableSink<T, T> {
      constructor(
        delegate: ReactiveSinkLike<T>,
        readonly predicate: Predicate<T>,
        readonly inclusive: boolean,
      ) {
        super(delegate);
      }
    }

    decorateWithTakeWhileNotify<RunnableLike<unknown>>(TakeWhileSink);
    decorateNotifyWithAssertions(TakeWhileSink);
    return createTakeWhileOperator(liftT, TakeWhileSink);
  })();

export const takeWhileT: TakeWhile<RunnableLike<unknown>> = {
  takeWhile,
};

export const throwIfEmpty: ThrowIfEmpty<RunnableLike<unknown>>["throwIfEmpty"] =
  /*@__PURE__*/ (() => {
    class ThrowIfEmptySink<T> extends AbstractDelegatingRunnableSink<T, T> {
      isEmpty = true;
    }
    decorateWithThrowIfEmptyNotify<RunnableLike<unknown>>(ThrowIfEmptySink);
    decorateNotifyWithAssertions(ThrowIfEmptySink);
    return createThrowIfEmptyOperator<RunnableLike<unknown>, TReactive>(
      liftT,
      ThrowIfEmptySink,
    );
  })();

export const throwIfEmptyT: ThrowIfEmpty<RunnableLike<unknown>> = {
  throwIfEmpty,
};

/**
 * Accumulates all values emitted by `runnable` into an array.
 */
export const toArray: ToArray<RunnableLike<unknown>>["toArray"] = () =>
  compose(buffer(), first(), getOrDefault(emptyArray));

export const toArrayT: ToArray<RunnableLike<unknown>> = {
  toArray,
};

export const toRunnable: ToRunnable<RunnableLike<unknown>>["toRunnable"] = () =>
  identity;

export const toRunnableT: ToRunnable<RunnableLike<unknown>> = {
  toRunnable,
};

export const TContainerOf: RunnableLike<unknown> = undefined as any;

export const using: Using<RunnableLike<unknown>>["using"] =
  /*@__PURE__*/ createUsing(createT);

export const usingT: Using<RunnableLike<unknown>> = {
  using,
};
