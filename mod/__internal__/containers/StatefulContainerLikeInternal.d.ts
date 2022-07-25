import { StatefulContainerLike, StatefulContainerStateOf, Container, ContainerOperator, ContainerOf } from "../../containers.mjs";
import { Function1, Reducer, Factory, Predicate } from "../../functions.mjs";
declare type StatefulContainerOperator<C extends StatefulContainerLike, TA, TB, TVar extends TInteractive | TReactive> = Function1<StatefulContainerOperatorIn<C, TA, TB, TVar>, StatefulContainerOperatorOut<C, TA, TB, TVar>>;
declare type StatefulContainerOperatorIn<C extends StatefulContainerLike, TA, TB, TVar extends TInteractive | TReactive> = TVar extends TReactive ? StatefulContainerStateOf<C, TB> : StatefulContainerStateOf<C, TA>;
declare type StatefulContainerOperatorOut<C extends StatefulContainerLike, TA, TB, TVar extends TInteractive | TReactive> = TVar extends TReactive ? StatefulContainerStateOf<C, TA> : StatefulContainerStateOf<C, TB>;
declare type TInteractive = 0;
declare const interactive: TInteractive;
declare type TReactive = 1;
declare const reactive: TReactive;
declare type Lift<C extends StatefulContainerLike, TVar extends TInteractive | TReactive> = Container<C> & {
    lift<TA, TB>(operator: StatefulContainerOperator<C, TA, TB, TVar>): ContainerOperator<C, TA, TB>;
    readonly variance: TInteractive | TReactive;
};
declare const lift: <C extends StatefulContainerLike, TA, TB, TVar extends 0 | 1>({ lift, }: Lift<C, TVar>) => Function1<StatefulContainerOperator<C, TA, TB, TVar>, ContainerOperator<C, TA, TB>>;
declare type ScanStateConstructor<C extends StatefulContainerLike, TVar extends TInteractive | TReactive> = <T, TAcc>(reducer: Reducer<T, TAcc>, acc: Factory<TAcc>) => Function1<StatefulContainerOperatorIn<C, T, TAcc, TVar>, StatefulContainerOperatorOut<C, T, TAcc, TVar>>;
declare const createScanOperator: <C extends StatefulContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>) => (Constructor: ScanStateConstructor<C, TVar>) => <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
declare type SkipFirstStateConstructor<C extends StatefulContainerLike, TVar extends TInteractive | TReactive> = <T>(skipCount: number) => Function1<StatefulContainerOperatorIn<C, T, T, TVar>, StatefulContainerOperatorOut<C, T, T, TVar>>;
declare const createSkipFirstOperator: <C extends StatefulContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>) => (Constructor: SkipFirstStateConstructor<C, TVar>) => <T>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
declare type TakeFirstStateContructor<C extends StatefulContainerLike, TVar extends TInteractive | TReactive> = <T>(maxCount: number) => Function1<StatefulContainerOperatorIn<C, T, T, TVar>, StatefulContainerOperatorOut<C, T, T, TVar>>;
declare const createTakeFirstOperator: <C extends StatefulContainerLike, TVar extends 0 | 1>(m: Container<C> & {
    empty<T>(options?: undefined): ContainerOf<C, T>;
} & {
    lift<TA, TB>(operator: StatefulContainerOperator<C, TA, TB, TVar>): ContainerOperator<C, TA, TB>;
    readonly variance: TInteractive | TReactive;
}) => (Constructor: TakeFirstStateContructor<C, TVar>) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare type TakeWhileLiftableStateConstructor<C extends StatefulContainerLike, TVar extends TInteractive | TReactive> = <T>(predicate: Predicate<T>, inclusive: boolean) => Function1<StatefulContainerOperatorIn<C, T, T, TVar>, StatefulContainerOperatorOut<C, T, T, TVar>>;
declare const createTakeWhileOperator: <C extends StatefulContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>) => (Constructor: TakeWhileLiftableStateConstructor<C, TVar>) => <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T, T>;
declare type ThrowIfEmptyStateConstructor<C extends StatefulContainerLike, TVar extends TInteractive | TReactive> = <T>() => Function1<StatefulContainerOperatorIn<C, T, T, TVar>, StatefulContainerOperatorOut<C, T, T, TVar> & {
    readonly isEmpty: boolean;
}>;
declare const createThrowIfEmptyOperator: <C extends StatefulContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>) => (Constructor: ThrowIfEmptyStateConstructor<C, TVar>) => <T>(factory: Factory<unknown>) => ContainerOperator<C, T, T>;
export { Lift, ScanStateConstructor, SkipFirstStateConstructor, StatefulContainerOperator, StatefulContainerOperatorIn, StatefulContainerOperatorOut, TInteractive, TReactive, TakeFirstStateContructor, TakeWhileLiftableStateConstructor, ThrowIfEmptyStateConstructor, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeWhileOperator, createThrowIfEmptyOperator, interactive, lift, reactive };
