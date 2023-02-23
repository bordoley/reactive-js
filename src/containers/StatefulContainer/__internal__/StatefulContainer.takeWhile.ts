import {
  ContainerOperator,
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import { Function3, Predicate, partial, pipe } from "../../../functions.js";

const StatefulContainer_takeWhile =
  <C extends StatefulContainerLike, T>(lift: Lift<C>["lift"]) =>
  (
    operator: Function3<
      LiftOperatorIn<C, T, T>,
      Predicate<T>,
      boolean,
      LiftOperatorOut<C, T, T>
    >,
  ) =>
  (
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ): ContainerOperator<C, T, T> => {
    const { inclusive = false } = options;
    return pipe(operator, partial(predicate, inclusive), lift);
  };

export default StatefulContainer_takeWhile;
