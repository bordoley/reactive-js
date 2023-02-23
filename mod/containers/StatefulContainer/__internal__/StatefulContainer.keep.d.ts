import { Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Function2, Predicate } from "../../../functions.js";
declare const StatefulContainer_keep: <C extends StatefulContainerLike, T>(lift: <TA, TB>(operator: import("../../../functions.js").Function1<LiftOperatorIn<C, TA, TB>, LiftOperatorOut<C, TA, TB>>) => import("../../../containers.js").ContainerOperator<C, TA, TB>) => (operator: Function2<LiftOperatorIn<C, T, T>, Predicate<T>, LiftOperatorOut<C, T, T>>) => (predicate: Predicate<T>) => import("../../../containers.js").ContainerOperator<C, T, T>;
export default StatefulContainer_keep;
