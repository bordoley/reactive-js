import { ContainerLike, AbstractContainer, AbstractDisposableContainer, Container, ContainerOperator } from "./container.mjs";
import { Disposable } from "./disposable.mjs";
import { Function1 } from "./functions.mjs";
interface LiftableStateLike extends Disposable, ContainerLike {
}
interface LiftableLike extends ContainerLike {
    readonly liftableStateType: LiftableStateLike;
}
declare abstract class AbstractLiftable<TState extends LiftableStateLike> extends AbstractContainer implements LiftableLike {
    get liftableStateType(): TState;
}
declare abstract class AbtractDisposableLiftable<TState extends LiftableStateLike> extends AbstractDisposableContainer implements LiftableLike {
    get liftableStateType(): TState;
}
declare type LiftableStateOf<C extends LiftableLike, T> = C extends {
    readonly liftableStateType: unknown;
} ? (C & {
    readonly T: T;
})["liftableStateType"] : {
    readonly _C: C;
    readonly _T: () => T;
};
declare type DelegatingLiftableStateOf<C extends LiftableLike, T, TDelegate, TDelegateLiftableState extends LiftableStateOf<C, TDelegate> = LiftableStateOf<C, TDelegate>> = LiftableStateOf<C, T> & {
    readonly delegate: TDelegateLiftableState;
};
declare const getDelegate: <C extends LiftableLike, T, TDelegate, TDelegateLiftableState extends LiftableStateOf<C, TDelegate> = LiftableStateOf<C, TDelegate>>(s: DelegatingLiftableStateOf<C, T, TDelegate, TDelegateLiftableState>) => TDelegateLiftableState;
declare type Covariant = 0;
declare const covariant: Covariant;
declare type ContraVariant = 1;
declare const contraVariant: ContraVariant;
declare type Variance = Covariant | ContraVariant;
interface Lift<C extends LiftableLike, TVariance extends Variance> extends Container<C> {
    variance: TVariance;
    lift<TA, TB>(operator: LiftOperator<C, TA, TB, this>): ContainerOperator<C, TA, TB>;
}
declare const lift: <C extends LiftableLike, TA, TB, TVariance extends Variance>(m: Lift<C, TVariance>) => Function1<LiftOperator<C, TA, TB, Lift<C, TVariance>>, ContainerOperator<C, TA, TB>>;
declare type LiftOperator<C extends LiftableLike, TA, TB, M extends Lift<C, Variance>> = Function1<LiftOperatorIn<C, TA, TB, M>, LiftOperatorOut<C, TA, TB, M>>;
declare type LiftOperatorIn<C extends LiftableLike, TA, TB, M extends Lift<C, Variance>> = M extends {
    variance?: ContraVariant;
} ? LiftableStateOf<C, TB> : LiftableStateOf<C, TA>;
declare type LiftOperatorOut<C extends LiftableLike, TA, TB, M extends Lift<C, Variance>> = M extends {
    variance?: ContraVariant;
} ? LiftableStateOf<C, TA> : LiftableStateOf<C, TB>;
export { AbstractLiftable, AbtractDisposableLiftable, ContraVariant, Covariant, DelegatingLiftableStateOf, Lift, LiftOperator, LiftOperatorIn, LiftOperatorOut, LiftableLike, LiftableStateLike, LiftableStateOf, Variance, contraVariant, covariant, getDelegate, lift };
