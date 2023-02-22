import { StatefulContainerLike } from "../../../containers.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../../../containers/__internal__/containers.internal.js";
import { Function2, Predicate } from "../../../functions.js";
declare const StatefulContainer_keep: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, Predicate<T>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (predicate: Predicate<T>) => import("../../../containers.js").ContainerOperator<C, T, T>;
export default StatefulContainer_keep;
