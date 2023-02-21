import { StatefulContainerLike } from "../../../containers.js";
import { Factory, Function2, partial, pipe } from "../../../functions.js";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../__internal__/containers.internal.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_throwIfEmpty =
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
    pipe(operator, partial(factory), StatefulContainer_lift(m));

export default StatefulContainer_throwIfEmpty;
