import {
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function2, Predicate, partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_keep =
  <C extends StatefulContainerLike, T>(m: Lift<C>) =>
  (
    operator: Function2<
      LiftOperatorIn<C, T, T>,
      Predicate<T>,
      LiftOperatorOut<C, T, T>
    >,
  ) =>
  (predicate: Predicate<T>) =>
    pipe(operator, partial(predicate), StatefulContainer_lift(m));

export default StatefulContainer_keep;
