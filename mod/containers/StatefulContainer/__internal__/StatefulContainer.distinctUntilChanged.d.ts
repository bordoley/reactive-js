import { StatefulContainerLike, ContainerOperator } from "../../../containers.js";
import { Function2, Equality } from "../../../functions.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../../__internal__/containers.internal.js";
declare const StatefulContainer_distinctUntilChanged: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, Equality<T>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<C, T, T>;
export { StatefulContainer_distinctUntilChanged as default };
