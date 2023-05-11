import Observable_liftUpperBoundedBy from "../../Observable/__internal__/Observable.liftUpperBoundedBy.js";
import type * as SharedObservable from "../../SharedObservable.js";
import { Lift } from "../../__internal__/types.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../types.js";

const SharedObservable_lift: Lift<SharedObservable.Type>["lift"] =
  /*@__PURE__*/ Observable_liftUpperBoundedBy({
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
  }) as Lift<SharedObservable.Type>["lift"];

export default SharedObservable_lift;
