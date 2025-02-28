import { ComputationLike_isDeferred } from "../../../computations.js";
import { DeferredObservableLike, ObservableLike } from "../../../concurrent.js";

const Observable_isDeferred = <T = unknown>(
  obs: ObservableLike<T>,
): obs is DeferredObservableLike<T> => obs[ComputationLike_isDeferred] ?? true;

export default Observable_isDeferred;
