import { StatefulContainerLike } from "../../../containers.js";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../../containers/__internal__/containers.internal.js";
import { Function2, Predicate, partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_keep =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      Predicate<T>,
      StatefulContainerOperatorOut<C, T, T, TVar>
    >,
  ) =>
  (predicate: Predicate<T>) =>
    pipe(operator, partial(predicate), StatefulContainer_lift(m));

export default StatefulContainer_keep;
