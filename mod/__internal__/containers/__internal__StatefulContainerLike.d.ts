import { StatefulContainerLike, Container, ContainerOperator, StatefulContainerLike_state, ContainerLike_T } from "../../containers.mjs";
import { Function1, Function2, Equality, SideEffect1, Predicate, Function3, Reducer, Factory } from "../../functions.mjs";
import { DisposableLike } from "../../util.mjs";
declare type StatefulContainerStateOf<C extends StatefulContainerLike, T> = C extends {
    readonly [StatefulContainerLike_state]?: DisposableLike;
} ? NonNullable<(C & {
    readonly [ContainerLike_T]: T;
})[typeof StatefulContainerLike_state]> : {
    readonly _C: C;
    readonly _T: () => T;
};
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
declare const createBufferOperator: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, readonly T[], TVar>, number, StatefulContainerOperatorOut<C, T, readonly T[], TVar>>) => (options?: {
    readonly maxBufferSize?: number;
}) => ContainerOperator<C, T, readonly T[]>;
declare const createDecodeWithCharsetOperator: <C extends StatefulContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, ArrayBuffer, string, TVar>, string, StatefulContainerOperatorOut<C, ArrayBuffer, string, TVar>>) => (charset?: string | undefined) => ContainerOperator<C, ArrayBuffer, string>;
declare const createDistinctUntilChangedOperator: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, Equality<T>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<C, T, T>;
declare const createForEachOperator: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, SideEffect1<T>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (effect: SideEffect1<T>) => ContainerOperator<C, T, T>;
declare const createKeepOperator: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, Predicate<T>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (predicate: Predicate<T>) => ContainerOperator<C, T, T>;
declare const createMapOperator: <C extends StatefulContainerLike, TA, TB, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, TA, TB, TVar>, Function1<TA, TB>, StatefulContainerOperatorOut<C, TA, TB, TVar>>) => (mapper: Function1<TA, TB>) => ContainerOperator<C, TA, TB>;
declare const createReduceOperator: <C extends StatefulContainerLike, T, TAcc, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function3<StatefulContainerOperatorIn<C, T, TAcc, TVar>, Reducer<T, TAcc>, Factory<TAcc>, StatefulContainerOperatorOut<C, T, TAcc, TVar>>) => (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
declare const createScanOperator: <C extends StatefulContainerLike, T, TAcc, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function3<StatefulContainerOperatorIn<C, T, TAcc, TVar>, Reducer<T, TAcc>, Factory<TAcc>, StatefulContainerOperatorOut<C, T, TAcc, TVar>>) => (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
declare const createSkipFirstOperator: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, number, StatefulContainerOperatorOut<C, T, T, TVar>>) => (options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
declare const createTakeFirstOperator: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, number, StatefulContainerOperatorOut<C, T, T, TVar>>) => (options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
declare const createTakeLastOperator: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, number, StatefulContainerOperatorOut<C, T, T, TVar>>) => (options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
declare const createTakeWhileOperator: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function3<StatefulContainerOperatorIn<C, T, T, TVar>, Predicate<T>, boolean, StatefulContainerOperatorOut<C, T, T, TVar>>) => (predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T, T>;
declare const createThrowIfEmptyOperator: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, Factory<unknown>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (factory: Factory<unknown>) => ContainerOperator<C, T, T>;
export { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut, TInteractive, TReactive, createBufferOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createForEachOperator, createKeepOperator, createMapOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, interactive, reactive };
