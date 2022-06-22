import {
  AbstractContainer,
  AbstractDisposableContainer,
  Container,
  ContainerLike,
  ContainerOf,
} from "./container";
import { bindDisposables, DisposableLike } from "./disposable";
import { Equality, Function1, raise, strictEquality } from "./functions";

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

export interface Lift<C extends LiftableLike> extends Container<C> {
  lift<TA, TB>(
    operator: Function1<LiftedStateOf<C, TB>, LiftedStateOf<C, TA>>,
  ): Function1<ContainerOf<C, TA>, ContainerOf<C, TB>>;
}

export const createDistinctUntilChangedLiftedOperator = <
  C extends LiftableLike,
>(
  m: Lift<C>,
  DistinctUntilChangedLiftedState: new <T>(
    delegate: LiftedStateOf<C, T>,
    equality: Equality<T>,
  ) => LiftedStateOf<C, T>,
) => {
  return <T>(options: { readonly equality?: Equality<T> } = {}) => {
    const { equality = strictEquality } = options;
    const operator = (delegate: LiftedStateOf<C, T>): LiftedStateOf<C, T> => {
      const sink = new DistinctUntilChangedLiftedState(delegate, equality);
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };
};
