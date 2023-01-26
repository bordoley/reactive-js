import { StatefulContainerLike, ContainerOperator } from "../../../containers.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.js";
import { Function2, Function1 } from "../../../functions.js";
declare const StatefulContainer$map: <C extends StatefulContainerLike, TA, TB, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, TA, TB, TVar>, Function1<TA, TB>, StatefulContainerOperatorOut<C, TA, TB, TVar>>) => (mapper: Function1<TA, TB>) => ContainerOperator<C, TA, TB>;
export { StatefulContainer$map as default };
