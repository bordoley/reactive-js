import { MAX_SAFE_INTEGER } from "../../../constants.js";
import {
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function2, max, partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_buffer =
  <C extends StatefulContainerLike, T>(m: Lift<C>) =>
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

    return pipe(operator, partial(maxBufferSize), StatefulContainer_lift(m));
  };

export default StatefulContainer_buffer;
