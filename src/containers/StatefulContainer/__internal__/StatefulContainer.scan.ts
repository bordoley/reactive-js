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

const StatefulContainer_scan =
  <C extends StatefulContainerLike, T, TAcc>(lift: Lift<C>["lift"]) =>
  (
    operator: Function3<
      LiftOperatorIn<C, T, TAcc>,
      Reducer<T, TAcc>,
      Factory<TAcc>,
      LiftOperatorOut<C, T, TAcc>
    >,
  ) =>
  (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(operator, partial(reducer, initialValue), lift);

export default StatefulContainer_scan;
