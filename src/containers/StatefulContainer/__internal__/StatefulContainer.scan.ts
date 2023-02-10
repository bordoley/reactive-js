import { StatefulContainerLike } from "../../../containers";
import { Factory, Function3, Reducer, partial, pipe } from "../../../functions";
import {
  Lift,
  StatefulContainerOperatorIn,
  StatefulContainerOperatorOut,
  TInteractive,
  TReactive,
} from "../../__internal__/containers.internal";
import StatefulContainer_lift from "./StatefulContainer.lift";

const StatefulContainer_scan =
  <
    C extends StatefulContainerLike,
    T,
    TAcc,
    TVar extends TInteractive | TReactive,
  >(
    m: Lift<C, TVar>,
  ) =>
  (
    operator: Function3<
      StatefulContainerOperatorIn<C, T, TAcc, TVar>,
      Reducer<T, TAcc>,
      Factory<TAcc>,
      StatefulContainerOperatorOut<C, T, TAcc, TVar>
    >,
  ) =>
  (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(operator, partial(reducer, initialValue), StatefulContainer_lift(m));

export default StatefulContainer_scan;
