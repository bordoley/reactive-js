import Observable_lift from "../../Observable/__internal__/Observable.lift.js";
import { Lift } from "../../__internal__/types.js";
import { EnumerableContainer } from "../../containers.js";
import {
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../types.js";

const Enumerable_lift: Lift<EnumerableContainer.Type>["lift"] = Observable_lift(
  {
    [ObservableLike_isEnumerable]: true,
    [ObservableLike_isRunnable]: true,
  },
) as Lift<EnumerableContainer.Type>["lift"];
export default Enumerable_lift;
