import {
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function2, SideEffect1, partial, pipe } from "../../../functions.js";

const StatefulContainer_forEach =
  <C extends StatefulContainerLike, T>(lift: Lift<C>["lift"]) =>
  (
    operator: Function2<
      LiftOperatorIn<C, T, T>,
      SideEffect1<T>,
      LiftOperatorOut<C, T, T>
    >,
  ) =>
  (effect: SideEffect1<T>) =>
    pipe(operator, partial(effect), lift);

export default StatefulContainer_forEach;
