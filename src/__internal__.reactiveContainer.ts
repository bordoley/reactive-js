import { getDelegate } from "./__internal__.delegating";
import { __DEV__ } from "./__internal__.env";
import {
  DelegatingLiftableContainerStateOf,
  LiftOperator,
  LiftOperatorIn,
  LiftOperatorOut,
  Lift as LiftableLift,
  TReactive,
  lift,
} from "./__internal__.liftable";
import { forEach } from "./__internal__.readonlyArray";
import {
  ContainerOf,
  ContainerOperator,
  FromArray,
  empty,
  fromValue,
} from "./container";
import {
  DisposableLike,
  DisposableOrTeardown,
  add,
  addTo,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
  onError,
} from "./disposable";
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
} from "./functions";
import { LiftableContainerStateOf } from "./liftableContainer";
import { Option, isSome, none } from "./option";
import {
  CreateReactiveContainer,
  ReactiveContainerLike,
  sinkInto,
} from "./reactiveContainer";
import { ReactiveSinkLike, notify } from "./reactiveSink";

export interface Lift<C extends ReactiveContainerLike>
  extends LiftableLift<C, TReactive> {
  lift<TA, TB>(
    operator: LiftOperator<C, TA, TB, TReactive>,
  ): ContainerOperator<C, TA, TB>;
}

const create =
  <C extends ReactiveContainerLike, T>(m: CreateReactiveContainer<C>) =>
  (onSink: (sink: LiftableContainerStateOf<C, T>) => void): ContainerOf<C, T> =>
    m.create(onSink);

type CatchErrorSink<C extends ReactiveContainerLike> = new <T>(
  delegate: LiftableContainerStateOf<C, T>,
) => DelegatingLiftableContainerStateOf<C, T, T>;

export const createCatchErrorOperator =
  <C extends ReactiveContainerLike>(m: Lift<C>) =>
  (CatchErrorSink: CatchErrorSink<C>) =>
  <T>(
    f: Function1<unknown, ContainerOf<C, T> | void>,
  ): ContainerOperator<C, T, T> => {
    return pipe(
      (
        delegate: LiftableContainerStateOf<C, T>,
      ): LiftableContainerStateOf<C, T> =>
        pipe(
          CatchErrorSink,
          newInstanceWith<
            DelegatingLiftableContainerStateOf<C, T, T>,
            LiftableContainerStateOf<C, T>
          >(delegate),
          addTo(delegate, true),
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
  delegate: LiftableContainerStateOf<C, string>,
  textDecoder: TextDecoder,
) => DelegatingLiftableContainerStateOf<C, ArrayBuffer, string> & {
  readonly textDecoder: TextDecoder;
};

export const createDecodeWithCharsetOperator =
  <C extends ReactiveContainerLike>(m: FromArray<C> & Lift<C>) =>
  (DecodeWithCharsetSink: DecodeWithCharsetSink<C>) =>
  (charset = "utf-8"): ContainerOperator<C, ArrayBuffer, string> =>
    pipe(
      (
        delegate: LiftableContainerStateOf<C, string>,
      ): LiftableContainerStateOf<C, ArrayBuffer> => {
        const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
        return pipe(
          DecodeWithCharsetSink,
          newInstanceWith(delegate, textDecoder),
          addTo(delegate),
          onComplete(() => {
            const data = textDecoder.decode();

            if (!isEmpty(data)) {
              pipe(data, fromValue(m), sinkInto(delegate));
            } else {
              pipe(delegate, dispose());
            }
          }),
        );
      },
      lift(m),
    );

type SatisfySink<C extends ReactiveContainerLike> = new <T>(
  delegate: LiftableContainerStateOf<C, boolean>,
  predicate: Predicate<T>,
) => DelegatingLiftableContainerStateOf<C, T, boolean> & {
  readonly predicate: Predicate<T>;
};

const createSatisfyOperator =
  <C extends ReactiveContainerLike>(
    m: FromArray<C> & Lift<C>,
    SatisfySink: SatisfySink<C>,
    defaultResult: boolean,
  ) =>
  <T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean> =>
    pipe(
      (
        delegate: LiftableContainerStateOf<C, boolean>,
      ): LiftableContainerStateOf<C, T> =>
        pipe(
          SatisfySink,
          newInstanceWith<
            DelegatingLiftableContainerStateOf<C, T, boolean> & {
              readonly predicate: Predicate<T>;
            },
            LiftableContainerStateOf<C, boolean>,
            Predicate<T>
          >(delegate, predicate),
          addTo(delegate),
          onComplete(() => {
            if (!isDisposed(delegate)) {
              pipe(defaultResult, fromValue(m), sinkInto(delegate));
            }
          }),
        ),
      lift(m),
    );

export const createEverySatisfyOperator =
  <C extends ReactiveContainerLike>(m: FromArray<C> & Lift<C>) =>
  (
    EverySatisfySink: SatisfySink<C>,
  ): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) =>
    compose(
      predicate => compose(predicate, negate),
      createSatisfyOperator(m, EverySatisfySink, true),
    );

export const createSomeSatisfyOperator =
  <C extends ReactiveContainerLike>(m: FromArray<C> & Lift<C>) =>
  (
    SomeSatisfySink: SatisfySink<C>,
  ): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) =>
    createSatisfyOperator(m, SomeSatisfySink, false);

type ReduceSink<C extends ReactiveContainerLike> = new <T, TAcc>(
  delegate: LiftableContainerStateOf<C, TAcc>,
  reducer: Reducer<T, TAcc>,
  acc: TAcc,
) => LiftableContainerStateOf<C, T> & {
  readonly reducer: Reducer<T, TAcc>;
  acc: TAcc;
};

export const createReduceOperator =
  <C extends ReactiveContainerLike>(
    m: FromArray<C> & Lift<C>,
    ReduceSink: ReduceSink<C>,
  ) =>
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> =>
    pipe(
      (
        delegate: LiftableContainerStateOf<C, TAcc>,
      ): LiftableContainerStateOf<C, T> => {
        const sink = pipe(
          ReduceSink,
          newInstanceWith<
            LiftableContainerStateOf<C, T> & {
              readonly reducer: Reducer<T, TAcc>;
              acc: TAcc;
            },
            LiftableContainerStateOf<C, TAcc>,
            Reducer<T, TAcc>,
            TAcc
          >(delegate, reducer, initialValue()),
          addTo(delegate),
          onComplete(() => {
            pipe(sink.acc, fromValue(m), sinkInto(delegate));
          }),
        );
        return sink;
      },
      lift(m),
    );

type TakeLastSink<C extends ReactiveContainerLike> = new <T>(
  delegate: LiftOperatorIn<C, T, T, TReactive>,
  maxCount: number,
) => LiftOperatorOut<C, T, T, TReactive> & {
  readonly last: T[];
  readonly maxCount: number;
};

export const createTakeLastOperator =
  <C extends ReactiveContainerLike>(
    m: FromArray<C> & Lift<C>,
    TakeLastSink: TakeLastSink<C>,
  ) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;

    const operator = (
      delegate: LiftableContainerStateOf<C, T>,
    ): LiftableContainerStateOf<C, T> => {
      const sink = pipe(
        TakeLastSink,
        newInstanceWith<
          LiftableContainerStateOf<C, T> & {
            readonly last: T[];
            readonly maxCount: number;
          },
          LiftableContainerStateOf<C, T>,
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
        : empty(m);
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
    pipe((sink: LiftableContainerStateOf<C, T>) => {
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
      (sink: LiftableContainerStateOf<C, T>) =>
        pipe(
          resourceFactory(),
          resources => (Array.isArray(resources) ? resources : [resources]),
          forEach(addTo(sink)),
          (resources: readonly TResource[]) => sourceFactory(...resources),
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
        getDelegate(this).notify(next);
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
          getDelegate(this).notify(data);
        }
      },
    );

export const decorateWithDistinctUntilChangedNotify = <
  C extends ReactiveContainerLike,
>(
  DistinctUntilChangedSink: new <T>(
    delegate: LiftableContainerStateOf<C, T>,
    equality: Equality<T>,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
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
        getDelegate(this).notify(next);
      }
    },
  );

export const decorateWithKeepNotify = <C extends ReactiveContainerLike>(
  KeepSink: new <T>(
    delegate: LiftableContainerStateOf<C, T>,
    predicate: Predicate<T>,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
    readonly predicate: Predicate<T>;
  },
) =>
  decorateWithNotify(
    KeepSink,
    function notifyKeep(this: InstanceType<typeof KeepSink>, next) {
      if (this.predicate(next)) {
        getDelegate(this).notify(next);
      }
    },
  );

export const decorateWithMapNotify = <C extends ReactiveContainerLike>(
  MapSink: new <TA, TB>(
    delegate: LiftOperatorIn<C, TA, TB, TReactive>,
    mapper: Function1<TA, TB>,
  ) => LiftOperatorOut<C, TA, TB, TReactive> &
    DelegatingLiftableContainerStateOf<C, TA, TB> & {
      readonly mapper: Function1<TA, TB>;
    },
) =>
  decorateWithNotify(
    MapSink,
    function notifyMap(this: InstanceType<typeof MapSink>, next) {
      const mapped = this.mapper(next);
      getDelegate(this).notify(mapped);
    },
  );

export const decorateWithOnNotifyNotify = <C extends ReactiveContainerLike>(
  OnNotifySink: new <T>(
    delegate: LiftableContainerStateOf<C, T>,
    onNotify: SideEffect1<T>,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
    readonly onNotify: SideEffect1<T>;
  },
) =>
  decorateWithNotify(
    OnNotifySink,
    function notifyOnNotify(this: InstanceType<typeof OnNotifySink>, next) {
      this.onNotify(next);
      getDelegate(this).notify(next);
    },
  );

export const decorateWithPairwiseNotify = <C extends ReactiveContainerLike>(
  PairwiseSink: new <T>(
    delegate: LiftOperatorIn<C, T, [Option<T>, T], TReactive>,
  ) => LiftOperatorOut<C, T, [Option<T>, T], TReactive> &
    DelegatingLiftableContainerStateOf<C, T, [Option<T>, T]> & {
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

      getDelegate(this).notify([prev, value]);
    },
  );

export const decorateWithScanNotify = <C extends ReactiveContainerLike>(
  ScanSink: new <T, TAcc>(
    delegate: LiftOperatorIn<C, T, TAcc, TReactive>,
    reducer: Reducer<T, TAcc>,
    acc: TAcc,
  ) => LiftOperatorOut<C, T, TAcc, TReactive> &
    DelegatingLiftableContainerStateOf<C, T, TAcc> & {
      readonly reducer: Reducer<T, TAcc>;
      acc: TAcc;
    },
) =>
  decorateWithNotify(
    ScanSink,
    function notifyScan(this: InstanceType<typeof ScanSink>, next) {
      const nextAcc = this.reducer(this.acc, next);
      this.acc = nextAcc;

      getDelegate(this).notify(nextAcc);
    },
  );

export const decorateWithReduceNotify = <C extends ReactiveContainerLike>(
  ReduceSink: ReduceSink<C>,
) =>
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
        const { delegate } = this;
        pipe(delegate, notify(!defaultResult), dispose());
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
    delegate: LiftOperatorIn<C, T, T, TReactive>,
    skipCount: number,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
    count: number;
    readonly skipCount: number;
  },
) =>
  decorateWithNotify(
    SkipFirstSink,
    function notifySkipFirst(this: InstanceType<typeof SkipFirstSink>, next) {
      this.count++;
      if (this.count > this.skipCount) {
        getDelegate(this).notify(next);
      }
    },
  );

export const decorateWithTakeFirstNotify = <C extends ReactiveContainerLike>(
  TakeFirstSink: new <T>(
    delegate: LiftOperatorIn<C, T, T, TReactive>,
    maxCount: number,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
    count: number;
    readonly maxCount: number;
  },
) =>
  decorateWithNotify(
    TakeFirstSink,
    function notifyTakeFirst(this: InstanceType<typeof TakeFirstSink>, next) {
      this.count++;
      getDelegate(this).notify(next);
      if (this.count >= this.maxCount) {
        pipe(this, dispose());
      }
    },
  );

export const decorateWithTakeLastNotify = <C extends ReactiveContainerLike>(
  TakeLastSink: TakeLastSink<C>,
) =>
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
    delegate: LiftableContainerStateOf<C, T>,
    predicate: Predicate<T>,
    inclusive: boolean,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
  },
) =>
  decorateWithNotify(
    TakeWhileSink,
    function notifyTakeWhile(this: InstanceType<typeof TakeWhileSink>, next) {
      const satisfiesPredicate = this.predicate(next);

      if (satisfiesPredicate || this.inclusive) {
        getDelegate(this).notify(next);
      }

      if (!satisfiesPredicate) {
        pipe(this, dispose());
      }
    },
  );

export const decorateWithThrowIfEmptyNotify = <C extends ReactiveContainerLike>(
  ThrowIfEmptySink: new <T>(
    delegate: LiftOperatorIn<C, T, T, TReactive>,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
    isEmpty: boolean;
  },
) => {
  decorateWithNotify(
    ThrowIfEmptySink,
    function notify(this: InstanceType<typeof ThrowIfEmptySink>, next) {
      this.isEmpty = false;
      getDelegate(this).notify(next);
    },
  );
};
