import { Lift } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import Observable_lift from "./Observable.lift.js";

const Observable_liftEnumerableOperatorT: Lift<ObservableLike> = {
  lift: Observable_lift(true, true),
};

export default Observable_liftEnumerableOperatorT;
