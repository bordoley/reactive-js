import { Container, ContainerOperator, FromArray, FromArrayOptions } from "./container.mjs";
import { Function1, Equality, Predicate, SideEffect1, Reducer, Factory } from "./functions.mjs";
import { LiftableContainerLike, LiftableContainerStateOf } from "./liftable.mjs";
import { Option } from "./option.mjs";
declare type TInteractive = 0;
declare const interactive: TInteractive;
declare type TReactive = 1;
declare const reactive: TReactive;
interface Lift<C extends LiftableContainerLike, TVar extends TInteractive | TReactive> extends Container<C> {
    variance: TInteractive | TReactive;
    lift<TA, TB>(operator: LiftOperator<C, TA, TB, TVar>): ContainerOperator<C, TA, TB>;
}
declare type LiftOperator<C extends LiftableContainerLike, TA, TB, TVar extends TInteractive | TReactive> = Function1<LiftOperatorIn<C, TA, TB, TVar>, LiftOperatorOut<C, TA, TB, TVar>>;
declare type LiftOperatorIn<C extends LiftableContainerLike, TA, TB, TVar extends TInteractive | TReactive> = TVar extends TReactive ? LiftableContainerStateOf<C, TB> : LiftableContainerStateOf<C, TA>;
declare type LiftOperatorOut<C extends LiftableContainerLike, TA, TB, TVar extends TInteractive | TReactive> = TVar extends TReactive ? LiftableContainerStateOf<C, TA> : LiftableContainerStateOf<C, TB>;
declare type DelegatingLiftableContainerStateOf<C extends LiftableContainerLike, T, TDelegate, TDelegateLiftableState extends LiftableContainerStateOf<C, TDelegate> = LiftableContainerStateOf<C, TDelegate>> = LiftableContainerStateOf<C, T> & {
    readonly delegate: TDelegateLiftableState;
};
declare const createDistinctUntilChangedLiftOperator: <C extends LiftableContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>, DistinctUntilChangedLiftableState: new <T>(delegate: LiftableContainerStateOf<C, T>, equality: Equality<T>) => LiftableContainerStateOf<C, T>) => <T_1>(options?: {
    readonly equality?: Equality<T_1> | undefined;
}) => ContainerOperator<C, T_1, T_1>;
declare const createKeepLiftOperator: <C extends LiftableContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>, KeepLiftableState: new <T>(delegate: LiftableContainerStateOf<C, T>, predicate: Predicate<T>) => LiftableContainerStateOf<C, T>) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createMapLiftOperator: <C extends LiftableContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>, MapLiftableState: new <TA, TB>(delegate: LiftOperatorIn<C, TA, TB, TVar>, mapper: Function1<TA, TB>) => LiftOperatorOut<C, TA, TB, TVar>) => <TA_1, TB_1>(mapper: Function1<TA_1, TB_1>) => ContainerOperator<C, TA_1, TB_1>;
declare const createOnNotifyLiftOperator: <C extends LiftableContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>, OnNotifyLiftableState: new <T>(delegate: LiftableContainerStateOf<C, T>, onNotify: SideEffect1<T>) => LiftableContainerStateOf<C, T>) => <T_1>(onNotify: SideEffect1<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createPairwiseLiftOperator: <C extends LiftableContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>, PairwiseLiftableState: new <T>(delegate: LiftOperatorIn<C, T, [
    Option<T>,
    T
], TVar>) => LiftOperatorOut<C, T, [
    Option<T>,
    T
], TVar>) => <T_1>() => ContainerOperator<C, T_1, [
    Option<T_1>,
    T_1
]>;
declare const createScanLiftOperator: <C extends LiftableContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>, ScanLiftableState: new <T, TAcc>(delegate: LiftOperatorIn<C, T, TAcc, TVar>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftOperatorOut<C, T, TAcc, TVar>) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createSkipFirstLiftOperator: <C extends LiftableContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>, SkipLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, TVar>, skipCount: number) => LiftOperatorOut<C, T, T, TVar>) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeFirstLiftOperator: <C extends LiftableContainerLike, TVar extends 0 | 1>(m: FromArray<C, FromArrayOptions> & Lift<C, TVar>, TakeFirstLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, TVar>, maxCount: number) => LiftOperatorOut<C, T, T, TVar>) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeWhileLiftOperator: <C extends LiftableContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>, TakeWhileLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, TVar>, predicate: Predicate<T>, inclusive: boolean) => LiftOperatorOut<C, T, T, TVar>) => <T_1>(predicate: Predicate<T_1>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T_1, T_1>;
declare const createThrowIfEmptyLiftOperator: <C extends LiftableContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>, ThrowIfEmptyLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, TVar>) => LiftOperatorOut<C, T, T, TVar> & {
    readonly isEmpty: boolean;
}) => <T_1>(factory: Factory<unknown>) => ContainerOperator<C, T_1, T_1>;
declare const lift: <C extends LiftableContainerLike, TA, TB, TVar extends 0 | 1>(m: Lift<C, TVar>) => Function1<LiftOperator<C, TA, TB, TVar>, ContainerOperator<C, TA, TB>>;
export { DelegatingLiftableContainerStateOf, Lift, LiftOperator, LiftOperatorIn, LiftOperatorOut, TInteractive, TReactive, createDistinctUntilChangedLiftOperator, createKeepLiftOperator, createMapLiftOperator, createOnNotifyLiftOperator, createPairwiseLiftOperator, createScanLiftOperator, createSkipFirstLiftOperator, createTakeFirstLiftOperator, createTakeWhileLiftOperator, createThrowIfEmptyLiftOperator, interactive, lift, reactive };
