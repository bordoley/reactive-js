import {
  Lift,
  TReactive,
} from "../../../containers/__internal__/containers.internal.js";
import { ObservableLike } from "../../../rx.js";
import Observable_lift from "./Observable.lift.js";

const Observable_liftEnumerableOperatorT: Lift<ObservableLike, TReactive> = {
  lift: Observable_lift(true, true),
};

export default Observable_liftEnumerableOperatorT;
