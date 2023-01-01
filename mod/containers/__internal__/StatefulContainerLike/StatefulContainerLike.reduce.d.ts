import { StatefulContainerLike, ContainerOperator } from "../../../containers.mjs";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.mjs";
import { Function3, Reducer, Factory } from "../../../functions.mjs";
declare const StatefulContainerLike__reduce: <C extends StatefulContainerLike, T, TAcc, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function3<StatefulContainerOperatorIn<C, T, TAcc, TVar>, Reducer<T, TAcc>, Factory<TAcc>, StatefulContainerOperatorOut<C, T, TAcc, TVar>>) => (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
export { StatefulContainerLike__reduce as default };
