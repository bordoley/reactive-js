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
    return m.lift(operator);
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
    return m.lift(operator);
  };

export const createMapLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    MapLiftableState: new <TA, TB>(
      delegate: LiftOperatorIn<C, TA, TB, typeof m>,
      mapper: Function1<TA, TB>,
    ) => LiftOperatorOut<C, TA, TB, typeof m>,
  ) =>
  <TA, TB>(mapper: Function1<TA, TB>) => {
    const operator: LiftOperator<C, TA, TB, typeof m> = delegate =>
      pipe(new MapLiftableState(delegate, mapper), bindTo(delegate));
    return m.lift(operator);
  };

export const createOnNotifyLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    OnNotifyLiftableState: new <T>(
      delegate: LiftedStateOf<C, T>,
      onNotify: SideEffect1<T>,
    ) => LiftedStateOf<C, T>,
  ) =>
  <T>(onNotify: SideEffect1<T>) => {
    const operator: LiftOperator<C, T, T, typeof m> = delegate =>
      pipe(new OnNotifyLiftableState(delegate, onNotify), bindTo(delegate));
    return m.lift(operator);
  };

export const createPairwiseLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    PairwiseLiftableState: new <T>(
      delegate: LiftOperatorIn<C, T, [Option<T>, T], typeof m>,
    ) => LiftOperatorOut<C, T, [Option<T>, T], typeof m>,
  ) =>
  <T>() => {
    const operator: LiftOperator<C, T, [Option<T>, T], typeof m> = delegate =>
      pipe(new PairwiseLiftableState(delegate), bindTo(delegate));
    return m.lift(operator);
  };

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
  ): ContainerOperator<C, T, TAcc> => {
    const operator: LiftOperator<C, T, TAcc, typeof m> = delegate =>
      pipe(
        new ScanLiftableState(delegate, reducer, initialValue()),
        bindTo(delegate),
      );
    return m.lift(operator);
  };

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

    return runnable =>
      count > 0 ? pipe(runnable, m.lift(operator)) : runnable;
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
    return source => (count > 0 ? pipe(source, m.lift(operator)) : empty(m));
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
    const operator: LiftOperator<C, T, T, typeof m> = delegate => {
      const lifted = pipe(
        new TakeWhileLiftableState(delegate, predicate, inclusive),
        m.variance === "covariant" ? add(delegate) : addTo(delegate),
      );

      return lifted;
    };
    return m.lift(operator);
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
  <T>(factory: Factory<unknown>) => {
    const operator: LiftOperator<C, T, T, typeof m> = delegate => {
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
    };
    return m.lift(operator);
  };
