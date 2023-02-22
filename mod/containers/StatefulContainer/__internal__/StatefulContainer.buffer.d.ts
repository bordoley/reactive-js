import { StatefulContainerLike } from "../../../containers.js";
import { Function2 } from "../../../functions.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../../__internal__/containers.internal.js";
declare const StatefulContainer_buffer: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, readonly T[], TVar>, number, StatefulContainerOperatorOut<C, T, readonly T[], TVar>>) => (options?: {
    readonly maxBufferSize?: number;
}) => import("../../../containers.js").ContainerOperator<C, T, readonly T[]>;
export default StatefulContainer_buffer;
