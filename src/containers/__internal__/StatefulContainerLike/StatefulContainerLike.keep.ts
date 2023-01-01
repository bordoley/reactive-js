import { StatefulContainerLike } from "../../../containers";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../../containers/__internal__/containers.internal";
import { Function2, Predicate, partial, pipe } from "../../../functions";
import StatefulContainer__lift from "./StatefulContainerLike.lift";

const StatefulContainerLike__keep =
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
    pipe(operator, partial(predicate), StatefulContainer__lift(m));

export default StatefulContainerLike__keep;
