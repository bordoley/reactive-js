import { Lift } from "../../../__internal__/core.js";
import {
  EnumerableContainer,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../core.js";
import Observable_lift from "../../Observable/__internal__/Observable.lift.js";

const Enumerable_lift: Lift<EnumerableContainer>["lift"] = Observable_lift({
  [ObservableLike_isEnumerable]: true,
  [ObservableLike_isRunnable]: true,
}) as Lift<EnumerableContainer>["lift"];
export default Enumerable_lift;
