import Observable_liftUpperBoundedBy from "../../Observable/__internal__/Observable.liftUpperBoundedBy.js";
import type * as Runnable from "../../Runnable.js";
import { Lift } from "../../__internal__/types.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../types.js";

const Runnable_lift: Lift<Runnable.Type>["lift"] =
  /*@__PURE__*/ Observable_liftUpperBoundedBy({
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: true,
  }) as Lift<Runnable.Type>["lift"];

export default Runnable_lift;
