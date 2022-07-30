import { StatefulContainerLike, StatefulContainerStateOf, Container, ContainerOperator, ContainerOf } from "../../containers.mjs";
import { Function1, Function2, Function3, Predicate, Factory } from "../../functions.mjs";
declare type StatefulContainerOperatorIn<C extends StatefulContainerLike, TA, TB, TVar extends TInteractive | TReactive> = TVar extends TReactive ? StatefulContainerStateOf<C, TB> : StatefulContainerStateOf<C, TA>;
declare type StatefulContainerOperatorOut<C extends StatefulContainerLike, TA, TB, TVar extends TInteractive | TReactive> = TVar extends TReactive ? StatefulContainerStateOf<C, TA> : StatefulContainerStateOf<C, TB>;
declare type TInteractive = 0;
declare const interactive: TInteractive;
declare type TReactive = 1;
declare const reactive: TReactive;
declare type Lift<C extends StatefulContainerLike, TVar extends TInteractive | TReactive> = Container<C> & {
    lift<TA, TB>(operator: Function1<StatefulContainerOperatorIn<C, TA, TB, TVar>, StatefulContainerOperatorOut<C, TA, TB, TVar>>): ContainerOperator<C, TA, TB>;
    readonly variance: TVar;
};
declare const createSkipFirstOperator: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, number, StatefulContainerOperatorOut<C, T, T, TVar>>) => (options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
declare const createTakeFirstOperator: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Container<C> & {
    empty<T_1>(options?: undefined): ContainerOf<C, T_1>;
} & {
    lift<TA, TB>(operator: Function1<StatefulContainerOperatorIn<C, TA, TB, TVar>, StatefulContainerOperatorOut<C, TA, TB, TVar>>): ContainerOperator<C, TA, TB>;
    readonly variance: TVar;
}) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, number, StatefulContainerOperatorOut<C, T, T, TVar>>) => (options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
declare const createTakeWhileOperator: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function3<StatefulContainerOperatorIn<C, T, T, TVar>, Predicate<T>, boolean, StatefulContainerOperatorOut<C, T, T, TVar>>) => (predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T, T>;
declare const createThrowIfEmptyOperator: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function1<StatefulContainerOperatorIn<C, T, T, TVar>, StatefulContainerOperatorOut<C, T, T, TVar> & {
    readonly isEmpty: boolean;
}>) => (factory: Factory<unknown>) => ContainerOperator<C, T, T>;
export { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut, TInteractive, TReactive, createSkipFirstOperator, createTakeFirstOperator, createTakeWhileOperator, createThrowIfEmptyOperator, interactive, reactive };
