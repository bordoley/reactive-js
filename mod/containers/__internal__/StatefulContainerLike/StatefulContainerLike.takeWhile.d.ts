import { StatefulContainerLike, ContainerOperator } from "../../../containers.mjs";
import { Function3, Predicate } from "../../../functions.mjs";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.mjs";
declare const StatefulContainerLike__takeWhile: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function3<StatefulContainerOperatorIn<C, T, T, TVar>, Predicate<T>, boolean, StatefulContainerOperatorOut<C, T, T, TVar>>) => (predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T, T>;
export { StatefulContainerLike__takeWhile as default };
