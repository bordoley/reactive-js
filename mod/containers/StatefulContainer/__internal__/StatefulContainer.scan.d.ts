import { Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Factory, Function3, Reducer } from "../../../functions.js";
declare const StatefulContainer_scan: <C extends StatefulContainerLike, T, TAcc>(lift: <TA, TB>(operator: import("../../../functions.js").Function1<LiftOperatorIn<C, TA, TB>, LiftOperatorOut<C, TA, TB>>) => import("../../../containers.js").ContainerOperator<C, TA, TB>) => (operator: Function3<LiftOperatorIn<C, T, TAcc>, Reducer<T, TAcc>, Factory<TAcc>, LiftOperatorOut<C, T, TAcc>>) => (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => import("../../../containers.js").ContainerOperator<C, T, TAcc>;
export default StatefulContainer_scan;
