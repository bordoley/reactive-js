import {
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
import { addToAndDisposeParentOnChildError } from "./disposable";
import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  Updater,
  alwaysTrue,
  identity,
  pipe,
} from "./functions";
import { Option, isNone, none } from "./option";
import { createRunnable, createT } from "./runnable/createRunnable";
import { fromArrayT } from "./runnable/fromArray";
import { liftT } from "./runnable/lift";
import { Sink, createDelegatingSink } from "./runnable/sinks";
import {
  SourceLike,
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
} from "./source";

export interface RunnableLike<T> extends SourceLike {
  readonly T: unknown;
  readonly type: RunnableLike<this["T"]>;
  readonly liftedStateType: Sink<this["T"]>;

  sink(this: RunnableLike<T>, sink: Sink<T>): void;
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
export { Sink } from "./runnable/sinks";
export { toArray } from "./runnable/toArray";

export const toRunnable = <T>(): Function1<RunnableLike<T>, RunnableLike<T>> =>
  identity;

export const type: RunnableLike<unknown> = undefined as any;

export const catchError: <T>(
  onError: Function1<unknown, RunnableLike<T> | void>,
) => RunnableOperator<T, T> = createCatchErrorOperator(
  liftT,
  class CatchErrorSink<T> extends Sink<T> {
    constructor(public readonly delegate: Sink<T>) {
      super();
    }
  },
);

export const concat: Concat<RunnableLike<unknown>>["concat"] = <T>(
  ...runnables: readonly RunnableLike<T>[]
) =>
  createRunnable((sink: Sink<T>) => {
    const runnablesLength = runnables.length;
    for (let i = 0; i < runnablesLength && !sink.isDisposed; i++) {
      const concatSink = pipe(
        createDelegatingSink(sink),
        addToAndDisposeParentOnChildError(sink),
      );

      runnables[i].sink(concatSink);
      concatSink.dispose();
    }
  });

export const concatT: Concat<RunnableLike<unknown>> = {
  concat,
};

export const decodeWithCharset: (
  charset?: string,
) => RunnableOperator<ArrayBuffer, string> = createDecodeWithCharsetOperator(
  { ...liftT, ...fromArrayT },

  class DecodeWithCharsetSink extends Sink<ArrayBuffer> {
    constructor(
      readonly delegate: Sink<string>,
      readonly textDecoder: TextDecoder,
    ) {
      super();
    }
  },
);

export const decodeWithCharsetT: DecodeWithCharset<RunnableLike<unknown>> = {
  decodeWithCharset,
};

export const distinctUntilChanged: <T>(options?: {
  readonly equality?: Equality<T>;
}) => RunnableOperator<T, T> = createDistinctUntilChangedOperator(
  liftT,
  class DistinctUntilChangedSink<T> extends Sink<T> {
    prev: Option<T> = none;
    hasValue = false;

    constructor(readonly delegate: Sink<T>, readonly equality: Equality<T>) {
      super();
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
) => RunnableOperator<T, boolean> = createEverySatisfyOperator(
  { ...fromArrayT, ...liftT },
  class EverySatisfySink<T> extends Sink<T> {
    constructor(
      readonly delegate: Sink<boolean>,
      readonly predicate: Predicate<T>,
    ) {
      super();
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
  const run = (sink: Sink<T>) => {
    let acc = initialValue();
    while (!sink.isDisposed) {
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
  createKeepOperator(
    liftT,
    class KeepSink<T> extends Sink<T> {
      constructor(
        readonly delegate: Sink<T>,
        readonly predicate: Predicate<T>,
      ) {
        super();
      }
    },
  );

export const keepT: Keep<RunnableLike<unknown>> = {
  keep,
};

export const map: <TA, TB>(
  mapper: Function1<TA, TB>,
) => RunnableOperator<TA, TB> = createMapOperator(
  liftT,
  class MapSink<TA, TB> extends Sink<TA> {
    constructor(
      readonly delegate: Sink<TB>,
      readonly mapper: Function1<TA, TB>,
    ) {
      super();
    }
  },
);

export const mapT: Map<RunnableLike<unknown>> = {
  map,
};

export const never = createNever(createT);

/**
 * Returns an `RunnableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export const onNotify: <T>(onNotify: SideEffect1<T>) => RunnableOperator<T, T> =
  createOnNotifyOperator(
    liftT,
    class OnNotifySink<T> extends Sink<T> {
      constructor(
        readonly delegate: Sink<T>,
        readonly onNotify: SideEffect1<T>,
      ) {
        super();
      }
    },
  );

export const onSink = createOnSink(createT);

export const pairwise: <T>() => RunnableOperator<T, [Option<T>, T]> =
  createPairwiseOperator(
    liftT,
    class PairwiseSink<T> extends Sink<T> {
      prev: Option<T>;
      hasPrev = false;

      constructor(readonly delegate: Sink<[Option<T>, T]>) {
        super();
      }
    },
  );

export const pairwiseT: Pairwise<RunnableLike<unknown>> = {
  pairwise,
};

export const reduce: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => RunnableOperator<T, TAcc> = createReduceOperator(
  { ...fromArrayT, ...liftT },
  class ReducerSink<T, TAcc> extends Sink<T> {
    constructor(
      readonly delegate: Sink<TAcc>,
      readonly reducer: Reducer<T, TAcc>,
      public acc: TAcc,
    ) {
      super();
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
        const delegateSink = pipe(
          createDelegatingSink(sink),
          addToAndDisposeParentOnChildError(sink),
        );
        runnable.sink(delegateSink);
        delegateSink.dispose();
        count++;
      } while (!sink.isDisposed && shouldRepeat(count));
    });
};

export const repeatT: Repeat<RunnableLike<unknown>> = {
  repeat,
};

export const scan: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => RunnableOperator<T, TAcc> = createScanOperator(
  liftT,
  class ScanSink<T, TAcc> extends Sink<T> {
    constructor(
      readonly delegate: Sink<TAcc>,
      readonly reducer: Reducer<T, TAcc>,
      public acc: TAcc,
    ) {
      super();
    }
  },
);

export const scanT: Scan<RunnableLike<unknown>> = {
  scan,
};

export const skipFirst: <T>(options?: {
  readonly count?: number;
}) => RunnableOperator<T, T> = createSkipFirstOperator(
  liftT,
  class SkipFirstSink<T> extends Sink<T> {
    count = 0;

    constructor(readonly delegate: Sink<T>, readonly skipCount: number) {
      super();
    }
  },
);

export const skipFirstT: SkipFirst<RunnableLike<unknown>> = {
  skipFirst,
};

export const someSatisfy: <T>(
  predicate: Predicate<T>,
) => RunnableOperator<T, boolean> = createSomeSatisfyOperator(
  { ...fromArrayT, ...liftT },
  class SomeSatisfySink<T> extends Sink<T> {
    constructor(
      readonly delegate: Sink<boolean>,
      readonly predicate: Predicate<T>,
    ) {
      super();
    }
  },
);

export const someSatisfyT: SomeSatisfy<RunnableLike<unknown>> = {
  someSatisfy,
};

export const takeFirst: <T>(options?: {
  readonly count?: number;
}) => RunnableOperator<T, T> = createTakeFirstOperator(
  { ...fromArrayT, ...liftT },
  class TakeFirstSink<T> extends Sink<T> {
    count = 0;

    constructor(readonly delegate: Sink<T>, readonly maxCount: number) {
      super();
    }
  },
);

export const takeFirstT: TakeFirst<RunnableLike<unknown>> = {
  takeFirst,
};

export const takeLast: <T>(options?: {
  readonly count?: number;
}) => RunnableOperator<T, T> = createTakeLastOperator(
  { ...fromArrayT, ...liftT },
  class TakeLastSink<T> extends Sink<T> {
    readonly last: T[] = [];

    constructor(readonly delegate: Sink<T>, readonly maxCount: number) {
      super();
    }
  },
);

export const takeLastT: TakeLast<RunnableLike<unknown>> = {
  takeLast,
};

export const takeWhile: <T>(
  predicate: Predicate<T>,
  options?: { readonly inclusive?: boolean },
) => RunnableOperator<T, T> = createTakeWhileOperator(
  liftT,
  class TakeWhileSink<T> extends Sink<T> {
    constructor(
      readonly delegate: Sink<T>,
      readonly predicate: Predicate<T>,
      readonly inclusive: boolean,
    ) {
      super();
    }
  },
);

export const takeWhileT: TakeWhile<RunnableLike<unknown>> = {
  takeWhile,
};

export const throwIfEmpty: <T>(
  factory: Factory<unknown>,
) => RunnableOperator<T, T> = createThrowIfEmptyOperator(
  liftT,
  class ThrowIfEmptySink<T> extends Sink<T> {
    isEmpty = true;

    constructor(readonly delegate: Sink<T>) {
      super();
    }
  },
);

export const throwIfEmptyT: ThrowIfEmpty<RunnableLike<unknown>> = {
  throwIfEmpty,
};

export const using: Using<RunnableLike<unknown>>["using"] =
  createUsing(createT);

export const usingT: Using<RunnableLike<unknown>> = {
  using,
};
