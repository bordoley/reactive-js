import { ContainerOperator, StatefulContainerLike } from "../../../containers";
import { Function2, max, partial, pipe } from "../../../functions";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../containers.internal";
import StatefulContainer_lift from "./StatefulContainer.lift";

const StatefulContainer_takeFirst =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      number,
      StatefulContainerOperatorOut<C, T, T, TVar>
    >,
  ) =>
  (options: { readonly count?: number } = {}): ContainerOperator<C, T, T> => {
    const { count = max(options.count ?? 1, 0) } = options;
    const containerOperator = pipe(
      operator,
      partial(count),
      StatefulContainer_lift(m),
    );
    return container => pipe(container, containerOperator);
  };
export default StatefulContainer_takeFirst;
