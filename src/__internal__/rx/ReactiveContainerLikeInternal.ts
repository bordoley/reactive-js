import { Factory, identity, isSome, none, pipe } from "../../functions";
import { ReactiveContainerLike } from "../../rx";
import { sinkInto } from "../../rx/ReactiveContainerLike";
import { DisposableOrTeardown, SinkLike } from "../../util";
import { add, onDisposed } from "../util/DisposableLikeInternal";

export const createOnSink = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>(
  createReactiveContainer: (f: (onSink: TSink) => void) => C,
  src: C,
  f: Factory<DisposableOrTeardown | void>,
): C =>
  createReactiveContainer(sink => {
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
  });

/*

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

type SatisfySink<C extends ReactiveContainerLike> = new <T>(
  delegate: StatefulContainerStateOf<C, boolean>,
  predicate: Predicate<T>,
) => DelegatingStatefulContainerStateOf<C, T, botolean> & {
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
