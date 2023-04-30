import { Lift } from "../../../__internal__/rx.js";
import {
  EnumerableContainerLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../rx.js";
import Observable_lift from "../../Observable/__internal__/Observable.lift.js";

const Enumerable_lift: Lift<EnumerableContainerLike>["lift"] = Observable_lift({
  [ObservableLike_isEnumerable]: true,
  [ObservableLike_isRunnable]: true,
}) as Lift<EnumerableContainerLike>["lift"];
export default Enumerable_lift;
