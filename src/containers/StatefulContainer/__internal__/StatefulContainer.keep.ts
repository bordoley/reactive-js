import {
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function2, Predicate, partial, pipe } from "../../../functions.js";

const StatefulContainer_keep =
  <C extends StatefulContainerLike, T>(lift: Lift<C>["lift"]) =>
  (
    operator: Function2<
      LiftOperatorIn<C, T, T>,
      Predicate<T>,
      LiftOperatorOut<C, T, T>
    >,
  ) =>
  (predicate: Predicate<T>) =>
    pipe(operator, partial(predicate), lift);

export default StatefulContainer_keep;
