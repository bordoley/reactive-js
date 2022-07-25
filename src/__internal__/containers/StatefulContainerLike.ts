import {
  Container,
  ContainerOperator,
  Empty,
  StatefulContainerLike,
  StatefulContainerStateOf,
} from "../../containers";
import {
  Factory,
  Function1,
  Predicate,
  Reducer,
  max,
  pipe,
} from "../../functions";
import { Error, Option } from "../../util";
import {
  addIgnoringChildErrors,
  addTo,
  dispose,
  onComplete,
} from "../../util/DisposableLike";
import { none } from "../../util/Option";

export type StatefulContainerOperator<
  C extends StatefulContainerLike,
  TA,
  TB,
  TVar extends TInteractive | TReactive,
> = Function1<
  StatefulContainerOperatorIn<C, TA, TB, TVar>,
  StatefulContainerOperatorOut<C, TA, TB, TVar>
>;

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
    operator: StatefulContainerOperator<C, TA, TB, TVar>,
  ): ContainerOperator<C, TA, TB>;

  readonly variance: TInteractive | TReactive;
};

export const lift = <
  C extends StatefulContainerLike,
  TA,
  TB,
  TVar extends TInteractive | TReactive,
>({
  lift,
}: Lift<C, TVar>): Function1<
  StatefulContainerOperator<C, TA, TB, TVar>,
  ContainerOperator<C, TA, TB>
> => lift;

export type ScanStateConstructor<
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
> = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  acc: TAcc,
) => Function1<
  StatefulContainerOperatorIn<C, T, TAcc, TVar>,
  StatefulContainerOperatorOut<C, T, TAcc, TVar>
>;

export const createScanOperator =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (Constructor: ScanStateConstructor<C, TVar>) =>
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> =>
    pipe(Constructor(reducer, initialValue()), lift(m));

export type SkipFirstStateConstructor<
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
> = <T>(
  skipCount: number,
) => Function1<
  StatefulContainerOperatorIn<C, T, T, TVar>,
  StatefulContainerOperatorOut<C, T, T, TVar>
>;

export const createSkipFirstOperator =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (Constructor: SkipFirstStateConstructor<C, TVar>) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;
    const operator: StatefulContainerOperator<C, T, T, TVar> =
      Constructor(count);
    const lifted = pipe(operator, lift(m));
    return runnable => (count > 0 ? pipe(runnable, lifted) : runnable);
  };

export type TakeFirstStateContructor<
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
> = <T>(
  maxCount: number,
) => Function1<
  StatefulContainerOperatorIn<C, T, T, TVar>,
  StatefulContainerOperatorOut<C, T, T, TVar>
>;

export const createTakeFirstOperator =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Empty<C> & Lift<C, TVar>,
  ) =>
  (Constructor: TakeFirstStateContructor<C, TVar>) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = max(options.count ?? 1, 0) } = options;
    const operator: StatefulContainerOperator<C, T, T, TVar> =
      Constructor(count);
    const lifted = pipe(operator, lift(m));
    return source => (count > 0 ? pipe(source, lifted) : m.empty());
  };

export type TakeWhileLiftableStateConstructor<
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
> = <T>(
  predicate: Predicate<T>,
  inclusive: boolean,
) => Function1<
  StatefulContainerOperatorIn<C, T, T, TVar>,
  StatefulContainerOperatorOut<C, T, T, TVar>
>;

export const createTakeWhileOperator =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (Constructor: TakeWhileLiftableStateConstructor<C, TVar>) =>
  <T>(
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ): ContainerOperator<C, T, T> => {
    const { inclusive = false } = options;
    return pipe(Constructor(predicate, inclusive), lift(m));
  };

export type ThrowIfEmptyStateConstructor<
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
> = <T>() => Function1<
  StatefulContainerOperatorIn<C, T, T, TVar>,
  StatefulContainerOperatorOut<C, T, T, TVar> & {
    readonly isEmpty: boolean;
  }
>;

export const createThrowIfEmptyOperator =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (Constructor: ThrowIfEmptyStateConstructor<C, TVar>) =>
  <T>(factory: Factory<unknown>): ContainerOperator<C, T, T> =>
    pipe((delegate: StatefulContainerOperatorIn<C, T, T, TVar>) => {
      const lifted = pipe(
        delegate,
        Constructor(),
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
