import {
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function1, Function2, partial, pipe } from "../../../functions.js";

const StatefulContainer_map =
  <C extends StatefulContainerLike, TA, TB>(lift: Lift<C>["lift"]) =>
  (
    operator: Function2<
      LiftOperatorIn<C, TA, TB>,
      Function1<TA, TB>,
      LiftOperatorOut<C, TA, TB>
    >,
  ) =>
  (mapper: Function1<TA, TB>) =>
    pipe(operator, partial(mapper), lift);

export default StatefulContainer_map;
