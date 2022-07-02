import { ContainerOperator, FromArray, FromArrayOptions } from "./container.mjs";
import { Equality, Predicate, Function1, SideEffect1, Reducer, Factory } from "./functions.mjs";
import { LiftableLike, Variance, Lift, LiftableStateOf, LiftOperatorIn, LiftOperatorOut } from "./liftable.mjs";
import { Option } from "./option.mjs";
declare const createDistinctUntilChangedLiftOperator: <C extends LiftableLike, TVariance extends Variance>(m: Lift<C, TVariance>, DistinctUntilChangedLiftableState: new <T>(delegate: LiftableStateOf<C, T>, equality: Equality<T>) => LiftableStateOf<C, T>) => <T_1>(options?: {
    readonly equality?: Equality<T_1> | undefined;
}) => ContainerOperator<C, T_1, T_1>;
declare const createKeepLiftOperator: <C extends LiftableLike, TVariance extends Variance>(m: Lift<C, TVariance>, KeepLiftableState: new <T>(delegate: LiftableStateOf<C, T>, predicate: Predicate<T>) => LiftableStateOf<C, T>) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createMapLiftOperator: <C extends LiftableLike, TVariance extends Variance>(m: Lift<C, TVariance>, MapLiftableState: new <TA, TB>(delegate: LiftOperatorIn<C, TA, TB, Lift<C, TVariance>>, mapper: Function1<TA, TB>) => LiftOperatorOut<C, TA, TB, Lift<C, TVariance>>) => <TA_1, TB_1>(mapper: Function1<TA_1, TB_1>) => ContainerOperator<C, TA_1, TB_1>;
declare const createOnNotifyLiftOperator: <C extends LiftableLike, TVariance extends Variance>(m: Lift<C, TVariance>, OnNotifyLiftableState: new <T>(delegate: LiftableStateOf<C, T>, onNotify: SideEffect1<T>) => LiftableStateOf<C, T>) => <T_1>(onNotify: SideEffect1<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createPairwiseLiftOperator: <C extends LiftableLike, TVariance extends Variance>(m: Lift<C, TVariance>, PairwiseLiftableState: new <T>(delegate: LiftOperatorIn<C, T, [
    Option<T>,
    T
], Lift<C, TVariance>>) => LiftOperatorOut<C, T, [
    Option<T>,
    T
], Lift<C, TVariance>>) => <T_1>() => ContainerOperator<C, T_1, [
    Option<T_1>,
    T_1
]>;
declare const createScanLiftOperator: <C extends LiftableLike, TVariance extends Variance>(m: Lift<C, TVariance>, ScanLiftableState: new <T, TAcc>(delegate: LiftOperatorIn<C, T, TAcc, Lift<C, TVariance>>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftOperatorOut<C, T, TAcc, Lift<C, TVariance>>) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createSkipFirstLiftOperator: <C extends LiftableLike, TVariance extends Variance>(m: Lift<C, TVariance>, SkipLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, Lift<C, TVariance>>, skipCount: number) => LiftOperatorOut<C, T, T, Lift<C, TVariance>>) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeFirstLiftOperator: <C extends LiftableLike, TVariance extends Variance>(m: FromArray<C, FromArrayOptions> & Lift<C, TVariance>, TakeFirstLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, FromArray<C, FromArrayOptions> & Lift<C, TVariance>>, maxCount: number) => LiftOperatorOut<C, T, T, FromArray<C, FromArrayOptions> & Lift<C, TVariance>>) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeWhileLiftOperator: <C extends LiftableLike, TVariance extends Variance>(m: Lift<C, TVariance>, TakeWhileLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, Lift<C, TVariance>>, predicate: Predicate<T>, inclusive: boolean) => LiftOperatorOut<C, T, T, Lift<C, TVariance>>) => <T_1>(predicate: Predicate<T_1>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T_1, T_1>;
declare const createThrowIfEmptyLiftOperator: <C extends LiftableLike, TVariance extends Variance>(m: Lift<C, TVariance>, ThrowIfEmptyLiftableState: new <T>(delegate: LiftOperatorIn<C, T, T, Lift<C, TVariance>>) => LiftOperatorOut<C, T, T, Lift<C, TVariance>> & {
    readonly isEmpty: boolean;
}) => <T_1>(factory: Factory<unknown>) => ContainerOperator<C, T_1, T_1>;
export { createDistinctUntilChangedLiftOperator, createKeepLiftOperator, createMapLiftOperator, createOnNotifyLiftOperator, createPairwiseLiftOperator, createScanLiftOperator, createSkipFirstLiftOperator, createTakeFirstLiftOperator, createTakeWhileLiftOperator, createThrowIfEmptyLiftOperator };
