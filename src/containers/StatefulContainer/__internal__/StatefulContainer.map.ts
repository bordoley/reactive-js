import { StatefulContainerLike } from "../../../containers.js";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../../containers/__internal__/containers.internal.js";
import { Function1, Function2, partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_map =
  <
    C extends StatefulContainerLike,
    TA,
    TB,
    TVar extends TInteractive | TReactive,
  >(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, TA, TB, TVar>,
      Function1<TA, TB>,
      StatefulContainerOperatorOut<C, TA, TB, TVar>
    >,
  ) =>
  (mapper: Function1<TA, TB>) =>
    pipe(operator, partial(mapper), StatefulContainer_lift(m));

export default StatefulContainer_map;
