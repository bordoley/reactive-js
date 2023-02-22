import { StatefulContainerLike } from "../../../containers.js";
import { Function2, SideEffect1, partial, pipe } from "../../../functions.js";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../__internal__/containers.internal.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_forEach =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      SideEffect1<T>,
      StatefulContainerOperatorOut<C, T, T, TVar>
    >,
  ) =>
  (effect: SideEffect1<T>) =>
    pipe(operator, partial(effect), StatefulContainer_lift(m));

export default StatefulContainer_forEach;
