import {
  DecodeWithCharset,
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function2, partial, pipe } from "../../../functions.js";

const StatefulContainer_decodeWithCharset =
  <C extends StatefulContainerLike>(lift: Lift<C>["lift"]) =>
  (
    operator: Function2<
      LiftOperatorIn<C, ArrayBuffer, string>,
      string,
      LiftOperatorOut<C, ArrayBuffer, string>
    >,
  ): DecodeWithCharset<C>["decodeWithCharset"] =>
  options => {
    const charset = options?.charset ?? "utf-8";
    return pipe(operator, partial(charset), lift);
  };

export default StatefulContainer_decodeWithCharset;
