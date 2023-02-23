import {
  DecodeWithCharset,
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function2, partial, pipe } from "../../../functions.js";

import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_decodeWithCharset =
  <C extends StatefulContainerLike>(m: Lift<C>) =>
  (
    operator: Function2<
      LiftOperatorIn<C, ArrayBuffer, string>,
      string,
      LiftOperatorOut<C, ArrayBuffer, string>
    >,
  ): DecodeWithCharset<C>["decodeWithCharset"] =>
  options => {
    const charset = options?.charset ?? "utf-8";
    return pipe(operator, partial(charset), StatefulContainer_lift(m));
  };

export default StatefulContainer_decodeWithCharset;
