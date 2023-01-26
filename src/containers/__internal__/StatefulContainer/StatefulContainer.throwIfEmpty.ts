import { StatefulContainerLike } from "../../../containers";
import { Factory, Function2, partial, pipe } from "../../../functions";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../containers.internal";
import StatefulContainer$lift from "./StatefulContainer.lift";

const StatefulContainer$throwIfEmpty =
  <C extends StatefulContainerLike, T, TVar extends TInteractive | TReactive>(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function2<
      StatefulContainerOperatorIn<C, T, T, TVar>,
      Factory<unknown>,
      StatefulContainerOperatorOut<C, T, T, TVar>
    >,
  ) =>
  (factory: Factory<unknown>) =>
    pipe(operator, partial(factory), StatefulContainer$lift(m));

export default StatefulContainer$throwIfEmpty;
