import { StatefulContainerLike, ContainerOperator } from "../../../containers.mjs";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.mjs";
import { Function2, Predicate } from "../../../functions.mjs";
declare const StatefulContainerLike__keep: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, Predicate<T>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (predicate: Predicate<T>) => ContainerOperator<C, T, T>;
export { StatefulContainerLike__keep as default };
