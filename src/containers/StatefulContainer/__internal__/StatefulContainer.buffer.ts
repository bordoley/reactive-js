import { max } from "../../../__internal__/math.js";
import { MAX_SAFE_INTEGER } from "../../../constants.js";
import {
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function2, partial, pipe } from "../../../functions.js";

const StatefulContainer_buffer =
  <C extends StatefulContainerLike, T>(lift: Lift<C>["lift"]) =>
  (
    operator: Function2<
      LiftOperatorIn<C, T, readonly T[]>,
      number,
      LiftOperatorOut<C, T, readonly T[]>
    >,
  ) =>
  (
    options: {
      readonly maxBufferSize?: number;
    } = {},
  ) => {
    const maxBufferSize = max(options.maxBufferSize ?? MAX_SAFE_INTEGER, 1);

    return pipe(operator, partial(maxBufferSize), lift);
  };

export default StatefulContainer_buffer;
