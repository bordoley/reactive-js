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
import {
  LiftableContainerLike,
  LiftableContainerStateOf,
  TInteractive,
  TReactive,
  interactive,
} from "./liftable";
import { Option, none } from "./option";

type TLiftableContainerStateType = TInteractive | TReactive;

export interface Lift<
  C extends LiftableContainerLike,
  TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
> extends Container<C> {
  lift<TA, TB>(
    operator: LiftOperator<C, TA, TB, TVar>,
  ): ContainerOperator<C, TA, TB>;
}

export type LiftOperator<
  C extends LiftableContainerLike,
  TA,
  TB,
  TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
> = Function1<
  LiftOperatorIn<C, TA, TB, TVar>,
  LiftOperatorOut<C, TA, TB, TVar>
>;

export type LiftOperatorIn<
  C extends LiftableContainerLike,
  TA,
  TB,
  TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
> = TVar extends TReactive
  ? LiftableContainerStateOf<C, TB>
  : LiftableContainerStateOf<C, TA>;

export type LiftOperatorOut<
  C extends LiftableContainerLike,
  TA,
  TB,
  TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
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
  <
    C extends LiftableContainerLike,
    TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
  >(
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
    const operator: LiftOperator<C, T, T> = delegate =>
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
  <
    C extends LiftableContainerLike,
    TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
  >(
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
  <
    C extends LiftableContainerLike,
    TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
  >(
    m: Lift<C, TVar>,
    MapLiftableState: new <TA, TB>(
      delegate: LiftOperatorIn<C, TA, TB>,
      mapper: Function1<TA, TB>,
    ) => LiftOperatorOut<C, TA, TB>,
  ) =>
  <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB> =>
    pipe(
      (delegate: LiftOperatorIn<C, TA, TB>) =>
        pipe(
          MapLiftableState,
          newInstanceWith<
            LiftOperatorOut<C, TA, TB>,
            LiftOperatorIn<C, TA, TB>,
            Function1<TA, TB>
          >(delegate, mapper),
          bindTo(delegate),
        ),
      lift(m),
    );

export const createOnNotifyLiftOperator =
  <
    C extends LiftableContainerLike,
    TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
  >(
    m: Lift<C, TVar>,
    OnNotifyLiftableState: new <T>(
      delegate: LiftableContainerStateOf<C, T>,
      onNotify: SideEffect1<T>,
    ) => LiftableContainerStateOf<C, T>,
  ) =>
  <T>(onNotify: SideEffect1<T>): ContainerOperator<C, T, T> =>
    pipe(
      (delegate: LiftOperatorIn<C, T, T>) =>
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
  <
    C extends LiftableContainerLike,
    TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
  >(
    m: Lift<C, TVar>,
    PairwiseLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, [Option<T>, T]>,
    ) => LiftOperatorOut<C, T, [Option<T>, T]>,
  ) =>
  <T>(): ContainerOperator<C, T, [Option<T>, T]> =>
    pipe(
      (
        delegate: LiftOperatorIn<C, T, [Option<T>, T]>,
      ): LiftOperatorOut<C, T, [Option<T>, T]> =>
        pipe(
          PairwiseLiftableState,
          newInstanceWith<
            LiftOperatorOut<C, T, [Option<T>, T]>,
            LiftOperatorIn<C, T, [Option<T>, T]>
          >(delegate),
          bindTo(delegate),
        ),
      lift(m),
    );

export const createScanLiftOperator =
  <
    C extends LiftableContainerLike,
    TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
  >(
    m: Lift<C, TVar>,
    ScanLiftableState: new <T, TAcc>(
      delegate: LiftOperatorIn<C, T, TAcc>,
      reducer: Reducer<T, TAcc>,
      acc: TAcc,
    ) => LiftOperatorOut<C, T, TAcc>,
  ) =>
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> =>
    pipe(
      (delegate: LiftOperatorIn<C, T, TAcc>) =>
        pipe(
          ScanLiftableState,
          newInstanceWith<
            LiftOperatorOut<C, T, TAcc>,
            LiftOperatorIn<C, T, TAcc>,
            Reducer<T, TAcc>,
            TAcc
          >(delegate, reducer, initialValue()),
          bindTo(delegate),
        ),
      lift(m),
    );

export const createSkipFirstLiftOperator =
  <
    C extends LiftableContainerLike,
    TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
  >(
    m: Lift<C, TVar>,
    SkipLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, T>,
      skipCount: number,
    ) => LiftOperatorOut<C, T, T>,
  ) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;
    const operator: LiftOperator<C, T, T> = delegate =>
      pipe(
        SkipLiftableState,
        newInstanceWith<
          LiftOperatorOut<C, T, T>,
          LiftOperatorIn<C, T, T>,
          number
        >(delegate, count),
        bindTo(delegate),
      );

    const lifted = pipe(operator, lift(m));
    return runnable => (count > 0 ? pipe(runnable, lifted) : runnable);
  };

export const createTakeFirstLiftOperator =
  <
    C extends LiftableContainerLike,
    TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
  >(
    m: FromArray<C> & Lift<C, TVar>,
    TakeFirstLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, T>,
      maxCount: number,
    ) => LiftOperatorOut<C, T, T>,
  ) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = max(options.count ?? 1, 0) } = options;
    const operator: LiftOperator<C, T, T> = delegate =>
      pipe(
        TakeFirstLiftableState,
        newInstanceWith<
          LiftOperatorOut<C, T, T>,
          LiftOperatorIn<C, T, T>,
          number
        >(delegate, count),
        bindTo(delegate),
      );
    const lifted = pipe(operator, lift(m));
    return source => (count > 0 ? pipe(source, lifted) : empty(m));
  };

export const createTakeWhileLiftOperator =
  <
    C extends LiftableContainerLike,
    TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
  >(
    m: Lift<C, TVar>,
    TakeWhileLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, T>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) => LiftOperatorOut<C, T, T>,
  ) =>
  <T>(
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ): ContainerOperator<C, T, T> => {
    const { inclusive = false } = options;
    return pipe((delegate: LiftOperatorIn<C, T, T>) => {
      const lifted = pipe(
        TakeWhileLiftableState,
        newInstanceWith<
          LiftOperatorOut<C, T, T>,
          LiftOperatorIn<C, T, T>,
          Predicate<T>,
          boolean
        >(delegate, predicate, inclusive),
        bindTo(delegate),
      );

      return lifted;
    }, lift(m));
  };

export const createThrowIfEmptyLiftOperator =
  <
    C extends LiftableContainerLike,
    TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
  >(
    m: Lift<C, TVar>,
    ThrowIfEmptyLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, T>,
    ) => LiftOperatorOut<C, T, T> & {
      readonly isEmpty: boolean;
    },
  ) =>
  <T>(factory: Factory<unknown>): ContainerOperator<C, T, T> =>
    pipe((delegate: LiftOperatorIn<C, T, T>) => {
      const lifted = pipe(
        ThrowIfEmptyLiftableState,
        newInstanceWith<
          LiftOperatorOut<C, T, T> & {
            readonly isEmpty: boolean;
          },
          LiftOperatorIn<C, T, T>
        >(delegate),
        delegate.TLiftableContainerStateType === interactive
          ? add(delegate, true)
          : addTo(delegate),
      );
      const { parent, child } =
        delegate.TLiftableContainerStateType === interactive
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

export const getDelegate = <
  C extends LiftableContainerLike,
  T,
  TDelegate,
  TDelegateLiftableState extends LiftableContainerStateOf<
    C,
    TDelegate
  > = LiftableContainerStateOf<C, TDelegate>,
>(
  s: DelegatingLiftableContainerStateOf<
    C,
    T,
    TDelegate,
    TDelegateLiftableState
  >,
): TDelegateLiftableState => s.delegate;

export const lift =
  <
    C extends LiftableContainerLike,
    TA,
    TB,
    TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"],
  >(
    m: Lift<C, TVar>,
  ): Function1<LiftOperator<C, TA, TB, TVar>, ContainerOperator<C, TA, TB>> =>
  op =>
    m.lift(op);
