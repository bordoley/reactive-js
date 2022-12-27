import { StatefulContainerLike, ContainerOperator } from "../../../containers.mjs";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers.internal.mjs";
import { Function2 } from "../../../functions.mjs";
declare const decodeWithCharset: <C extends StatefulContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, ArrayBuffer, string, TVar>, string, StatefulContainerOperatorOut<C, ArrayBuffer, string, TVar>>) => (charset?: string | undefined) => ContainerOperator<C, ArrayBuffer, string>;
export { decodeWithCharset as default };
