import { Container, ContainerOperator, FromArray, empty } from "./container";
import { Error, add, addTo, bindTo, dispose, onComplete } from "./disposable";
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
} from "./functions";
import { LiftableContainerLike, LiftableContainerStateOf } from "./liftable";
import { Option, none } from "./option";

export type TInteractive = 0;
export const interactive: TInteractive = 0;
export type TReactive = 1;
export const reactive: TReactive = 1;

export interface Lift<
  C extends LiftableContainerLike,
  TVar extends TInteractive | TReactive,
> extends Container<C> {
  variance: TInteractive | TReactive;
  lift<TA, TB>(
    operator: LiftOperator<C, TA, TB, TVar>,
  ): ContainerOperator<C, TA, TB>;
}

export type LiftOperator<
  C extends LiftableContainerLike,
  TA,
  TB,
  TVar extends TInteractive | TReactive,
> = Function1<
  LiftOperatorIn<C, TA, TB, TVar>,
  LiftOperatorOut<C, TA, TB, TVar>
>;

export type LiftOperatorIn<
  C extends LiftableContainerLike,
  TA,
  TB,
  TVar extends TInteractive | TReactive,
> = TVar extends TReactive
  ? LiftableContainerStateOf<C, TB>
  : LiftableContainerStateOf<C, TA>;

export type LiftOperatorOut<
  C extends LiftableContainerLike,
  TA,
  TB,
  TVar extends TInteractive | TReactive,
> = TVar extends TReactive
  ? LiftableContainerStateOf<C, TA>
  : LiftableContainerStateOf<C, TB>;

export type DelegatingLiftableContainerStateOf<
  C extends LiftableContainerLike,
  T,
  TDelegate,
  TDelegateLiftableState extends LiftableContainerStateOf<
    C,
    TDelegate
  > = LiftableContainerStateOf<C, TDelegate>,
> = LiftableContainerStateOf<C, T> & {
  readonly delegate: TDelegateLiftableState;
};

export const createDistinctUntilChangedLiftOperator =
  <C extends LiftableContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
    DistinctUntilChangedLiftableState: new <T>(
      delegate: LiftableContainerStateOf<C, T>,
      equality: Equality<T>,
    ) => LiftableContainerStateOf<C, T>,
  ) =>
  <T>(
    options: { readonly equality?: Equality<T> } = {},
  ): ContainerOperator<C, T, T> => {
    const { equality = strictEquality } = options;
    const operator: LiftOperator<C, T, T, TVar> = delegate =>
      pipe(
        DistinctUntilChangedLiftableState,
        newInstanceWith<
          LiftableContainerStateOf<C, T>,
          LiftableContainerStateOf<C, T>,
          Equality<T>
        >(delegate, equality),
        bindTo(delegate),
      );
    return pipe(operator, lift(m));
  };

export const createKeepLiftOperator =
  <C extends LiftableContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
    KeepLiftableState: new <T>(
      delegate: LiftableContainerStateOf<C, T>,
      predicate: Predicate<T>,
    ) => LiftableContainerStateOf<C, T>,
  ) =>
  <T>(predicate: Predicate<T>): ContainerOperator<C, T, T> => {
    const operator = (
      delegate: LiftableContainerStateOf<C, T>,
    ): LiftableContainerStateOf<C, T> =>
      pipe(
        KeepLiftableState,
        newInstanceWith<
          LiftableContainerStateOf<C, T>,
          LiftableContainerStateOf<C, T>,
          Predicate<T>
        >(delegate, predicate),
        bindTo(delegate),
      );
    return pipe(operator, lift(m));
  };

export const createMapLiftOperator =
  <C extends LiftableContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
    MapLiftableState: new <TA, TB>(
      delegate: LiftOperatorIn<C, TA, TB, TVar>,
      mapper: Function1<TA, TB>,
    ) => LiftOperatorOut<C, TA, TB, TVar>,
  ) =>
  <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB> =>
    pipe(
      (delegate: LiftOperatorIn<C, TA, TB, TVar>) =>
        pipe(
          MapLiftableState,
          newInstanceWith<
            LiftOperatorOut<C, TA, TB, TVar>,
            LiftOperatorIn<C, TA, TB, TVar>,
            Function1<TA, TB>
          >(delegate, mapper),
          bindTo(delegate),
        ),
      lift(m),
    );

export const createOnNotifyLiftOperator =
  <C extends LiftableContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
    OnNotifyLiftableState: new <T>(
      delegate: LiftableContainerStateOf<C, T>,
      onNotify: SideEffect1<T>,
    ) => LiftableContainerStateOf<C, T>,
  ) =>
  <T>(onNotify: SideEffect1<T>): ContainerOperator<C, T, T> =>
    pipe(
      (delegate: LiftOperatorIn<C, T, T, TVar>) =>
        pipe(
          OnNotifyLiftableState,
          newInstanceWith<
            LiftableContainerStateOf<C, T>,
            LiftableContainerStateOf<C, T>,
            SideEffect1<T>
          >(delegate, onNotify),
          bindTo(delegate),
        ),
      lift(m),
    );

export const createPairwiseLiftOperator =
  <C extends LiftableContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
    PairwiseLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, [Option<T>, T], TVar>,
    ) => LiftOperatorOut<C, T, [Option<T>, T], TVar>,
  ) =>
  <T>(): ContainerOperator<C, T, [Option<T>, T]> =>
    pipe(
      (
        delegate: LiftOperatorIn<C, T, [Option<T>, T], TVar>,
      ): LiftOperatorOut<C, T, [Option<T>, T], TVar> =>
        pipe(
          PairwiseLiftableState,
          newInstanceWith<
            LiftOperatorOut<C, T, [Option<T>, T], TVar>,
            LiftOperatorIn<C, T, [Option<T>, T], TVar>
          >(delegate),
          bindTo(delegate),
        ),
      lift(m),
    );

export const createScanLiftOperator =
  <C extends LiftableContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
    ScanLiftableState: new <T, TAcc>(
      delegate: LiftOperatorIn<C, T, TAcc, TVar>,
      reducer: Reducer<T, TAcc>,
      acc: TAcc,
    ) => LiftOperatorOut<C, T, TAcc, TVar>,
  ) =>
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> =>
    pipe(
      (delegate: LiftOperatorIn<C, T, TAcc, TVar>) =>
        pipe(
          ScanLiftableState,
          newInstanceWith<
            LiftOperatorOut<C, T, TAcc, TVar>,
            LiftOperatorIn<C, T, TAcc, TVar>,
            Reducer<T, TAcc>,
            TAcc
          >(delegate, reducer, initialValue()),
          bindTo(delegate),
        ),
      lift(m),
    );

export const createSkipFirstLiftOperator =
  <C extends LiftableContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
    SkipLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, T, TVar>,
      skipCount: number,
    ) => LiftOperatorOut<C, T, T, TVar>,
  ) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;
    const operator: LiftOperator<C, T, T, TVar> = delegate =>
      pipe(
        SkipLiftableState,
        newInstanceWith<
          LiftOperatorOut<C, T, T, TVar>,
          LiftOperatorIn<C, T, T, TVar>,
          number
        >(delegate, count),
        bindTo(delegate),
      );

    const lifted = pipe(operator, lift(m));
    return runnable => (count > 0 ? pipe(runnable, lifted) : runnable);
  };

export const createTakeFirstLiftOperator =
  <C extends LiftableContainerLike, TVar extends TInteractive | TReactive>(
    m: FromArray<C> & Lift<C, TVar>,
    TakeFirstLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, T, TVar>,
      maxCount: number,
    ) => LiftOperatorOut<C, T, T, TVar>,
  ) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = max(options.count ?? 1, 0) } = options;
    const operator: LiftOperator<C, T, T, TVar> = delegate =>
      pipe(
        TakeFirstLiftableState,
        newInstanceWith<
          LiftOperatorOut<C, T, T, TVar>,
          LiftOperatorIn<C, T, T, TVar>,
          number
        >(delegate, count),
        bindTo(delegate),
      );
    const lifted = pipe(operator, lift(m));
    return source => (count > 0 ? pipe(source, lifted) : empty(m));
  };

export const createTakeWhileLiftOperator =
  <C extends LiftableContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
    TakeWhileLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, T, TVar>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) => LiftOperatorOut<C, T, T, TVar>,
  ) =>
  <T>(
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ): ContainerOperator<C, T, T> => {
    const { inclusive = false } = options;
    return pipe((delegate: LiftOperatorIn<C, T, T, TVar>) => {
      const lifted = pipe(
        TakeWhileLiftableState,
        newInstanceWith<
          LiftOperatorOut<C, T, T, TVar>,
          LiftOperatorIn<C, T, T, TVar>,
          Predicate<T>,
          boolean
        >(delegate, predicate, inclusive),
        bindTo(delegate),
      );

      return lifted;
    }, lift(m));
  };

export const createThrowIfEmptyLiftOperator =
  <C extends LiftableContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
    ThrowIfEmptyLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, T, TVar>,
    ) => LiftOperatorOut<C, T, T, TVar> & {
      readonly isEmpty: boolean;
    },
  ) =>
  <T>(factory: Factory<unknown>): ContainerOperator<C, T, T> =>
    pipe((delegate: LiftOperatorIn<C, T, T, TVar>) => {
      const lifted = pipe(
        ThrowIfEmptyLiftableState,
        newInstanceWith<
          LiftOperatorOut<C, T, T, TVar> & {
            readonly isEmpty: boolean;
          },
          LiftOperatorIn<C, T, T, TVar>
        >(delegate),
        m.variance === interactive ? add(delegate, true) : addTo(delegate),
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

export const lift =
  <
    C extends LiftableContainerLike,
    TA,
    TB,
    TVar extends TInteractive | TReactive,
  >(
    m: Lift<C, TVar>,
  ): Function1<LiftOperator<C, TA, TB, TVar>, ContainerOperator<C, TA, TB>> =>
  op =>
    m.lift(op);
