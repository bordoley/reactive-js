import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
} from "../../../computations.js";
import {
  MulticastObservableLike,
  ObservableLike,
} from "../../../concurrent.js";

const Observable_isMulticasted = <T = unknown>(
  obs: ObservableLike<T>,
): obs is MulticastObservableLike<T> =>
  !obs[ComputationLike_isDeferred] && (obs[ComputationLike_isPure] ?? true);

export default Observable_isMulticasted;
