import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_liftUpperBoundedBy from "../../Observable/__internal__/Observable.liftUpperBoundedBy.js";
import { Lift } from "../../__internal__/types.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../types.js";

const DeferredObservable_lift: Lift<DeferredObservable.Type>["lift"] =
  /*@__PURE__*/ Observable_liftUpperBoundedBy({
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
  }) as Lift<DeferredObservable.Type>["lift"];

export default DeferredObservable_lift;
