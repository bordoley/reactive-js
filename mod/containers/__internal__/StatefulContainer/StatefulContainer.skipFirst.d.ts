import { StatefulContainerLike, ContainerOperator } from "../../../containers.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.js";
import { Function2 } from "../../../functions.js";
declare const StatefulContainer$skipFirst: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, number, StatefulContainerOperatorOut<C, T, T, TVar>>) => (options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
export { StatefulContainer$skipFirst as default };
