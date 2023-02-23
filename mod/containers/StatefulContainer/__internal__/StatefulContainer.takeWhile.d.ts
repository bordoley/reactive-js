import { ContainerOperator, Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Function3, Predicate } from "../../../functions.js";
declare const StatefulContainer_takeWhile: <C extends StatefulContainerLike, T>(lift: <TA, TB>(operator: import("../../../functions.js").Function1<LiftOperatorIn<C, TA, TB>, LiftOperatorOut<C, TA, TB>>) => ContainerOperator<C, TA, TB>) => (operator: Function3<LiftOperatorIn<C, T, T>, Predicate<T>, boolean, LiftOperatorOut<C, T, T>>) => (predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T, T>;
export default StatefulContainer_takeWhile;
