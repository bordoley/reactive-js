import {
  Container,
  ContainerLike,
  ContainerOf,
  DecodeWithCharset,
  DistinctUntilChanged,
  Keep,
  Map,
  Pairwise,
  Reduce,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
} from "./container";
import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  identity,
} from "./functions";
import { Option, none } from "./option";
import { fromArrayT } from "./runnable/fromArray";
import { liftT } from "./runnable/lift";
import { Sink } from "./runnable/sinks";
import {
  SourceLike,
  createDecodeWithCharsetOperator,
  createDistinctUntilChangedOperator,
  createKeepOperator,
  createMapOperator,
  createOnNotifyOperator,
  createPairwiseOperator,
  createReduceOperator,
  createScanOperator,
  createSkipFirstOperator,
  createTakeFirstOperator,
  createTakeLastOperator,
  createTakeWhileOperator,
} from "./source";

export interface RunnableLike<T> extends SourceLike {
  readonly T: unknown;
  readonly type: RunnableLike<this["T"]>;
  readonly sinkType: Sink<this["T"]>;

  sink(this: RunnableLike<T>, sink: Sink<T>): void;
}

export type RunnableOperator<TA, TB> = Function1<
  RunnableLike<TA>,
  RunnableLike<TB>
>;

export interface ToRunnable<C extends ContainerLike> extends Container<C> {
  toRunnable<T>(): Function1<ContainerOf<C, T>, RunnableLike<T>>;
}

export { concat, concatAll } from "./runnable/concat";
export { createRunnable } from "./runnable/createRunnable";
export { everySatisfy, noneSatisfy } from "./runnable/everySatisfy";
export { first } from "./runnable/first";
export { forEach } from "./runnable/forEach";
export { fromArray, fromArrayT } from "./runnable/fromArray";
export { generate } from "./runnable/generate";
export { last } from "./runnable/last";
export { repeat } from "./runnable/repeat";
export { Sink } from "./runnable/sinks";
export { someSatisfy, contains } from "./runnable/someSatisfy";
export { toArray } from "./runnable/toArray";
export { using } from "./runnable/using";

export const toRunnable = <T>(): Function1<RunnableLike<T>, RunnableLike<T>> =>
  identity;

export const type: RunnableLike<unknown> = undefined as any;

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
