import {
  Lift,
  LiftOperatorIn,
  LiftOperatorOut,
  StatefulContainerLike,
} from "../../../containers.js";
import {
  Factory,
  Function3,
  Reducer,
  partial,
  pipe,
} from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";

const StatefulContainer_reduce =
  <C extends StatefulContainerLike, T, TAcc>(m: Lift<C>) =>
  (
    operator: Function3<
      LiftOperatorIn<C, T, TAcc>,
      Reducer<T, TAcc>,
      Factory<TAcc>,
      LiftOperatorOut<C, T, TAcc>
    >,
  ) =>
  (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(operator, partial(reducer, initialValue), StatefulContainer_lift(m));

export default StatefulContainer_reduce;
