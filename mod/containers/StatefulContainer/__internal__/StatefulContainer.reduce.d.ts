import { StatefulContainerLike } from "../../../containers.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../../../containers/__internal__/containers.internal.js";
import { Factory, Function3, Reducer } from "../../../functions.js";
declare const StatefulContainer_reduce: <C extends StatefulContainerLike, T, TAcc, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function3<StatefulContainerOperatorIn<C, T, TAcc, TVar>, Reducer<T, TAcc>, Factory<TAcc>, StatefulContainerOperatorOut<C, T, TAcc, TVar>>) => (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => import("../../../containers.js").ContainerOperator<C, T, TAcc>;
export default StatefulContainer_reduce;
