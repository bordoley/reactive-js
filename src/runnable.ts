import { empty as emptyArray } from "./__internal__.readonlyArray";
import {
  createBufferOperator,
  createCatchErrorOperator,
  createDecodeWithCharsetOperator,
  createDistinctUntilChangedOperator,
  createEverySatisfyOperator,
  createKeepOperator,
  createMapOperator,
  createNever,
  createOnNotifyOperator,
  createOnSink,
  createPairwiseOperator,
  createReduceOperator,
  createScanOperator,
  createSkipFirstOperator,
  createSomeSatisfyOperator,
  createTakeFirstOperator,
  createTakeLastOperator,
  createTakeWhileOperator,
  createThrowIfEmptyOperator,
  createUsing,
} from "./__internal__.source";
import {
  Buffer,
  Concat,
  Container,
  ContainerLike,
  ContainerOf,
  DecodeWithCharset,
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
  ThrowIfEmpty,
  Using,
} from "./container";
import { addTo, dispose, isDisposed } from "./disposable";
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
  pipe,
} from "./functions";
import { Option, getOrDefault, isNone, none } from "./option";
import { createRunnable, createT } from "./runnable/createRunnable";
import { first } from "./runnable/first";
import { fromArrayT } from "./runnable/fromArray";
import { liftT } from "./runnable/lift";
import {
  AbstractDelegatingRunnableSink,
  RunnableSink,
  createDelegatingRunnableSink,
} from "./runnableSink";
import { SourceLike, sourceFrom } from "./source";

export interface RunnableLike<T> extends SourceLike {
  readonly T: unknown;
  readonly TContainerOf: RunnableLike<this["T"]>;
  readonly TLiftableState: RunnableSink<this["T"]>;

  sink(this: RunnableLike<T>, sink: RunnableSink<T>): void;
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

export const buffer: <T>(options?: {
  readonly maxBufferSize?: number;
}) => RunnableOperator<T, readonly T[]> = /*@__PURE__*/ createBufferOperator(
  { ...liftT, ...fromArrayT },
  class BufferSink<T> extends AbstractDelegatingRunnableSink<T, readonly T[]> {
    buffer: T[] = [];
    constructor(
      delegate: RunnableSink<readonly T[]>,
      readonly maxBufferSize: number,
    ) {
      super(delegate);
    }
  },
);

export const bufferT: Buffer<RunnableLike<unknown>> = {
  buffer,
};

export const catchError: <T>(
  onError: Function1<unknown, RunnableLike<T> | void>,
) => RunnableOperator<T, T> = /*@__PURE__*/ createCatchErrorOperator(
  liftT,
  class CatchErrorSink<T> extends AbstractDelegatingRunnableSink<T, T> {},
);

export const concat: Concat<RunnableLike<unknown>>["concat"] = <T>(
  ...runnables: readonly RunnableLike<T>[]
) =>
  createRunnable((sink: RunnableSink<T>) => {
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

export const decodeWithCharset: (
  charset?: string,
) => RunnableOperator<ArrayBuffer, string> =
  /*@__PURE__*/ createDecodeWithCharsetOperator(
    { ...liftT, ...fromArrayT },

    class DecodeWithCharsetSink extends AbstractDelegatingRunnableSink<
      ArrayBuffer,
      string
    > {
      constructor(
        delegate: RunnableSink<string>,
        readonly textDecoder: TextDecoder,
      ) {
        super(delegate);
      }
    },
  );

export const decodeWithCharsetT: DecodeWithCharset<RunnableLike<unknown>> = {
  decodeWithCharset,
};

export const distinctUntilChanged: <T>(options?: {
  readonly equality?: Equality<T>;
}) => RunnableOperator<T, T> = /*@__PURE__*/ createDistinctUntilChangedOperator(
  liftT,
  class DistinctUntilChangedSink<T> extends AbstractDelegatingRunnableSink<
    T,
    T
  > {
    prev: Option<T> = none;
    hasValue = false;

    constructor(delegate: RunnableSink<T>, readonly equality: Equality<T>) {
      super(delegate);
    }
  },
);

export const distinctUntilChangedT: DistinctUntilChanged<
  RunnableLike<unknown>
> = {
  distinctUntilChanged,
};

export const everySatisfy: <T>(
  predicate: Predicate<T>,
) => RunnableOperator<T, boolean> = /*@__PURE__*/ createEverySatisfyOperator(
  { ...fromArrayT, ...liftT },
  class EverySatisfySink<T> extends AbstractDelegatingRunnableSink<T, boolean> {
    constructor(
      delegate: RunnableSink<boolean>,
      readonly predicate: Predicate<T>,
    ) {
      super(delegate);
    }
  },
);

export const everySatisfyT: EverySatisfy<RunnableLike<unknown>> = {
  everySatisfy,
};

export const generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
): RunnableLike<T> => {
  const run = (sink: RunnableSink<T>) => {
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

export const keep: <T>(predicate: Predicate<T>) => RunnableOperator<T, T> =
  /*@__PURE__*/ createKeepOperator(
    liftT,
    class KeepSink<T> extends AbstractDelegatingRunnableSink<T, T> {
      constructor(delegate: RunnableSink<T>, readonly predicate: Predicate<T>) {
        super(delegate);
      }
    },
  );

export const keepT: Keep<RunnableLike<unknown>> = {
  keep,
};

export const map: <TA, TB>(
  mapper: Function1<TA, TB>,
) => RunnableOperator<TA, TB> = /*@__PURE__*/ createMapOperator(
  liftT,
  class MapSink<TA, TB> extends AbstractDelegatingRunnableSink<TA, TB> {
    constructor(
      delegate: RunnableSink<TB>,
      readonly mapper: Function1<TA, TB>,
    ) {
      super(delegate);
    }
  },
);

export const mapT: Map<RunnableLike<unknown>> = {
  map,
};

export const never = /*@__PURE__*/ createNever(createT);

/**
 * Returns an `RunnableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export const onNotify: <T>(onNotify: SideEffect1<T>) => RunnableOperator<T, T> =
  /*@__PURE__*/ createOnNotifyOperator(
    liftT,
    class OnNotifySink<T> extends AbstractDelegatingRunnableSink<T, T> {
      constructor(
        delegate: RunnableSink<T>,
        readonly onNotify: SideEffect1<T>,
      ) {
        super(delegate);
      }
    },
  );

export const onSink = /*@__PURE__*/ createOnSink(createT);

export const pairwise: <T>() => RunnableOperator<T, [Option<T>, T]> =
  /*@__PURE__*/ createPairwiseOperator(
    liftT,
    class PairwiseSink<T> extends AbstractDelegatingRunnableSink<
      T,
      [Option<T>, T]
    > {
      prev: Option<T>;
      hasPrev = false;
    },
  );

export const pairwiseT: Pairwise<RunnableLike<unknown>> = {
  pairwise,
};

export const reduce: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => RunnableOperator<T, TAcc> = /*@__PURE__*/ createReduceOperator(
  { ...fromArrayT, ...liftT },
  class ReducerSink<T, TAcc> extends AbstractDelegatingRunnableSink<T, TAcc> {
    constructor(
      delegate: RunnableSink<TAcc>,
      readonly reducer: Reducer<T, TAcc>,
      public acc: TAcc,
    ) {
      super(delegate);
    }
  },
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

export const scan: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => RunnableOperator<T, TAcc> = /*@__PURE__*/ createScanOperator(
  liftT,
  class ScanSink<T, TAcc> extends AbstractDelegatingRunnableSink<T, TAcc> {
    constructor(
      delegate: RunnableSink<TAcc>,
      readonly reducer: Reducer<T, TAcc>,
      public acc: TAcc,
    ) {
      super(delegate);
    }
  },
);

export const scanT: Scan<RunnableLike<unknown>> = {
  scan,
};

export const skipFirst: <T>(options?: {
  readonly count?: number;
}) => RunnableOperator<T, T> = /*@__PURE__*/ createSkipFirstOperator(
  liftT,
  class SkipFirstSink<T> extends AbstractDelegatingRunnableSink<T, T> {
    count = 0;

    constructor(delegate: RunnableSink<T>, readonly skipCount: number) {
      super(delegate);
    }
  },
);

export const skipFirstT: SkipFirst<RunnableLike<unknown>> = {
  skipFirst,
};

export const someSatisfy: <T>(
  predicate: Predicate<T>,
) => RunnableOperator<T, boolean> = /*@__PURE__*/ createSomeSatisfyOperator(
  { ...fromArrayT, ...liftT },
  class SomeSatisfySink<T> extends AbstractDelegatingRunnableSink<T, boolean> {
    constructor(
      delegate: RunnableSink<boolean>,
      readonly predicate: Predicate<T>,
    ) {
      super(delegate);
    }
  },
);

export const someSatisfyT: SomeSatisfy<RunnableLike<unknown>> = {
  someSatisfy,
};

export const takeFirst: <T>(options?: {
  readonly count?: number;
}) => RunnableOperator<T, T> = /*@__PURE__*/ createTakeFirstOperator(
  { ...fromArrayT, ...liftT },
  class TakeFirstSink<T> extends AbstractDelegatingRunnableSink<T, T> {
    count = 0;

    constructor(delegate: RunnableSink<T>, readonly maxCount: number) {
      super(delegate);
    }
  },
);

export const takeFirstT: TakeFirst<RunnableLike<unknown>> = {
  takeFirst,
};

export const takeLast: <T>(options?: {
  readonly count?: number;
}) => RunnableOperator<T, T> = /*@__PURE__*/ createTakeLastOperator(
  { ...fromArrayT, ...liftT },
  class TakeLastSink<T> extends AbstractDelegatingRunnableSink<T, T> {
    readonly last: T[] = [];

    constructor(delegate: RunnableSink<T>, readonly maxCount: number) {
      super(delegate);
    }
  },
);

export const takeLastT: TakeLast<RunnableLike<unknown>> = {
  takeLast,
};

export const takeWhile: <T>(
  predicate: Predicate<T>,
  options?: { readonly inclusive?: boolean },
) => RunnableOperator<T, T> = /*@__PURE__*/ createTakeWhileOperator(
  liftT,
  class TakeWhileSink<T> extends AbstractDelegatingRunnableSink<T, T> {
    constructor(
      delegate: RunnableSink<T>,
      readonly predicate: Predicate<T>,
      readonly inclusive: boolean,
    ) {
      super(delegate);
    }
  },
);

export const takeWhileT: TakeWhile<RunnableLike<unknown>> = {
  takeWhile,
};

export const throwIfEmpty: <T>(
  factory: Factory<unknown>,
) => RunnableOperator<T, T> = /*@__PURE__*/ createThrowIfEmptyOperator(
  liftT,
  class ThrowIfEmptySink<T> extends AbstractDelegatingRunnableSink<T, T> {
    isEmpty = true;
  },
);

export const throwIfEmptyT: ThrowIfEmpty<RunnableLike<unknown>> = {
  throwIfEmpty,
};

/**
 * Accumulates all values emitted by `runnable` into an array.
 */
export const toArray = <T>(): Function1<RunnableLike<T>, readonly T[]> =>
  compose(buffer(), first(), getOrDefault(emptyArray));

export const toRunnable = <T>(): Function1<RunnableLike<T>, RunnableLike<T>> =>
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
