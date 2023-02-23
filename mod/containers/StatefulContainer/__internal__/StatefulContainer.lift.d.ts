import { Lift, StatefulContainerLike } from "../../../containers.js";
declare const StatefulContainer_lift: <C extends StatefulContainerLike>({ lift, }: Lift<C>) => <TA, TB>(operator: import("../../../functions.js").Function1<import("../../../containers.js").LiftOperatorIn<C, TA, TB>, import("../../../containers.js").LiftOperatorOut<C, TA, TB>>) => import("../../../containers.js").ContainerOperator<C, TA, TB>;
export default StatefulContainer_lift;
