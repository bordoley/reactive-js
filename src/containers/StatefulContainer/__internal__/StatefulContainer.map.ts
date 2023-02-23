import {
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function1, Function2, partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_map =
  <C extends StatefulContainerLike, TA, TB>(m: Lift<C>) =>
  (
    operator: Function2<
      LiftOperatorIn<C, TA, TB>,
      Function1<TA, TB>,
      LiftOperatorOut<C, TA, TB>
    >,
  ) =>
  (mapper: Function1<TA, TB>) =>
    pipe(operator, partial(mapper), StatefulContainer_lift(m));

export default StatefulContainer_map;
