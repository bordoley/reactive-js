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
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_distinctUntilChanged =
  <C extends StatefulContainerLike, T>(m: Lift<C>) =>
  (
    operator: Function2<
      LiftOperatorIn<C, T, T>,
      Equality<T>,
      LiftOperatorOut<C, T, T>
    >,
  ) =>
  (options?: { readonly equality?: Equality<T> }) => {
    const { equality = strictEquality } = options ?? {};
    return pipe(operator, partial(equality), StatefulContainer_lift(m));
  };

export default StatefulContainer_distinctUntilChanged;
