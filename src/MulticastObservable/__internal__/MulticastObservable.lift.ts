import type * as MulticastObservable from "../../MulticastObservable.js";
import Observable_liftUpperBoundedBy from "../../Observable/__internal__/Observable.liftUpperBoundedBy.js";
import { Lift } from "../../__internal__/types.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../types.js";

const MulticastObservable_lift: Lift<MulticastObservable.Type>["lift"] =
  /*@__PURE__*/ Observable_liftUpperBoundedBy({
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
  }) as Lift<MulticastObservable.Type>["lift"];

export default MulticastObservable_lift;
