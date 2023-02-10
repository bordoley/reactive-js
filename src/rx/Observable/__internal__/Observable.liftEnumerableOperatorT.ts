import {
  Lift,
  TReactive,
  reactive,
} from "../../../containers/__internal__/containers.internal";
import { ObservableLike } from "../../../rx";
import Observable_lift from "./Observable.lift";

const Observable_liftEnumerableOperatorT: Lift<ObservableLike, TReactive> = {
  lift: Observable_lift(true, true),
  variance: reactive,
};

export default Observable_liftEnumerableOperatorT;
