import { ContainerOperator, StatefulContainerLike } from "../../../containers";
import { Function3, Predicate, partial, pipe } from "../../../functions";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../containers.internal";
import StatefulContainer$lift from "./StatefulContainer.lift";

const StatefulContainer$takeWhile =
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
      StatefulContainer$lift(m),
    );
  };

export default StatefulContainer$takeWhile;
