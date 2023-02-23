import {
  ContainerOperator,
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function2, max, partial, pipe } from "../../../functions.js";

const StatefulContainer_takeFirst =
  <C extends StatefulContainerLike, T>(lift: Lift<C>["lift"]) =>
  (
    operator: Function2<
      LiftOperatorIn<C, T, T>,
      number,
      LiftOperatorOut<C, T, T>
    >,
  ) =>
  (options: { readonly count?: number } = {}): ContainerOperator<C, T, T> => {
    const { count = max(options.count ?? 1, 0) } = options;
    const containerOperator = pipe(operator, partial(count), lift);
    return container => pipe(container, containerOperator);
  };
export default StatefulContainer_takeFirst;
