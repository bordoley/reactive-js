import type * as Enumerable from "../../Enumerable.js";
import Observable_liftUpperBoundedBy from "../../Observable/__internal__/Observable.liftUpperBoundedBy.js";
import { Lift } from "../../__internal__/types.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../types.js";

const Enumerable_lift: Lift<Enumerable.Type>["lift"] =
  /*@__PURE__*/ Observable_liftUpperBoundedBy({
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: true,
    [ObservableLike_isRunnable]: true,
  }) as Lift<Enumerable.Type>["lift"];

export default Enumerable_lift;
