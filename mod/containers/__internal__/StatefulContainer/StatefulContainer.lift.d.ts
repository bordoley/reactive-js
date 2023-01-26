import { StatefulContainerLike, ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.js";
declare const StatefulContainer_lift: <C extends StatefulContainerLike, TVar extends 0 | 1>({ lift, }: Lift<C, TVar>) => <TA, TB>(operator: Function1<StatefulContainerOperatorIn<C, TA, TB, TVar>, StatefulContainerOperatorOut<C, TA, TB, TVar>>) => ContainerOperator<C, TA, TB>;
export { StatefulContainer_lift as default };
