import { StatefulContainerLike, ContainerOperator } from "../../../containers.mjs";
import { Function1 } from "../../../functions.mjs";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.mjs";
declare const lift: <C extends StatefulContainerLike, TVar extends 0 | 1>({ lift, }: Lift<C, TVar>) => <TA, TB>(operator: Function1<StatefulContainerOperatorIn<C, TA, TB, TVar>, StatefulContainerOperatorOut<C, TA, TB, TVar>>) => ContainerOperator<C, TA, TB>;
export { lift as default };
