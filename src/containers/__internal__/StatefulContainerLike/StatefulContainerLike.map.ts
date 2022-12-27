import { StatefulContainerLike } from "../../../containers";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../../containers/__internal__/containers.internal";
import { Function1, Function2, partial, pipe } from "../../../functions";
import StatefulContainer__lift from "./StatefulContainerLike.lift";

const map =
  <
    C extends StatefulContainerLike,
    TA,
    TB,
    TVar extends TInteractive | TReactive,
  >(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, TA, TB, TVar>,
      Function1<TA, TB>,
      StatefulContainerOperatorOut<C, TA, TB, TVar>
    >,
  ) =>
  (mapper: Function1<TA, TB>) =>
    pipe(operator, partial(mapper), StatefulContainer__lift(m));

export default map;
