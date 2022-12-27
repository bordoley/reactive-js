import { Factory } from "react";
import { StatefulContainerLike } from "../../../containers";
import { Function2, partial, pipe } from "../../../functions";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../containers.internal";
import StatefulContainerLike__lift from "./StatefulContainerLike.lift";

const throwIfEmpty =
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
    pipe(operator, partial(factory), StatefulContainerLike__lift(m));

export default throwIfEmpty;
