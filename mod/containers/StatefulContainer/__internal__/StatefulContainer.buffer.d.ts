import { Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Function2 } from "../../../functions.js";
declare const StatefulContainer_buffer: <C extends StatefulContainerLike, T>(m: Lift<C>) => (operator: Function2<LiftOperatorIn<C, T, readonly T[]>, number, LiftOperatorOut<C, T, readonly T[]>>) => (options?: {
    readonly maxBufferSize?: number;
}) => import("../../../containers.js").ContainerOperator<C, T, readonly T[]>;
export default StatefulContainer_buffer;
