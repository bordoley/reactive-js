import { EnumerableLike, Lift } from "../../../rx.js";
import Observable_liftEnumerableOperator from "../../Observable/__internal__/Observable.liftEnumerableOperator.js";

const Enumerable_lift: Lift<EnumerableLike>["lift"] =
  Observable_liftEnumerableOperator as Lift<EnumerableLike>["lift"];
export default Enumerable_lift;
