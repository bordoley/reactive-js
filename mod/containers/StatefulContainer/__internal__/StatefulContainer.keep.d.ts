import { Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Function2, Predicate } from "../../../functions.js";
declare const StatefulContainer_keep: <C extends StatefulContainerLike, T>(m: Lift<C>) => (operator: Function2<LiftOperatorIn<C, T, T>, Predicate<T>, LiftOperatorOut<C, T, T>>) => (predicate: Predicate<T>) => import("../../../containers.js").ContainerOperator<C, T, T>;
export default StatefulContainer_keep;
