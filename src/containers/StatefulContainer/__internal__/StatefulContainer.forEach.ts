import {
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function2, SideEffect1, partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_forEach =
  <C extends StatefulContainerLike, T>(m: Lift<C>) =>
  (
    operator: Function2<
      LiftOperatorIn<C, T, T>,
      SideEffect1<T>,
      LiftOperatorOut<C, T, T>
    >,
  ) =>
  (effect: SideEffect1<T>) =>
    pipe(operator, partial(effect), StatefulContainer_lift(m));

export default StatefulContainer_forEach;
