import { DecodeWithCharset, StatefulContainerLike } from "../../../containers.js";
import { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../../../containers/__internal__/containers.internal.js";
import { Function2 } from "../../../functions.js";
declare const StatefulContainer_decodeWithCharset: <C extends StatefulContainerLike, TVar extends 0 | 1>(m: Lift<C, TVar>) => (operator: Function2<StatefulContainerOperatorIn<C, ArrayBuffer, string, TVar>, string, StatefulContainerOperatorOut<C, ArrayBuffer, string, TVar>>) => (options?: {
    charset?: string | undefined;
} | undefined) => import("../../../containers.js").ContainerOperator<C, ArrayBuffer, string>;
export default StatefulContainer_decodeWithCharset;
