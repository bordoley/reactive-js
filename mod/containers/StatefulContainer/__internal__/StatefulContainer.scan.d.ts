import { Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Factory, Function3, Reducer } from "../../../functions.js";
declare const StatefulContainer_scan: <C extends StatefulContainerLike, T, TAcc>(m: Lift<C>) => (operator: Function3<LiftOperatorIn<C, T, TAcc>, Reducer<T, TAcc>, Factory<TAcc>, LiftOperatorOut<C, T, TAcc>>) => (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => import("../../../containers.js").ContainerOperator<C, T, TAcc>;
export default StatefulContainer_scan;
