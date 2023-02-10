import { MAX_SAFE_INTEGER } from "../../../constants";
import { StatefulContainerLike } from "../../../containers";
import { Function2, max, partial, pipe } from "../../../functions";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../__internal__/containers.internal";
import StatefulContainer_lift from "./StatefulContainer.lift";

const StatefulContainer_buffer =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, T, readonly T[], TVar>,
      number,
      StatefulContainerOperatorOut<C, T, readonly T[], TVar>
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
