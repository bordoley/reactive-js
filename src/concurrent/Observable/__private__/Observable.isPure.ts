import { ComputationLike_isPure } from "../../../computations.js";
import { ObservableLike, PureObservableLike } from "../../../concurrent.js";

const Observable_isPure = <T = unknown>(
  obs: ObservableLike<T>,
): obs is PureObservableLike<T> => obs[ComputationLike_isPure] ?? true;

export default Observable_isPure;
