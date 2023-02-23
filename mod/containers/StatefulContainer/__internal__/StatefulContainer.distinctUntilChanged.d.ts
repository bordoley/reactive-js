import { Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Equality, Function2 } from "../../../functions.js";
declare const StatefulContainer_distinctUntilChanged: <C extends StatefulContainerLike, T>(lift: <TA, TB>(operator: import("../../../functions.js").Function1<LiftOperatorIn<C, TA, TB>, LiftOperatorOut<C, TA, TB>>) => import("../../../containers.js").ContainerOperator<C, TA, TB>) => (operator: Function2<LiftOperatorIn<C, T, T>, Equality<T>, LiftOperatorOut<C, T, T>>) => (options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => import("../../../containers.js").ContainerOperator<C, T, T>;
export default StatefulContainer_distinctUntilChanged;
