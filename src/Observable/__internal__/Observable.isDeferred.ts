import type * as Observable from "../../Observable.js";
import {
  DeferredObservableBaseLike,
  ObservableBaseLike,
  ObservableLike_isDeferred,
} from "../../types.js";

const Observable_isDeferred: Observable.Signature["isDeferred"] = (
  obs: ObservableBaseLike,
): obs is DeferredObservableBaseLike => obs[ObservableLike_isDeferred];

export default Observable_isDeferred;
