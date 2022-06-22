import {
  AbstractContainer,
  AbstractDisposableContainer,
  Container,
  ContainerLike,
  ContainerOperator,
  empty,
  FromArray,
} from "./container";
import {
  addDisposable,
  addDisposableDisposeParentOnChildError,
  addTeardown,
  bindDisposables,
  DisposableLike,
} from "./disposable";
import {
  Equality,
  Factory,
  Function1,
  pipe,
  Predicate,
  raise,
  Reducer,
  SideEffect1,
  strictEquality,
} from "./functions";
import { isNone, none, Option } from "./option";

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
    operator: this extends { variance?: "contravariant" }
      ? Function1<LiftedStateOf<C, TB>, LiftedStateOf<C, TA>>
      : Function1<LiftedStateOf<C, TA>, LiftedStateOf<C, TB>>,
  ): ContainerOperator<C, TA, TB>;
}

export const createDistinctUntilChangedLiftedOperator =
  <C extends LiftableLike>(
    m: Lift<C>,
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
  <C extends LiftableLike>(
    m: Lift<C>,
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
  <C extends LiftableLike>(
    m: Lift<C>,
    MapLiftableState: new <TA, TB>(
      delegate: LiftedStateOf<C, TB>,
      mapper: Function1<TA, TB>,
    ) => LiftedStateOf<C, TA>,
  ) =>
  <TA, TB>(mapper: Function1<TA, TB>) => {
    const operator = (delegate: LiftedStateOf<C, TB>): LiftedStateOf<C, TA> => {
      const sink = new MapLiftableState(delegate, mapper);
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };

export const createOnNotifyLiftedOperator =
  <C extends LiftableLike>(
    m: Lift<C>,
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
  <C extends LiftableLike>(
    m: Lift<C>,
    PairwiseLiftableState: new <T>(
      delegate: LiftedStateOf<C, [Option<T>, T]>,
    ) => LiftedStateOf<C, T>,
  ) =>
  <T>() => {
    const operator = (
      delegate: LiftedStateOf<C, [Option<T>, T]>,
    ): LiftedStateOf<C, T> => {
      const sink = new PairwiseLiftableState(delegate);
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };

export const createScanLiftedOperator =
  <C extends LiftableLike>(
    m: Lift<C>,
    ScanLiftableState: new <T, TAcc>(
      delegate: LiftedStateOf<C, TAcc>,
      reducer: Reducer<T, TAcc>,
      acc: TAcc,
    ) => LiftedStateOf<C, T>,
  ) =>
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> => {
    const operator = (
      delegate: LiftedStateOf<C, TAcc>,
    ): LiftedStateOf<C, T> => {
      const sink = new ScanLiftableState(delegate, reducer, initialValue());
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };

export const createSkipFirstLiftedOperator =
  <C extends LiftableLike>(
    m: Lift<C>,
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
  <C extends LiftableLike>(
    m: FromArray<C> & Lift<C>,
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
  <C extends LiftableLike>(
    m: Lift<C>,
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
  <C extends LiftableLike>(
    m: Lift<C>,
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

        delegate.dispose(error);
      });
      return observer;
    };
    return m.lift(operator);
  };
