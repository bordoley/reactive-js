import { MAX_SAFE_INTEGER } from "../../../__internal__/constants";
import { StatefulContainerLike } from "../../../containers";
import { Function2, max, partial, pipe } from "../../../functions";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../containers.internal";
import StatefulContainer__lift from "./StatefulContainerLike.lift";

const StatefulContainerLike__buffer =
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

    return pipe(operator, partial(maxBufferSize), StatefulContainer__lift(m));
  };

export default StatefulContainerLike__buffer;
