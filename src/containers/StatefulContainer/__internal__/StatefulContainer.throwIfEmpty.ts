import {
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Factory, Function2, partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_throwIfEmpty =
  <C extends StatefulContainerLike, T>(m: Lift<C>) =>
  (
    operator: Function2<
      LiftOperatorIn<C, T, T>,
      Factory<unknown>,
      LiftOperatorOut<C, T, T>
    >,
  ) =>
  (factory: Factory<unknown>) =>
    pipe(operator, partial(factory), StatefulContainer_lift(m));

export default StatefulContainer_throwIfEmpty;
