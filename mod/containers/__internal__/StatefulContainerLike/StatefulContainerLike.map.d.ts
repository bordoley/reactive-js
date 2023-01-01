import { StatefulContainerLike, ContainerOperator } from "../../../containers.mjs";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.mjs";
import { Function2, Function1 } from "../../../functions.mjs";
declare const StatefulContainerLike__map: <C extends StatefulContainerLike, TA, TB, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, TA, TB, TVar>, Function1<TA, TB>, StatefulContainerOperatorOut<C, TA, TB, TVar>>) => (mapper: Function1<TA, TB>) => ContainerOperator<C, TA, TB>;
export { StatefulContainerLike__map as default };
