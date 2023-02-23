import { DecodeWithCharset, Lift, LiftOperatorIn, LiftOperatorOut, StatefulContainerLike } from "../../../containers.js";
import { Function2 } from "../../../functions.js";
declare const StatefulContainer_decodeWithCharset: <C extends StatefulContainerLike>(lift: <TA, TB>(operator: import("../../../functions.js").Function1<LiftOperatorIn<C, TA, TB>, LiftOperatorOut<C, TA, TB>>) => import("../../../containers.js").ContainerOperator<C, TA, TB>) => (operator: Function2<LiftOperatorIn<C, ArrayBuffer, string>, string, LiftOperatorOut<C, ArrayBuffer, string>>) => (options?: {
    charset?: string | undefined;
} | undefined) => import("../../../containers.js").ContainerOperator<C, ArrayBuffer, string>;
export default StatefulContainer_decodeWithCharset;
