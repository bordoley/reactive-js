import { StatefulContainerLike } from "../../../containers.js";
import { Factory, Function2 } from "../../../functions.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../../__internal__/containers.internal.js";
declare const StatefulContainer_throwIfEmpty: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, Factory<unknown>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (factory: Factory<unknown>) => import("../../../containers.js").ContainerOperator<C, T, T>;
export default StatefulContainer_throwIfEmpty;
