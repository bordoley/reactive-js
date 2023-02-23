import { ContainerOperator, Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Function2 } from "../../../functions.js";
declare const StatefulContainer_takeFirst: <C extends StatefulContainerLike, T>(lift: <TA, TB>(operator: import("../../../functions.js").Function1<LiftOperatorIn<C, TA, TB>, LiftOperatorOut<C, TA, TB>>) => ContainerOperator<C, TA, TB>) => (operator: Function2<LiftOperatorIn<C, T, T>, number, LiftOperatorOut<C, T, T>>) => (options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
export default StatefulContainer_takeFirst;
