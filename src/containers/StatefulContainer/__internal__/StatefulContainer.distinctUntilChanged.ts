import {
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import {
  Equality,
  Function2,
  partial,
  pipe,
  strictEquality,
} from "../../../functions.js";

const StatefulContainer_distinctUntilChanged =
  <C extends StatefulContainerLike, T>(lift: Lift<C>["lift"]) =>
  (
    operator: Function2<
      LiftOperatorIn<C, T, T>,
      Equality<T>,
      LiftOperatorOut<C, T, T>
    >,
  ) =>
  (options?: { readonly equality?: Equality<T> }) => {
    const { equality = strictEquality } = options ?? {};
    return pipe(operator, partial(equality), lift);
  };

export default StatefulContainer_distinctUntilChanged;
