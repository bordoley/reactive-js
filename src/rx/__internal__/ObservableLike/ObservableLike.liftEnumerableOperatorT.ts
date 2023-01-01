import {
  Lift,
  TReactive,
  reactive,
} from "../../../containers/__internal__/containers.internal";
import { ObservableLike } from "../../../rx";
import ObservableLike__lift from "./ObservableLike.lift";

const liftEnumerableOperatorT: Lift<ObservableLike, TReactive> = {
  lift: ObservableLike__lift(true, true),
  variance: reactive,
};

export default liftEnumerableOperatorT;
