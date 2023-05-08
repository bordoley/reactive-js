import {
  DeferredObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
} from "../../../core.js";

const Observable_isDeferred = (
  obs: ObservableLike,
): obs is DeferredObservableLike => obs[ObservableLike_isDeferred];

export default Observable_isDeferred;
