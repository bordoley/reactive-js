import { StatefulContainerLike, ContainerOperator } from "../../../containers.mjs";
import { Function2, SideEffect1 } from "../../../functions.mjs";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.mjs";
declare const StatefulContainerLike__forEach: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, SideEffect1<T>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (effect: SideEffect1<T>) => ContainerOperator<C, T, T>;
export { StatefulContainerLike__forEach as default };
