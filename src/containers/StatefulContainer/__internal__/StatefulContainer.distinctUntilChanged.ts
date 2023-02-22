import { StatefulContainerLike } from "../../../containers.js";
import {
  Equality,
  Function2,
  partial,
  pipe,
  strictEquality,
} from "../../../functions.js";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../__internal__/containers.internal.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_distinctUntilChanged =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      Equality<T>,
      StatefulContainerOperatorOut<C, T, T, TVar>
    >,
  ) =>
  (options?: { readonly equality?: Equality<T> }) => {
    const { equality = strictEquality } = options ?? {};
    return pipe(operator, partial(equality), StatefulContainer_lift(m));
  };

export default StatefulContainer_distinctUntilChanged;
