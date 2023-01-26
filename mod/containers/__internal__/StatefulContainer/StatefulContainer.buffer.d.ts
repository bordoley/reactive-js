import { StatefulContainerLike, ContainerOperator } from "../../../containers.js";
import { Function2 } from "../../../functions.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.js";
declare const StatefulContainer$buffer: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, readonly T[], TVar>, number, StatefulContainerOperatorOut<C, T, readonly T[], TVar>>) => (options?: {
    readonly maxBufferSize?: number;
}) => ContainerOperator<C, T, readonly T[]>;
export { StatefulContainer$buffer as default };
