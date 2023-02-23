import { Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Function2, SideEffect1 } from "../../../functions.js";
declare const StatefulContainer_forEach: <C extends StatefulContainerLike, T>(lift: <TA, TB>(operator: import("../../../functions.js").Function1<LiftOperatorIn<C, TA, TB>, LiftOperatorOut<C, TA, TB>>) => import("../../../containers.js").ContainerOperator<C, TA, TB>) => (operator: Function2<LiftOperatorIn<C, T, T>, SideEffect1<T>, LiftOperatorOut<C, T, T>>) => (effect: SideEffect1<T>) => import("../../../containers.js").ContainerOperator<C, T, T>;
export default StatefulContainer_forEach;
