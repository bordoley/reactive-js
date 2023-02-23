import { Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Equality, Function2 } from "../../../functions.js";
declare const StatefulContainer_distinctUntilChanged: <C extends StatefulContainerLike, T>(m: Lift<C>) => (operator: Function2<LiftOperatorIn<C, T, T>, Equality<T>, LiftOperatorOut<C, T, T>>) => (options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => import("../../../containers.js").ContainerOperator<C, T, T>;
export default StatefulContainer_distinctUntilChanged;
