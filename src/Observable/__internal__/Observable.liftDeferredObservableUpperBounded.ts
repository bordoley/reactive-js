import {
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
} from "../../types.js";
import Observable_liftUpperBoundedBy from "./Observable.liftUpperBoundedBy.js";

const Observable_liftDeferredObservableUpperBounded =
  /*@__PURE__*/ Observable_liftUpperBoundedBy({
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isRunnable]: false,
  });

export default Observable_liftDeferredObservableUpperBounded;
