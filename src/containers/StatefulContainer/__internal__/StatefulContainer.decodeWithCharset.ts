import { DecodeWithCharset, StatefulContainerLike } from "../../../containers";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../../containers/__internal__/containers.internal";
import { Function2, partial, pipe } from "../../../functions";

import StatefulContainer_lift from "./StatefulContainer.lift";

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
    const charset = options?.charset ?? "utf-8";
    return pipe(operator, partial(charset), StatefulContainer_lift(m));
  };

export default StatefulContainer_decodeWithCharset;
