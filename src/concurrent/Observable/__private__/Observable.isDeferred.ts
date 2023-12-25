import {
  DeferredObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
} from "../../../concurrent.js";

const Observable_isDeferred = <T = unknown>(
  obs: ObservableLike<T>,
): obs is DeferredObservableLike<T> => obs[ObservableLike_isDeferred];

export default Observable_isDeferred;
