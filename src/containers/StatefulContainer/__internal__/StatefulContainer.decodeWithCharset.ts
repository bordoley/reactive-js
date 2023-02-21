import {
  DecodeWithCharset,
  StatefulContainerLike,
} from "../../../containers.js";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../../containers/__internal__/containers.internal.js";
import { Function2, partial, pipe } from "../../../functions.js";

import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_decodeWithCharset =
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
  options => {
    const charset = options?.charset ?? "utf-8.js";
    return pipe(operator, partial(charset), StatefulContainer_lift(m));
  };

export default StatefulContainer_decodeWithCharset;
