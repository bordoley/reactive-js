import { StatefulContainerLike, ContainerOperator } from "../../../containers.js";
import { Function2 } from "../../../functions.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.js";
declare const StatefulContainer_takeFirst: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, number, StatefulContainerOperatorOut<C, T, T, TVar>>) => (options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
export { StatefulContainer_takeFirst as default };
