import { StatefulContainerLike } from "../../../containers.js";
import { Lift } from "../../__internal__/containers.internal.js";
declare const StatefulContainer_lift: <C extends StatefulContainerLike, TVar extends 0 | 1>({ lift, }: Lift<C, TVar>) => <TA, TB>(operator: import("../../../functions.js").Function1<import("../../__internal__/containers.internal.js").StatefulContainerOperatorIn<C, TA, TB, TVar>, import("../../__internal__/containers.internal.js").StatefulContainerOperatorOut<C, TA, TB, TVar>>) => import("../../../containers.js").ContainerOperator<C, TA, TB>;
export default StatefulContainer_lift;
