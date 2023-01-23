import { StatefulContainerLike, ContainerOperator } from "../../../containers.js";
import { Function2, Equality } from "../../../functions.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.js";
declare const StatefulContainerLike__distinctUntilChanged: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, Equality<T>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<C, T, T>;
export { StatefulContainerLike__distinctUntilChanged as default };
