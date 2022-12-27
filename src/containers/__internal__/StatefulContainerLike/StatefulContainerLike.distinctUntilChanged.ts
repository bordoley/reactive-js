import { StatefulContainerLike } from "../../../containers";
import {
  Equality,
  Function2,
  partial,
  pipe,
  strictEquality,
} from "../../../functions";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../containers.internal";
import StatefulContainerLike__lift from "./StatefulContainerLike.lift";

const distinctUntilChanged =
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
    return pipe(operator, partial(equality), StatefulContainerLike__lift(m));
  };

export default distinctUntilChanged;
