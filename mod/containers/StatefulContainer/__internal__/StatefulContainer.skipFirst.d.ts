import { ContainerOperator, Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Function2 } from "../../../functions.js";
declare const StatefulContainer_skipFirst: <C extends StatefulContainerLike, T>(m: Lift<C>) => (operator: Function2<LiftOperatorIn<C, T, T>, number, LiftOperatorOut<C, T, T>>) => (options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
export default StatefulContainer_skipFirst;
