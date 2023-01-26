import {
  Lift,
  TReactive,
  reactive,
} from "../../../containers/__internal__/containers.internal";
import { ObservableLike } from "../../../rx";
import Observable$lift from "./Observable.lift";

const Observable$liftEnumerableOperatorT: Lift<ObservableLike, TReactive> = {
  lift: Observable$lift(true, true),
  variance: reactive,
};

export default Observable$liftEnumerableOperatorT;
