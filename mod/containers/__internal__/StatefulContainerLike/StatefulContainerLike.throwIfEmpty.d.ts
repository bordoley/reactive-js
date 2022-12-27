import { StatefulContainerLike, ContainerOperator } from "../../../containers.mjs";
import { Factory } from 'react';
import { Function2 } from "../../../functions.mjs";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.mjs";
declare const throwIfEmpty: <C extends StatefulContainerLike, T, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, T, T, TVar>, Factory<unknown>, StatefulContainerOperatorOut<C, T, T, TVar>>) => (factory: Factory<unknown>) => ContainerOperator<C, T, T>;
export { throwIfEmpty as default };
