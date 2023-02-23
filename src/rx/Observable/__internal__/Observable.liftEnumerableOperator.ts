import { Lift } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import Observable_lift from "./Observable.lift.js";

const Observable_liftEnumerableOperator: Lift<ObservableLike>["lift"] =
  /*@__PURE__*/ Observable_lift(true, true);

export default Observable_liftEnumerableOperator;
