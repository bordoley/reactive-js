import {
  ContainerOf,
  ContainerOperator,
  Empty,
  FromArray,
  FromValue,
} from "../../containers/ContainerLike";
import { forEach } from "../../containers/ReadonlyArrayLike";
import {
  StatefulContainerLike,
  StatefulContainerStateOf,
} from "../../containers/StatefulContainerLike";
import {
  CreateReactiveContainer,
  ReactiveContainerLike,
  sinkInto,
} from "../../rx/ReactiveContainerLike";
import { ReactiveSinkLike, notify } from "../../rx/ReactiveSinkLike";
import {
  DisposableLike,
  DisposableOrTeardown,
  add,
  addTo,
  addToIgnoringChildErrors,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
  onError,
} from "../../util/DisposableLike";
import { Option, isSome, none } from "../../util/Option";
import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  compose,
  getLength,
  identity,
  ignore,
  isEmpty,
  negate,
  newInstance,
  newInstanceWith,
  pipe,
} from "../../util/functions";
import {
  Lift as StatefulContainerLift,
  StatefulContainerOperator,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TReactive,
  lift,
} from "../containers/StatefulContainerLike";

export type DelegatingStatefulContainerStateOf<
  C extends StatefulContainerLike,
  T,
  TDelegate,
  TDelegateStatefulContaierStateOf extends StatefulContainerStateOf<
    C,
    TDelegate
  > = StatefulContainerStateOf<C, TDelegate>,
> = StatefulContainerStateOf<C, T> & {
  readonly delegate: TDelegateStatefulContaierStateOf;
};

export const getDelegate = <
  C extends StatefulContainerLike,
  T,
  TDelegate,
  TDelegateStatefulContaierStateOf extends StatefulContainerStateOf<
    C,
    TDelegate
  > = StatefulContainerStateOf<C, TDelegate>,
>(
  container: DelegatingStatefulContainerStateOf<
    C,
    T,
    TDelegate,
    TDelegateStatefulContaierStateOf
  >,
) => container.delegate;

export type Lift<C extends ReactiveContainerLike> = StatefulContainerLift<
  C,
  TReactive
> & {
  lift<TA, TB>(
    operator: StatefulContainerOperator<C, TA, TB, TReactive>,
  ): ContainerOperator<C, TA, TB>;
};

const create =
  <C extends ReactiveContainerLike, T>(m: CreateReactiveContainer<C>) =>
  (onSink: (sink: StatefulContainerStateOf<C, T>) => void): ContainerOf<C, T> =>
    m.create(onSink);

type CatchErrorSink<C extends ReactiveContainerLike> = new <T>(
  delegate: StatefulContainerStateOf<C, T>,
) => StatefulContainerStateOf<C, T> & {
  delegate: StatefulContainerStateOf<C, T>;
};

export const createCatchErrorOperator =
  <C extends ReactiveContainerLike>(m: Lift<C>) =>
  (CatchErrorSink: CatchErrorSink<C>) =>
  <T>(
    f: Function1<unknown, ContainerOf<C, T> | void>,
  ): ContainerOperator<C, T, T> => {
    return pipe(
      (
        delegate: StatefulContainerStateOf<C, T>,
      ): StatefulContainerStateOf<C, T> =>
        pipe(
          CatchErrorSink,
          newInstanceWith<
            DelegatingStatefulContainerStateOf<C, T, T>,
            StatefulContainerStateOf<C, T>
          >(delegate),
          addToIgnoringChildErrors(delegate),
          onComplete(() => pipe(delegate, dispose())),
          onError(e => {
            try {
              const result = f(e.cause) || none;
              if (isSome(result)) {
                pipe(result, sinkInto(delegate));
              } else {
                pipe(delegate, dispose());
              }
            } catch (cause) {
              pipe(delegate, dispose({ cause: { parent: e.cause, cause } }));
            }
          }),
        ),
      lift(m),
    );
  };

type DecodeWithCharsetSink<C extends ReactiveContainerLike> = new (
  delegate: StatefulContainerStateOf<C, string>,
  textDecoder: TextDecoder,
) => DelegatingStatefulContainerStateOf<C, ArrayBuffer, string> & {
  readonly textDecoder: TextDecoder;
};

export const createDecodeWithCharsetOperator =
  <C extends ReactiveContainerLike>(m: FromValue<C> & Lift<C>) =>
  (DecodeWithCharsetSink: DecodeWithCharsetSink<C>) =>
  (charset = "utf-8"): ContainerOperator<C, ArrayBuffer, string> =>
    pipe(
      (
        delegate: StatefulContainerStateOf<C, string>,
      ): StatefulContainerStateOf<C, ArrayBuffer> => {
        const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
        return pipe(
          DecodeWithCharsetSink,
          newInstanceWith(delegate, textDecoder),
          addTo(delegate),
          onComplete(() => {
            const data = textDecoder.decode();

            if (!isEmpty(data)) {
              pipe(data, m.fromValue(), sinkInto(delegate));
            } else {
              pipe(delegate, dispose());
            }
          }),
        );
      },
      lift(m),
    );

type SatisfySink<C extends ReactiveContainerLike> = new <T>(
  delegate: StatefulContainerStateOf<C, boolean>,
  predicate: Predicate<T>,
) => DelegatingStatefulContainerStateOf<C, T, boolean> & {
  readonly predicate: Predicate<T>;
};

const createSatisfyOperator =
  <C extends ReactiveContainerLike>(
    m: FromValue<C> & Lift<C>,
    SatisfySink: SatisfySink<C>,
    defaultResult: boolean,
  ) =>
  <T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean> =>
    pipe(
      (
        delegate: StatefulContainerStateOf<C, boolean>,
      ): StatefulContainerStateOf<C, T> =>
        pipe(
          SatisfySink,
          newInstanceWith<
            DelegatingStatefulContainerStateOf<C, T, boolean> & {
              readonly predicate: Predicate<T>;
            },
            StatefulContainerStateOf<C, boolean>,
            Predicate<T>
          >(delegate, predicate),
          addTo(delegate),
          onComplete(() => {
            if (!isDisposed(delegate)) {
              pipe(defaultResult, m.fromValue(), sinkInto(delegate));
            }
          }),
        ),
      lift(m),
    );

export const createEverySatisfyOperator =
  <C extends ReactiveContainerLike>(m: FromValue<C> & Lift<C>) =>
  (
    EverySatisfySink: SatisfySink<C>,
  ): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) =>
    compose(
      predicate => compose(predicate, negate),
      createSatisfyOperator(m, EverySatisfySink, true),
    );

export const createSomeSatisfyOperator =
  <C extends ReactiveContainerLike>(m: FromValue<C> & Lift<C>) =>
  (
    SomeSatisfySink: SatisfySink<C>,
  ): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) =>
    createSatisfyOperator(m, SomeSatisfySink, false);

type ReduceSink<C extends ReactiveContainerLike> = new <T, TAcc>(
  delegate: StatefulContainerStateOf<C, TAcc>,
  reducer: Reducer<T, TAcc>,
  acc: TAcc,
) => StatefulContainerStateOf<C, T> & {
  readonly reducer: Reducer<T, TAcc>;
  acc: TAcc;
};

export const createReduceOperator =
  <C extends ReactiveContainerLike>(m: FromValue<C> & Lift<C>) =>
  (ReduceSink: ReduceSink<C>) =>
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> =>
    pipe(
      (
        delegate: StatefulContainerStateOf<C, TAcc>,
      ): StatefulContainerStateOf<C, T> => {
        const sink = pipe(
          ReduceSink,
          newInstanceWith<
            StatefulContainerStateOf<C, T> & {
              readonly reducer: Reducer<T, TAcc>;
              acc: TAcc;
            },
            StatefulContainerStateOf<C, TAcc>,
            Reducer<T, TAcc>,
            TAcc
          >(delegate, reducer, initialValue()),
          addTo(delegate),
          onComplete(() => {
            pipe(sink.acc, m.fromValue(), sinkInto(delegate));
          }),
        );
        return sink;
      },
      lift(m),
    );

type TakeLastSink<C extends ReactiveContainerLike> = new <T>(
  delegate: StatefulContainerOperatorIn<C, T, T, TReactive>,
  maxCount: number,
) => StatefulContainerOperatorOut<C, T, T, TReactive> & {
  readonly last: T[];
  readonly maxCount: number;
};

export const createTakeLastOperator =
  <C extends ReactiveContainerLike>(m: FromArray<C> & Lift<C> & Empty<C>) =>
  (TakeLastSink: TakeLastSink<C>) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;

    const operator = (
      delegate: StatefulContainerStateOf<C, T>,
    ): StatefulContainerStateOf<C, T> => {
      const sink = pipe(
        TakeLastSink,
        newInstanceWith<
          StatefulContainerStateOf<C, T> & {
            readonly last: T[];
            readonly maxCount: number;
          },
          StatefulContainerStateOf<C, T>,
          number
        >(delegate, count),
        addTo(delegate),
        onComplete(() => {
          pipe(sink.last, m.fromArray(), sinkInto(delegate));
        }),
      );
      return sink;
    };

    return source =>
      count > 0
        ? pipe(source, lift<C, T, T, TReactive>(m)(operator))
        : m.empty();
  };

export const createFromDisposable =
  <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) =>
  <T>(disposable: DisposableLike): ContainerOf<C, T> =>
    pipe(disposable, addTo, create(m));

export const createNever = <C extends ReactiveContainerLike>(
  m: CreateReactiveContainer<C>,
) => {
  const neverInstance: ContainerOf<C, any> = pipe(ignore, create(m));
  return <T>(): ContainerOf<C, T> => neverInstance;
};

export const createOnSink =
  <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) =>
  <T>(f: Factory<DisposableOrTeardown | void>): ContainerOperator<C, T, T> =>
  src =>
    pipe((sink: StatefulContainerStateOf<C, T>) => {
      pipe(src, sinkInto(sink));
      const disposable = f() || none;
      pipe(
        sink,
        disposable instanceof Function
          ? onDisposed(disposable)
          : isSome(disposable)
          ? add(disposable)
          : identity,
      );
    }, create(m));

export const createUsing =
  <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) =>
  <TResource extends DisposableLike, T>(
    resourceFactory: Factory<TResource | readonly TResource[]>,
    sourceFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>,
  ): ContainerOf<C, T> =>
    pipe(
      (sink: StatefulContainerStateOf<C, T>) =>
        pipe(
          resourceFactory(),
          resources => (Array.isArray(resources) ? resources : [resources]),
          forEach<TResource>(addTo(sink)),
          resources => sourceFactory(...resources),
          sinkInto(sink),
        ),
      create(m),
    );

const decorateWithNotify = <TThis, TNext>(
  SinkClass: new <T>(...a: readonly any[]) => ReactiveSinkLike<T>,
  notify: (this: TThis, next: TNext) => void,
) => {
  SinkClass.prototype.notify = notify;
};

export const decorateWithCatchErrorNotify =
  <C extends ReactiveContainerLike>() =>
  (CatchErrorSink: CatchErrorSink<C>) =>
    decorateWithNotify(
      CatchErrorSink,
      function notifyCatchError(
        this: InstanceType<typeof CatchErrorSink>,
        next,
      ) {
        pipe(this, getDelegate, notify(next));
      },
    );

export const decorateWithDecodeWithCharsetNotify =
  <C extends ReactiveContainerLike>() =>
  (DecodeWithCharsetSink: DecodeWithCharsetSink<C>) =>
    decorateWithNotify(
      DecodeWithCharsetSink,
      function notifyDecodeWithCharset(
        this: InstanceType<typeof DecodeWithCharsetSink>,
        next: ArrayBuffer,
      ) {
        const data = this.textDecoder.decode(next, { stream: true });
        if (!isEmpty(data)) {
          pipe(this, getDelegate, notify(data));
        }
      },
    );

export const decorateWithDistinctUntilChangedNotify = <
  C extends ReactiveContainerLike,
>(
  DistinctUntilChangedSink: new <T>(
    delegate: StatefulContainerStateOf<C, T>,
    equality: Equality<T>,
  ) => DelegatingStatefulContainerStateOf<C, T, T> & {
    readonly equality: Equality<T>;
    prev: Option<T>;
    hasValue: boolean;
  },
) =>
  decorateWithNotify(
    DistinctUntilChangedSink,
    function notifyDistinctUntilChanged(
      this: InstanceType<typeof DistinctUntilChangedSink>,
      next,
    ) {
      const shouldEmit = !this.hasValue || !this.equality(this.prev, next);

      if (shouldEmit) {
        this.prev = next;
        this.hasValue = true;
        pipe(this, getDelegate, notify(next));
      }
    },
  );

export const decorateWithKeepNotify = <C extends ReactiveContainerLike>(
  KeepSink: new <T>(
    delegate: StatefulContainerStateOf<C, T>,
    predicate: Predicate<T>,
  ) => DelegatingStatefulContainerStateOf<C, T, T> & {
    readonly predicate: Predicate<T>;
  },
) =>
  decorateWithNotify(
    KeepSink,
    function notifyKeep(this: InstanceType<typeof KeepSink>, next) {
      if (this.predicate(next)) {
        pipe(this, getDelegate, notify(next));
      }
    },
  );

export const decorateWithMapNotify = <C extends ReactiveContainerLike>(
  MapSink: new <TA, TB>(
    delegate: StatefulContainerOperatorIn<C, TA, TB, TReactive>,
    mapper: Function1<TA, TB>,
  ) => StatefulContainerOperatorOut<C, TA, TB, TReactive> &
    DelegatingStatefulContainerStateOf<C, TA, TB> & {
      readonly mapper: Function1<TA, TB>;
    },
) =>
  decorateWithNotify(
    MapSink,
    function notifyMap(this: InstanceType<typeof MapSink>, next) {
      const mapped = this.mapper(next);
      pipe(this, getDelegate, notify(mapped));
    },
  );

export const decorateWithOnNotifyNotify = <C extends ReactiveContainerLike>(
  OnNotifySink: new <T>(
    delegate: StatefulContainerStateOf<C, T>,
    onNotify: SideEffect1<T>,
  ) => DelegatingStatefulContainerStateOf<C, T, T> & {
    readonly onNotify: SideEffect1<T>;
  },
) =>
  decorateWithNotify(
    OnNotifySink,
    function notifyOnNotify(this: InstanceType<typeof OnNotifySink>, next) {
      this.onNotify(next);
      pipe(this, getDelegate, notify(next));
    },
  );

export const decorateWithPairwiseNotify = <C extends ReactiveContainerLike>(
  PairwiseSink: new <T>(
    delegate: StatefulContainerOperatorIn<C, T, [Option<T>, T], TReactive>,
  ) => StatefulContainerOperatorOut<C, T, [Option<T>, T], TReactive> &
    DelegatingStatefulContainerStateOf<C, T, [Option<T>, T]> & {
      prev: Option<T>;
      hasPrev: boolean;
    },
) =>
  decorateWithNotify(
    PairwiseSink,
    function notifyPairwise(
      this: InstanceType<typeof PairwiseSink>,
      value,
    ): void {
      const prev = this.hasPrev ? this.prev : none;

      this.hasPrev = true;
      this.prev = value;

      pipe(this, getDelegate, notify([prev, value]));
    },
  );

export const decorateWithScanNotify = <C extends ReactiveContainerLike>(
  ScanSink: new <T, TAcc>(
    delegate: StatefulContainerOperatorIn<C, T, TAcc, TReactive>,
    reducer: Reducer<T, TAcc>,
    acc: TAcc,
  ) => StatefulContainerOperatorOut<C, T, TAcc, TReactive> &
    DelegatingStatefulContainerStateOf<C, T, TAcc> & {
      readonly reducer: Reducer<T, TAcc>;
      acc: TAcc;
    },
) =>
  decorateWithNotify(
    ScanSink,
    function notifyScan(this: InstanceType<typeof ScanSink>, next) {
      const nextAcc = this.reducer(this.acc, next);
      this.acc = nextAcc;

      pipe(this, getDelegate, notify(nextAcc));
    },
  );

export const decorateWithReduceNotify =
  <C extends ReactiveContainerLike>() =>
  (ReduceSink: ReduceSink<C>) =>
    decorateWithNotify(
      ReduceSink,
      function notifyReduce(this: InstanceType<typeof ReduceSink>, next) {
        this.acc = this.reducer(this.acc, next);
      },
    );

const decorateWithSatisfyNotify = <C extends ReactiveContainerLike>(
  SatisfySink: SatisfySink<C>,
  defaultResult: boolean,
) =>
  decorateWithNotify(
    SatisfySink,
    function notifyEverySatisfy(this: InstanceType<typeof SatisfySink>, next) {
      if (this.predicate(next)) {
        pipe(this, getDelegate, notify(!defaultResult), dispose());
      }
    },
  );

export const decorateWithEverySatisfyNotify =
  <C extends ReactiveContainerLike>() =>
  (SatisfySink: SatisfySink<C>) =>
    decorateWithSatisfyNotify(SatisfySink, true);

export const decorateWithSomeSatisfyNotify =
  <C extends ReactiveContainerLike>() =>
  (SatisfySink: SatisfySink<C>) =>
    decorateWithSatisfyNotify(SatisfySink, false);

export const decorateWithSkipFirstNotify = <C extends ReactiveContainerLike>(
  SkipFirstSink: new <T>(
    delegate: StatefulContainerOperatorIn<C, T, T, TReactive>,
    skipCount: number,
  ) => DelegatingStatefulContainerStateOf<C, T, T> & {
    count: number;
    readonly skipCount: number;
  },
) =>
  decorateWithNotify(
    SkipFirstSink,
    function notifySkipFirst(this: InstanceType<typeof SkipFirstSink>, next) {
      this.count++;
      if (this.count > this.skipCount) {
        pipe(this, getDelegate, notify(next));
      }
    },
  );

export const decorateWithTakeFirstNotify = <C extends ReactiveContainerLike>(
  TakeFirstSink: new <T>(
    delegate: StatefulContainerOperatorIn<C, T, T, TReactive>,
    maxCount: number,
  ) => DelegatingStatefulContainerStateOf<C, T, T> & {
    count: number;
    readonly maxCount: number;
  },
) =>
  decorateWithNotify(
    TakeFirstSink,
    function notifyTakeFirst(this: InstanceType<typeof TakeFirstSink>, next) {
      this.count++;
      pipe(this, getDelegate, notify(next));
      if (this.count >= this.maxCount) {
        pipe(this, dispose());
      }
    },
  );

export const decorateWithTakeLastNotify =
  <C extends ReactiveContainerLike>() =>
  (TakeLastSink: TakeLastSink<C>) =>
    decorateWithNotify(
      TakeLastSink,
      function notifyTakeLast(this: InstanceType<typeof TakeLastSink>, next) {
        const { last } = this;

        last.push(next);

        if (getLength(last) > this.maxCount) {
          last.shift();
        }
      },
    );

export const decorateWithTakeWhileNotify = <C extends ReactiveContainerLike>(
  TakeWhileSink: new <T>(
    delegate: StatefulContainerStateOf<C, T>,
    predicate: Predicate<T>,
    inclusive: boolean,
  ) => DelegatingStatefulContainerStateOf<C, T, T> & {
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
  },
) =>
  decorateWithNotify(
    TakeWhileSink,
    function notifyTakeWhile(this: InstanceType<typeof TakeWhileSink>, next) {
      const satisfiesPredicate = this.predicate(next);

      if (satisfiesPredicate || this.inclusive) {
        pipe(this, getDelegate, notify(next));
      }

      if (!satisfiesPredicate) {
        pipe(this, dispose());
      }
    },
  );

export const decorateWithThrowIfEmptyNotify = <C extends ReactiveContainerLike>(
  ThrowIfEmptySink: new <T>(
    delegate: StatefulContainerOperatorIn<C, T, T, TReactive>,
  ) => DelegatingStatefulContainerStateOf<C, T, T> & {
    isEmpty: boolean;
  },
) => {
  decorateWithNotify(
    ThrowIfEmptySink,
    function notifyThrowIfEmpty(
      this: InstanceType<typeof ThrowIfEmptySink>,
      next,
    ) {
      this.isEmpty = false;
      pipe(this, getDelegate, notify(next));
    },
  );
};
