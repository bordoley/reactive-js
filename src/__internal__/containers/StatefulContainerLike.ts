import {
  Container,
  ContainerOperator,
  FromArray,
  empty,
} from "../../containers/ContainerLike";
import {
  StatefulContainerLike,
  StatefulContainerStateOf,
} from "../../containers/StatefulContainerLike";
import {
  Error,
  addIgnoringChildErrors,
  addTo,
  dispose,
  onComplete,
} from "../../util/DisposableLike";
import { Option, none } from "../../util/Option";
import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  max,
  newInstanceWith,
  pipe,
  strictEquality,
} from "../../util/functions";

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

export type DistinctUntilChangedStateContructor<
  C extends StatefulContainerLike,
> = new <T>(
  delegate: StatefulContainerStateOf<C, T>,
  equality: Equality<T>,
) => StatefulContainerStateOf<C, T>;

export const distinctUntilChanged =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TInteractive | TReactive>,
  ) =>
  (Constructor: DistinctUntilChangedStateContructor<C>) =>
  <T>(
    options: { readonly equality?: Equality<T> } = {},
  ): ContainerOperator<C, T, T> => {
    const { equality = strictEquality } = options;

    return pipe(
      (delegate: StatefulContainerOperatorIn<C, T, T, TVar>) =>
        pipe(
          Constructor,
          newInstanceWith<
            StatefulContainerStateOf<C, T>,
            StatefulContainerStateOf<C, T>,
            Equality<T>
          >(delegate, equality),
        ),
      lift(m),
    );
  };

export type KeepStateContructor<C extends StatefulContainerLike> = new <T>(
  delegate: StatefulContainerStateOf<C, T>,
  predicate: Predicate<T>,
) => StatefulContainerStateOf<C, T>;

export const keep =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (Constructor: KeepStateContructor<C>) =>
  <T>(predicate: Predicate<T>): ContainerOperator<C, T, T> =>
    pipe(
      (delegate: StatefulContainerStateOf<C, T>) =>
        pipe(
          Constructor,
          newInstanceWith<
            StatefulContainerStateOf<C, T>,
            StatefulContainerStateOf<C, T>,
            Predicate<T>
          >(delegate, predicate),
        ),
      lift(m),
    );

export type MapStateConstructor<
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
> = new <TA, TB>(
  delegate: StatefulContainerOperatorIn<C, TA, TB, TVar>,
  mapper: Function1<TA, TB>,
) => StatefulContainerOperatorOut<C, TA, TB, TVar>;

export const map =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (Constructor: MapStateConstructor<C, TVar>) =>
  <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB> =>
    pipe(
      (delegate: StatefulContainerOperatorIn<C, TA, TB, TVar>) =>
        pipe(
          Constructor,
          newInstanceWith<
            StatefulContainerOperatorOut<C, TA, TB, TVar>,
            StatefulContainerOperatorIn<C, TA, TB, TVar>,
            Function1<TA, TB>
          >(delegate, mapper),
        ),
      lift(m),
    );

export type OnNotifyStateConstructor<C extends StatefulContainerLike> = new <T>(
  delegate: StatefulContainerStateOf<C, T>,
  onNotify: SideEffect1<T>,
) => StatefulContainerStateOf<C, T>;

export const onNotify =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
    Constructor: OnNotifyStateConstructor<C>,
  ) =>
  <T>(onNotify: SideEffect1<T>): ContainerOperator<C, T, T> =>
    pipe(
      (delegate: StatefulContainerOperatorIn<C, T, T, TVar>) =>
        pipe(
          Constructor,
          newInstanceWith<
            StatefulContainerStateOf<C, T>,
            StatefulContainerStateOf<C, T>,
            SideEffect1<T>
          >(delegate, onNotify),
        ),
      lift(m),
    );

export type PairwiseStateContructor<
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
> = new <T>(
  delegate: StatefulContainerOperatorIn<C, T, [Option<T>, T], TVar>,
) => StatefulContainerOperatorOut<C, T, [Option<T>, T], TVar>;

export const pairwise =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (Constructor: PairwiseStateContructor<C, TVar>) =>
  <T>(): ContainerOperator<C, T, [Option<T>, T]> =>
    pipe(
      (
        delegate: StatefulContainerOperatorIn<C, T, [Option<T>, T], TVar>,
      ): StatefulContainerOperatorOut<C, T, [Option<T>, T], TVar> =>
        pipe(
          Constructor,
          newInstanceWith<
            StatefulContainerOperatorOut<C, T, [Option<T>, T], TVar>,
            StatefulContainerOperatorIn<C, T, [Option<T>, T], TVar>
          >(delegate),
        ),
      lift(m),
    );

export type ScanStateConstructor<
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
> = new <T, TAcc>(
  delegate: StatefulContainerOperatorIn<C, T, TAcc, TVar>,
  reducer: Reducer<T, TAcc>,
  acc: TAcc,
) => StatefulContainerOperatorOut<C, T, TAcc, TVar>;

export const scan =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (Constructor: ScanStateConstructor<C, TVar>) =>
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> =>
    pipe(
      (delegate: StatefulContainerOperatorIn<C, T, TAcc, TVar>) =>
        pipe(
          Constructor,
          newInstanceWith<
            StatefulContainerOperatorOut<C, T, TAcc, TVar>,
            StatefulContainerOperatorIn<C, T, TAcc, TVar>,
            Reducer<T, TAcc>,
            TAcc
          >(delegate, reducer, initialValue()),
        ),
      lift(m),
    );

export type SkipFirstStateConstructor<
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
> = new <T>(
  delegate: StatefulContainerOperatorIn<C, T, T, TVar>,
  skipCount: number,
) => StatefulContainerOperatorOut<C, T, T, TVar>;

export const skipFirst =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (Constructor: SkipFirstStateConstructor<C, TVar>) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;
    const operator: StatefulContainerOperator<C, T, T, TVar> = delegate =>
      pipe(
        Constructor,
        newInstanceWith<
          StatefulContainerOperatorOut<C, T, T, TVar>,
          StatefulContainerOperatorIn<C, T, T, TVar>,
          number
        >(delegate, count),
      );

    const lifted = pipe(operator, lift(m));
    return runnable => (count > 0 ? pipe(runnable, lifted) : runnable);
  };

export type TakeFirstStateContructor<
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
> = new <T>(
  delegate: StatefulContainerOperatorIn<C, T, T, TVar>,
  maxCount: number,
) => StatefulContainerOperatorOut<C, T, T, TVar>;

export const takeFirst =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: FromArray<C> & Lift<C, TVar>,
  ) =>
  (Constructor: TakeFirstStateContructor<C, TVar>) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = max(options.count ?? 1, 0) } = options;
    const operator: StatefulContainerOperator<C, T, T, TVar> = delegate =>
      pipe(
        Constructor,
        newInstanceWith<
          StatefulContainerOperatorOut<C, T, T, TVar>,
          StatefulContainerOperatorIn<C, T, T, TVar>,
          number
        >(delegate, count),
      );
    const lifted = pipe(operator, lift(m));
    return source => (count > 0 ? pipe(source, lifted) : empty(m));
  };

export type TakeWhileLiftableStateConstructor<
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
> = new <T>(
  delegate: StatefulContainerOperatorIn<C, T, T, TVar>,
  predicate: Predicate<T>,
  inclusive: boolean,
) => StatefulContainerOperatorOut<C, T, T, TVar>;

export const takeWhile =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (Constructor: TakeWhileLiftableStateConstructor<C, TVar>) =>
  <T>(
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ): ContainerOperator<C, T, T> => {
    const { inclusive = false } = options;
    return pipe(
      (delegate: StatefulContainerOperatorIn<C, T, T, TVar>) =>
        pipe(
          Constructor,
          newInstanceWith<
            StatefulContainerOperatorOut<C, T, T, TVar>,
            StatefulContainerOperatorIn<C, T, T, TVar>,
            Predicate<T>,
            boolean
          >(delegate, predicate, inclusive),
        ),
      lift(m),
    );
  };

export type ThrowIfEmptyStateConstructor<
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
> = new <T>(
  delegate: StatefulContainerOperatorIn<C, T, T, TVar>,
) => StatefulContainerOperatorOut<C, T, T, TVar> & {
  readonly isEmpty: boolean;
};

export const createThrowIfEmptyOperator =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (Constructor: ThrowIfEmptyStateConstructor<C, TVar>) =>
  <T>(factory: Factory<unknown>): ContainerOperator<C, T, T> =>
    pipe((delegate: StatefulContainerOperatorIn<C, T, T, TVar>) => {
      const lifted = pipe(
        Constructor,
        newInstanceWith<
          StatefulContainerOperatorOut<C, T, T, TVar> & {
            readonly isEmpty: boolean;
          },
          StatefulContainerOperatorIn<C, T, T, TVar>
        >(delegate),
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
