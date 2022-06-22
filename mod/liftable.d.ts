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
interface Lift<C extends LiftableLike> extends Container<C> {
    lift<TA, TB>(operator: Function1<LiftedStateOf<C, TB>, LiftedStateOf<C, TA>>): ContainerOperator<C, TA, TB>;
}
declare const createDistinctUntilChangedLiftedOperator: <C extends LiftableLike>(m: Lift<C>, DistinctUntilChangedLiftableState: new <T>(delegate: LiftedStateOf<C, T>, equality: Equality<T>) => LiftedStateOf<C, T>) => <T_1>(options?: {
    readonly equality?: Equality<T_1> | undefined;
}) => ContainerOperator<C, T_1, T_1>;
declare const createKeepLiftedOperator: <C extends LiftableLike>(m: Lift<C>, KeepLiftableState: new <T>(delegate: LiftedStateOf<C, T>, predicate: Predicate<T>) => LiftedStateOf<C, T>) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createMapLiftedOperator: <C extends LiftableLike>(m: Lift<C>, MapLiftableState: new <TA, TB>(delegate: LiftedStateOf<C, TB>, mapper: Function1<TA, TB>) => LiftedStateOf<C, TA>) => <TA_1, TB_1>(mapper: Function1<TA_1, TB_1>) => ContainerOperator<C, TA_1, TB_1>;
declare const createOnNotifyLiftedOperator: <C extends LiftableLike>(m: Lift<C>, OnNotifyLiftableState: new <T>(delegate: LiftedStateOf<C, T>, onNotify: SideEffect1<T>) => LiftedStateOf<C, T>) => <T_1>(onNotify: SideEffect1<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createPairwiseLiftdOperator: <C extends LiftableLike>(m: Lift<C>, PairwiseLiftableState: new <T>(delegate: LiftedStateOf<C, [
    Option<T>,
    T
]>) => LiftedStateOf<C, T>) => <T_1>() => ContainerOperator<C, T_1, [
    Option<T_1>,
    T_1
]>;
declare const createScanLiftedOperator: <C extends LiftableLike>(m: Lift<C>, ScanLiftableState: new <T, TAcc>(delegate: LiftedStateOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftedStateOf<C, T>) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createSkipFirstLiftedOperator: <C extends LiftableLike>(m: Lift<C>, SkipLiftableState: new <T>(delegate: LiftedStateOf<C, T>, skipCount: number) => LiftedStateOf<C, T>) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeFirstLiftdOperator: <C extends LiftableLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, TakeFirstLiftableState: new <T>(delegate: LiftedStateOf<C, T>, maxCount: number) => LiftedStateOf<C, T>) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeWhileLiftedOperator: <C extends LiftableLike>(m: Lift<C>, TakeWhileLiftableState: new <T>(delegate: LiftedStateOf<C, T>, predicate: Predicate<T>, inclusive: boolean) => LiftedStateOf<C, T>) => <T_1>(predicate: Predicate<T_1>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T_1, T_1>;
declare const createThrowIfEmptyLiftedOperator: <C extends LiftableLike>(m: Lift<C>, ThrowIfEmptyLiftableState: new <T>(delegate: LiftedStateOf<C, T>) => LiftedStateOf<C, T> & {
    readonly isEmpty: boolean;
}) => <T_1>(factory: Factory<unknown>) => ContainerOperator<C, T_1, T_1>;
export { AbstractDisposableLiftable, AbstractLiftable, Lift, LiftableLike, LiftedStateLike, LiftedStateOf, createDistinctUntilChangedLiftedOperator, createKeepLiftedOperator, createMapLiftedOperator, createOnNotifyLiftedOperator, createPairwiseLiftdOperator, createScanLiftedOperator, createSkipFirstLiftedOperator, createTakeFirstLiftdOperator, createTakeWhileLiftedOperator, createThrowIfEmptyLiftedOperator };
