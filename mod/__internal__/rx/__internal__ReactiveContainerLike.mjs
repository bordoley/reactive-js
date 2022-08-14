/// <reference types="./__internal__ReactiveContainerLike.d.ts" />
import { pipe, none, isSome, identity } from '../../functions.mjs';
import { sinkInto } from '../../rx/ReactiveContainerLike.mjs';
import { onDisposed, add } from '../util/__internal__DisposableLike.mjs';

const createOnSink = (createReactiveContainer, src, f) => createReactiveContainer(sink => {
    pipe(src, sinkInto(sink));
    const disposable = f() || none;
    pipe(sink, disposable instanceof Function
        ? onDisposed(disposable)
        : isSome(disposable)
            ? add(disposable)
            : identity);
});
/*

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

export { createOnSink };
