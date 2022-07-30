import {
  Container,
  ContainerOperator,
  Empty,
  StatefulContainerLike,
  StatefulContainerStateOf,
} from "../../containers";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Function3,
  Option,
  Predicate,
  Reducer,
  SideEffect1,
  max,
  none,
  partial,
  pipe,
  strictEquality,
} from "../../functions";
import { Error } from "../../util";
import {
  addIgnoringChildErrors,
  addTo,
  dispose,
  onComplete,
} from "../../util/DisposableLike";
import { MAX_SAFE_INTEGER } from "../env";

export type StatefulContainerOperatorIn<
  C extends StatefulContainerLike,
  TA,
  TB,
  TVar extends TInteractive | TReactive,
> = TVar extends TReactive
  ? StatefulContainerStateOf<C, TB>
  : StatefulContainerStateOf<C, TA>;

export type StatefulContainerOperatorOut<
  C extends StatefulContainerLike,
  TA,
  TB,
  TVar extends TInteractive | TReactive,
> = TVar extends TReactive
  ? StatefulContainerStateOf<C, TA>
  : StatefulContainerStateOf<C, TB>;

export type TInteractive = 0;
export const interactive: TInteractive = 0;
export type TReactive = 1;
export const reactive: TReactive = 1;

export type Lift<
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
> = Container<C> & {
  lift<TA, TB>(
    operator: Function1<
      StatefulContainerOperatorIn<C, TA, TB, TVar>,
      StatefulContainerOperatorOut<C, TA, TB, TVar>
    >,
  ): ContainerOperator<C, TA, TB>;

  readonly variance: TVar;
};

const lift = <
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
>({
  lift,
}: Lift<C, TVar>): Lift<C, TVar>["lift"] => lift;

export const createBufferOperator =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, T, readonly T[], TVar>,
      number,
      StatefulContainerOperatorOut<C, T, readonly T[], TVar>
    >,
  ) =>
  (
    options: {
      readonly maxBufferSize?: number;
    } = {},
  ) => {
    const maxBufferSize = max(options.maxBufferSize ?? MAX_SAFE_INTEGER, 1);

    return pipe(operator, partial(maxBufferSize), lift(m));
  };

export const createDistinctUntilChangedOperator =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      Equality<T>,
      StatefulContainerOperatorOut<C, T, T, TVar>
    >,
  ) =>
  (options?: { readonly equality?: Equality<T> }) => {
    const { equality = strictEquality } = options ?? {};
    return pipe(operator, partial(equality), lift(m));
  };

export const createForEachOperator =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      SideEffect1<T>,
      StatefulContainerOperatorOut<C, T, T, TVar>
    >,
  ) =>
  (effect: SideEffect1<T>) =>
    pipe(operator, partial(effect), lift(m));

export const createKeepOperator =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      Predicate<T>,
      StatefulContainerOperatorOut<C, T, T, TVar>
    >,
  ) =>
  (predicate: Predicate<T>) =>
    pipe(operator, partial(predicate), lift(m));

export const createMapOperator =
  <
    C extends StatefulContainerLike,
    TA,
    TB,
    TVar extends TInteractive | TReactive,
  >(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, TA, TB, TVar>,
      Function1<TA, TB>,
      StatefulContainerOperatorOut<C, TA, TB, TVar>
    >,
  ) =>
  (mapper: Function1<TA, TB>) =>
    pipe(operator, partial(mapper), lift(m));

export const createScanOperator =
  <
    C extends StatefulContainerLike,
    T,
    TAcc,
    TVar extends TInteractive | TReactive,
  >(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function3<
      StatefulContainerOperatorIn<C, T, TAcc, TVar>,
      Reducer<T, TAcc>,
      Factory<TAcc>,
      StatefulContainerOperatorOut<C, T, TAcc, TVar>
    >,
  ) =>
  (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(operator, partial(reducer, initialValue), lift(m));

export const createSkipFirstOperator =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      number,
      StatefulContainerOperatorOut<C, T, T, TVar>
    >,
  ) =>
  (options: { readonly count?: number } = {}): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;
    const lifted = pipe(operator, partial(count), lift(m));
    return container => (count > 0 ? pipe(container, lifted) : container);
  };

export const createTakeFirstOperator =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Empty<C> & Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      number,
      StatefulContainerOperatorOut<C, T, T, TVar>
    >,
  ) =>
  (options: { readonly count?: number } = {}): ContainerOperator<C, T, T> => {
    const { count = max(options.count ?? 1, 0) } = options;
    const containerOperator = pipe(operator, partial(count), lift(m));
    return container =>
      count > 0 ? pipe(container, containerOperator) : m.empty();
  };

export const createTakeLastOperator =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Empty<C> & Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      number,
      StatefulContainerOperatorOut<C, T, T, TVar>
    >,
  ) =>
  (options: { readonly count?: number } = {}): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;
    const containerOperator = pipe(operator, partial(count), lift(m));
    return container =>
      count > 0 ? pipe(container, containerOperator) : m.empty();
  };

export const createTakeWhileOperator =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function3<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      Predicate<T>,
      boolean,
      StatefulContainerOperatorOut<C, T, T, TVar>
    >,
  ) =>
  (
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ): ContainerOperator<C, T, T> => {
    const { inclusive = false } = options;
    return pipe(operator, partial(predicate, inclusive), lift(m));
  };

export const createThrowIfEmptyOperator =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function1<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      StatefulContainerOperatorOut<C, T, T, TVar> & {
        readonly isEmpty: boolean;
      }
    >,
  ) =>
  (factory: Factory<unknown>): ContainerOperator<C, T, T> =>
    pipe((delegate: StatefulContainerOperatorIn<C, T, T, TVar>) => {
      const lifted = pipe(
        delegate,
        operator,
        m.variance === interactive
          ? addIgnoringChildErrors(delegate)
          : addTo(delegate),
      );
      const { parent, child } =
        m.variance === interactive
          ? { parent: lifted, child: delegate }
          : { parent: delegate, child: lifted };

      pipe(
        child,
        onComplete(() => {
          let error: Option<Error> = none;

          if (lifted.isEmpty) {
            let cause: unknown = none;
            try {
              cause = factory();
            } catch (e) {
              cause = e;
            }

            error = { cause };
          }

          pipe(parent, dispose(error));
        }),
      );

      return lifted;
    }, lift(m));
