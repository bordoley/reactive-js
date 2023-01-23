import { StatefulContainerLike, ContainerOperator } from "../../../containers.mjs";
import { Function2, Factory } from "../../../functions.mjs";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.mjs";
declare const StatefulContainerLike__throwIfEmpty: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, Factory<unknown>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (factory: Factory<unknown>) => ContainerOperator<C, T, T>;
export { StatefulContainerLike__throwIfEmpty as default };
