import { ContainerOperator, StatefulContainerLike } from "../../../containers";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../../containers/__internal__/containers.internal";
import { Function2, partial, pipe } from "../../../functions";
import StatefulContainerLike__lift from "./StatefulContainerLike.lift";

const skipFirst =
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
    const { count = 1 } = options;
    const lifted = pipe(
      operator,
      partial(count),
      StatefulContainerLike__lift(m),
    );
    return container => (count > 0 ? pipe(container, lifted) : container);
  };

export default skipFirst;
