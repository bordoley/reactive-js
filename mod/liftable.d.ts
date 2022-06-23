import { ContainerLike, AbstractContainer, AbstractDisposableContainer, Container, ContainerOperator, FromArray, FromArrayOptions } from "./container.mjs";
import { DisposableLike } from "./disposable.mjs";
import { Function1, Equality, Predicate, SideEffect1, Reducer, Factory } from "./functions.mjs";
import { Option } from "./option.mjs";
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
interface Lift<C extends LiftableLike, TVariance extends "covariant" | "contravariant" = "contravariant"> extends Container<C> {
    variance?: TVariance;
    lift<TA, TB>(operator: LiftOperator<TA, TB, C, this>): ContainerOperator<C, TA, TB>;
}
declare type LiftOperator<TA, TB, C extends LiftableLike, M extends Lift<C, "covariant" | "contravariant">> = Function1<LiftOperatorIn<TA, TB, C, M>, LiftOperatorOut<TA, TB, C, M>>;
declare type LiftOperatorIn<TA, TB, C extends LiftableLike, M extends Lift<C, "covariant" | "contravariant">> = M extends {
    variance?: "contravariant";
} ? LiftedStateOf<C, TB> : LiftedStateOf<C, TA>;
declare type LiftOperatorOut<TA, TB, C extends LiftableLike, M extends Lift<C, "covariant" | "contravariant">> = M extends {
    variance?: "contravariant";
} ? LiftedStateOf<C, TA> : LiftedStateOf<C, TB>;
declare const createDistinctUntilChangedLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, DistinctUntilChangedLiftableState: new <T>(delegate: LiftedStateOf<C, T>, equality: Equality<T>) => LiftedStateOf<C, T>) => <T_1>(options?: {
    readonly equality?: Equality<T_1> | undefined;
}) => ContainerOperator<C, T_1, T_1>;
declare const createKeepLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, KeepLiftableState: new <T>(delegate: LiftedStateOf<C, T>, predicate: Predicate<T>) => LiftedStateOf<C, T>) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createMapLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, MapLiftableState: new <TA, TB>(delegate: LiftOperatorIn<TA, TB, C, Lift<C, TVariance>>, mapper: Function1<TA, TB>) => LiftOperatorOut<TA, TB, C, Lift<C, TVariance>>) => <TA_1, TB_1>(mapper: Function1<TA_1, TB_1>) => ContainerOperator<C, TA_1, TB_1>;
declare const createOnNotifyLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, OnNotifyLiftableState: new <T>(delegate: LiftedStateOf<C, T>, onNotify: SideEffect1<T>) => LiftedStateOf<C, T>) => <T_1>(onNotify: SideEffect1<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createPairwiseLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, PairwiseLiftableState: new <T>(delegate: LiftOperatorIn<T, [
    Option<T>,
    T
], C, Lift<C, TVariance>>) => LiftOperatorOut<T, [
    Option<T>,
    T
], C, Lift<C, TVariance>>) => <T_1>() => ContainerOperator<C, T_1, [
    Option<T_1>,
    T_1
]>;
declare const createScanLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, ScanLiftableState: new <T, TAcc>(delegate: LiftOperatorIn<T, TAcc, C, Lift<C, TVariance>>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftOperatorOut<T, TAcc, C, Lift<C, TVariance>>) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createSkipFirstLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, SkipLiftableState: new <T>(delegate: LiftedStateOf<C, T>, skipCount: number) => LiftedStateOf<C, T>) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeFirstLiftdOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: FromArray<C, FromArrayOptions> & Lift<C, TVariance>, TakeFirstLiftableState: new <T>(delegate: LiftedStateOf<C, T>, maxCount: number) => LiftedStateOf<C, T>) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeWhileLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, TakeWhileLiftableState: new <T>(delegate: LiftedStateOf<C, T>, predicate: Predicate<T>, inclusive: boolean) => LiftedStateOf<C, T>) => <T_1>(predicate: Predicate<T_1>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T_1, T_1>;
declare const createThrowIfEmptyLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, ThrowIfEmptyLiftableState: new <T>(delegate: LiftedStateOf<C, T>) => LiftedStateOf<C, T> & {
    readonly isEmpty: boolean;
}) => <T_1>(factory: Factory<unknown>) => ContainerOperator<C, T_1, T_1>;
export { AbstractDisposableLiftable, AbstractLiftable, Lift, LiftOperator, LiftOperatorIn, LiftOperatorOut, LiftableLike, LiftedStateLike, LiftedStateOf, createDistinctUntilChangedLiftedOperator, createKeepLiftedOperator, createMapLiftedOperator, createOnNotifyLiftedOperator, createPairwiseLiftedOperator, createScanLiftedOperator, createSkipFirstLiftedOperator, createTakeFirstLiftdOperator, createTakeWhileLiftedOperator, createThrowIfEmptyLiftedOperator };
