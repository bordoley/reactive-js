import {
  ContainerOperator,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function3, Predicate, partial, pipe } from "../../../functions.js";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../__internal__/containers.internal.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_takeWhile =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function3<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      Predicate<T>,
      boolean,
      StatefulContainerOperatorOut<C, T, T, TVar>
    >,
  ) =>
  (
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ): ContainerOperator<C, T, T> => {
    const { inclusive = false } = options;
    return pipe(
      operator,
      partial(predicate, inclusive),
      StatefulContainer_lift(m),
    );
  };

export default StatefulContainer_takeWhile;
