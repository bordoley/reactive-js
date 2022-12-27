import { StatefulContainerLike, ContainerOperator } from "../../../containers.mjs";
import { Function2, Equality } from "../../../functions.mjs";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.mjs";
declare const distinctUntilChanged: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, Equality<T>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<C, T, T>;
export { distinctUntilChanged as default };
