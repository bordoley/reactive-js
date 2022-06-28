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
  DisposableLike,
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
  pipe,
  raise,
  strictEquality,
} from "./functions";
import { Option, none } from "./option";

export interface LiftedStateLike extends DisposableLike, ContainerLike {}

export interface LiftableLike extends ContainerLike {
  readonly liftedStateType: LiftedStateLike;
}

export abstract class AbstractLiftable<TState extends LiftedStateLike>
  extends AbstractContainer
  implements LiftableLike
{
  get liftedStateType(): TState {
    return raise();
  }
}

export abstract class AbstractDisposableLiftable<TState extends LiftedStateLike>
  extends AbstractDisposableContainer
  implements LiftableLike
{
  get liftedStateType(): TState {
    return raise();
  }
}

export type LiftedStateOf<C extends LiftableLike, T> = C extends {
  readonly liftedStateType: unknown;
}
  ? (C & {
      readonly T: T;
    })["liftedStateType"]
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

export interface Lift<
  C extends LiftableLike,
  TVariance extends "covariant" | "contravariant",
> extends Container<C> {
  variance: TVariance;

  lift<TA, TB>(
    operator: LiftOperator<C, TA, TB, this>,
  ): ContainerOperator<C, TA, TB>;
}

export const lift =
  <
    C extends LiftableLike,
    TA,
    TB,
    TVariance extends "covariant" | "contravariant",
  >(
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
  M extends Lift<C, "covariant" | "contravariant">,
> = Function1<LiftOperatorIn<C, TA, TB, M>, LiftOperatorOut<C, TA, TB, M>>;

export type LiftOperatorIn<
  C extends LiftableLike,
  TA,
  TB,
  M extends Lift<C, "covariant" | "contravariant">,
> = M extends { variance?: "contravariant" }
  ? LiftedStateOf<C, TB>
  : LiftedStateOf<C, TA>;

export type LiftOperatorOut<
  C extends LiftableLike,
  TA,
  TB,
  M extends Lift<C, "covariant" | "contravariant">,
> = M extends { variance?: "contravariant" }
  ? LiftedStateOf<C, TA>
  : LiftedStateOf<C, TB>;

export const createDistinctUntilChangedLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    DistinctUntilChangedLiftableState: new <T>(
      delegate: LiftedStateOf<C, T>,
      equality: Equality<T>,
    ) => LiftedStateOf<C, T>,
  ) =>
  <T>(
    options: { readonly equality?: Equality<T> } = {},
  ): ContainerOperator<C, T, T> => {
    const { equality = strictEquality } = options;
    const operator: LiftOperator<C, T, T, typeof m> = delegate =>
      pipe(
        new DistinctUntilChangedLiftableState(delegate, equality),
        bindTo(delegate),
      );
    return pipe(operator, lift(m));
  };

export const createKeepLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    KeepLiftableState: new <T>(
      delegate: LiftedStateOf<C, T>,
      predicate: Predicate<T>,
    ) => LiftedStateOf<C, T>,
  ) =>
  <T>(predicate: Predicate<T>): ContainerOperator<C, T, T> => {
    const operator = (delegate: LiftedStateOf<C, T>): LiftedStateOf<C, T> =>
      pipe(new KeepLiftableState(delegate, predicate), bindTo(delegate));
    return pipe(operator, lift(m));
  };

export const createMapLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    MapLiftableState: new <TA, TB>(
      delegate: LiftOperatorIn<C, TA, TB, typeof m>,
      mapper: Function1<TA, TB>,
    ) => LiftOperatorOut<C, TA, TB, typeof m>,
  ) =>
  <TA, TB>(mapper: Function1<TA, TB>) =>
    pipe(
      (delegate: LiftOperatorIn<C, TA, TB, typeof m>) =>
        pipe(new MapLiftableState(delegate, mapper), bindTo(delegate)),
      lift(m),
    );

export const createOnNotifyLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    OnNotifyLiftableState: new <T>(
      delegate: LiftedStateOf<C, T>,
      onNotify: SideEffect1<T>,
    ) => LiftedStateOf<C, T>,
  ) =>
  <T>(onNotify: SideEffect1<T>) =>
    pipe(
      (delegate: LiftOperatorIn<C, T, T, typeof m>) =>
        pipe(new OnNotifyLiftableState(delegate, onNotify), bindTo(delegate)),
      lift(m),
    );

export const createPairwiseLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    PairwiseLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, [Option<T>, T], typeof m>,
    ) => LiftOperatorOut<C, T, [Option<T>, T], typeof m>,
  ) =>
  <T>() =>
    pipe(
      (delegate: LiftOperatorIn<C, T, [Option<T>, T], typeof m>) =>
        pipe(new PairwiseLiftableState(delegate), bindTo(delegate)),
      lift(m),
    );

export const createScanLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
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
          new ScanLiftableState(delegate, reducer, initialValue()),
          bindTo(delegate),
        ),
      lift(m),
    );

export const createSkipFirstLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
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
      pipe(new SkipLiftableState(delegate, count), bindTo(delegate));

    const lifted = pipe(operator, lift(m));
    return runnable => (count > 0 ? pipe(runnable, lifted) : runnable);
  };

export const createTakeFirstLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: FromArray<C> & Lift<C, TVariance>,
    TakeFirstLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, T, typeof m>,
      maxCount: number,
    ) => LiftOperatorOut<C, T, T, typeof m>,
  ) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = Math.max(options.count ?? 1, 0) } = options;
    const operator: LiftOperator<C, T, T, typeof m> = delegate =>
      pipe(new TakeFirstLiftableState(delegate, count), bindTo(delegate));
    const lifted = pipe(operator, lift(m));
    return source => (count > 0 ? pipe(source, lifted) : empty(m));
  };

export const createTakeWhileLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
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
        new TakeWhileLiftableState(delegate, predicate, inclusive),
        m.variance === "covariant" ? add(delegate) : addTo(delegate),
      );

      return lifted;
    }, lift(m));
  };

export const createThrowIfEmptyLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
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
        new ThrowIfEmptyLiftableState(delegate),
        m.variance === "covariant" ? add(delegate, true) : addTo(delegate),
      );
      const { parent, child } =
        m.variance === "covariant"
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
