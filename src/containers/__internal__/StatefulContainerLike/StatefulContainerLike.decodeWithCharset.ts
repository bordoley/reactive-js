import { DecodeWithCharset, StatefulContainerLike } from "../../../containers";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../../containers/__internal__/containers.internal";
import { Function2, partial, pipe } from "../../../functions";

import StatefulContainer__lift from "./StatefulContainerLike.lift";

const StatefulContainerLike__decodeWithCharset =
  <C extends StatefulContainerLike, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, ArrayBuffer, string, TVar>,
      string,
      StatefulContainerOperatorOut<C, ArrayBuffer, string, TVar>
    >,
  ): DecodeWithCharset<C>["decodeWithCharset"] =>
  (charset = "utf-8") =>
    pipe(operator, partial(charset), StatefulContainer__lift(m));

export default StatefulContainerLike__decodeWithCharset;
