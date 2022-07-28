/// <reference types="./ReactiveContainerLikeInternal.d.ts" />
"use strict";
/*import {
  Container,
  ContainerOf,
  ContainerOperator,
  Empty,
  FromArray,
  FromValue,
  StatefulContainerLike,
  StatefulContainerStateOf,
} from "../../containers";
import {
  Equality,
  Factory,
  Function1,
  Option,
  Predicate,
  Reducer,
  SideEffect1,
  compose,
  forEach,
  getLength,
  identity,
  ignore,
  isEmpty,
  isSome,
  negate,
  newInstance,
  newInstanceWith,
  none,
  pipe,
} from "../../functions";
import { ReactiveContainerLike } from "../../rx";
import { sinkInto } from "../../rx/ReactiveContainerLike";
import { DisposableLike, DisposableOrTeardown, SinkLike } from "../../util";
import {
  add,
  addTo,
  addToIgnoringChildErrors,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
  onError,
} from "../../util/DisposableLike";
import { notify } from "../../util/SinkLike";
import {
  Lift as StatefulContainerLift,
  StatefulContainerOperator,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TReactive,
  lift,
} from "../containers/StatefulContainerLikeInternal";

export type CreateReactiveContainer<C extends ReactiveContainerLike> =
  Container<C> & {
    create<T>(
      onSink: (sink: StatefulContainerStateOf<C, T>) => void,
    ): ContainerOf<C, T>;
  };

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

const decorateWithNotify = <TThis, TNext>(
  SinkClass: new <T>(...a: readonly any[]) => SinkLike<T>,
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

*/
