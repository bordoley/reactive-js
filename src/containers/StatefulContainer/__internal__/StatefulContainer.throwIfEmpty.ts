import {
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Factory, Function2, partial, pipe } from "../../../functions.js";

const StatefulContainer_throwIfEmpty =
  <C extends StatefulContainerLike, T>(lift: Lift<C>["lift"]) =>
  (
    operator: Function2<
      LiftOperatorIn<C, T, T>,
      Factory<unknown>,
      LiftOperatorOut<C, T, T>
    >,
  ) =>
  (factory: Factory<unknown>) =>
    pipe(operator, partial(factory), lift);

export default StatefulContainer_throwIfEmpty;
