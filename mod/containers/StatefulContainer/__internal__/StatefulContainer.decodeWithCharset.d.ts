import { StatefulContainerLike, ContainerOperator } from "../../../containers.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../../__internal__/containers.internal.js";
import { Function2 } from "../../../functions.js";
declare const StatefulContainer_decodeWithCharset: <C extends StatefulContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, ArrayBuffer, string, TVar>, string, StatefulContainerOperatorOut<C, ArrayBuffer, string, TVar>>) => (charset?: string | undefined) => ContainerOperator<C, ArrayBuffer, string>;
export { StatefulContainer_decodeWithCharset as default };
