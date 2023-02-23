import {
  ContainerOperator,
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function2, partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_takeLast =
  <C extends StatefulContainerLike, T>(m: Lift<C>) =>
  (
    operator: Function2<
      LiftOperatorIn<C, T, T>,
      number,
      LiftOperatorOut<C, T, T>
    >,
  ) =>
  (options: { readonly count?: number } = {}): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;
    const containerOperator = pipe(
      operator,
      partial(count),
      StatefulContainer_lift(m),
    );
    return container => pipe(container, containerOperator);
  };

export default StatefulContainer_takeLast;
