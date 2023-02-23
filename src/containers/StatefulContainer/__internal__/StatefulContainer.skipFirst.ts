import {
  ContainerOperator,
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function2, partial, pipe } from "../../../functions.js";

const StatefulContainer_skipFirst =
  <C extends StatefulContainerLike, T>(lift: Lift<C>["lift"]) =>
  (
    operator: Function2<
      LiftOperatorIn<C, T, T>,
      number,
      LiftOperatorOut<C, T, T>
    >,
  ) =>
  (options: { readonly count?: number } = {}): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;
    const lifted = pipe(operator, partial(count), lift);
    return container => (count > 0 ? pipe(container, lifted) : container);
  };

export default StatefulContainer_skipFirst;
