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
  addDisposable,
  addDisposableDisposeParentOnChildError,
  addTeardown,
  bindDisposables,
  dispose,
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
import { Option, isNone, none } from "./option";

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
  TVariance extends "covariant" | "contravariant" = "contravariant",
> extends Container<C> {
  variance?: TVariance;

  lift<TA, TB>(
    operator: LiftOperator<TA, TB, C, this>,
  ): ContainerOperator<C, TA, TB>;
}

export type LiftOperator<
  TA,
  TB,
  C extends LiftableLike,
  M extends Lift<C, "covariant" | "contravariant">,
> = Function1<LiftOperatorIn<TA, TB, C, M>, LiftOperatorOut<TA, TB, C, M>>;

export type LiftOperatorIn<
  TA,
  TB,
  C extends LiftableLike,
  M extends Lift<C, "covariant" | "contravariant">,
> = M extends { variance?: "contravariant" }
  ? LiftedStateOf<C, TB>
  : LiftedStateOf<C, TA>;

export type LiftOperatorOut<
  TA,
  TB,
  C extends LiftableLike,
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
    const operator = (delegate: LiftedStateOf<C, T>): LiftedStateOf<C, T> => {
      const sink = new DistinctUntilChangedLiftableState(delegate, equality);
      bindDisposables(sink, delegate);
      return sink;
    };
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
    const operator = (delegate: LiftedStateOf<C, T>): LiftedStateOf<C, T> => {
      const sink = new KeepLiftableState(delegate, predicate);
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };

export const createMapLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    MapLiftableState: new <TA, TB>(
      delegate: LiftOperatorIn<TA, TB, C, typeof m>,
      mapper: Function1<TA, TB>,
    ) => LiftOperatorOut<TA, TB, C, typeof m>,
  ) =>
  <TA, TB>(mapper: Function1<TA, TB>) => {
    const operator: LiftOperator<TA, TB, C, typeof m> = delegate => {
      const sink = new MapLiftableState(delegate, mapper);
      bindDisposables(sink, delegate);
      return sink;
    };
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
    const operator = (delegate: LiftedStateOf<C, T>): LiftedStateOf<C, T> => {
      const sink = new OnNotifyLiftableState(delegate, onNotify);
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };

export const createPairwiseLiftdOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    PairwiseLiftableState: new <T>(
      delegate: LiftOperatorIn<T, [Option<T>, T], C, typeof m>,
    ) => LiftOperatorOut<T, [Option<T>, T], C, typeof m>,
  ) =>
  <T>() => {
    const operator: LiftOperator<T, [Option<T>, T], C, typeof m> = delegate => {
      const sink = new PairwiseLiftableState(delegate);
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };

export const createScanLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    ScanLiftableState: new <T, TAcc>(
      delegate: LiftOperatorIn<T, TAcc, C, typeof m>,
      reducer: Reducer<T, TAcc>,
      acc: TAcc,
    ) => LiftOperatorOut<T, TAcc, C, typeof m>,
  ) =>
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> => {
    const operator: LiftOperator<T, TAcc, C, typeof m> = delegate => {
      const sink = new ScanLiftableState(delegate, reducer, initialValue());
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };

export const createSkipFirstLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    SkipLiftableState: new <T>(
      delegate: LiftedStateOf<C, T>,
      skipCount: number,
    ) => LiftedStateOf<C, T>,
  ) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;
    const operator = (delegate: LiftedStateOf<C, T>): LiftedStateOf<C, T> => {
      const sink = new SkipLiftableState(delegate, count);
      bindDisposables(sink, delegate);
      return sink;
    };
    return runnable =>
      count > 0 ? pipe(runnable, m.lift(operator)) : runnable;
  };

export const createTakeFirstLiftdOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: FromArray<C> & Lift<C, TVariance>,
    TakeFirstLiftableState: new <T>(
      delegate: LiftedStateOf<C, T>,
      maxCount: number,
    ) => LiftedStateOf<C, T>,
  ) =>
  <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;
    const operator = (delegate: LiftedStateOf<C, T>): LiftedStateOf<C, T> => {
      const sink = new TakeFirstLiftableState(delegate, count);
      bindDisposables(sink, delegate);
      return sink;
    };
    return source => (count > 0 ? pipe(source, m.lift(operator)) : empty(m));
  };

export const createTakeWhileLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    TakeWhileLiftableState: new <T>(
      delegate: LiftedStateOf<C, T>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) => LiftedStateOf<C, T>,
  ) =>
  <T>(
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ): ContainerOperator<C, T, T> => {
    const { inclusive = false } = options;
    const operator = (delegate: LiftedStateOf<C, T>): LiftedStateOf<C, T> => {
      const sink = new TakeWhileLiftableState(delegate, predicate, inclusive);
      addDisposableDisposeParentOnChildError(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };

export const createThrowIfEmptyLiftedOperator =
  <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(
    m: Lift<C, TVariance>,
    ThrowIfEmptyLiftableState: new <T>(
      delegate: LiftedStateOf<C, T>,
    ) => LiftedStateOf<C, T> & {
      readonly isEmpty: boolean;
    },
  ) =>
  <T>(factory: Factory<unknown>) => {
    const operator = (delegate: LiftedStateOf<C, T>): LiftedStateOf<C, T> => {
      const observer = new ThrowIfEmptyLiftableState(delegate);
      addDisposable(delegate, observer);
      addTeardown(observer, error => {
        if (isNone(error) && observer.isEmpty) {
          let cause: unknown = none;
          try {
            cause = factory();
          } catch (e) {
            cause = e;
          }

          error = { cause };
        }

        pipe(delegate, dispose(error));
      });
      return observer;
    };
    return m.lift(operator);
  };
