import { StatefulContainerLike } from "../../../containers";
import { Function2, SideEffect1, partial, pipe } from "../../../functions";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../containers.internal";
import StatefulContainerLike__lift from "./StatefulContainerLike.lift";

const forEach =
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
    pipe(operator, partial(effect), StatefulContainerLike__lift(m));

export default forEach;
