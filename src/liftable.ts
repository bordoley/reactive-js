import {
  AbstractContainer,
  AbstractDisposableContainer,
  Container,
  ContainerLike,
  ContainerOperator,
  FromArray,
  empty,
} from "./container";
import {
  Disposable,
  Error,
  add,
  addTo,
  bindTo,
  dispose,
  onComplete,
} from "./disposable";
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
  raise,
  strictEquality,
} from "./functions";
import { Option, none } from "./option";

export interface LiftableStateLike extends Disposable, ContainerLike {}

export interface LiftableLike extends ContainerLike {
  readonly liftableStateType: LiftableStateLike;
}

export abstract class AbstractLiftable<TState extends LiftableStateLike>
  extends AbstractContainer
  implements LiftableLike
{
  get liftableStateType(): TState {
    return raise();
  }
}

export abstract class AbtractDisposableLiftable<
    TState extends LiftableStateLike,
  >
  extends AbstractDisposableContainer
  implements LiftableLike
{
  get liftableStateType(): TState {
    return raise();
  }
}

export type LiftableStateOf<C extends LiftableLike, T> = C extends {
  readonly liftableStateType: unknown;
}
  ? (C & {
      readonly T: T;
    })["liftableStateType"]
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

export type DelegatingLiftableStateOf<
  C extends LiftableLike,
  T,
  TDelegate,
  TDelegateLiftableState extends LiftableStateOf<
    C,
    TDelegate
  > = LiftableStateOf<C, TDelegate>,
> = LiftableStateOf<C, T> & {
  readonly delegate: TDelegateLiftableState;
};

export const getDelegate = <
  C extends LiftableLike,
  T,
  TDelegate,
  TDelegateLiftableState extends LiftableStateOf<
    C,
    TDelegate
  > = LiftableStateOf<C, TDelegate>,
>(
  s: DelegatingLiftableStateOf<C, T, TDelegate, TDelegateLiftableState>,
): TDelegateLiftableState => s.delegate;

export type Covariant = 0;
export const covariant: Covariant = 0;
export type ContraVariant = 1;
export const contraVariant: ContraVariant = 1;
export type Variance = Covariant | ContraVariant;

export interface Lift<C extends LiftableLike, TVariance extends Variance>
  extends Container<C> {
  variance: TVariance;

  lift<TA, TB>(
    operator: LiftOperator<C, TA, TB, this>,
  ): ContainerOperator<C, TA, TB>;
}

export const lift =
  <C extends LiftableLike, TA, TB, TVariance extends Variance>(
    m: Lift<C, TVariance>,
  ): Function1<
    LiftOperator<C, TA, TB, typeof m>,
    ContainerOperator<C, TA, TB>
  > =>
  op =>
    m.lift(op);

export type LiftOperator<
  C extends LiftableLike,
  TA,
  TB,
  M extends Lift<C, Variance>,
> = Function1<LiftOperatorIn<C, TA, TB, M>, LiftOperatorOut<C, TA, TB, M>>;

export type LiftOperatorIn<
  C extends LiftableLike,
  TA,
  TB,
  M extends Lift<C, Variance>,
> = M extends { variance?: ContraVariant }
  ? LiftableStateOf<C, TB>
  : LiftableStateOf<C, TA>;

export type LiftOperatorOut<
  C extends LiftableLike,
  TA,
  TB,
  M extends Lift<C, Variance>,
> = M extends { variance?: ContraVariant }
  ? LiftableStateOf<C, TA>
  : LiftableStateOf<C, TB>;

export const createDistinctUntilChangedLiftOperator =
  <C extends LiftableLike, TVariance extends Variance>(
    m: Lift<C, TVariance>,
    DistinctUntilChangedLiftableState: new <T>(
      delegate: LiftableStateOf<C, T>,
      equality: Equality<T>,
    ) => LiftableStateOf<C, T>,
  ) =>
  <T>(
    options: { readonly equality?: Equality<T> } = {},
  ): ContainerOperator<C, T, T> => {
    const { equality = strictEquality } = options;
    const operator: LiftOperator<C, T, T, typeof m> = delegate =>
      pipe(
        DistinctUntilChangedLiftableState,
        newInstanceWith<
          LiftableStateOf<C, T>,
          LiftableStateOf<C, T>,
          Equality<T>
        >(delegate, equality),
        bindTo(delegate),
      );
    return pipe(operator, lift(m));
  };

export const createKeepLiftOperator =
  <C extends LiftableLike, TVariance extends Variance>(
    m: Lift<C, TVariance>,
    KeepLiftableState: new <T>(
      delegate: LiftableStateOf<C, T>,
      predicate: Predicate<T>,
    ) => LiftableStateOf<C, T>,
  ) =>
  <T>(predicate: Predicate<T>): ContainerOperator<C, T, T> => {
    const operator = (delegate: LiftableStateOf<C, T>): LiftableStateOf<C, T> =>
      pipe(
        KeepLiftableState,
        newInstanceWith<
          LiftableStateOf<C, T>,
          LiftableStateOf<C, T>,
          Predicate<T>
        >(delegate, predicate),
        bindTo(delegate),
      );
    return pipe(operator, lift(m));
  };

export const createMapLiftOperator =
  <C extends LiftableLike, TVariance extends Variance>(
    m: Lift<C, TVariance>,
    MapLiftableState: new <TA, TB>(
      delegate: LiftOperatorIn<C, TA, TB, typeof m>,
      mapper: Function1<TA, TB>,
    ) => LiftOperatorOut<C, TA, TB, typeof m>,
  ) =>
  <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB> =>
    pipe(
      (delegate: LiftOperatorIn<C, TA, TB, typeof m>) =>
        pipe(
          MapLiftableState,
          newInstanceWith<
            LiftOperatorOut<C, TA, TB, typeof m>,
            LiftOperatorIn<C, TA, TB, typeof m>,
            Function1<TA, TB>
          >(delegate, mapper),
          bindTo(delegate),
        ),
      lift(m),
    );

export const createOnNotifyLiftOperator =
  <C extends LiftableLike, TVariance extends Variance>(
    m: Lift<C, TVariance>,
    OnNotifyLiftableState: new <T>(
      delegate: LiftableStateOf<C, T>,
      onNotify: SideEffect1<T>,
    ) => LiftableStateOf<C, T>,
  ) =>
  <T>(onNotify: SideEffect1<T>): ContainerOperator<C, T, T> =>
    pipe(
      (delegate: LiftOperatorIn<C, T, T, typeof m>) =>
        pipe(
          OnNotifyLiftableState,
          newInstanceWith<
            LiftableStateOf<C, T>,
            LiftableStateOf<C, T>,
            SideEffect1<T>
          >(delegate, onNotify),
          bindTo(delegate),
        ),
      lift(m),
    );

export const createPairwiseLiftOperator =
  <C extends LiftableLike, TVariance extends Variance>(
    m: Lift<C, TVariance>,
    PairwiseLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, [Option<T>, T], typeof m>,
    ) => LiftOperatorOut<C, T, [Option<T>, T], typeof m>,
  ) =>
  <T>(): ContainerOperator<C, T, [Option<T>, T]> =>
    pipe(
      (
        delegate: LiftOperatorIn<C, T, [Option<T>, T], typeof m>,
      ): LiftOperatorOut<C, T, [Option<T>, T], typeof m> =>
        pipe(
          PairwiseLiftableState,
          newInstanceWith<
            LiftOperatorOut<C, T, [Option<T>, T], typeof m>,
            LiftOperatorIn<C, T, [Option<T>, T], typeof m>
          >(delegate),
          bindTo(delegate),
        ),
      lift(m),
    );

export const createScanLiftOperator =
  <C extends LiftableLike, TVariance extends Variance>(
    m: Lift<C, TVariance>,
    ScanLiftableState: new <T, TAcc>(
      delegate: LiftOperatorIn<C, T, TAcc, typeof m>,
      reducer: Reducer<T, TAcc>,
      acc: TAcc,
    ) => LiftOperatorOut<C, T, TAcc, typeof m>,
  ) =>
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> =>
    pipe(
      (delegate: LiftOperatorIn<C, T, TAcc, typeof m>) =>
        pipe(
          ScanLiftableState,
          newInstanceWith<
            LiftOperatorOut<C, T, TAcc, typeof m>,
            LiftOperatorIn<C, T, TAcc, typeof m>,
            Reducer<T, TAcc>,
            TAcc
          >(delegate, reducer, initialValue()),
          bindTo(delegate),
        ),
      lift(m),
    );

export const createSkipFirstLiftOperator =
  <C extends LiftableLike, TVariance extends Variance>(
    m: Lift<C, TVariance>,
    SkipLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, T, typeof m>,
      skipCount: number,
    ) => LiftOperatorOut<C, T, T, typeof m>,
  ) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;
    const operator: LiftOperator<C, T, T, typeof m> = delegate =>
      pipe(
        SkipLiftableState,
        newInstanceWith<
          LiftOperatorOut<C, T, T, typeof m>,
          LiftOperatorIn<C, T, T, typeof m>,
          number
        >(delegate, count),
        bindTo(delegate),
      );

    const lifted = pipe(operator, lift(m));
    return runnable => (count > 0 ? pipe(runnable, lifted) : runnable);
  };

export const createTakeFirstLiftOperator =
  <C extends LiftableLike, TVariance extends Variance>(
    m: FromArray<C> & Lift<C, TVariance>,
    TakeFirstLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, T, typeof m>,
      maxCount: number,
    ) => LiftOperatorOut<C, T, T, typeof m>,
  ) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = max(options.count ?? 1, 0) } = options;
    const operator: LiftOperator<C, T, T, typeof m> = delegate =>
      pipe(
        TakeFirstLiftableState,
        newInstanceWith<
          LiftOperatorOut<C, T, T, typeof m>,
          LiftOperatorIn<C, T, T, typeof m>,
          number
        >(delegate, count),
        bindTo(delegate),
      );
    const lifted = pipe(operator, lift(m));
    return source => (count > 0 ? pipe(source, lifted) : empty(m));
  };

export const createTakeWhileLiftOperator =
  <C extends LiftableLike, TVariance extends Variance>(
    m: Lift<C, TVariance>,
    TakeWhileLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, T, typeof m>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) => LiftOperatorOut<C, T, T, typeof m>,
  ) =>
  <T>(
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ): ContainerOperator<C, T, T> => {
    const { inclusive = false } = options;
    return pipe((delegate: LiftOperatorIn<C, T, T, typeof m>) => {
      const lifted = pipe(
        TakeWhileLiftableState,
        newInstanceWith<
          LiftOperatorOut<C, T, T, typeof m>,
          LiftOperatorIn<C, T, T, typeof m>,
          Predicate<T>,
          boolean
        >(delegate, predicate, inclusive),
        bindTo(delegate),
      );

      return lifted;
    }, lift(m));
  };

export const createThrowIfEmptyLiftOperator =
  <C extends LiftableLike, TVariance extends Variance>(
    m: Lift<C, TVariance>,
    ThrowIfEmptyLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, T, typeof m>,
    ) => LiftOperatorOut<C, T, T, typeof m> & {
      readonly isEmpty: boolean;
    },
  ) =>
  <T>(factory: Factory<unknown>): ContainerOperator<C, T, T> =>
    pipe((delegate: LiftOperatorIn<C, T, T, typeof m>) => {
      const lifted = pipe(
        ThrowIfEmptyLiftableState,
        newInstanceWith<
          LiftOperatorOut<C, T, T, typeof m> & {
            readonly isEmpty: boolean;
          },
          LiftOperatorIn<C, T, T, typeof m>
        >(delegate),
        m.variance === covariant ? add(delegate, true) : addTo(delegate),
      );
      const { parent, child } =
        m.variance === covariant
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
