import { StatefulContainerLike, ContainerOperator } from "../../../containers.mjs";
import { Function2 } from "../../../functions.mjs";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.mjs";
declare const buffer: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, readonly T[], TVar>, number, StatefulContainerOperatorOut<C, T, readonly T[], TVar>>) => (options?: {
    readonly maxBufferSize?: number;
}) => ContainerOperator<C, T, readonly T[]>;
export { buffer as default };
