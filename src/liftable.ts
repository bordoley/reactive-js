import {
  AbstractContainer,
  AbstractDisposableContainer,
  Container,
  ContainerLike,
  ContainerOperator,
} from "./container";
import { Disposable } from "./disposable";
import { Function1, raise } from "./functions";

export interface LiftableStateLike extends Disposable, ContainerLike {}

export interface LiftableLike extends ContainerLike {
  readonly TLiftableState: LiftableStateLike;
}

export abstract class AbstractLiftable<TState extends LiftableStateLike>
  extends AbstractContainer
  implements LiftableLike
{
  get TLiftableState(): TState {
    return raise();
  }
}

export abstract class AbtractDisposableLiftable<
    TState extends LiftableStateLike,
  >
  extends AbstractDisposableContainer
  implements LiftableLike
{
  get TLiftableState(): TState {
    return raise();
  }
}

export type LiftableStateOf<C extends LiftableLike, T> = C extends {
  readonly TLiftableState: unknown;
}
  ? (C & {
      readonly T: T;
    })["TLiftableState"]
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
