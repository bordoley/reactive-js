import { Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Function1, Function2 } from "../../../functions.js";
declare const StatefulContainer_map: <C extends StatefulContainerLike, TA, TB>(lift: <TA_1, TB_1>(operator: Function1<LiftOperatorIn<C, TA_1, TB_1>, LiftOperatorOut<C, TA_1, TB_1>>) => import("../../../containers.js").ContainerOperator<C, TA_1, TB_1>) => (operator: Function2<LiftOperatorIn<C, TA, TB>, Function1<TA, TB>, LiftOperatorOut<C, TA, TB>>) => (mapper: Function1<TA, TB>) => import("../../../containers.js").ContainerOperator<C, TA, TB>;
export default StatefulContainer_map;
