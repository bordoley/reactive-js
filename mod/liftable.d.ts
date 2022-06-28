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
interface Lift<C extends LiftableLike, TVariance extends "covariant" | "contravariant"> extends Container<C> {
    variance: TVariance;
    lift<TA, TB>(operator: LiftOperator<C, TA, TB, this>): ContainerOperator<C, TA, TB>;
}
declare const lift: <C extends LiftableLike, TA, TB, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>) => Function1<LiftOperator<C, TA, TB, Lift<C, TVariance>>, ContainerOperator<C, TA, TB>>;
declare type LiftOperator<C extends LiftableLike, TA, TB, M extends Lift<C, "covariant" | "contravariant">> = Function1<LiftOperatorIn<C, TA, TB, M>, LiftOperatorOut<C, TA, TB, M>>;
declare type LiftOperatorIn<C extends LiftableLike, TA, TB, M extends Lift<C, "covariant" | "contravariant">> = M extends {
    variance?: "contravariant";
} ? LiftedStateOf<C, TB> : LiftedStateOf<C, TA>;
declare type LiftOperatorOut<C extends LiftableLike, TA, TB, M extends Lift<C, "covariant" | "contravariant">> = M extends {
    variance?: "contravariant";
} ? LiftedStateOf<C, TA> : LiftedStateOf<C, TB>;
declare const createDistinctUntilChangedLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, DistinctUntilChangedLiftableState: new <T>(delegate: LiftedStateOf<C, T>, equality: Equality<T>) => LiftedStateOf<C, T>) => <T_1>(options?: {
    readonly equality?: Equality<T_1> | undefined;
}) => ContainerOperator<C, T_1, T_1>;
declare const createKeepLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, KeepLiftableState: new <T>(delegate: LiftedStateOf<C, T>, predicate: Predicate<T>) => LiftedStateOf<C, T>) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createMapLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, MapLiftableState: new <TA, TB>(delegate: LiftOperatorIn<C, TA, TB, Lift<C, TVariance>>, mapper: Function1<TA, TB>) => LiftOperatorOut<C, TA, TB, Lift<C, TVariance>>) => <TA_1, TB_1>(mapper: Function1<TA_1, TB_1>) => ContainerOperator<C, TA_1, TB_1>;
declare const createOnNotifyLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, OnNotifyLiftableState: new <T>(delegate: LiftedStateOf<C, T>, onNotify: SideEffect1<T>) => LiftedStateOf<C, T>) => <T_1>(onNotify: SideEffect1<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createPairwiseLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, PairwiseLiftableState: new <T>(delegate: LiftOperatorIn<C, T, [
    Option<T>,
    T
], Lift<C, TVariance>>) => LiftOperatorOut<C, T, [
    Option<T>,
    T
], Lift<C, TVariance>>) => <T_1>() => ContainerOperator<C, T_1, [
    Option<T_1>,
    T_1
]>;
declare const createScanLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, ScanLiftableState: new <T, TAcc>(delegate: LiftOperatorIn<C, T, TAcc, Lift<C, TVariance>>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftOperatorOut<C, T, TAcc, Lift<C, TVariance>>) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createSkipFirstLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, SkipLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, Lift<C, TVariance>>, skipCount: number) => LiftOperatorOut<C, T, T, Lift<C, TVariance>>) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeFirstLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: FromArray<C, FromArrayOptions> & Lift<C, TVariance>, TakeFirstLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, FromArray<C, FromArrayOptions> & Lift<C, TVariance>>, maxCount: number) => LiftOperatorOut<C, T, T, FromArray<C, FromArrayOptions> & Lift<C, TVariance>>) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeWhileLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, TakeWhileLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, Lift<C, TVariance>>, predicate: Predicate<T>, inclusive: boolean) => LiftOperatorOut<C, T, T, Lift<C, TVariance>>) => <T_1>(predicate: Predicate<T_1>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T_1, T_1>;
declare const createThrowIfEmptyLiftedOperator: <C extends LiftableLike, TVariance extends "covariant" | "contravariant">(m: Lift<C, TVariance>, ThrowIfEmptyLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, Lift<C, TVariance>>) => LiftOperatorOut<C, T, T, Lift<C, TVariance>> & {
    readonly isEmpty: boolean;
}) => <T_1>(factory: Factory<unknown>) => ContainerOperator<C, T_1, T_1>;
export { AbstractDisposableLiftable, AbstractLiftable, Lift, LiftOperator, LiftOperatorIn, LiftOperatorOut, LiftableLike, LiftedStateLike, LiftedStateOf, createDistinctUntilChangedLiftedOperator, createKeepLiftedOperator, createMapLiftedOperator, createOnNotifyLiftedOperator, createPairwiseLiftedOperator, createScanLiftedOperator, createSkipFirstLiftedOperator, createTakeFirstLiftedOperator, createTakeWhileLiftedOperator, createThrowIfEmptyLiftedOperator, lift };
