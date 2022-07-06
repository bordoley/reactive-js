import { Container, ContainerOperator, FromArray, FromArrayOptions } from "./container.mjs";
import { Function1, Equality, Predicate, SideEffect1, Reducer, Factory } from "./functions.mjs";
import { LiftableContainerLike, TReactive, LiftableContainerStateOf, TInteractive } from "./liftable.mjs";
import { Option } from "./option.mjs";
declare type TLiftableContainerStateType = TInteractive | TReactive;
interface Lift<C extends LiftableContainerLike, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]> extends Container<C> {
    lift<TA, TB>(operator: LiftOperator<C, TA, TB, TVar>): ContainerOperator<C, TA, TB>;
}
declare type LiftOperator<C extends LiftableContainerLike, TA, TB, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]> = Function1<LiftOperatorIn<C, TA, TB, TVar>, LiftOperatorOut<C, TA, TB, TVar>>;
declare type LiftOperatorIn<C extends LiftableContainerLike, TA, TB, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]> = TVar extends TReactive ? LiftableContainerStateOf<C, TB> : LiftableContainerStateOf<C, TA>;
declare type LiftOperatorOut<C extends LiftableContainerLike, TA, TB, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]> = TVar extends TReactive ? LiftableContainerStateOf<C, TA> : LiftableContainerStateOf<C, TB>;
declare type DelegatingLiftableContainerStateOf<C extends LiftableContainerLike, T, TDelegate, TDelegateLiftableState extends LiftableContainerStateOf<C, TDelegate> = LiftableContainerStateOf<C, TDelegate>> = LiftableContainerStateOf<C, T> & {
    readonly delegate: TDelegateLiftableState;
};
declare const createDistinctUntilChangedLiftOperator: <C extends LiftableContainerLike, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]>(m: Lift<C, TVar>, DistinctUntilChangedLiftableState: new <T>(delegate: LiftableContainerStateOf<C, T>, equality: Equality<T>) => LiftableContainerStateOf<C, T>) => <T_1>(options?: {
    readonly equality?: Equality<T_1> | undefined;
}) => ContainerOperator<C, T_1, T_1>;
declare const createKeepLiftOperator: <C extends LiftableContainerLike, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]>(m: Lift<C, TVar>, KeepLiftableState: new <T>(delegate: LiftableContainerStateOf<C, T>, predicate: Predicate<T>) => LiftableContainerStateOf<C, T>) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createMapLiftOperator: <C extends LiftableContainerLike, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]>(m: Lift<C, TVar>, MapLiftableState: new <TA, TB>(delegate: LiftOperatorIn<C, TA, TB, C["TLiftableContainerState"]["TLiftableContainerStateType"]>, mapper: Function1<TA, TB>) => LiftOperatorOut<C, TA, TB, C["TLiftableContainerState"]["TLiftableContainerStateType"]>) => <TA_1, TB_1>(mapper: Function1<TA_1, TB_1>) => ContainerOperator<C, TA_1, TB_1>;
declare const createOnNotifyLiftOperator: <C extends LiftableContainerLike, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]>(m: Lift<C, TVar>, OnNotifyLiftableState: new <T>(delegate: LiftableContainerStateOf<C, T>, onNotify: SideEffect1<T>) => LiftableContainerStateOf<C, T>) => <T_1>(onNotify: SideEffect1<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createPairwiseLiftOperator: <C extends LiftableContainerLike, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]>(m: Lift<C, TVar>, PairwiseLiftableState: new <T>(delegate: LiftOperatorIn<C, T, [
    Option<T>,
    T
], C["TLiftableContainerState"]["TLiftableContainerStateType"]>) => LiftOperatorOut<C, T, [
    Option<T>,
    T
], C["TLiftableContainerState"]["TLiftableContainerStateType"]>) => <T_1>() => ContainerOperator<C, T_1, [
    Option<T_1>,
    T_1
]>;
declare const createScanLiftOperator: <C extends LiftableContainerLike, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]>(m: Lift<C, TVar>, ScanLiftableState: new <T, TAcc>(delegate: LiftOperatorIn<C, T, TAcc, C["TLiftableContainerState"]["TLiftableContainerStateType"]>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftOperatorOut<C, T, TAcc, C["TLiftableContainerState"]["TLiftableContainerStateType"]>) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createSkipFirstLiftOperator: <C extends LiftableContainerLike, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]>(m: Lift<C, TVar>, SkipLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, C["TLiftableContainerState"]["TLiftableContainerStateType"]>, skipCount: number) => LiftOperatorOut<C, T, T, C["TLiftableContainerState"]["TLiftableContainerStateType"]>) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeFirstLiftOperator: <C extends LiftableContainerLike, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]>(m: FromArray<C, FromArrayOptions> & Lift<C, TVar>, TakeFirstLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, C["TLiftableContainerState"]["TLiftableContainerStateType"]>, maxCount: number) => LiftOperatorOut<C, T, T, C["TLiftableContainerState"]["TLiftableContainerStateType"]>) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeWhileLiftOperator: <C extends LiftableContainerLike, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]>(m: Lift<C, TVar>, TakeWhileLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, C["TLiftableContainerState"]["TLiftableContainerStateType"]>, predicate: Predicate<T>, inclusive: boolean) => LiftOperatorOut<C, T, T, C["TLiftableContainerState"]["TLiftableContainerStateType"]>) => <T_1>(predicate: Predicate<T_1>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T_1, T_1>;
declare const createThrowIfEmptyLiftOperator: <C extends LiftableContainerLike, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]>(m: Lift<C, TVar>, ThrowIfEmptyLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, C["TLiftableContainerState"]["TLiftableContainerStateType"]>) => LiftOperatorOut<C, T, T, C["TLiftableContainerState"]["TLiftableContainerStateType"]> & {
    readonly isEmpty: boolean;
}) => <T_1>(factory: Factory<unknown>) => ContainerOperator<C, T_1, T_1>;
declare const getDelegate: <C extends LiftableContainerLike, T, TDelegate, TDelegateLiftableState extends LiftableContainerStateOf<C, TDelegate> = LiftableContainerStateOf<C, TDelegate>>(s: DelegatingLiftableContainerStateOf<C, T, TDelegate, TDelegateLiftableState>) => TDelegateLiftableState;
declare const lift: <C extends LiftableContainerLike, TA, TB, TVar extends TLiftableContainerStateType = C["TLiftableContainerState"]["TLiftableContainerStateType"]>(m: Lift<C, TVar>) => Function1<LiftOperator<C, TA, TB, TVar>, ContainerOperator<C, TA, TB>>;
export { DelegatingLiftableContainerStateOf, Lift, LiftOperator, LiftOperatorIn, LiftOperatorOut, createDistinctUntilChangedLiftOperator, createKeepLiftOperator, createMapLiftOperator, createOnNotifyLiftOperator, createPairwiseLiftOperator, createScanLiftOperator, createSkipFirstLiftOperator, createTakeFirstLiftOperator, createTakeWhileLiftOperator, createThrowIfEmptyLiftOperator, getDelegate, lift };
