import { StatefulContainerLike, ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.js";
declare const StatefulContainerLike__lift: <C extends StatefulContainerLike, TVar extends 0 | 1>({ lift, }: Lift<C, TVar>) => <TA, TB>(operator: Function1<StatefulContainerOperatorIn<C, TA, TB, TVar>, StatefulContainerOperatorOut<C, TA, TB, TVar>>) => ContainerOperator<C, TA, TB>;
export { StatefulContainerLike__lift as default };
