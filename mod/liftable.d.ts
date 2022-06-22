import { ContainerLike, AbstractContainer, AbstractDisposableContainer, Container, ContainerOf } from "./container.mjs";
import { DisposableLike } from "./disposable.mjs";
import { Function1, Equality } from "./functions.mjs";
interface LiftedStateLike extends DisposableLike, ContainerLike {
}
interface LiftableLike extends ContainerLike {
    readonly liftedStateType: LiftedStateLike;
}
declare abstract class AbstractLiftable<TState extends LiftedStateLike> extends AbstractContainer implements LiftableLike {
    get liftedStateType(): TState;
}
declare abstract class AbstractDisposableLiftable<TState extends LiftedStateLike> extends AbstractDisposableContainer implements LiftableLike {
    get liftedStateType(): TState;
}
declare type LiftedStateOf<C extends LiftableLike, T> = C extends {
    readonly liftedStateType: unknown;
} ? (C & {
    readonly T: T;
})["liftedStateType"] : {
    readonly _C: C;
    readonly _T: () => T;
};
interface Lift<C extends LiftableLike> extends Container<C> {
    lift<TA, TB>(operator: Function1<LiftedStateOf<C, TB>, LiftedStateOf<C, TA>>): Function1<ContainerOf<C, TA>, ContainerOf<C, TB>>;
}
declare const createDistinctUntilChangedLiftedOperator: <C extends LiftableLike>(m: Lift<C>, DistinctUntilChangedLiftedState: new <T>(delegate: LiftedStateOf<C, T>, equality: Equality<T>) => LiftedStateOf<C, T>) => <T_1>(options?: {
    readonly equality?: Equality<T_1> | undefined;
}) => Function1<ContainerOf<C, T_1>, ContainerOf<C, T_1>>;
export { AbstractDisposableLiftable, AbstractLiftable, Lift, LiftableLike, LiftedStateLike, LiftedStateOf, createDistinctUntilChangedLiftedOperator };
