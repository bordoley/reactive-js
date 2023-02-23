import { Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Factory, Function2 } from "../../../functions.js";
declare const StatefulContainer_throwIfEmpty: <C extends StatefulContainerLike, T>(m: Lift<C>) => (operator: Function2<LiftOperatorIn<C, T, T>, Factory<unknown>, LiftOperatorOut<C, T, T>>) => (factory: Factory<unknown>) => import("../../../containers.js").ContainerOperator<C, T, T>;
export default StatefulContainer_throwIfEmpty;
