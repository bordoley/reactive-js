import { StatefulContainerLike, ContainerOperator } from "../../../containers.js";
import { Function2, SideEffect1 } from "../../../functions.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../../__internal__/containers.internal.js";
declare const StatefulContainer_forEach: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, SideEffect1<T>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (effect: SideEffect1<T>) => ContainerOperator<C, T, T>;
export { StatefulContainer_forEach as default };
